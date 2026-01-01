import React, {useState} from 'react'
import Navbar from '../Components/Navbar'

function Login() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");
    setSuccess("");
       
    if(!email || !password) {
      setError("All credentials are necessary");
      return;
    }

    try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
        const data = await response.json();

        if(!response.ok)
        {
          setError(data.message || "Login Failed");
          return;
        }

        setSuccess("Login Successsful");
        setEmail("");
        setPassword("");
    } catch(err){
        setError("Server Error");
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='ml-158 mt-10'>Login</h1>
      <div className='bg-pink-300 h-100 w-90 ml-120 mt-10'>
        <form onSubmit={handleSubmit} className='text-black'>
         <input type="email" placeholder='Email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-70 h-12 mt-10 ml-10 border-4 border-pink-500 focus:outline-none rounded-md autofill: bg-pink-300'/>
          <input type="password" placeholder='Password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-70 h-12 mt-10 ml-10 border-4 border-pink-500 focus:outline-none rounded-md autofill: bg-pink-300'/>
          {error && (<p className='font-medium text-red-600 mt-3 ml-10'>{error}</p>)}
          {success && (<p className='font-medium text-green-600 mt-3ml-10'>{success}</p>)}
         <button type='submit' className='w-20 h-10 bg-violet-700 mt-5 ml-10 text-white rounded-md'>Login</button>
        </form>
        <a href='/register' className='hover:underline mt-3 ml-10 text-red-600'>Don't have an account sign up</a>
      </div>
    </div>
  )
}

export default Login
