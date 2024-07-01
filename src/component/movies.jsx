import React from "react";
import Moviecard from "./moviecard";
const movies = () => {
  return (
    <div>
      <div className="text-center py-5 text-xl font-bold">Trending Movies</div>
      <div className="flex justify-around mb-3  flex-wrap">
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
      </div>
    </div>
  );
};

export default movies;
