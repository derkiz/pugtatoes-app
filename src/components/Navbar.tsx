import React from 'react'
import './nav.css'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="mobile-menu-icon">
          <img className="list-svg" src="static/list.svg" alt="menu icon"></img>
        </div>
        <a href="/"><img className='logo' src="static/pugtatoes-logo.svg"></img></a>
        <ul>
          <li className="menu-item">Catalogue</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Contact</li>
        </ul>
        <div className="mobile-menu-icon-2">
          <img className="search-svg" src="static/search.svg" alt="menu icon"></img>
          <img className="cart-svg" src="static/cart.svg" alt="menu icon"></img>
        </div>
      </div>
    </>
  )
}

export default Navbar