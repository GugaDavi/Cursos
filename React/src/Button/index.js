'use strict';

import React, { PropTypes } from 'react';

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>{children}</button>
)

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button;
