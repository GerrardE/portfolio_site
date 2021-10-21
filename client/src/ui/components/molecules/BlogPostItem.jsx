import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Col, Badge, Tooltip } from "reactstrap";

const BlogPostItem = ({ post }) => {
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

  if (Object.keys(post).length > 0) {
    return (
      <article>
        <Col lg="8" md="10" className="mx-auto">
          <h2 className="section-heading mb-4">{post.title}</h2>

          <small>
            <i className="far fa-eye fa-custom" alt="views" /> 11{" "}
          </small>

          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>

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
          <small id="ClapToolTip">
            <i className="fas fa-sign-language fa-custom" alt="claps" /> 200
          </small>

          <small onClick={() => setCommentOpen(!isCommentOpen)} role='button' onKeyPress={()=>{}} tabIndex="0">
            <i className="far fa-comment fa-custom ml-3" /> 1
          </small>

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
                      <p className="help-block text-danger">{errors.name}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="Email Address">
                      Email Address(not to displayed)
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
                      <p className="help-block text-danger">{errors.email}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="Message">
                      Comment
                      <textarea
                        rows="3"
                        className="form-control"
                        minLength="2"
                        maxLength="500"
                        id="msg"
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
                  id="sendCommentButton"
                  onClick={(e) => {
                    e.preventDefault();

                    const re =
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
                      commentForm.msg.length < 2 ||
                      commentForm.msg.length > 500
                    ) {
                      setErrors({
                        ...errors,
                        body: "Message must be greater than 2 and less than 500 characters...",
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
                      // dispatch(post_comment(commentForm));
                    }
                  }}
                >
                  Save
                </button>
              </form>
            ) : (
              <Fragment />
            )}
          </div>
        </Col>
      </article>
    );
  }
  return <Fragment />;
};

BlogPostItem.propTypes = {
  post: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
};

export default BlogPostItem;
