import React, { Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import * as actions from '@domain/redux/actions/loader';
import {AppLoader} from '@ui/components/molecules';
import { AppNavbar, AppFooter, AppHeader, AppSection, AppSocial } from '../containers';
import FeatureItem from '../components/molecules/FeatureItem';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actions.count_down())
  },[dispatch])
  
  const loading = useSelector(state => state.loader.loading)

  return (
    loading ? 
      <AppLoader /> :
    (
      <Fragment>
        <AppNavbar showBand='false ' />
        <AppHeader className='masthead home-masthead'>
          <div className='overlay' />
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h2 className="mb-5">Repetitive processes reduce ROI. Engineers find unique solutions to real life, world changing problems and help plug wastage.</h2>
              <h6>Find out how I am changing my world now, and how I can help change yours.</h6>
              <br />
              <Link href to="/blog" className="btn btn-outline btn-xl">Start Here</Link>
            </div>
          </div>
        </AppHeader>

        <AppSection className='features' id='features'>
          <div className="section-heading text-center">
            <h2>Services</h2>
            <p className="text-muted">What can I Engineer for you?</p>
          </div>
          <Row>
            <Col lg='12' className='my-auto'>
              <Container fluid>
                <Row>
                  <Col lg='4'>
                    <FeatureItem 
                      headerText='SOFTWARE'
                      paraText='I love working with interesting teams to build mobile and web applications that scale well across all platforms'
                      iconClassName='icon-screen-desktop text-primary'
                    />
                  </Col>
              
                  <Col lg='4'>
                    <FeatureItem 
                      headerText='DEVOPS'
                      paraText='Over the years, I developed invaluable skills in digital pipeline development and various automation tools'
                      iconClassName='icon-settings text-primary'
                    />
                  </Col>
                
                  <Col lg='4'>
                    <FeatureItem 
                      headerText='MENTORSHIP'
                      paraText='Giving back to the dev community by providing mentorship and support for aspiring Engineers is fun'
                      iconClassName='icon-share text-primary'
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </AppSection>
        
        <hr />
        <AppSocial />
        <AppFooter />
      </Fragment>
    )
  )
}

export default Home;
