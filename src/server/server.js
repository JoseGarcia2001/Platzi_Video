/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config();
const { ENV, PORT } = process.env;

const app = express();

if (ENV === 'development') {
  console.log('Development environments');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(PORT, (err) => {
  if (err) log.error(err);
  else console.log('App corriendo en localhost:3000');
});
