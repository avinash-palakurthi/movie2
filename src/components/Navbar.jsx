// import React from 'react'
import logo from "../assets/download.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" flex px-8 py-3  border  bg-white  ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="px-2 flex items-center justify-center ">
        <Link
          to="/"
          className="px-3 text-blue-400 font-semibold text-2xl cursor-pointer"
        >
          Movies
        </Link>
        <Link
          to="/fav"
          className="px-3 text-blue-400 font-semibold text-2xl cursor-pointer"
        >
          Favourites
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
