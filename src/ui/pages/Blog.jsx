import React, { Fragment, useEffect, useState } from 'react';
import { Container, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as actions from '@domain/redux/actions/get_posts';
import { AppNavbar, AppFooter, AppHeader } from '../containers';
import "@ui/assets/css/blog.css";
import { BlogItem, AppPagination } from '../components/molecules';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.get_posts())
  }, [dispatch])

  const posts = useSelector(state => state.get_posts.posts)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Fragment>
      <AppNavbar showBand={false} />
      <AppHeader className='masthead custom-masthead'>
        <div className='overlay' />
        <Col lg='7' className='my-auto'>
          <div className="site-heading">
            <h1>Blog</h1>
          </div>
        </Col>
      </AppHeader>
      <Container>
        <div className="clearfix">
          <AppPagination 
            className=' '
            postsPerPage={postsPerPage} 
            totalPosts={posts.length} 
            paginate={paginate} 
          />
        </div>
        {
          currentPosts.map((post) => (
            <BlogItem key={uuidv4()} post={post} />
          ))
        }
        <hr />
        <div className="clearfix">
          <AppPagination 
            className=' '
            postsPerPage={postsPerPage} 
            totalPosts={posts.length} 
            paginate={paginate} 
          />
        </div>
      </Container>
      <hr />
      <AppFooter />
    </Fragment>
  )
}

export default Home;
