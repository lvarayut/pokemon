import React, { PropTypes } from 'react';

/**
 * Form is a wrapped version of normal HTML form
 */
const Form = ({ children }) => {
  return (
    <form>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node
};

export default Form;
