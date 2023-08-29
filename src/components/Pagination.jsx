// import { useState } from "react";

const Pagination = (props) => {
  let { pageNum, previousPage, nextPage } = props;
  return (
    <div className="flex justify-center pb-4 my-4 ">
      <div
        className="border-2 border-r-0 rounded-l-xl p-2 border-blue-600 capitalize font-semibold cursor-pointer"
        onClick={previousPage}
      >
        previous
      </div>
      <div className="border p-2 border-blue-600 bg-slate-400">{pageNum}</div>
      <div
        className="capitalize font-semibold border-2 border-l-0 p-2 border-blue-600 rounded-r-xl cursor-pointer"
        onClick={nextPage}
      >
        next
      </div>
    </div>
  );
};

export default Pagination;
