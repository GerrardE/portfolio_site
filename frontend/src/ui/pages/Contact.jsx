import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "reactstrap";
import { count_down } from "@domain/redux/actions/loader";
import { post_contact } from "@domain/redux/actions/contact";
import { AppLoader } from "@ui/components/molecules";
import { AppNavbar, AppFooter, AppSocial } from "../components/organisms";
import { Seo } from "../components/molecules";

const Contact = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(count_down(1000));
  }, [dispatch]);

  const loading = useSelector((state) => state.loader.loading);

  const [emailForm, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
    sum: 0,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    msg: "",
    phone: "",
    sum: "",
  });

  const seo = {
    description: "Articles, tips and tricks to help you on your path to becoming a world-class Software Engineer.", 
    url: `${process.env.GATSBY_BASE_URL}/blog`, 
    title: "Ezeugwa Gerrard | Contact", 
    image: "https://res.cloudinary.com/dz9mitahp/image/upload/v1635609775/small_ezeugwagerrard_f0a822c23e.jpg?7751481.100000024",
    keywords: "Ezeugwa Gerrard's, Personal Blog"
  }

  return (
    <Fragment>
      <Seo seo={seo} />
      <AppNavbar showBand="false " {...props} />
      {loading ? (
        <AppLoader />
      ) : (
        <Fragment>
          <Container fluid className="contact-masthead">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.881660843388!2d3.3817129769831986!3d6.556935474121817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d7e0016f285%3A0x8d7bbd27a2060c4f!2sGbagada%2C%20Lagos!5e0!3m2!1sen!2sng!4v1596109204000!5m2!1sen!2sng"
              frameBorder="0"
              title="map"
              aria-hidden="false"
              className="map"
            />
          </Container>
          <Container>
            <Row>
              <div className="col-lg-8 col-md-10 mx-auto">
                <p>
                  Want to get in touch? Fill out the form below to send me a
                  message and I will get back to you as soon as possible!
                </p>
                <form onSubmit={() => {}}>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label htmlFor="Name">
                        Full Name
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          minLength="2"
                          onChange={(e) =>
                            setForm({
                              ...emailForm,
                              name: e.target.value.trim(),
                            })
                          }
                          required
                          data-validation-required-message="Please enter your name."
                        />
                      </label>
                      {errors && errors.name?.length > 1 ? (
                        <p className="help-block text-danger">{errors.name}</p>
                      ) : (
                        ""
                      )}
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
                          onChange={(e) =>
                            setForm({
                              ...emailForm,
                              email: e.target.value.trim(),
                            })
                          }
                          required
                          data-validation-required-message="Please enter your email address."
                        />
                      </label>
                      {errors && errors.email?.length > 1 ? (
                        <p className="help-block text-danger">{errors.email}</p>
                      ) : (
                        ""
                      )}
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
                          minLength="10"
                          maxLength="25"
                          onChange={(e) =>
                            setForm({
                              ...emailForm,
                              phone: e.target.value.trim(),
                            })
                          }
                          required
                          placeholder="e.g +234 801 751 9878"
                          data-validation-required-message="Please enter your phone number."
                        />
                      </label>
                      {errors && errors.phone?.length > 1 ? (
                        <p className="help-block text-danger">{errors.phone}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label htmlFor="Message">
                        Message
                        <textarea
                          rows="3"
                          className="form-control"
                          minLength="10"
                          maxLength="500"
                          id="msg"
                          onChange={(e) =>
                            setForm({
                              ...emailForm,
                              msg: e.target.value.trim(),
                            })
                          }
                          required
                          data-validation-required-message="Please enter a message."
                        />
                      </label>
                      {errors && errors.msg?.length > 1 ? (
                        <p className="help-block text-danger">{errors.msg}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label htmlFor="sum">
                        What is the sum of 45 and 6?
                        <input
                          type="number"
                          className="form-control"
                          id="sum"
                          onChange={(e) =>
                            setForm({
                              ...emailForm,
                              sum: Number(e.target.value),
                            })
                          }
                          required
                          data-validation-required-message="Please do the math."
                        />
                      </label>
                      {errors && errors.sum?.length > 1 ? (
                        <p className="help-block text-danger">{errors.sum}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <br />
                  <div id="success" />
                  <button
                    type="submit"
                    className="btn btn-secondary btn-xl"
                    id="sendMessageButton"
                    onClick={(e) => {
                      e.preventDefault();

                      const re =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                      if (emailForm.name.length < 2) {
                        setErrors({
                          ...errors,
                          name: "Name cannot be less than 2 characters...",
                        });
                      } else if (!re.test(emailForm.email)) {
                        setErrors({
                          ...errors,
                          name: "",
                          email: "Email is invalid...",
                        });
                      } else if (emailForm.phone.length < 10) {
                        setErrors({
                          ...errors,
                          email: "",
                          phone:
                            "Phone number cannot be less than 10 characters...",
                        });
                      } else if (
                        emailForm.msg.length < 10 ||
                        emailForm.msg.length > 500
                      ) {
                        setErrors({
                          ...errors,
                          phone: "",
                          msg: "Message must be greater than 10 and less than 500 characters...",
                        });
                      } else if (emailForm.sum !== 45 + 6) {
                        setErrors({
                          ...errors,
                          msg: "",
                          sum: "Please sum 45 and 6 correctly...",
                        });
                      } else {
                        setErrors({
                          name: "",
                          email: "",
                          message: "",
                          phone: "",
                          sum: "",
                        });
                        dispatch(post_contact(emailForm));
                      }
                    }}
                  >
                    Send
                  </button>
                </form>
              </div>
            </Row>
            <AppSocial {...props} />
          </Container>
          <hr />
        </Fragment>
      )}
      <AppFooter {...props} />
    </Fragment>
  );
};

export default Contact;
