import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const AppSocial = () => {
  return (
    <Container className='mt-4 mb-4'>
      <Row>
        <Col lg='8' md='10' className='mx-auto'>
          <ul className='list-inline text-center'>
            <li className='list-inline-item'>
              <a href='https://www.linkedin.com/in/ezeugwagerrard/'>
                <span className='fa-stack fa-lg'>
                  <i className='fas fa-circle fa-stack-2x' />
                  <i className='fab fa-linkedin fa-stack-1x fa-inverse' />
                </span>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='https://twitter.com/ezeugwagerrard'>
                <span className='fa-stack fa-lg'>
                  <i className='fas fa-circle fa-stack-2x' />
                  <i className='fab fa-twitter fa-stack-1x fa-inverse' />
                </span>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='https://github.com/gerrarde'>
                <span className='fa-stack fa-lg'>
                  <i className='fas fa-circle fa-stack-2x' />
                  <i className='fab fa-github fa-stack-1x fa-inverse' />
                </span>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AppSocial;
