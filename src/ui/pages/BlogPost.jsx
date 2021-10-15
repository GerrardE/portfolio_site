import React, { Fragment, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '@domain/redux/actions/get_posts';
import { AppNavbar, AppFooter } from '../components/organisms';
import { BlogPostItem } from '../components/molecules';

const BlogPost = ({ match, history }) => {
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
      <AppNavbar showBand='true' history={history} />
      <Container>
        <BlogPostItem post={post} loading={loading} history={history} />
        <hr />
        <div className='mx-auto col-md-10 col-lg-8 text-right'>
          <Link to="#" onClick={() => history.push("/blog")} className='btn btn-xl'>&larr; Back</Link>
        </div>
        <br />
      </Container>
      <AppFooter history={history} />
    </Fragment>
  )
}

BlogPost.propTypes = {
  match: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
}

BlogPost.defaultProps = {
  match: {}
}

export default BlogPost;
