import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Inventory from './containers/Inventory';
import Challenge from './containers/Challenge';

// Set up all routes using React router
const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute components={Inventory} />
      <Route path="/challenge" components={Challenge} />
    </Route>
  </Router>
);

export default Routes;