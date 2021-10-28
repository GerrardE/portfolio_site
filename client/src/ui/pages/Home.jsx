import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Row, Col, Container } from "reactstrap";
import { get_about } from "@domain/redux/actions/about";
import { AppLoader } from "@ui/components/molecules";
import { AppNavbar, AppFooter, AppSocial } from "../components/organisms";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_about());
  }, [dispatch]);

  const { about, loading } = useSelector((state) => state.about);

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
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {about.bio}
                </ReactMarkdown>
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
