import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <>
    <p
      role="main"
      className="flex display"
    >
      {result}
    </p>
  </>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
