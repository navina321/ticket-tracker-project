import React from 'react'
import { useState } from 'react'
import './SearchBar.scss'
import team from '../../data/team.js'
import CardContainer from '../CardContainer/CardContainer'

const SearchBar = () => {
    
    const [searchInput, setSearchInput] = useState("");
    
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
        const filteredTeam = team.filter(member => {
            if(member.name.toLowerCase().includes(searchInput)){
                return true;
            } else {
                return false
            }
        })
        return CardContainer(filteredTeam)
    };
  
    return (
    <div className='search-bar'>
        <input type="text" placeholder='Search' onInput={handleSearch} value={searchInput}/>
    </div>
  )
}

export default SearchBar