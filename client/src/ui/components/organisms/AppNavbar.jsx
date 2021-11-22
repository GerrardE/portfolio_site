import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { navigate } from "gatsby";
import AppBand from "./AppBand";
import { Image } from "../atoms";

const AppNavbar = ({ showBand, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const re = new RegExp(/^\/blog\/?:?(\w+)?\/?/, "g");

  return (
    <div>
      <Navbar color="light" fixed="top" light expand="md">
        <Container>
          <NavbarBrand
            onClick={() => navigate("/")}
            className={location.pathname === "/" ? "active" : ""}
          >
            <Image
              imageUrl="https://res.cloudinary.com/dz9mitahp/image/upload/v1636657874/ezeugwa_gerrard_logo_847486cb43.svg"
              altText="ezeugwagerrard logo"
              width="150"
              className="image-responsive"
            />
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={() => navigate("/")}
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => navigate("/blog")}
                  className={re.test(location.pathname) ? "active" : ""}
                >
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => navigate("/contact")}
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {showBand.trim() === "true" ? <AppBand /> : ""}
    </div>
  );
};

AppNavbar.propTypes = {
  showBand: PropTypes.string,
  navigate: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
};

AppNavbar.defaultProps = {
  showBand: "false",
};

export default AppNavbar;
