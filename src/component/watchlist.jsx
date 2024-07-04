import React from "react";

const watchlist = () => {
  return (
    <>
      <div className="flex justify-center gap-2 my-3">
        <div className="rounded-xl text-white bg-blue-400 px-3 py-2">Action</div>
        <div className="rounded-xl text-white bg-gray-400 px-3 py-2">Action</div>
        <div className="rounded-xl text-white bg-gray-400 px-3 py-2">Action</div>
      </div>
      <div className="text-center ">
        <input
          className="rounded-lg bg-gray-400/50 text-black outline-none p-2 my-3 h-[2.5rem] w-[15rem]"
          placeholder="Search movies"
          type="text"
        />
      </div>

      <div>

        <table className="w-full border mt-3">

        <thead className="text-center border-b-2">
          <tr >
            <th className="">Poster</th>
            <th className="">Name</th>
            <th>Ratings</th>
            <th>Popular</th>
            <th>Genre</th>
          </tr>
        </thead>

        <tbody className="">
          <tr className="border-b-2 mb-5">
            <td className="w-[8rem] h-[18vh]">
              <img className=" h-full w-full p-2" src={"https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/blackkklansman2-web.jpg"} alt="" />
            </td>

            <td className=" text-center p-2  w-[30rem]">
              The Batman 
            </td>

            <td className="text-center p-2 w-[10rem]">
              8.9
            </td>

            <td className="text-center p-2 w-[10rem]">
              9
            </td>

            <td className="text-center p-2 w-[10rem]">
              Action
            </td>

            <td className="text-red-600 font-bold text-center p-2 w-[8rem]">
              Delete
            </td>
            
          </tr>
          
        </tbody>

        </table>

      </div>
    </>
  );
};

export default watchlist;
