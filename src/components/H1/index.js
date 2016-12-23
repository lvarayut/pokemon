import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

/**
 * H1 is a wrapped version of PageHeader from react-boostrap
 */
const H1 = ({ children, ...props }) => {
  return (
    <PageHeader style={{ marginTop: 0 }} {...props}>
      {children}
    </PageHeader>
  );
};

H1.propTypes = {
  children: PropTypes.node
};

export default H1;
