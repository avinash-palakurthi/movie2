import { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const Banner = () => {
  let [bannerMovie, setBannerMovie] = useState("");

  useEffect(function () {
    (function () {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/all/week?api_key=1b0169e8e65c49d31c1d7f8aa31db304&page=5"
        )
        .then((res) => {
          console.table(res.data);
          setBannerMovie(res.data.results[0]);
        });
    })();
  }, []);
  return (
    <>
      {bannerMovie === "" ? (
        <div className="flex justify-center">
          <Oval
            height="80"
            width="80"
            radius="9"
            color="gray"
            secondaryColor="gray"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <div
          className={`h-[50vh] sm:h-[90vh] lg:h-[100vh] bg-center bg-cover flex items-end`}
          style={{
            backgroundImage: `url(
https://image.tmdb.org/t/p/original/t/p/original/${bannerMovie.backdrop_path})`,
          }}
        >
          <div className="text-xl md:text-3xl text-white bg-gray-900 bg-opacity-60 p-4 text-center w-full">
            {bannerMovie.title || bannerMovie.name}
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
