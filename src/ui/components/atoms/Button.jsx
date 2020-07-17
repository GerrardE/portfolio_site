import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, className, children, type }) => {

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} id={id} className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

Button.defaultProps = {
  id: '',
  type: '',
  className: '',
  children: {}
}

export default Button;
