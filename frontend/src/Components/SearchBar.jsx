import {useState} from "react";

export default function SearchBar({onSearch}) {
    const[location, setLocation]=useState("");
    const[startDate, setStartDate]=useState("");
    const[endDate, setEndDate]=useState("");
    
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(!location || !startDate || !endDate){
            alert("Please fill all fields");
            return;
        }
        onSearch({location, startDate, endDate});
    };

    return (
        <form
            onSubmit={handlesubmit}
            className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row gap-4"
        >
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e)=> setLocation(e.target.value)}
                className="border p-2 rounded w-full"
            />
            <input
                type="date"
                value={startDate}
                onChange={(e)=> setStartDate(e.target.value)}
                className="border p-2 rounded w-full"
            />  
            <input
                type="date"
                value={endDate}
                onChange={(e)=> setEndDate(e.target.value)}
                className="border p-2 rounded w-full"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded w-full md:w-auto"
            >
                Search
            </button>

        </form>
    );
}
