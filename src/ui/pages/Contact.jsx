import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AppNavbar, AppFooter, AppHeader, AppSocial } from '../containers';
import "@ui/assets/css/blog.css";

const Contact = () => {
  return (
    <Fragment>
      <AppNavbar showBand={false} />
      <AppHeader className='masthead custom-masthead'>
        <div className='overlay' />
        <Col lg='7' className='my-auto'>
          <div className="site-heading">
            <h1>Contact</h1>
          </div>
        </Col>
      </AppHeader>
      <Container>
        <Row>
          <div className="col-lg-8 col-md-10 mx-auto">
            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label htmlFor='Name'>
                    Name
                    <input type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
                  </label>
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label htmlFor='Email Address'>
                    Email Address
                    <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
                  </label>
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label htmlFor='Phone Number'>
                    Phone Number
                    <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
                  </label>
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label htmlFor='Message'>
                    Message
                    <textarea rows="3" className="form-control" id="message" required data-validation-required-message="Please enter a message." />
                  </label>
                  <p className="help-block text-danger" />
                </div>
              </div>
              <br />
              <div id="success" />
              <button type="submit" className="btn btn-secondary btn-xl" id="sendMessageButton">Send</button>
            </form>
          </div>
        </Row>
        <AppSocial />
      </Container>
      <hr />
      <AppFooter />
    </Fragment>
  )
}

export default Contact;
