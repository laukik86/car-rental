import React, {useState} from 'react'
import Navbar from '../Components/Navbar'

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (e) =>{

    e.preventDefault();
    setError("");
    setSuccess("");

    if(!name || !email || !password || !confirmPassword) {
        setError("All Fields are required");
        return;
    }

    if(password !== confirmPassword){
        setError("Passwords do not match");
        return;
    }
    
    try{
        const response = await fetch(`import.meta.env.VITE_API_URL/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });
            const data = await response.json();

      if(!response.ok){
        setError(data.message || "Registration Failed");
        return;
      }
      setSuccess("Account Created Successfully");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }catch(err){
        setError("Server Error, Please try again");
    }
    };
  return (
    <div>
    <Navbar></Navbar>
    <div className='bg-gray-300 h-110 w-90 ml-120 mt-10 rounded-md'>
        <form onSubmit={handleRegister} className='text-black'>
         <input type="text" placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)} className='w-70 h-12 mt-10 ml-10 border-4 border-blue-500 focus:outline-none rounded-md'/>
          <input type="text" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-70 h-12 mt-7 ml-10 border-4 border-blue-500 focus:outline-none rounded-md'/>
          <input type="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-70 h-12 mt-7 ml-10 border-4 border-blue-500 focus:outline-none rounded-md'/>
          <input type="password" placeholder='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='w-70 h-12 mt-7 ml-10 border-4 border-blue-500 focus:outline-none rounded-md'/>
           {error && (
            <p className="ml-10 mt-3 text-red-600 font-medium">
              {error}
            </p>
          )}

          {success && (
            <p className="ml-10 mt-3 text-green-600 font-medium">
              {success}
            </p>
          )}
         <button type='submit' className='w-30 h-10 bg-violet-700 mt-5 ml-10 text-white rounded-md'>Create Account</button>
        </form>
    </div>
    </div>
  )
}

export default Register
