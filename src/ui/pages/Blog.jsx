import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AppNavbar, AppFooter, AppHeader } from '../containers';
import "@ui/assets/css/blog.css";

const Home = () => {
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
        <Row>
          <Col lg='8' md='10' className='mx-auto'>
            <div className="post-preview">
              <Link to='/blogpost'>
                <h2 className="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </Link>
              <p className="post-meta">
                Posted by
                {' '}
                <Link href>Start Bootstrap</Link>
                {' '}
                on September 24, 2019
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="clearfix">
          <Link href className="btn btn-secondary btn-xl float-right">Older Posts &rarr;</Link>
        </div>
      </Container>
      <hr />
      <AppFooter />
    </Fragment>
  )
}

export default Home;
