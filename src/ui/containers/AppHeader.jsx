import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({children, className }) => {
  return (
    <header className={className}>
      <div className="container h-100">
        <div className="row h-100">
          {children}
        </div>
      </div>
    </header>
  )
}

AppHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
}

AppHeader.defaultProps = {
  children: {},
  className: 'masthead'
}

export default AppHeader;
