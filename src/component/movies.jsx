import React, { useState } from "react";
import Moviecard from "./moviecard";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./pagination";

const movies = ({addtowatch ,watchlistmovies,deletemovie}) => {
  const [pageNo, set] = useState(1);
  var [movies, database] = useState([]);

  function movefor() {
    set(pageNo + 1);
  }

  function moveback() {
    if (pageNo === 1) {
      return set(pageNo);
    }
    return set(pageNo - 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=46ee8f3803088a4cf97cd6a5697f02da&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        database(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="bg-gray-900">
      <div className="text-center text-blue-500 py-5 text-xl font-bold">Trending Movies</div>
      <div className="flex justify-around gap-3 mb-4  flex-wrap">
        {movies.map((moviesObj) => {
          
          return (
            <Moviecard
            moviesObj={moviesObj}
            watchlistmovies={watchlistmovies}
            deletemovie={deletemovie}
            addtowatch={addtowatch}
              key={moviesObj.original_title}
              name={moviesObj.original_title}
              path={moviesObj.poster_path}
            />
          );
        })}
      </div>
      <Pagination backward={moveback} forward={movefor} page={pageNo} />
    </div>
  );
};

export default movies;
