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
            <div className={styles.menu_container}>
              <li className={styles.menu_item_2}>Collections</li>
              <div className={styles.chevron}>
                <img src='/static/chevron-down.svg' alt="chevron down" />
              </div>
            </div>
            <li>|</li>
            <div className={styles.menu_container}>
              <div className={styles.menu_item_2} tabIndex={0}>About
                <div className={styles.drop_down}>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                </div>
              </div>
              <div className={styles.chevron}>
                <img src='/static/chevron-down.svg' alt="chevron down" />
              </div>
            </div>
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
