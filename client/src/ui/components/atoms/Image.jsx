import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ imageUrl, altText, width, className }) => <img src={imageUrl} alt={altText} width={width} className={className} />

Image.propTypes = {
    imageUrl: PropTypes.string,
    className: PropTypes.string,
    altText: PropTypes.string,
    width: PropTypes.string
}

Image.defaultProps = {
    imageUrl: '',
    className: '',
    altText: '',
    width: ''
}

export default Image;
