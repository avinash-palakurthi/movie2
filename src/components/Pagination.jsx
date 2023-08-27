// import React from 'react'

const Pagination = () => {
  return (
    <div className="flex justify-center pb-4 my-4 ">
      <div className="border-2 border-r-0 rounded-l-xl p-2 border-blue-600 capitalize font-semibold">
        previous
      </div>
      <div className="border p-2 border-blue-600 bg-slate-400">1</div>
      <div className="capitalize font-semibold border-2 border-l-0 p-2 border-blue-600 rounded-r-xl">
        next
      </div>
    </div>
  );
};

export default Pagination;
