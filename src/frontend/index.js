/* eslint-disable quotes */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import reducer from './reducers';
import App from './routes/App';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
);

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
