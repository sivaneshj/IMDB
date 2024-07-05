import React from 'react'
import movielogo from "../walt.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex pl-5 bg-gray-900 h-[14vh] border-gray-900 border-2 py-3 items-center space-x-8'>
        <img className='w-24' src={movielogo} alt="" />
        <Link to="/" className='text-xl text-blue-500 font-bold'>Movies</Link>
        <Link to="/watchlist" className='text-xl text-blue-500 font-bold'>WatchList</Link>
    </div>
  )
}

export default Navbar