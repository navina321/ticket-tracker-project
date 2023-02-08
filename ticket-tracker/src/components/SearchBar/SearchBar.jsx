import React from 'react'
import { useState } from 'react'
import './SearchBar.scss'
import team from '../../data/team.js'

const SearchBar = () => {
    
    const [searchInput, setSearchInput] = useState("");
    
    const handleInput = (e) => {
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        team.filter((member) => {
            return member.name.match(searchInput);
        });
    };
  
    return (
    <div className='search-bar'>
        <input type="text" placeholder='Search' onInput={handleInput} value={searchInput}/>
    </div>
  )
}

export default SearchBar