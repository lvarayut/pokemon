import React, { PropTypes } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

/**
 * Menu generates all all Navbar menus
 */
const Menu = ({ navItems, ...props }) => {
  const items = navItems.map((navItem) => {
    if (navItem.to === '/') {
      return (
        <IndexLinkContainer key={navItem.id} to={navItem.to}>
          <NavItem>{navItem.name}</NavItem>
        </IndexLinkContainer>
      );
    } else {
      return (
        <LinkContainer key={navItem.id} to={navItem.to}>
          <NavItem>{navItem.name}</NavItem>
        </LinkContainer>
      );
    }
  });

  return (
    <Navbar.Collapse {...props}>
      <Nav pullRight>
        {items}
      </Nav>
    </Navbar.Collapse>
  );
};

Menu.propTypes = {
  navItems: PropTypes.array.isRequired
};

export default Menu;
