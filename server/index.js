import Koa from "koa";
import { Nuxt, Builder } from "nuxt";
const configNuxt = require("../nuxt.config");

async function start() {
  const app = new Koa();
  configNuxt.dev = !(app.env === 'production');
  const nuxt = new Nuxt(configNuxt);
  if(configNuxt.dev){
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
