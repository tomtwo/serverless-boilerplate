// @flow

import Router from 'koa-router';
import type { KoaContext } from 'koa-flow-declarations/KoaContext';

const router = new Router();

router.get('/info', (ctx: KoaContext) => {
  ctx.response.body = {
    engine: 'node',
    version: process.version,
  };
});

router.use('/test', require('./test').default);

export default router.routes();
