import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Image } from "../atoms";

const AppFooter = ({ history, match }) => {
  const re = new RegExp(/^\/blog\/?:?(\w+)?\/?/, "gm");

  return (
    <footer>
      <Container>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link
              to="#"
              onClick={() => history.push("/")}
              className={match.path === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="#"
              onClick={() => history.push("/blog")}
              className={re.test(match.path) ? "active" : ""}
            >
              Blog
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="#"
              onClick={() => history.push("/contact")}
              className={match.path === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Image imageUrl="./ezeugwa-gerrard-logo-white.svg" width="130" className="my-2" />
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
