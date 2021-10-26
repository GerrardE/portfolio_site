import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import AppBand from './AppBand';

const AppNavbar = ({ showBand, history, match }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const brand = 'ezeugwagerrard'

  const re = new RegExp(/^\/blog\/?:?(\w+)?\/?/, 'g');

  return (
    <div>
      <Navbar color='light' fixed='top' light expand='md'>
        <Container>
          <NavbarBrand onClick={()=>history.push('/')} className={match.path === '/'? 'active' : ''}>{brand}</NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink onClick={()=>history.push('/')} className={match.path === '/'? 'active' : ''}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>history.push('/blog')} className={re.test(match.path) ? 'active' : ''}>Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>history.push('/contact')} className={match.path === '/contact'? 'active' : ''}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {
        showBand.trim() === 'true' ? <AppBand /> : ''
      }
    </div>
  );
}

AppNavbar.propTypes = {
  showBand: PropTypes.string,
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
  match: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
}

AppNavbar.defaultProps = {
  showBand: 'false'
}

export default AppNavbar;
