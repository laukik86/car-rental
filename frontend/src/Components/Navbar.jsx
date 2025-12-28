import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const navLinkStyle = ({ isActive }) => {
        
        return isActive
        ? 'text-yellow-400 font-bold text-decoration-line: underline'
        : 'text-yellow-100';
    };
    
  return (
    <div className='bg-zinc-900 h-25 text-white'>
    <nav>
    <ul className='flex gap-x-15'> 
        <li className='mt-10'><NavLink to="/" end className= {navLinkStyle}>Home</NavLink> </li>
        <li className='mt-10'><NavLink to="/book" className={navLinkStyle}>Book</NavLink></li>
        <li className='mt-10'><NavLink to="/customer" className={navLinkStyle}>Customer Care</NavLink></li>
        <li className='ml-220 mt-10'><NavLink to="/login" className={navLinkStyle}>Login</NavLink></li>
    </ul>
    </nav>
    </div>
  )
}

export default Navbar
