import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import configureStore from './store';
import Routes from './routes';

// CSS files
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
