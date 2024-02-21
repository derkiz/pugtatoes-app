import React from 'react'
import './nav.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='nav'>
        <div className="nav-container">
          <div className="mobile-menu-icon">
            <img className="list-svg" src="static/list.svg" alt="menu icon"></img>
          </div>
          <a href="/"><img className='logo' src="static/pugtatoes-logo.svg"></img></a>
          <ul>
            <Link href="/catalogue" style={{ textDecoration: "none", color: "inherit" }}><li className="menu-item">Catalogue</li></Link>
            <Link href="/pages/about" style={{ textDecoration: "none", color: "inherit" }}><li className="menu-item">About</li></Link>
            <Link href="/pages/contact" style={{ textDecoration: "none", color: "inherit" }}><li className="menu-item">Contact</li></Link>
          </ul>
          <div className="mobile-menu-icon-2">
            <img className="search-svg" src="static/search.svg" alt="menu icon"></img>
            <img className="cart-svg" src="static/cart.svg" alt="menu icon"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar