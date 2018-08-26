import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

// Styles
const input = css`
  background: transparent;
  border: 0;
  color: white;
  font-size: 0.8rem;
  font-style: italic;
  height: 50px;
  overflow-x: auto;
  margin-top: 5px;
  margin-bottom: 15px;
  max-width: 300px;
  padding: 0 10px;
  width: 100%;
  text-align: center;
`

const InputField = props => {
  return (
    <input 
      required 
      className={ input } 
      type={ props.type }
      name={ props.name } 
      placeholder={ props.placeholder } />
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

InputField.defaultProps = {
  className: "input",
  placholder: "Enter Text"
}

export default InputField;