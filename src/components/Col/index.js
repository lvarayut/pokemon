import React, { PropTypes } from 'react';
import { Col as RBCol} from 'react-bootstrap';

/**
 * Col is a wrapped version of Col from react-bootstrap
 */
const Col = ({ children, ...props }) => {
  return (
    <RBCol {...props}>
      {children}
    </RBCol>
  );
};

Col.propTypes = {
  children: PropTypes.node
};

export default Col;
