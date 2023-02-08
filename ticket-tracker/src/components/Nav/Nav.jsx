import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

import './Nav.scss'

const Nav = () => {
   
    return (
    <div className='nav-bar'>
        <SearchBar className='nav-bar__search'/>
    </div>
  )
}

export default Nav