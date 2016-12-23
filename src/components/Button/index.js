import React, { PropTypes } from 'react';
import { Button as RBButton } from 'react-bootstrap';

/**
 * Button is a wrapped version of Button from react-bootstrap
 */
const Button = ({ onClick, children, ...props }) => {
  return (
    <RBButton onClick={onClick} {...props}>{children}</RBButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
