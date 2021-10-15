import React, { Fragment, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '@domain/redux/actions/get_posts';
import { AppNavbar, AppFooter } from '../components/organisms';
import { BlogPostItem } from '../components/molecules';

const BlogPost = (props) => {
  const {match} = props;
  const {params} = match;
  const { id } = params
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actions.get_post(id))
  },[dispatch, id])

  const post = useSelector(state => state.get_posts.post)
  const loading = useSelector(state => state.get_posts.loading)

  return (
    <Fragment>
      <AppNavbar showBand='true ' />
      <BlogPostItem post={post} loading={loading} />
      <hr />
      <div className="clearfix container col-lg-6 col-md-6 mx-auto">
        <Link to='/blog' className="btn btn-secondary btn-xl float-right">&larr; Back</Link>
      </div>
      <br />
      <AppFooter />
    </Fragment>
  )
}

BlogPost.propTypes = {
  match: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
}

BlogPost.defaultProps = {
  match: {}
}

export default BlogPost;
