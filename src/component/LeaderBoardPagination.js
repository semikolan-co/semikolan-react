import { paginationItemClasses } from '@mui/material';
import React, { useState } from 'react';
import './Pagination.css';

import Pagination from 'react-responsive-pagination';

const LeaderBoardPagination = ({totalPages, paginate, currentPage}) => {
  return (
    <div className="mt-5 leader_board_pagination">
      <Pagination current={currentPage} total={totalPages} onPageChange={page => paginate(page)} />
    </div>
  );
};

export default LeaderBoardPagination;
