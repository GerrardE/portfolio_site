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

const AppNavbar = ({ showBand, history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const brand = "ezeugwagerrard"

  return (
    <div>
      <Navbar color='light' fixed='top' light expand="md">
        <Container>
          <NavbarBrand onClick={()=>history.push("/")}>{brand}</NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={()=>history.push("/")}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>history.push("/blog")}>Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>history.push("/contact")}>Contact</NavLink>
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
}

AppNavbar.defaultProps = {
  showBand: 'false'
}

export default AppNavbar;
