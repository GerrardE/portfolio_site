import React from 'react';
import PropTypes from 'prop-types';

const HyperLink = ({ className, href, id, role, dataToggle, ariaHaspopup, ariaExpanded, ariaControls, children }) => (
  <a className={className} href={href} id={id} role={role} data-toggle={dataToggle} aria-haspopup={ariaHaspopup} aria-expanded={ariaExpanded} aria-controls={ariaControls}>
    {children}
  </a>
)

HyperLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  id: PropTypes.string,
  role: PropTypes.string,
  dataToggle: PropTypes.string,
  ariaHaspopup: PropTypes.string,
  ariaExpanded: PropTypes.string,
  ariaControls: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node])
}

HyperLink.defaultProps = {
  className: '',
  href: '#',
  id: '',
  role: '',
  dataToggle: '',
  ariaHaspopup: '',
  ariaExpanded: '',
  ariaControls: '',
  children: {}
}

export default HyperLink;
