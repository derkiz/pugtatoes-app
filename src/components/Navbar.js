import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_container}>
          <div className={styles.mobile_menu_icon}>
            <img className={styles.list_svg} src="/static/list.svg" alt="menu icon"></img>
          </div>
          <Link href='/'><img className={styles.logo} src="/static/pugtatoes-logo.svg" alt="Pugtatoes" loading="eager"></img></Link>
          <ul>
            <Link href="/collections/new" style={{ textDecoration: "none", color: "inherit" }}><li className={styles.menu_item}>New</li></Link>
            <li style={{ userSelect: "none", pointerEvents: "none" }}>|</li>
            <Link href="/collections" style={{ textDecoration: "none", color: "inherit" }}><li className={styles.menu_item}>Shop All</li></Link>
            <li style={{ userSelect: "none", pointerEvents: "none" }}>|</li>
            <Link href="/collections" style={{ textDecoration: "none", color: "inherit" }}><li className={styles.menu_item}>Collections</li></Link>
            <li style={{ userSelect: "none", pointerEvents: "none" }}>|</li>
            <Link href="/pages/about" style={{ textDecoration: "none", color: "inherit" }}><li className={styles.menu_item}>About</li></Link>
          </ul>
          <div className={styles.mobile_menu_icon_2}>
            <img className={styles.nav_icon_2} src="/static/account.svg" alt="menu icon"></img>
            <img className={styles.nav_icon} src="/static/search.svg" alt="menu icon"></img>
            <img className={styles.nav_icon} src="/static/cart.svg" alt="menu icon"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar