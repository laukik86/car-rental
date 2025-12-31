const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getAvailableCars = async({location, startDate,endDate})=>{
    const query = new URLSearchParams({
        location,
        startDate,
        endDate,
    }).toString();

    const res = await fetch(`${BASE_URL}/api/cars/available?${query}`);
    if(!res.ok){
        throw new Error("Failed to fetch available cars");
    }
    return res.json();
};


//api calls idhar rakhhe
