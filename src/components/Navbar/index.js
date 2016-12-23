import React, { PropTypes } from 'react';
import { Navbar as RBNavbar } from 'react-bootstrap';

import Header from './Header';
import Menu from './Menu';

/**
 * Generate Navbar based on Navbar component provided by react-rotuer
 */
const Navbar = ({ title, navItems, ...props }) => {
  return (
    <RBNavbar collapseOnSelect {...props}>
      <Header title={title} />
      <Menu navItems={navItems} />
    </RBNavbar>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  navItems: PropTypes.array
};

export default Navbar;
