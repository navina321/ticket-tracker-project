import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

import './Nav.scss'

const Nav = (props) => {
   const {handleSearch} = props

    return (
    <div className='nav-bar'>
        <SearchBar className='nav-bar__search' handleSearch={handleSearch}/>
    </div>
  )
}

export default Nav