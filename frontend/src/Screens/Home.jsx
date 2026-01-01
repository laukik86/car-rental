import React from 'react'
import 'tailwindcss'
import Navbar from '../Components/Navbar'
import Logo from '../assets/Logo.png'
import porche from '../assets/porche.jpg'
import porche2 from '../assets/porche-removebg-preview.png'
function Home() {
  return (
    <div className="bg-gradient-to-b from-[#E8E7EB] to-white h-screen">
      <Navbar></Navbar>
      <div className="h-40 w-130 ml-100">
        <div className="flex justify-center items-center h-screen">
          <img src= {porche2} alt="error loading image" />
        </div>
      </div>
      
    </div>
  )
}

export default Home
