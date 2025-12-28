import React from 'react'
import 'tailwindcss'
import Navbar from '../Components/Navbar'
import Logo from '../assets/Logo.png'
function Home() {
  return (
    <div className='bg-zinc-300 h-screen text-white'>
      <Navbar></Navbar>
      <div className="h-40 w-130 ml-100">
        <img src= {Logo} alt="error loading image" />
      </div>
      
    </div>
  )
}

export default Home
