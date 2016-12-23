import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

/**
 * Input wraps FormGroup provided by react-bootstrap
 * which can be used to generate <input>, <textarea>, and <select>
 */
const Input = ({ validationState, title, name, type, value, placeHolder, onChange, inValidLabel, children, componentClass, ...props }) => {
  const formStatus  = validationState ? validationState() : null;
  let errorBlock = <HelpBlock>{inValidLabel}</HelpBlock>;

  return (
    <FormGroup validationState={formStatus} {...props}>
      <ControlLabel>{title}</ControlLabel>
      <FormControl
        name={name}
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        componentClass={componentClass}
      >
        {children}
      </FormControl>
      <FormControl.Feedback />
      {formStatus === 'success' ? null : errorBlock}
    </FormGroup>
  );
};

Input.propTypes = {
  validationState: PropTypes.func,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  inValidLabel: PropTypes.string,
  componentClass: PropTypes.string,
  children: PropTypes.node
};

export default Input;
