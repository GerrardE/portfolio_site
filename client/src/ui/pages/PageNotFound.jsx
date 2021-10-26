import React, { Fragment } from "react";
import { Container } from "reactstrap";
import { AppNavbar, AppFooter } from "../components/organisms";
import { AppLoader } from '../components/molecules';

const PageNotFound = (props) => {
  return (
    <Fragment>
      <AppNavbar showBand='false ' {...props} />
      <Container fluid className="masthead not-found">
        <AppLoader />
      </Container>
      <AppFooter />
    </Fragment>
  );
};

export default PageNotFound;
