import { useEffect, useState } from "react";
import axios from "axios";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(function () {
    (function () {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/all/week?api_key=1b0169e8e65c49d31c1d7f8aa31db304&page=3"
        )
        .then((res) => {
          console.table(res.data);
          setMovies(res.data.results);
        });
    })();
  }, []);
  return (
    <div className="mt-10 ">
      <div className="mb-5 text-3xl font-semibold text-center capitalize">
        trending movies
      </div>
      <div className="flex flex-wrap justify-center ">
        {movies.length === 0 ? (
          <h1>Loading.....</h1>
        ) : (
          movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className="w-[160px] h-[30vh] md:h-[40vh] md:w-[180px] m-4 rounded-xl duration-300 hover:scale-110  bg-center bg-cover flex items-end"
                style={{
                  backgroundImage: `url(
https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path})`,
                }}
              >
                <div className="w-full p-2 text-xl text-center text-white uppercase bg-slate-800 bg-opacity-80 rounded-b-xl font-extralight">
                  {movie.title || movie.name}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Movies;
