import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_container}>
          <div className={styles.mobile_menu_icon}>
            <img className={styles.list_svg} src="/static/list.svg" alt="menu icon" />
          </div>
          <Link href='/'>
            <img className={styles.logo} src="/static/pugtatoes-logo.svg" alt="Pugtatoes" loading="eager" />
          </Link>
          <ul>
            <Link href="/collections/new">
              <li className={styles.menu_item}>New</li>
            </Link>
            <li>|</li>
            <Link href="/collections">
              <li className={styles.menu_item}>Shop All</li>
            </Link>
            <li>|</li>
            <Link href="/collections">
              <li className={styles.menu_item}>Collections</li>
              <div className={styles.chevron}>
                <img src='/static/chevron-down.svg' alt="chevron down" />
              </div>
            </Link>
            <li>|</li>
            <Link href="/pages/about">
              <li className={styles.menu_item}>About</li>
              <div className={styles.chevron}>
                <img src='/static/chevron-down.svg' alt="chevron down" />
              </div>
            </Link>
          </ul>
          <div className={styles.mobile_menu_icon_2}>
            <img className={styles.nav_icon_2} src="/static/account.svg" alt="menu icon" />
            <img className={styles.nav_icon} src="/static/search.svg" alt="menu icon" />
            <img className={styles.nav_icon} src="/static/cart.svg" alt="menu icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
