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

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>

      <Route path='/' element={<><Banner/><Movies/></>}/>

      <Route path='/watchlist' element={<Watchlist/>}/>

     </Routes>

     </BrowserRouter>
     
    </>
  )
}

export default App
