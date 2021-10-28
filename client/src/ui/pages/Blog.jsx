import React, { Fragment, useEffect, useState } from "react";
import { Container, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { get_posts } from "@domain/redux/actions/posts";
import { count_down } from "@domain/redux/actions/loader";
import { AppNavbar, AppFooter, AppHeader } from "../components/organisms";
import { BlogItem, AppPagination, AppLoader } from "../components/molecules";

const Blog = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_posts());
    dispatch(count_down(1000));
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);
  const posts_loading = useSelector((state) => state.posts.loading);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const returnPosts = (p) => {
    if(p.length < 1) {
      return <center>No post here yet.</center>
    }
    
    return p.map((post) => (
      <BlogItem key={post.id} post={post} {...props} />
    ))
  }
  
  return (
    <Fragment>
      <AppNavbar showBand="false " {...props} />
      {posts_loading ? (
        <Fragment>
        <AppHeader className="masthead custom-masthead">
          <div className="overlay" />
          <Col lg="7" className="my-auto">
            <div className="site-heading">
              <h1>Blog</h1>
            </div>
          </Col>
        </AppHeader>
        <AppLoader />
        </Fragment>
      ) : (
        <Fragment>
          <AppHeader className="masthead custom-masthead">
            <div className="overlay" />
            <Col lg="7" className="my-auto">
              <div className="site-heading">
                <h1>Blog</h1>
              </div>
            </Col>
          </AppHeader>

          <Container className="mb-4">
            <div className="clearfix">
              <AppPagination
                className=" "
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
            {returnPosts(currentPosts)}
            <div className="clearfix">
              <AppPagination
                className=" "
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </Container>
        </Fragment>
      )}
      <AppFooter {...props} />
    </Fragment>
  );
};

export default Blog;
