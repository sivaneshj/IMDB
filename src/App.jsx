import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./component/Navbar"
import Watchlist from './component/watchlist'
import Movies from './component/movies'
import Banner from "./component/banner"
function App() {
  var [wathlistmovies,addwm] = useState([])
  
  var addtowatch=(movobj)=>{
    if(wathlistmovies.indexOf(movobj) == -1){
      let totalmov = [...wathlistmovies,movobj];
      addwm([...new Set(totalmov)]);
    }

    
  }
  console.log(wathlistmovies);

  var deletemovie=(movdel)=>{
    addwm(wathlistmovies.filter((x)=>{
      return x.id != movdel.id;
    }));
  }

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>

      <Route path='/' element={<><Banner/><Movies deletemovie={deletemovie} watchlistmovies={wathlistmovies} addtowatch={addtowatch}/></>}/>

      <Route path='/watchlist' element={<Watchlist wathlistmovies={wathlistmovies}/>}/>

     </Routes>

     </BrowserRouter>
     
    </>
  )
}

export default App
