import React from 'react';

import Button from '../../components/Button';

const btnStyle = {
  padding: '13px 19px',
  fontSize: 21,
  lineHeight: 1.666666,
  borderRadius: 9
};

/**
 * A fight button
 */
const ButtonFight = ({ children, onClick, disabled, ...props }) => {
  return (
    <Button bsStyle="success" style={btnStyle} onClick={onClick} disabled={disabled} {...props}>{children}</Button>
  );
};

export default ButtonFight;
