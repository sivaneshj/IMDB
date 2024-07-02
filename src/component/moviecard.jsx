import React from "react";

const moviecard = ({path,name}) => {
  return (
    <div
      className="h-[50vh] w-[200px] bg-center flex items-end my-2 rounded-xl hover:scale-110 duration:300 hover:cursor-pointer bg-cover"
      style={{
        backgroundImage:
          `url(https://image.tmdb.org/t/p/original/${path})`,
      }}
    > 
    <div className="w-full text-center p-3 text-white bg-gray-900/60 ">{name}</div>
    </div>
  );
};

export default moviecard;
