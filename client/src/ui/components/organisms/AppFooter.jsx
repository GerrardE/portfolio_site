import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const AppFooter = ({ history, match }) => {
  const re = new RegExp(/^\/blog\/?:?(\w+)?\/?/, 'gm');

  return (
    <footer>
      <Container>
        <p>
          &copy;
          {`ezeugwagerrard ${new Date().toJSON().slice(0, 4)} All Rights Reserved.`}
        </p>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <Link to="#" onClick={() => history.push('/')} className={match.path === '/'? 'active' : ''}>Home</Link>
          </li>
          <li className='list-inline-item'>
            <Link to="#" onClick={() => history.push('/blog')} className={re.test(match.path)? 'active' : ''}>Blog</Link>
          </li>
          <li className='list-inline-item'>
            <Link to="#" onClick={() => history.push('/contact')} className={match.path === '/contact'? 'active' : ''}>Contact</Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

AppFooter.propTypes = {
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
  match: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
};

export default AppFooter;
