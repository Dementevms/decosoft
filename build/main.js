require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./nuxt.config.js":
/*!************************!*\
  !*** ./nuxt.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Decosoft",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: "Nuxt.js project"
    }],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&amp;subset=cyrillic"
    }]
  },

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
  },
  modules: ["@nuxtjs/svg-sprite"],
  svgSprite: {
    input: "~/assets/svg/"
  }
};

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nuxt */ "nuxt");
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nuxt__WEBPACK_IMPORTED_MODULE_1__);


const Router = __webpack_require__(/*! koa-router */ "koa-router"); // маршрутизация


const bodyParser = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser"); // парсер для POST запросов




const configNuxt = __webpack_require__(/*! ../nuxt.config */ "./nuxt.config.js");

const passport = __webpack_require__(/*! koa-passport */ "koa-passport");

const LocalStrategy = __webpack_require__(/*! passport-local */ "passport-local");

const JwtStrategy = __webpack_require__(/*! passport-jwt */ "passport-jwt").Strategy;

const ExtractJwt = __webpack_require__(/*! passport-jwt */ "passport-jwt").ExtractJwt;

const jwtsecret = "mysecret";

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const soketioJWT = __webpack_require__(/*! socketio-jwt */ "socketio-jwt");

const socketIO = __webpack_require__(/*! socket.io */ "socket.io");

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const crypto = __webpack_require__(/*! crypto */ "crypto");

mongoose.Promise = Promise;
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/test");
const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: "Please, set email",
    unique: "This email exist"
  },
  passwordHash: String,
  salt: String
}, {
  timestamps: true
});
userSchema.virtual("password").set(function (password) {
  this._plainPassword = password;

  if (password) {
    this.salt = crypto.randomBytes(128).toString("base64");
    this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1, 128, "sha1");
  } else {
    this.salt = undefined;
    this.passwordHash = undefined;
  }
}).get(function () {
  return this._plainPassword;
});

userSchema.methods.checkPassword = function (password) {
  if (!password) return false;
  if (!this.passwordHash) return false;
  return crypto.pbkdf2Sync(password, this.salt, 1, 128, "sha1") == this.passwordHash;
};

const User = mongoose.model("User", userSchema);
passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password",
  session: false
}, function (email, password, done) {
  User.findOne({
    email
  }, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user || !user.checkPassword(password)) {
      return done(null, false, {
        message: "Not exist user, or password fail"
      });
    } else {
      return done(null, user);
    }
  });
}));
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: jwtsecret
};
passport.use(new JwtStrategy(jwtOptions, function (payload, done) {
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
}));

async function start() {
  const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();
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
    await passport.authenticate("local", function (err, user) {
      if (err) {
        ctx.status = 400;
        ctx.body = err;
      }

      if (user == false) {
        ctx.body = {
          status: "error",
          message: "Login failed"
        };
      } else {
        //--payload - информация которую мы храним в токене и можем из него получать
        const payload = {
          id: user.id,
          email: user.email
        };
        const token = jwt.sign(payload, jwtsecret); //здесь создается JWT

        ctx.body = {
          status: "success",
          token: "JWT " + token
        };
      }
    })(ctx, next);
  });
  router.get("/custom", async (ctx, next) => {
    await passport.authenticate("jwt", function (err, user) {
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
  const nuxt = new nuxt__WEBPACK_IMPORTED_MODULE_1__["Nuxt"](configNuxt);

  if (configNuxt.dev) {
    const builder = new nuxt__WEBPACK_IMPORTED_MODULE_1__["Builder"](nuxt);
    await builder.build();
  }

  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false;
    ctx.req.ctx = ctx;
    nuxt.render(ctx.req, ctx.res);
  });
  app.listen(3000);
}

start();

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-passport":
/*!*******************************!*\
  !*** external "koa-passport" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-passport");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "nuxt":
/*!***********************!*\
  !*** external "nuxt" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "socketio-jwt":
/*!*******************************!*\
  !*** external "socketio-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socketio-jwt");

/***/ })

/******/ });
//# sourceMappingURL=main.map