// @flow

// run koa server locally without serverless/lambda

import app from './src/server';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('* App started on ', port);
});
