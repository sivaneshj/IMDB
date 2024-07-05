import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./component/Navbar"
import Watchlist from './component/watchlist'
import Movies from './component/movies'
import Banner from "./component/banner"
function App() {
  var [wathlistmovies,addwm] =  useState([]);
  
  var addtowatch=(movobj)=>{
    if(wathlistmovies.indexOf(movobj) == -1){
      let totalmov = [...wathlistmovies,movobj];
      localStorage.setItem("moviesdata",JSON.stringify(totalmov));
      addwm([...new Set(totalmov)]);
    }

    
  }
  console.log(wathlistmovies);

  var deletemovie=(movdel)=>{
    var remin = wathlistmovies.filter((x)=>{
      return x.id != movdel.id;
    });
    localStorage.setItem("moviesdata",JSON.stringify(remin));
    addwm(remin);
  }

  useEffect(()=>{
    let storage = JSON.parse(localStorage.getItem("moviesdata"));
    addwm(storage);
  },[])

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>

      <Route path='/' element={<><Banner/><Movies deletemovie={deletemovie} watchlistmovies={wathlistmovies} addtowatch={addtowatch}/></>}/>

      <Route path='/watchlist' element={<Watchlist addwm={addwm} wathlistmovies={wathlistmovies}/>}/>

     </Routes>

     </BrowserRouter>
     
    </>
  )
}

export default App
