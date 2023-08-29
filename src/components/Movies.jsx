import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  //todo: hover/sethover this is for emoji
  const [hovered, setHovered] = useState("");
  //todo: favourites(emoji related)
  const [favourites, setFavourites] = useState("");

  //!--------------------------------------

  //todo: making Api request
  useEffect(
    function () {
      (function () {
        axios
          .get(
            "https://api.themoviedb.org/3/trending/all/week?api_key=1b0169e8e65c49d31c1d7f8aa31db304&page=" +
              pageNum
          )
          .then((res) => {
            setMovies(res.data.results);
          });
      })();
    },
    [pageNum]
  );
  //!--------------------------------------

  // todo: pagination handler
  const previousPage = () => {
    if (pageNum >= 1) {
      setPageNum(pageNum - 1);
    }
  };

  // todo: pagination handler
  const nextPage = () => {
    setPageNum(pageNum + 1);
  };
  //!--------------------------------------

  //todo: emoji show
  const showEmoji = (id) => {
    setHovered(id);
  };
  //todo: emoji hide
  const hideEmoji = () => {
    setHovered("");
  };
  //!--------------------------------------
  //todo: adding || removing emojis to favourites
  const addEmoji = (id) => {
    const newFav = [...favourites, id];
    setFavourites(newFav);
  };

  const removeEmoji = (id) => {
    //* whichever element is !== my id will be removed
    const filteredFav = favourites.filter((ele) => {
      return ele !== id;
    });
    setFavourites(filteredFav);
  };

  //!--------------------------------------

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
              //movie card it includes-(poster,movieName,emoji(for adding to Favourites))
              <div
                onMouseOver={() => {
                  showEmoji(movie.id);
                }}
                onMouseLeave={() => {
                  hideEmoji(movie.id);
                }}
                key={movie.id}
                className="w-[160px] h-[30vh] md:h-[40vh] md:w-[180px] m-4 rounded-xl duration-300 hover:scale-110  bg-center bg-cover flex items-end relative"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path})`,
                }}
              >
                {/* emoji  */}
                <div
                  className="p-1 bg-gray-800 absolute top-2 right-2 rounded-full"
                  style={{ display: hovered === movie.id ? "block" : "none" }}
                >
                  {favourites.includes(movie.id) === false ? (
                    <div
                      className="text-2xl cursor-pointer "
                      onClick={() => {
                        addEmoji(movie.id);
                      }}
                    >
                      😍
                    </div>
                  ) : (
                    <div
                      className="text-2xl cursor-pointer"
                      onClick={() => {
                        removeEmoji(movie.id);
                      }}
                    >
                      ❌
                    </div>
                  )}
                </div>

                {/* movie name/title */}
                <div className="w-full p-2 text-xl text-center text-white uppercase bg-slate-800 bg-opacity-80 rounded-b-xl font-extralight">
                  {movie.title || movie.name}
                </div>
              </div>
            );
          })
        )}
      </div>
      <Pagination
        pageNum={pageNum}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default Movies;
