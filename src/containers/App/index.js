import React from 'react';

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';

/**
 * An entry application that contains only a Navbar,
 * this component will be used as a parent of all nested routes.
 * So, the Navbar will be rendered across different routes
 */
const App = ({ children }) => {
  const navItems = [{
    id: 1,
    name: 'Inventory',
    to: '/'
  }, {
    id: 2,
    name: 'Challenge',
    to: '/challenge'
  }];

  return (
    <div>
      <Navbar title="Pokemon" navItems={navItems} />
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default App;
