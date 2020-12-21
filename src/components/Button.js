import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, handleClick, specialClass }) => (
  <button
    className={`button ${specialClass}`}
    type="button"
    onClick={() => { handleClick(name); }}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  specialClass: PropTypes.string,
};

Button.defaultProps = {
  specialClass: '',
};

export default Button;
