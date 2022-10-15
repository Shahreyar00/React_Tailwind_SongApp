import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    };

    return (
       <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
            <label htmlFor="search-field" className="sr-only">Search all files</label>
            <div className="flex flex-row justify-start items-center">
                <FiSearch  aria-hidden="true" className="w-5 h-5 ml-4" />
                <input 
                    type="search" 
                    autoComplete="off"
                    name="search-field"
                    id="search-field" 
                    className="flex-1 shadow-md shadow-blue-700 rounded-xl bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4 ml-2 mr-2"    
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
            </div>
       </form>
    )
}

export default Searchbar