import Koa from "koa";
const Router = require("koa-router"); // маршрутизация
const bodyParser = require("koa-bodyparser"); // парсер для POST запросов
import { Nuxt, Builder } from "nuxt";
const configNuxt = require("../nuxt.config");

const passport = require("koa-passport");
const LocalStrategy = require("passport-local");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const jwtsecret = "mysecret";
const jwt = require("jsonwebtoken");
const soketioJWT = require("socketio-jwt");
const socketIO = require("socket.io");

const mongoose = require("mongoose");
const crypto = require("crypto");

mongoose.Promise = Promise;
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/test");

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: {
      type: String,
      required: "Please, set email",
      unique: "This email exist",
    },
    passwordHash: String,
    salt: String,
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function(password) {
    this._plainPassword = password;
    if (password) {
      this.salt = crypto.randomBytes(128).toString("base64");
      this.passwordHash = crypto.pbkdf2Sync(
        password,
        this.salt,
        1,
        128,
        "sha1"
      );
    } else {
      this.salt = undefined;
      this.passwordHash = undefined;
    }
  })
  .get(function() {
    return this._plainPassword;
  });

userSchema.methods.checkPassword = function(password) {
  if (!password) return false;
  if (!this.passwordHash) return false;
  return (
    crypto.pbkdf2Sync(password, this.salt, 1, 128, "sha1") == this.passwordHash
  );
};

const User = mongoose.model("User", userSchema);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    function(email, password, done) {
      User.findOne({ email }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user || !user.checkPassword(password)) {
          return done(null, false, {
            message: "Not exist user, or password fail",
          });
        } else {
          return done(null, user);
        }
      });
    }
  )
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: jwtsecret,
};

passport.use(
  new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.id, (err, user) => {
      if (err) {
        return done(err);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  })
);

async function start() {
  const app = new Koa();
  const router = new Router();
  app.use(bodyParser());
  app.use(passport.initialize());
  app.use(router.routes());

  router.post("/api/registration", async (ctx, next) => {
    try {
      ctx.body = await User.create(ctx.request.body);
    } catch (err) {
      ctx.status = 400;
      ctx.body = err;
    }
  });

  router.post("/api/login", async (ctx, next) => {
    // ctx.body = ctx.request.headers;
    await passport.authenticate("local", function(err, user) {
      if (err) {
        ctx.status = 400;
        ctx.body = err;
      }
      if (user == false) {
        ctx.body = { status: "error", message: "Login failed" };
      } else {
        //--payload - информация которую мы храним в токене и можем из него получать
        const payload = {
          id: user.id,
          email: user.email,
        };
        const token = jwt.sign(payload, jwtsecret); //здесь создается JWT
        ctx.body = { status: "success", token: "JWT " + token };
      }
    })(ctx, next);
  });

  router.get("/custom", async (ctx, next) => {
    await passport.authenticate("jwt", function(err, user) {
      if (user) {
        // ctx.body = "hello " + user.displayName;
        next();
      } else {
        ctx.body = "No such user";
        console.log("err", err);
      }
    })(ctx, next);
  });

  configNuxt.dev = !(app.env === "production");
  const nuxt = new Nuxt(configNuxt);
  if (configNuxt.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use((ctx) => {
    ctx.status = 200;
    ctx.respond = false;
    ctx.req.ctx = ctx;
    nuxt.render(ctx.req, ctx.res);
  });
  app.listen(3000);
}

start();
