// @flow

import Router from 'koa-router';
import type { KoaContext } from 'koa-flow-declarations/KoaContext';

const router = new Router();

router.get('/', (ctx: KoaContext) => {
  ctx.response.type = 'text/html';
  ctx.response.body = `<h2>serverless-boilerplate</h2>`;
});

router.get('/info', (ctx: KoaContext) => {
  ctx.response.body = {
    engine: 'node',
    version: process.version,
  };
});

router.use('/test', require('./test').default);

export default router.routes();
