import React, { PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';

/**
 * Header wraps a Navbar.Header provided by react-router
 */
const Header = ({ title, ...props }) => {
  return (
    <Navbar.Header {...props}>
      <Navbar.Brand>
        {title}
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
