/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import reducer from '../frontend/reducers';
import serverRoutes from '../frontend/routes/serverRoutes';
import initialState from '../frontend/initialState';

dotenv.config();

const { PORT, ENV } = process.env;

const app = express();

if (ENV === 'development') {
  const WebpackDevMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../../webpack.config');
  const compiler = webpack(webpackConfig);
  const webpackHotMiddleware = require('webpack-hot-middleware');

  app.use(WebpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}

const setResponse = (html, preloadedState) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet "type="text/css" href="assets/app.css">
    <meta charset="UTF-8" />
    <title>Platzi Video</title>
  </head>
  <body>
    <div id="app">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script src="assets/app.js" type="text/javascript"></script>
  </body>
</html>`;
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );

  res.send(setResponse(html, preloadedState));
};

app.get('*', renderApp);

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
