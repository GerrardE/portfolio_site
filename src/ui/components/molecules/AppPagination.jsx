import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

const AppPagination = ({ postsPerPage, totalPosts, paginate, className }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Row>
      <Pagination aria-label="Page navigation">
        {pageNumbers.map((pageNumber) => (
          <PaginationItem key={uuidv4()}>
            <PaginationLink className={`'page-link' ${className}`} onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
    </Row>
  )
}

AppPagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  className: PropTypes.string,
  paginate: PropTypes.func.isRequired
}

AppPagination.defaultProps = {
  className: ''
}

export default AppPagination;
