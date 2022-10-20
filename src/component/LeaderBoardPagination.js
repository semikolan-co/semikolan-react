import React, { useState } from 'react';

import Pagination from 'react-responsive-pagination';

const LeaderBoardPagination = ({totalPages, resultsPerPage, setCurrentPage, currentPage}) => {
 
  return (
    <div className="mt-5 leader_board_pagination">
      <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default LeaderBoardPagination;
