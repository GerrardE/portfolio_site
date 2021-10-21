import React from 'react';
import PropTypes from 'prop-types';

const Text = ({
    fontSize,
    textAlign,
    color,
    display,
    fontWeight,
    children,
    padding
}) => (
  <Text
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    display={display}
    fontWeight={fontWeight}
    padding={padding}
  >
    {children}
  </Text>
    )

Text.propTypes = {
    fontSize: PropTypes.number,
    textAlign: PropTypes.string,
    color: PropTypes.string,
    display: PropTypes.string,
    fontWeight: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.node]),
    padding: PropTypes.number
}

Text.defaultProps = {
    fontSize: 12,
    textAlign: '',
    color: 'black',
    display: '',
    fontWeight: 400,
    children: '',
    padding: 1
}

export default Text;
