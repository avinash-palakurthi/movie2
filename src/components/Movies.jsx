// import React from 'react'
import sampleImage from "../assets/sampleCard.jpg";
const Movies = () => {
  return (
    <div className="mt-10 ">
      <h2 className="text-3xl font-semibold capitalize mb-5 text-center">
        trending movies
      </h2>
      <div className=" flex justify-center flex-wrap ">
        <img
          className="m-6 hover:scale-110 duration-300 rounded-xl"
          src={sampleImage}
          alt=""
        />
        <img
          className=" m-6 hover:scale-110 duration-300 rounded-xl"
          src={sampleImage}
          alt=""
        />
        <img
          className="m-6 hover:scale-110 duration-300 rounded-xl"
          src={sampleImage}
          alt=""
        />
        <img
          className="m-6 hover:scale-110 duration-300 rounded-xl"
          src={sampleImage}
          alt=""
        />
        <img
          className="m-6 hover:scale-110 duration-300 rounded-xl"
          src={sampleImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Movies;
