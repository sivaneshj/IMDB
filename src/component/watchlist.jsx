import React, { useState } from "react";

const watchlist = ({ wathlistmovies,addwm }) => {

  var [search,addsearch] = useState('');
function deletemovie(movieObj){
  let movielist = wathlistmovies.filter((x)=>{
    return x.id != movieObj.id;
  });
  localStorage.setItem("moviesdata",JSON.stringify(movielist));
  addwm(movielist);
}

  function handlesearch(e){
    addsearch(e.target.value);
  }
  return (
      <div className="bg-gray-900 h-[86vh]">
      <div className="flex  justify-center gap-2 py-4">
        <div className="rounded-xl text-white bg-blue-400 px-3 py-2">
          Action
        </div>
        <div className="rounded-xl text-white bg-gray-400 px-3 py-2">
          Action
        </div>
        <div className="rounded-xl text-white bg-gray-400 px-3 py-2">
          Action
        </div>
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
        <table className="w-full border-gray-400  mt-3">
          <thead className="text-center text-white border-2">
            <tr>
              <th className="">Poster</th>
              <th className="">Name</th>
              <th>Ratings</th>
              <th>Popular</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody className="text-white border-2 ">
            {wathlistmovies.filter((movieObj)=>{
              return movieObj.original_title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj) => {
              console.log(movieObj);
              return (
                <>
                  <tr className="border-b-2 mb-5">
                    <td className="w-[8rem] h-[18vh]">
                      <img
                        className=" h-full w-full p-2"
                        src={
                          `https://image.tmdb.org/t/p/original${movieObj.poster_path}`
                        }
                        alt=""
                      />
                    </td>

                    <td className=" text-center p-2  w-[30rem]">{movieObj.original_title}</td>

                    <td className="text-center p-2 w-[10rem]">{movieObj.vote_average}</td>

                    <td className="text-center p-2 w-[10rem]">{movieObj.vote_count}</td>

                    <td className="text-center p-2 w-[10rem]">Action</td>

                    <td className="w-[8rem] text-center">
                      
                      <h2 onClick={()=>deletemovie(movieObj)} className="text-red-600 hover:cursor-pointer font-bold  p-2">Delete</h2>
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
