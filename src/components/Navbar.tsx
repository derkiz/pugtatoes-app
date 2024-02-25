import React from 'react'
import './nav.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='nav'>
        <div className="nav-container">
          <div className="mobile-menu-icon">
            <img className="list-svg" src="/static/list.svg" alt="menu icon"></img>
          </div>
          <a href="/"><img className='logo' src="/static/pugtatoes-logo.svg"></img></a>
          <ul>
            <Link href="/collections/new" style={{ textDecoration: "none", color: "inherit" }}><li className="menu-item">New</li></Link>
            <li style={{ userSelect: "none", pointerEvents: "none" }}>|</li>
            <Link href="/collections" style={{ textDecoration: "none", color: "inherit" }}><li className="menu-item">Shop All</li></Link>
            <li style={{ userSelect: "none", pointerEvents: "none" }}>|</li>
            <Link href="/collections" style={{ textDecoration: "none", color: "inherit" }}><li className="menu-item">Collections</li></Link>
            <li style={{ userSelect: "none", pointerEvents: "none" }}>|</li>
            <Link href="/pages/about" style={{ textDecoration: "none", color: "inherit" }}><li className="menu-item">About</li></Link>
          </ul>
          <div className="mobile-menu-icon-2">
            <img className="search-svg" src="/static/search.svg" alt="menu icon"></img>
            <img className="cart-svg" src="/static/cart.svg" alt="menu icon"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar