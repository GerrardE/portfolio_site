import React, { Fragment, useEffect, useState } from 'react';
import { Container, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as actions from '@domain/redux/actions/get_posts';
import * as loader_actions from '@domain/redux/actions/loader';
import { AppNavbar, AppFooter, AppHeader } from '../containers';
import "@ui/assets/css/blog.css";
import { BlogItem, AppPagination, AppLoader } from '../components/molecules';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.get_posts())
    dispatch(loader_actions.count_down())
  }, [dispatch])

  const posts = useSelector(state => state.get_posts.posts)
  const posts_loading = useSelector(state => state.get_posts.loading)
  const loading = useSelector(state => state.loader.loading)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
     loading ? 
       <AppLoader /> :
    (
      <Fragment>
        <AppNavbar showBand='false ' />
        <AppHeader className='masthead custom-masthead'>
          <div className='overlay' />
          <Col lg='7' className='my-auto'>
            <div className="site-heading">
              <h1>Blog</h1>
            </div>
          </Col>
        </AppHeader>
        {
          posts_loading ? <AppLoader /> :
          (
            <Container>
              <div className="clearfix">
                <AppPagination 
                  className=' '
                  postsPerPage={postsPerPage} 
                  totalPosts={posts.length} 
                  paginate={paginate} 
                  currentPage={currentPage}
                />
              </div>
              {
                currentPosts.map((post) => (
                  <BlogItem key={uuidv4()} post={post} />
                ))
              }
              <div className="clearfix">
                <AppPagination 
                  className=' '
                  postsPerPage={postsPerPage} 
                  totalPosts={posts.length} 
                  paginate={paginate} 
                  currentPage={currentPage}
                />
              </div>
            </Container>
          )
        }
        <AppFooter />
      </Fragment>
    )
  )
}

export default Home;
