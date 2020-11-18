/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import helmet from 'helmet';
import passport from 'passport';
import axios from 'axios';
import boom from '@hapi/boom';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import reducer from '../frontend/reducers';
import serverRoutes from '../frontend/routes/serverRoutes';
import getManifest from './getManifest';
import { config } from './config';

const { port, env } = config;

//Strategies
require('./utils/auth/strategies/basic');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: config.sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());

if (env === 'development') {
  const WebpackDevMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../../webpack.config');
  const compiler = webpack(webpackConfig);
  const webpackHotMiddleware = require('webpack-hot-middleware');

  app.use(WebpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hasManifest) req.hasManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet "type="text/css" href=${mainStyles}>
    <meta charset="UTF-8" />
    <title>Platzi Video</title>
  </head>
  <body>
    <div id="app">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script src=${mainBuild} type="text/javascript"></script>
    <script src=${vendorBuild} type="text/javascript"></script>
  </body>
</html>`;
};

const renderApp = async (req, res) => {

  let initialState;

  const { token, email, name, id } = req.cookies;

  try {
    let movieList = await axios({
      url: `${config.apiUrl}/api/movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    });

    movieList = movieList.data.data;

    initialState = {
      user: {
        id,
        email,
        name,
      },
      playing: {},
      searching: [],
      myList: [],
      trends: movieList.filter((movie) => movie.contentRating === 'PG'),
      originals: movieList.filter((movie) => movie.contentRating !== 'PG'),
    };
  } catch (error) {
    initialState = {
      user: {},
      playing: {},
      searching: [],
      myList: [],
      trends: [],
      originals: [],
    };
  }

  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const isLogged = (initialState.user.id);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(isLogged))}
      </StaticRouter>
    </Provider>,
  );
  res.set(
    'Content-Security-Policy',
    "img-src 'self' http://dummyimage.com https://gravatar.com",
  );
  res.send(setResponse(html, preloadedState, req.hasManifest));
};

app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', (error, data) => {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      }

      req.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;

        res.cookie('token', token, {
          httpOnly: !config.dev,
          secure: !config.dev,
        });
        res.status(200).json(user);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;

  try {
    const userData = await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: 'post',
      data: {
        'email': user.email,
        'name': user.name,
        'password': user.password,
      },
    });

    res.status(201).json({
      name: user.name,
      email: user.email,
      id: userData.data,
    });
  } catch (error) {
    next(error);
  }
});

app.get('*', renderApp);

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
});
