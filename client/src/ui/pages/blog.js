import React, { Fragment, useEffect, useState } from "react";
import { Container, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { count_down } from "@domain/redux/actions/loader";
import { AppNavbar, AppFooter, AppHeader } from "@ui/components/organisms";
import { BlogItem, AppPagination, AppLoader, Seo } from "@ui/components/molecules";

const Blog = (props) => {
  const {
    pageContext,
  } = props;

  const { posts } = pageContext;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(count_down(1000));
  }, [dispatch]);

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

  const seo = {
    description: "Articles, tips and tricks to help you on your path to becoming a world-class Software Engineer.", 
    url: `${process.env.GATSBY_BASE_URL}/blog`, 
    title: "Ezeugwa Gerrard | Blog", 
    image: "https://res.cloudinary.com/dz9mitahp/image/upload/v1635609775/small_ezeugwagerrard_f0a822c23e.jpg?7751481.100000024",
    keywords: "Ezeugwa Gerrard's Blog"
  }
  
  return (
    <Fragment>
      <Seo seo={seo} />
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
