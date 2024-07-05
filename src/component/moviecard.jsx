import React from "react";

const moviecard = ({moviesObj,addtowatch,name,path,deletemovie,watchlistmovies}) => {

  function doescon(moviesObj){
    let val = false;
    for(let i=0; i<watchlistmovies.length;i++){
      if(moviesObj.id == watchlistmovies[i].id){
        val = true;
      }

    }
    return val;
    
  }
  return (
    <div
      className="h-[50vh] w-[200px] bg-center flex flex-col justify-between my-2 rounded-xl hover:scale-110 duration:300 hover:cursor-pointer bg-cover"
      style={{
        backgroundImage:
          `url(https://image.tmdb.org/t/p/original/${path})`,
      }}
    > 
    {doescon(moviesObj) ==true? 
    <div onClick={()=>deletemovie(moviesObj)} className="bg-gray-900/60  self-end rounded-lg text-center m-3 h-8 w-8">
    ❌
  </div>
    : 
    <div onClick={()=>(addtowatch(moviesObj))} className="bg-gray-900/60  self-end rounded-lg text-center m-3 h-8 w-8">
    &#128525;
    </div>
     }
    <div className="w-full text-center p-3 text-white bg-gray-900/60 ">{name}</div>
    </div>
  );
};

export default moviecard;
