import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import CarCard from "../Components/CarCard";
import { getAvailableCars } from "../api/car.js";
export default function Book() {
  const[cars, setCars]=useState([]);
      const[loading, setLoading]=useState(false);
      const [error, setError]=useState("");
  
      const handleSearch = async(filters)=>{
          try{
              setLoading(true);
              setError("");
              const data = await getAvailableCars(filters);
              setCars(data);
          }catch(err){
              setError(err.message);
          }finally{
              setLoading(false);
          }
      };
  
  return (
    <div className="max-w-6xl mx-auto p-6">
          <SearchBar onSearch={handleSearch} />
    
          {loading && <p className="mt-6">Loading...</p>}
          {error && <p className="mt-6 text-red-500">{error}</p>}
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {cars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        </div>
  )
}

// /book page jaha search bar aur available cars dikhengi