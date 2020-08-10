import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

const BlogItem = ({ post }) => {
  return (
    <Row>
      <Col lg='8' md='10' className='mx-auto'>
        <div className="post-preview">
          <Link href to='!#'>
            <h2 className="post-title">
              {post.title}
            </h2>
            <h3 className="post-subtitle">
              {post.body.slice(0, 40)}
            </h3>
          </Link>
          <p className="post-meta">
            Posted on 24 September 2019
          </p>
        </div>
      </Col>
    </Row>
  )
}

BlogItem.propTypes = {
  post: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
}

export default BlogItem;
