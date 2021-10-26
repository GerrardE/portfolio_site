import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container } from "reactstrap";
import * as actions from "@domain/redux/actions/loader";
import { AppLoader } from "@ui/components/molecules";
import { AppNavbar, AppFooter, AppSocial } from "../components/organisms";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.count_down(1000));
  }, [dispatch]);

  const loading = useSelector((state) => state.loader.loading);

  return (
    <Fragment>
      <AppNavbar showBand="true " {...props} />
      {loading ? (
        <AppLoader />
      ) : (
        <Container>
          <Row>
            <Col lg="8" md="10" className="mx-auto mt-3">
              <h4>Bio</h4>
              <div className="post-preview">
                <p>
                  I am an Engineer in the Fintech space with 5+ years of
                  experience solving exciting problems with Javascript and
                  Python. I also mentor young and aspiring engineers to become
                  Full-Stack Javascript Engineers. In SRE/DevOps, I have a core
                  focus on infrastructure tools and Amazon Web Services.
                </p>

                <p>
                  In 2016, I started studying how to code from curated learning paths provided
                  by codecademy and coursera. By the end of the year, I joined the web team of
                  my local church as a Web Developer to start helpin them automate repetitive processes.
                  By the end of the year...
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      <AppSocial {...props} />
      <AppFooter {...props} />
    </Fragment>
  );
};

export default Home;
