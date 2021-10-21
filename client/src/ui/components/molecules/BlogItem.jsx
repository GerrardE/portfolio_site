import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const BlogItem = ({ post, history }) => {
  return (
    <Row>
      <Col lg="8" md="10" className="mx-auto">
        <div className="post-preview">
          <Link to="#" onClick={() => history.push(`/blog/${post.id}`)}>
            <h3 className="post-title">{post.title}</h3>
            <h4 className="post-subtitle">{post.subtitle}</h4>
          </Link>
          <p className="post-meta">{`Posted on ${moment(post.createdAt).format("Do MMMM YYYY")}`}</p>
        </div>
        <hr className="my-4" />
      </Col>
    </Row>
  );
};

BlogItem.propTypes = {
  post: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
};

export default BlogItem;
