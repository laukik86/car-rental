import { useEffect } from "react";
import Home from "./Screens/Home";
import Book from "./Screens/Book";
import Customer from "./Screens/Customer";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then(res => res.text())
      .then(data => console.log("Backend says:", data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div> 
    <BrowserRouter>
    <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/book" element = {<Book />} />
        <Route path="/customer" element = {<Customer />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
