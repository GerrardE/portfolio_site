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

const AppNavbar = ({ showBand }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const brand = "ezeugwagerrard"

  return (
    <div>
      <Navbar color='light' fixed='top' light expand="md">
        <Container>
          <NavbarBrand href="/">{brand}</NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
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
  showBand: PropTypes.string
}

AppNavbar.defaultProps = {
  showBand: 'false'
}

export default AppNavbar;
