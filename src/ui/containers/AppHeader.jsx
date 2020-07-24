import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({children}) => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          {children}
        </div>
      </div>
    </header>
  )
}

AppHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

AppHeader.defaultProps = {
  children: {}
}

export default AppHeader;
