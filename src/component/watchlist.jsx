import React, { useState, useEffect } from "react";
import Data from "./data/data.js";

const watchlist = ({ wathlistmovies, addwm ,deletemovie}) => {
  var [search, addsearch] = useState("");
  var [genre, addgenre] = useState(["All Genres"]);
  var [currentgenre, now] = useState("All Genres");

  useEffect(() => {
    let temp = wathlistmovies.map((movieobj) => {
      return Data[movieobj.genre_ids[0]];
    });
    let freshtemp = [...new Set(temp)];
    addgenre(["All Genres", ...freshtemp]);
  }, [wathlistmovies]);

  function highlight(genre) {
    now(genre);
  }

  function ascend() {
    let descen = wathlistmovies.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    addwm([...descen]);
  }

  function descend() {
    let ascen = wathlistmovies.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    addwm([...ascen]);
  }
  function normal() {
    let defaults = JSON.parse(localStorage.getItem("moviesdata"));
    addwm([...defaults]);
  }

  function handlesearch(e) {
    addsearch(e.target.value);
  }
  return (
    <div className="bg-gray-900 h-[86vh]">
      <div className="flex  justify-center gap-2 py-4">
        {genre.map((x) => {
          return (
            <div
              key={x}
              onClick={() => highlight(x)}
              className={
                currentgenre == x
                  ? "rounded-xl hover:cursor-pointer text-white bg-blue-400 px-3 py-2"
                  : "rounded-xl hover:cursor-pointer text-white bg-gray-400 px-3 py-2"
              }
            >
              {x}
            </div>
          );
        })}
      </div>
      <div className="text-center ">
        <input
          onChange={handlesearch}
          value={search}
          className="rounded-lg bg-gray-400/50 text-white outline-none p-2 my-3 h-[2.5rem] w-[15rem]"
          placeholder="Search movies"
          type="text"
        />
      </div>

      <div>
        <table className="w-full border-gray-400 bg-gray-900 mt-3">
          <thead className="text-center text-white border-2">
            <tr className="">
              <th className="">Poster</th>
              <th className="">Name</th>
              <th>
                <div className="flex py-3 items-center justify-center gap-2  text-white-900">
                  <div className="hover:cursor-pointer" onClick={ascend}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                      />
                    </svg>
                  </div>
                  <div className="hover:cursor-pointer" onClick={normal}>
                    Ratings
                  </div>
                  <div className="hover:cursor-pointer" onClick={descend}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                      />
                    </svg>
                  </div>
                </div>
              </th>
              <th>Popular</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody className="text-white border-2">
            {wathlistmovies
              .filter((x) => {
                if (currentgenre == "All Genres") {
                  return true;
                }
                return Data[x.genre_ids[0]]
                  .toLowerCase()
                  .includes(currentgenre.toLocaleLowerCase());
              })
              .filter((movieObj) => { 
               return movieObj.original_title.toLowerCase().includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <>
                    <tr className="border-b-2 mb-5">
                      <td className="w-[8rem] h-[18vh]">
                        <img
                          className=" h-full w-full p-2"
                          src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                          alt=""
                        />
                      </td>

                      <td className=" text-center p-2  w-[30rem]">
                        {movieObj.original_title}
                      </td>

                      <td className="text-center p-2 w-[10rem]">
                        {movieObj.vote_average}
                      </td>

                      <td className="text-center p-2 w-[10rem]">
                        {movieObj.vote_count}
                      </td>

                      <td className="text-center p-2 w-[10rem]">
                        {Data[movieObj.genre_ids[0]]}
                      </td>

                      <td className="w-[8rem] h-[18vh] text-center  justify-center">
                        <div className="h-full flex justify-center items-center">
                          <h2
                            onClick={() => deletemovie(movieObj)}
                            className="text-white bg-red-600 w-[5rem]  hover:cursor-pointer hover:bg-blue-400 font-bold rounded-lg  py-1"
                          >
                            Delete
                          </h2>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default watchlist;
