import React, { Fragment } from "react";
import { Container } from "reactstrap";
import { AppNavbar, AppFooter } from "../components/organisms";
import { AppLoader } from '../components/molecules';

const PageNotFound = () => {

  return (
    <Fragment>
      <AppNavbar showBand='false ' />
      <Container fluid className="masthead not-found">
        <AppLoader />
      </Container>
      <AppFooter />
    </Fragment>
  );
};

export default PageNotFound;
