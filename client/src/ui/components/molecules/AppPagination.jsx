import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Col,
  Row,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";

const AppPagination = ({ postsPerPage, totalPosts, paginate, className, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Fragment>
      <Row>
        <Col lg="8" md="10" className="mx-auto">
          <Pagination size='sm' aria-label="Page navigation">
            {pageNumbers.map((pageNumber) => (
              <PaginationItem 
                key={uuidv4()}
                className={classnames({'active-page': pageNumber === currentPage})}
              >
                <PaginationLink
                  className={className}
                  onClick={() => paginate(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Fragment>
  );
};

AppPagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  className: PropTypes.string,
  paginate: PropTypes.func.isRequired,
};

AppPagination.defaultProps = {
  className: "",
};

export default AppPagination;
