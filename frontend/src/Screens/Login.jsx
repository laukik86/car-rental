import React from 'react'
import Navbar from '../Components/Navbar'

function Login() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='ml-158 mt-10'>Login</h1>
      <div className='bg-pink-300 h-100 w-90 ml-120 mt-10'>
        <form action="/login" method='post' className='text-black'>
         <input type="text" placeholder='Username' name='username' className='w-70 h-12 mt-10 ml-10 border-4 border-pink-500 focus:outline-none rounded-md autofill: bg-pink-300'/>
          <input type="text" placeholder='Password' name='password' className='w-70 h-12 mt-10 ml-10 border-4 border-pink-500 focus:outline-none rounded-md autofill: bg-pink-300'/>
         <button className='w-20 h-10 bg-violet-700 mt-5 ml-10 text-white rounded-md'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
