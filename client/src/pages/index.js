import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Row, Col, Container } from "reactstrap";
import { get_about } from "@domain/redux/actions/about";
import { AppLoader, Seo } from "@ui/components/molecules";
import { AppNavbar, AppFooter, AppSocial } from "@ui/components/organisms";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_about());
  }, [dispatch]);

  const { about, loading } = useSelector((state) => state.about);

  const seo = {
    description: "Articles, tips and tricks to help you on your path to becoming a world-class Software Engineer.", 
    url: `${process.env.GATSBY_BASE_URL}/blog`, 
    title: "Ezeugwa Gerrard | Home", 
    image: "https://res.cloudinary.com/dz9mitahp/image/upload/v1635609775/small_ezeugwagerrard_f0a822c23e.jpg?7751481.100000024",
    keywords: "Ezeugwa Gerrard's, Personal Blog"
  }

  return (
    <Fragment>
      <Seo seo={seo} />
      <AppNavbar showBand="true " {...props} />
      {loading ? (
        <AppLoader />
      ) : (
        <Container>
          <Row>
            <Col lg="8" md="10" className="mx-auto mt-3">
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
