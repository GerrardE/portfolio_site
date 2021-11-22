import React, { Fragment, useState } from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import { AppNavbar, AppFooter } from "@ui/components/organisms";
import { BlogItem, AppPagination, AppLoader, Seo } from "@ui/components/molecules";

const Category = (props) => {
  const {
    pageContext,
  } = props;
  
  const { category } = pageContext;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  
  const posts_loading = useSelector((state) => state.posts.loading);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = category.posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const returnPosts = (p) => {
    if (p.length < 1) {
      return <center>There are no posts in this category.</center>;
    }

    return p.map((post) => <BlogItem key={post.id} post={post} {...props} />);
  };

  const seo = {
    description: "Articles, tips and tricks to help you on your path to becoming a world-class Software Engineer.", 
    url: `${process.env.GATSBY_BASE_URL}/blog/${category.slug}/category`, 
    title: "Ezeugwa Gerrard | Category", 
    image: "https://res.cloudinary.com/dz9mitahp/image/upload/v1635609775/small_ezeugwagerrard_f0a822c23e.jpg?7751481.100000024",
    keywords: "Ezeugwa Gerrard's Blog"
  }

  return (
    <Fragment>
      <Seo seo={seo} />
      <AppNavbar showBand="true" {...props} />
      {posts_loading ? (
        <AppLoader />
      ) : (
        <Fragment>
          <Container className="mb-4">
            <h4 className="mb-4 text-center">{`${`Posts by category: "${category.name}"`}`}</h4>
            <div className="clearfix">
              <AppPagination
                className=" "
                postsPerPage={postsPerPage}
                totalPosts={category.posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
            {returnPosts(currentPosts)}
            <div className="clearfix">
              <AppPagination
                className=" "
                postsPerPage={postsPerPage}
                totalPosts={category.posts.length}
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

export default Category;
