// @flow

import Router from 'koa-router';
import type { KoaContext } from 'koa-flow-declarations/KoaContext';

const router = new Router();

let variable = 'not set!';

router
  .get('/', async (ctx: KoaContext) => {
    ctx.body = {
      success: true,
      test: true,
      body: {
        hello: 'world'
      },
    };
  })
  .get('/var', (ctx: KoaContext) => {
    ctx.response.body = {
      value: variable
    };
  })
  .post('/var', (ctx: KoaContext) => {
    if (ctx.request.body.value !== undefined) {
      variable = ctx.request.body.value;
    }

    ctx.response.body = {
      value: variable
    };
  })
  .get('/users', async (ctx: KoaContext) => {
    ctx.body = {
      count: 1,
      users: {
        '1': {
          id: 1,
          name: 'admin',
        }
      },
    };
  });

export default router.routes();
