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

  const collectionsRef = useRef<HTMLDivElement | null>(null); // Ref for collections dropdown content
  const collectionsMenuItemRef = useRef<HTMLDivElement | null>(null); // Ref for collections menu item
  const aboutRef = useRef<HTMLDivElement | null>(null); // Ref for about dropdown content
  const aboutMenuItemRef = useRef<HTMLDivElement | null>(null); // Ref for about menu item

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

  // Mobile Collection Links
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

  // Desktop Collection Links
  const desktopCollectionsLinks = collections.map((collection, index) => {
    const slug = collection.toLowerCase().replace(/\s+/g, '-');
    return (
      <Link href={`/collections/${slug}`} key={index}>
        <div>{collection}</div>
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

  // Function to toggle dropdowns
  const handleDropdownClick = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(dropdown); // Open the clicked dropdown
    }
  };

  const closeDropdown = () => {
    setOpenDropdown(null); // Close any dropdown
  };

  // New effect for handling clicks outside of dropdowns (including the menu items)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close collections dropdown if clicked outside both the menu item and dropdown content
      if (
        openDropdown === 'collections' &&
        collectionsRef.current &&
        collectionsMenuItemRef.current &&
        !collectionsRef.current.contains(target) &&
        !collectionsMenuItemRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }

      // Close about dropdown if clicked outside both the menu item and dropdown content
      else if (
        openDropdown === 'about' &&
        aboutRef.current &&
        aboutMenuItemRef.current &&
        !aboutRef.current.contains(target) &&
        !aboutMenuItemRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

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
            <img className={styles.logo} src="/static/pugtatoes_logo_font.svg"></img>
            <img className={styles.logoM} src="/static/pugtatoes_mobile_logo.png" alt="Pugtatoes" loading="eager" />
          </Link>
          {/* Desktop navigation */}
          <ul className={styles.navList}>
            <Link href="/collections" passHref>
              <li className={styles.menuItem}>Shop All</li>
            </Link>
            <li className={styles.separator}>|</li>
            <div className={styles.dropdown}>
              <div
                className={styles.menuItem}
                onClick={() => handleDropdownClick('collections')}
                ref={collectionsMenuItemRef} // Ref for the collections menu item
              >
                Collections
              </div>
              <div
                className={`${styles.dropdownContent} ${openDropdown === 'collections' ? styles.show : ''}`}
                ref={collectionsRef} // Ref for the collections dropdown
              >
                {desktopCollectionsLinks.map((link) => (
                  <div key={link.key} onClick={closeDropdown}>{link}</div>
                ))}
              </div>
            </div>
            <li className={styles.separator}>|</li>
            <div className={styles.dropdown}>
              <div
                className={styles.menuItem}
                onClick={() => handleDropdownClick('about')}
                ref={aboutMenuItemRef} // Ref for the about menu item
              >
                About
              </div>
              <div
                className={`${styles.dropdownContent} ${openDropdown === 'about' ? styles.show : ''}`}
                ref={aboutRef} // Ref for the about dropdown
              >
                <Link href="/pages/about">
                  <div className={styles.item} onClick={closeDropdown}>Our Story</div>
                </Link>
                <Link href="/pages/contact">
                  <div className={styles.item} onClick={closeDropdown}>Contact</div>
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
