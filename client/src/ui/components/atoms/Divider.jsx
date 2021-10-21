import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ className }) => {
  return (
    <hr className={className} />
  )
}

Divider.propTypes = {
  className: PropTypes.string
}

Divider.defaultProps = {
  className: 'sidebar-divider my-0'
}

export default Divider;
