import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => (
  <div>
    <p>{props.result}</p>
  </div>
);

Display.defaultProps = {
  result: '0'
}

Display.propTypes = {
  result: PropTypes.string.isRequired
}

export default Display;