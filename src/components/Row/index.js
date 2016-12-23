import React, { PropTypes } from 'react';
import { Row as RBRow} from 'react-bootstrap';

/**
 * Row is a wrapped version of Row from react-bootstrap
 */
const Row = ({ children, ...props }) => {
  return (
    <RBRow {...props}>
      {children}
    </RBRow>
  );
};

Row.propTypes = {
  children: PropTypes.node
};

export default Row;
