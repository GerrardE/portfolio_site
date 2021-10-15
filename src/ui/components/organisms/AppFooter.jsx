import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const AppFooter = ({ history }) => {
  return (
    <footer>
      <Container>
        <p>
          &copy;
          {`ezeugwagerrard ${new Date().toJSON().slice(0, 4)} All Rights Reserved.`}
        </p>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <Link to="#" onClick={() => history.push('/')}>Home</Link>
          </li>
          <li className='list-inline-item'>
            <Link to="#" onClick={() => history.push('/blog')}>Blog</Link>
          </li>
          <li className='list-inline-item'>
            <Link to="#" onClick={() => history.push('/contact')}>Contact</Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

AppFooter.propTypes = {
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
};

export default AppFooter;
