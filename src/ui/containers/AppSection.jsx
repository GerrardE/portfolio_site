import React from 'react';
import PropTypes from 'prop-types';
import {
  Container
} from 'reactstrap';

const AppSection = ({ className, id, children }) => {
  return (
    <section className={className} id={id}>
      <Container>
        {children}
      </Container>
    </section>
  )
}

AppSection.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node]).isRequired
}

export default AppSection;
