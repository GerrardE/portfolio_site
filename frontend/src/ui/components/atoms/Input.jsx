import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, className, placeholder, ariaLabel, ariaDescription }) => <input type={type} className={className} placeholder={placeholder} aria-label={ariaLabel} aria-describedby={ariaDescription} />

Input.propTypes = {
    type: PropTypes.string, 
    className: PropTypes.string, 
    placeholder: PropTypes.string, 
    ariaLabel: PropTypes.string, 
    ariaDescription: PropTypes.string
}

Input.defaultProps = {
    type: 'text', 
    className: 'form-control bg-light border-0 small', 
    placeholder: 'Enter text', 
    ariaLabel: '', 
    ariaDescription: ''
}

export default Input;
