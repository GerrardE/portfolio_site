import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

const BlogItem = ({ postTitle, postSubtitle, postMeta }) => {
  return (
    <Row>
      <Col lg='8' md='10' className='mx-auto'>
        <div className="post-preview">
          <Link href>
            <h2 className="post-title">
              {postTitle}
            </h2>
            <h3 className="post-subtitle">
              {postSubtitle}
            </h3>
          </Link>
          <p className="post-meta">
            Posted by
            {' '}
            <Link href>{postMeta.author}</Link>
            {' '}
            {postMeta.date}
          </p>
        </div>
      </Col>
    </Row>
  )
}

BlogItem.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postSubtitle: PropTypes.string.isRequired,
  postMeta: PropTypes.string.isRequired,
}

export default BlogItem;
