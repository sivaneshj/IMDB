import React from "react";

const moviecard = () => {
  return (
    <div
      className="h-[50vh] w-[200px] my-3 bg-center rounded-xl hover:scale-110 duration:300 hover:cursor-pointer bg-cover"
      style={{
        backgroundImage:
          "url(https://www.themoviedb.org/t/p/original/ih64em743HBjcYIJXXZ5fZu4Qr1.jpg)",
      }}
    ></div>
  );
};

export default moviecard;
