import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { AppNavbar, AppFooter } from '../containers';
import "@ui/assets/css/blog.css";
import { BlogPostItem } from '../components/molecules';


const BlogPost = () => {
  return (
    <Fragment>
      <AppNavbar showBand='true' />
      <BlogPostItem />
      <hr />
      <div className="clearfix container col-lg-6 col-md-6 mx-auto">
        <Link to='/blog' className="btn btn-secondary btn-xl float-right">&larr; Back</Link>
      </div>
      <br />
      <AppFooter />
    </Fragment>
  )
}

export default BlogPost;
