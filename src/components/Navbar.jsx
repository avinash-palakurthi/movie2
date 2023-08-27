// import React from 'react'
import logo from "../assets/download.png";

const Navbar = () => {
  return (
    <div className="flex px-8 py-3  border top-0 sticky bg-white bg-opacity-90 ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="px-9 flex items-center justify-center ">
        <h2 className="px-8 text-blue-400 font-semibold text-2xl cursor-pointer">
          Movies
        </h2>
        <h2 className="px-8 text-blue-400 font-semibold text-2xl cursor-pointer">
          Favourites
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
