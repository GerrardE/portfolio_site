import React from "react";
import { Container } from "reactstrap";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { Image } from "../atoms";

const AppFooter = ({ location }) => {
  const re = new RegExp(/^\/blog\/?:?(\w+)?\/?/, "gm");

  return (
    <footer>
      <Container>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="/blog"
              className={re.test(location.pathname) ? "active" : ""}
            >
              Blog
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Image imageUrl="https://res.cloudinary.com/dz9mitahp/image/upload/v1636657770/ezeugwa_gerrard_logo_white_2cd8981d27.svg" width="130" className="my-2" />
        {" "}
        <p>
          &copy;
          {` ${new Date()
            .toJSON()
            .slice(0, 4)} All Rights Reserved.`}
        </p>
      </Container>
    </footer>
  );
};

AppFooter.propTypes = {
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
  match: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
};

export default AppFooter;
