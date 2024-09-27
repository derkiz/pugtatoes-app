'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { fetchProducts } from './apiService';
import Search from './Search';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';

const Navbar = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { cart } = useCart(); // Use the cart context
  const [mobileNavVisible, setMobileNavVisible] = useState(false); // Mobile nav state
  const [submenuVisible, setSubmenuVisible] = useState(false); // Submenu state
  const [submenuExiting, setSubmenuExiting] = useState(false); // State for submenu exiting
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // State to track open dropdown
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({}); // Ref to track dropdown elements

  // Media query breakpoint (47rem = 752px)
  const mobileBreakpoint = 752;

  // Acquire products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        if (productsData) {
          setProducts(productsData);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const collections = Array.from(new Set(products.map((item: any) => item.attributes.collection)));

  // Map over collections and store them in a constant
  const collectionsLinks = collections.map((collection, index) => {
    const slug = collection.toLowerCase().replace(/\s+/g, '-');
    return (
      <Link href={`/collections/${slug}`} key={index}>
        <div className={styles.collecs} onClick={() => closeMobileNav()}>
          {collection}
        </div>
      </Link>
    );
  });

  // Mobile menu toggle functionality
  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
    setSubmenuVisible(false); // Reset the submenu if the mobile nav is closed
  };

  const closeMobileNav = () => {
    setMobileNavVisible(false);
    setSubmenuVisible(false); // Close submenu when closing mobile nav
    setOpenDropdown(null); // Close any open dropdowns
  };

  // Handle submenu visibility with fade-out effect
  const handleSubmenuVisibility = (isVisible: boolean) => {
    if (isVisible) {
      setSubmenuVisible(true);
    } else {
      setSubmenuExiting(true);
      setTimeout(() => {
        setSubmenuVisible(false);
        setSubmenuExiting(false); // Reset after transition
      }, 300); // Match this duration with the CSS transition time
    }
  };

  // Close the mobile nav automatically if the viewport width exceeds 752px (47rem)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mobileBreakpoint) {
        setMobileNavVisible(false); // Close the mobile nav
        setSubmenuVisible(false);   // Close the submenu as well
        setOpenDropdown(null); // Close any open dropdowns
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // Close if the same dropdown is clicked
    } else {
      setOpenDropdown(dropdown); // Open the clicked dropdown
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownElement = dropdownRefs.current[openDropdown!];
      if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
        setOpenDropdown(null); // Close the dropdown if clicking outside
      }
    };

    // Attach event listener
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on component unmount or when openDropdown changes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_container}>
          <div className={styles.mobile_menu_icon} onClick={toggleMobileNav}>
            <img className={styles.list_svg} src="/static/list.svg" alt="menu icon" />
          </div>
          <Link href='/'>
            <img className={styles.logo} src="/static/nav_logo.svg"></img>
            <img className={styles.logoM} src="/static/pugtatoes_mobile_logo.png" alt="Pugtatoes" loading="eager" />
          </Link>
          {/* Desktop navigation */}
          <ul className={styles.navList}>
            <Link href="/collections" passHref>
              <li className={styles.menuItem}>Shop All</li>
            </Link>
            <li className={styles.separator}>|</li>
            <div className={styles.dropdown} onClick={() => toggleDropdown('collections')}>
              <div
                className={styles.menuItem}
                ref={el => dropdownRefs.current['collections'] = el} // Assign ref
              >
                Collections
              </div>
              <div className={`${styles.dropdownContent} ${openDropdown === 'collections' ? styles.show : ''}`}>
                {collectionsLinks}
              </div>
            </div>
            <li className={styles.separator}>|</li>
            <div className={styles.dropdown}>
              <div
                className={styles.menuItem}
                onClick={() => toggleDropdown('about')}
                ref={el => dropdownRefs.current['about'] = el} // Assign ref
              >
                About
              </div>
              <div className={`${styles.dropdownContent} ${openDropdown === 'about' ? styles.show : ''}`}>
                <Link href="/pages/about" passHref>
                  <div
                    className={styles.item}
                    onClick={(e) => e.stopPropagation()} // Prevent closing the dropdown
                  >
                    Our Story
                  </div>
                </Link>
                <Link href="/pages/contact" passHref>
                  <div
                    className={styles.item}
                    onClick={(e) => e.stopPropagation()} // Prevent closing the dropdown
                  >
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          </ul>
          {/* Desktop navigation END */}
          <div className={styles.mobile_menu_icon_2}>
            <Search products={products} />
            <Link href="/checkout">
              <div className={styles.cart_container}>
                <img className={styles.cart} src="/static/cart.svg" alt="cart icon" />
                {cart.length > 0 && (
                  <div className={styles.cart_count}>{cart.length}</div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileNavVisible && (
        <div className={`${styles.overlay} ${mobileNavVisible ? styles.overlayActive : ''}`} onClick={closeMobileNav}></div>
      )}

      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileNav} ${mobileNavVisible ? styles.mobileNavActive : ''}`}>
        {/* Close button */}
        <div className={styles.mobileNavCloseButton} onClick={closeMobileNav}>
          <img src="/static/box-arrow-left.svg" alt="Close menu" />
        </div>

        {!submenuVisible ? (
          <>
            <div onClick={() => handleSubmenuVisibility(true)} className={styles.mobileNavItem}>
              Collections →
            </div>
            <Link href='/collections'>
              <div onClick={closeMobileNav} className={styles.mobileNavItem}>Shop All</div>
            </Link>
            <Link href='/pages/about'>
              <div onClick={closeMobileNav} className={styles.mobileNavItem}>Our Story</div>
            </Link>
            <Link href='/pages/contact'>
              <div onClick={closeMobileNav} className={styles.mobileNavItem}>Contact</div>
            </Link>
          </>
        ) : (
          <div className={`${styles.submenu} ${submenuExiting ? styles.submenuExiting : ''}`}>
            <div className={styles.backButton} onClick={() => handleSubmenuVisibility(false)}>← Collections</div>
            {collectionsLinks}
          </div>
        )}
      </div>
      {/* Mobile Navigation Menu END */}
    </>
  );
};

export default Navbar;
