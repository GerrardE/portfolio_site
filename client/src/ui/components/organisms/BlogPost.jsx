import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as actions from "@domain/redux/actions/get_posts";
import { AppNavbar, AppFooter } from ".";
import { BlogPostItem } from "../molecules";
import AppLoader from "../molecules/AppLoader";

const BlogPost = (props) => {
  const { match: { params }, history } = props;
  const { id } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.get_post(id));
  }, [dispatch, id]);

  const post = useSelector((state) => state.get_posts.post);
  const loading = useSelector((state) => state.get_posts.loading);

  return (
    <Fragment>
      <AppNavbar showBand="true" {...props} />
      {loading ? (
        <AppLoader />
      ) : (
        <Container>
          <Fragment>
            <BlogPostItem post={post} loading={loading} {...props} />
            <hr />
            <div className="mx-auto col-md-10 col-lg-8 text-right">
              <Link
                to="#"
                onClick={() => history.push("/blog")}
                className="btn btn-xl"
              >
                &larr; Blog posts
              </Link>
            </div>
            <br />
          </Fragment>
        </Container>
      )}
      <AppFooter {...props} />
    </Fragment>
  );
};

BlogPost.propTypes = {
  match: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
};

export default BlogPost;
