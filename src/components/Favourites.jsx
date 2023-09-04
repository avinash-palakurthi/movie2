import Pagination from "./Pagination";
const Favourites = () => {
  let movies = [
    {
      movieName: "Akanada",
      id: 1,
      rating: 5.9,
      genre: "Action",
      popularity: 6,
      genreID: 1,
    },
    {
      movieName: "Project-K",
      id: 2,
      rating: 4.6,
      genre: "Sci-Fi",
      popularity: 10,
      genreID: 2,
    },
    {
      movieName: "jailer",
      id: 3,
      rating: 8.3,
      genre: "Action",
      popularity: 7,
      genreID: 1,
    },
    {
      movieName: "dune",
      id: 4,
      rating: 6.3,
      genre: "Sci-Fi",
      popularity: 6,
      genreID: 2,
    },
  ];
  return (
    <div>
      <div className=" flex  justify-center">
        <button className="px-9 m-5 bg-blue-200  rounded-xl hover:bg-blue-400 cursor-pointer text-[1.2rem]">
          AllGeners
        </button>
        <button className="px-9 m-5 bg-blue-200  rounded-xl hover:bg-blue-400 cursor-pointer text-[1.2rem]">
          Sci-Fi
        </button>
        <button className="px-9 m-5 bg-blue-200 rounded-xl hover:bg-blue-400 cursor-pointer text-[1.2rem]">
          Action
        </button>
      </div>
      <div className="flex justify-center items-center border-b-2 border-gray-300  mb-1">
        <input
          type="text"
          placeholder="search"
          className="bg-blue-200 p-1  rounded-xl text-center hover:bg-blue-400 cursor-pointer"
        />
        <input
          type="number"
          placeholder="num"
          className="bg-blue-200 p-1  rounded-xl mx-4  text-center hover:bg-blue-400 cursor-pointer"
          value={1}
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900 flex"
              >
                <div className="flex">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                    className="mr-2 cursor-pointer"
                  ></img>
                  <div>Rating</div>
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    className="ml-2 mr-2"
                  ></img>
                </div>
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <div className="flex">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                    className="mr-2 cursor-pointer"
                  ></img>
                  <div>Popularity</div>
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    className="ml-2 mr-2"
                  ></img>
                </div>
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Genre
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Remove
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {movies.map((movie) => {
              console.log(movies);
              return (
                <tr className="hover:bg-gray-50" key={movie.id}>
                  <th className="flex  items-center  px-6 py-4 font-normal text-gray-900">
                    <img
                      className="h-[6rem] w-[12rem]  object-cover object-center object-fit pr-5"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />

                    <div className="font-medium text-gray-700 ">
                      {movie.movieName}
                    </div>
                  </th>
                  <td className="px-6 py-4 pl-[4rem]">{movie.rating}</td>
                  <td className="px-6 py-4 pl-[5rem]"> {movie.popularity} </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-600 ">
                        {movie.genre}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600 ">
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

// component
// function DataTable() {
//   return (

//   );
// }

export default Favourites;
