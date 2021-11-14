import React, { Fragment } from "react";
import { Container } from "reactstrap";
import { AppNavbar, AppFooter } from "@ui/components/organisms";
import { AppLoader, Seo } from '@ui/components/molecules';

const PageNotFound = (props) => {
  const seo = {
    description: "Not found", 
    url: `${process.env.GATSBY_BASE_URL}/notfound`, 
    title: "Ezeugwa Gerrard | Notfound", 
    image: "https://res.cloudinary.com/dz9mitahp/image/upload/v1635609775/small_ezeugwagerrard_f0a822c23e.jpg?7751481.100000024",
    keywords: "Ezeugwa Gerrard"
  }

  return (
    <Fragment>
      <Seo seo={seo} />
      <AppNavbar showBand='false ' {...props} />
      <Container fluid className="masthead not-found">
        <AppLoader />
      </Container>
      <AppFooter {...props} />
    </Fragment>
  );
};

export default PageNotFound;
