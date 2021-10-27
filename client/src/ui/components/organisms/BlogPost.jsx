import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { Col, Badge, Tooltip, Container } from "reactstrap";
import PropTypes from "prop-types";
import { get_post } from "@domain/redux/actions/posts";
import { post_comment } from "@domain/redux/actions/comments";
import { get_clap_count, post_clap } from "@domain/redux/actions/postclaps";
import { get_view_count, post_view } from "@domain/redux/actions/postviews";
import { AppNavbar, AppFooter } from ".";
import AppLoader from "../molecules/AppLoader";

const BlogPost = (props) => {
  const {
    match: { params },
    history,
  } = props;
  const { id } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(post_view({ post: id, view: 1 }));
    dispatch(get_post(id));
    dispatch(get_view_count(id));
    dispatch(get_clap_count(id));
  }, [dispatch, id]);

  const { post, loading } = useSelector((state) => state.posts);
  const {
    postviews: { count: postviewcount },
    postclaps: { count: postclapcount },
  } = useSelector((state) => state);

  const [isCommentOpen, setCommentOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const [commentForm, setForm] = useState({
    name: "",
    email: "",
    body: "",
    sum: 0,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    body: "",
    sum: "",
  });

  const returnCommments = (post) => {
    const commentItems = post.comments.map((comment) => {
      if (comment.isapproved) {
        return (
          <Fragment key={comment._id}>
            <hr />
            <small>
              {comment.body}
              <i className="d-flex">~ {comment.name}</i>
            </small>
          </Fragment>
        );
      }
      return <Fragment />
    });

    if(commentItems<1){
      return <Fragment />;
    }

    return <Fragment>{commentItems}</Fragment>;
  }

  return (
    <Fragment>
      <AppNavbar showBand="true" {...props} />
      {loading ? (
        <AppLoader />
      ) : (
        <Container>
          {Object.keys(post).length > 0 ? (
            <article>
              <Col lg="8" md="10" className="mx-auto">
                <h2 className="section-heading mb-4">{post.title}</h2>

                <small>
                  <i className="far fa-eye fa-custom" alt="views" />{" "}
                  {postviewcount}
                </small>

                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.body}
                </ReactMarkdown>

                {post.metatags.map((metatag) => (
                  <Badge key={metatag._id} className="mr-2">
                    {metatag.name}
                  </Badge>
                ))}

                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.references}
                </ReactMarkdown>
                <Tooltip
                  placement="right"
                  isOpen={tooltipOpen}
                  target="ClapToolTip"
                  toggle={() => setTooltipOpen(!tooltipOpen)}
                >
                  Clap
                </Tooltip>
                <small
                  id="ClapToolTip"
                  onClick={() => dispatch(post_clap({ post: id, clap: 1 }))}
                  role="button"
                  onKeyPress={() => dispatch(post_clap({ post: id, clap: 1 }))}
                  tabIndex="0"
                >
                  <i className="fas fa-sign-language fa-custom" alt="claps" />{" "}
                  {postclapcount}
                </small>

                <small
                  onClick={() => setCommentOpen(!isCommentOpen)}
                  role="button"
                  onKeyPress={() => {}}
                  tabIndex="0"
                >
                  <i className="far fa-comment fa-custom ml-3" />{" "}
                  {(post.comments.filter(p=>p.isapproved)).length}
                </small>

                <div className="text-right mb-2">
                  <Link
                    to="#"
                    onClick={() => history.push("/blog")}
                    className="btn btn-xl"
                  >
                    &larr; Posts
                  </Link>
                </div>
                <div>
                  {isCommentOpen ? (
                    <form onSubmit={() => {}}>
                      <p className="my-4">Leave a comment</p>
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
                                  ...commentForm,
                                  name: e.target.value.trim(),
                                })
                              }
                              required
                              data-validation-required-message="Please enter your name."
                            />
                          </label>
                          {errors && errors.name?.length > 1 ? (
                            <p className="help-block text-danger">
                              {errors.name}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls">
                          <label htmlFor="Email Address">
                            Email Address(Your email will be hidden)
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              onChange={(e) =>
                                setForm({
                                  ...commentForm,
                                  email: e.target.value.trim(),
                                })
                              }
                              required
                              data-validation-required-message="Please enter your email address."
                            />
                          </label>
                          {errors && errors.email?.length > 1 ? (
                            <p className="help-block text-danger">
                              {errors.email}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls">
                          <label htmlFor="comment">
                            Comment
                            <textarea
                              rows="3"
                              className="form-control"
                              minLength="2"
                              maxLength="500"
                              id="comment"
                              onChange={(e) =>
                                setForm({
                                  ...commentForm,
                                  body: e.target.value.trim(),
                                })
                              }
                              required
                              data-validation-required-message="Please enter a comment."
                            />
                          </label>
                          {errors && errors.body?.length > 1 ? (
                            <p className="help-block text-danger">
                              {errors.body}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls">
                          <label htmlFor="sum">
                            What is the sum of 44 and 6?
                            <input
                              type="number"
                              className="form-control"
                              id="sum"
                              onChange={(e) =>
                                setForm({
                                  ...commentForm,
                                  sum: Number(e.target.value),
                                })
                              }
                              required
                              data-validation-required-message="Please do the math."
                            />
                          </label>
                          {errors && errors.sum?.length > 1 ? (
                            <p className="help-block text-danger">
                              {errors.sum}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <br />
                      <div id="success" className="d-block" />
                      <button
                        type="submit"
                        className="btn btn-secondary btn-xl"
                        id="sendCommentButton"
                        onClick={async (e) => {
                          e.preventDefault();

                          const re =
                            /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                          if (commentForm.name.length < 2) {
                            setErrors({
                              ...errors,
                              name: "Name cannot be less than 2 characters...",
                            });
                          } else if (!re.test(commentForm.email)) {
                            setErrors({
                              ...errors,
                              name: "",
                              email: "Email is invalid...",
                            });
                          } else if (
                            commentForm.body.length < 2 ||
                            commentForm.body.length > 500
                          ) {
                            setErrors({
                              ...errors,
                              body: "Comment must be greater than 2 and less than 500 characters...",
                            });
                          } else if (commentForm.sum !== 44 + 6) {
                            setErrors({
                              ...errors,
                              body: "",
                              sum: "Please sum 44 and 6 correctly...",
                            });
                          } else {
                            setErrors({
                              name: "",
                              email: "",
                              body: "",
                              sum: "",
                            });
                            dispatch(
                              post_comment({ ...commentForm, post: id })
                            );
                            setCommentOpen(!isCommentOpen);
                          }
                        }}
                      >
                        Save
                      </button>
                    </form>
                  ) : (
                    <Fragment />
                  )}

                  {
                    returnCommments(post)
                  }
                </div>
              </Col>
            </article>
          ) : (
            <Fragment />
          )}
        </Container>
      )}
      <AppFooter {...props} />
    </Fragment>
  );
};

BlogPost.propTypes = {
  match: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
};

export default BlogPost;
