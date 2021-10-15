import React, { Fragment, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Container, Row } from "reactstrap";
import * as actions from '@domain/redux/actions/loader';
import {AppLoader} from '@ui/components/molecules';
import { AppNavbar, AppFooter, AppSocial } from "../components/organisms";
// import "@ui/assets/css/blog.css";

const Contact = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actions.count_down(1000))
  },[dispatch])
  
  const loading = useSelector(state => state.loader.loading)

  return (
    loading ? 
      <AppLoader /> :
    (
      <Fragment>
        <AppNavbar showBand='false ' />
        <Container fluid className="contact-masthead">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.881660843388!2d3.3817129769831986!3d6.556935474121817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d7e0016f285%3A0x8d7bbd27a2060c4f!2sGbagada%2C%20Lagos!5e0!3m2!1sen!2sng!4v1596109204000!5m2!1sen!2sng"
            frameBorder="0"
            title="map"
            aria-hidden="false"
            className='map'
          />
        </Container>
        <Container>
          <Row>
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>
                Want to get in touch? Fill out the form below to send me a message
                and I will get back to you as soon as possible!
              </p>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="Name">
                      Name
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        data-validation-required-message="Please enter your name."
                      />
                    </label>
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="Email Address">
                      Email Address
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        data-validation-required-message="Please enter your email address."
                      />
                    </label>
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <label htmlFor="Phone Number">
                      Phone Number
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        required
                        data-validation-required-message="Please enter your phone number."
                      />
                    </label>
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="Message">
                      Message
                      <textarea
                        rows="3"
                        className="form-control"
                        id="message"
                        required
                        data-validation-required-message="Please enter a message."
                      />
                    </label>
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <br />
                <div id="success" />
                <button
                  type="submit"
                  className="btn btn-secondary btn-xl"
                  id="sendMessageButton"
                >
                  Send
                </button>
              </form>
            </div>
          </Row>
          <AppSocial />
        </Container>
        <hr />
        <AppFooter />
      </Fragment>
    )
  );
};

export default Contact;
