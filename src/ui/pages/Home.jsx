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

  return loading ? (
    <AppLoader />
  ) : (
    <Fragment>
      <AppNavbar showBand="true " {...props} />
      <Container>
        <Row>
          <Col lg="8" md="10" className="mx-auto mt-3">
            <h4>Bio</h4>
            <div className="post-preview">
              <p className="">
                I am an Engineer in the Fintech space with 5+ years of
                experience solving exciting problems with Javascript and Python.
                I also mentor young and aspiring engineers to
                become Full-Stack Javascript Engineers. In SRE/DevOps, I have a
                core focus on infrastructure tools and Amazon Web Services.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="8" md="10" className="mx-auto mt-3">
            <h4>Experience</h4>
            <hr className="my-4" />
            <div className="post-preview">
              <h6>Software Engineer, UBA Group</h6>
              <h6>Dec 2019 - Present</h6>
              <h6>Lagos, Nigeria.</h6>

              <p>
                Build, test and deploy payment profiling, integration,
                collections, settlements, reconciliation applications and
                microservices.
              </p>
              <p className="post-meta">
                Gitlab CI/CD, TypeScript, React, Node, Express, C# and Dotnet.
              </p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <h6>Software Engineer, Andela</h6>
              <h6>May 2019 - Sep 2019</h6>
              <h6>Lagos, Nigeria.</h6>

              <p className="">Build, ship and scale javascript applications.</p>
              <p className="post-meta">React, Node and Express</p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <h6>Web Developer, Oceanprideml Ltd</h6>
              <h6>Jan 2018 - Jan 2019</h6>
              <h6>Lagos, Nigeria.</h6>

              <p className="">Develop company website and online presence.</p>
              <p className="post-meta">Laravel</p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <h6>Web Developer, Web Team, TREM Internation Headquarters</h6>
              <h6>Jan 2016 - Dec 2017</h6>
              <h6>Lagos, Nigeria.</h6>

              <p>Develop applications for reporting and database management.</p>
              <p className="post-meta">React, Node, Postgresql, AWS</p>
            </div>
            <hr className="my-4" />
          </Col>
        </Row>

        <Row>
          <Col lg="8" md="10" className="mx-auto mt-3">
            <h4>Education</h4>
            <br />
            <div className="post-preview">
              <h6>University of East London</h6>
              <h6>June 2021 - June 2022</h6>
              <h6>London, United Kingdom.</h6>

              <p>Msc. Computer Science</p>
              <p className="post-meta">Gas, Oil, Energy, Engineering.</p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <h6>University of Port Harcourt</h6>
              <h6>Oct 2010 - Oct 2015</h6>
              <h6>Rivers, Nigeria.</h6>

              <p>BE. Gas Engineering</p>
              <p className="post-meta">Gas, Oil, Energy, Engineering.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <AppSocial {...props} />
      <AppFooter {...props} />
    </Fragment>
  );
};

export default Home;
