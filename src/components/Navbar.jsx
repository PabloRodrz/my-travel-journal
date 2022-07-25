import React from 'react'
import world from '../images/Fill-213.png'
function Navbar() {
  return (
      <nav className="navbar-container">
        <img className='world-img' src={world} alt="world" />
        <span> My travel journal. </span>
      </nav>
  )
}

export default Navbar