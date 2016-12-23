import React from 'react';

const noop = () => {};

/**
 * Clickable is a Higher Order Component used to
 * enhance any component to be clickable
 * @param onClick
 * @constructor
 */
const Clickable = (onClick = noop) => (WrappedComponent) => (props) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default Clickable;
