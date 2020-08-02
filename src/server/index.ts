import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import router from '@server/router';
import apiRouter from '@server/api/api';
import config from '../../webpack/client.config';

const port = process.env.PORT || 3000;

const compiler = webpack(config);

const app = express();

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output?.path || '/',
    serverSideRender: true,
    logLevel: 'error',
    stats: 'errors-only',
  })
);
app.use(webpackHotMiddleware(compiler));

app.use('/api', apiRouter);
app.use(router);

app.listen(port, () => console.log(`Running at http://localhost:${port}`));
