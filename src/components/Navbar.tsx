'use client'

import React, { useState, useEffect, MouseEvent } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { fetchProducts } from './apiService';
import Search from './Search';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const { cart } = useCart(); // Use the cart context

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

  // Dropdown functionality
  function toggleDropdown1() {
    setDropdown1Visible(!dropdown1Visible);
    setDropdown2Visible(false); // Close other dropdown when opening this one
  }

  function toggleDropdown2() {
    setDropdown2Visible(!dropdown2Visible);
    setDropdown1Visible(false); // Close other dropdown when opening this one
  }

  function handleOutsideClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('#myDropdown') && dropdown1Visible) {
      setDropdown1Visible(false);
    }
    if (!clickedElement.closest('#myDropdown2') && dropdown2Visible) {
      setDropdown2Visible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick as unknown as EventListener);

    return () => {
      window.removeEventListener('click', handleOutsideClick as unknown as EventListener);
    };
  }, [dropdown1Visible, dropdown2Visible]);

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
            <Link href="/collections">
              <li className={styles.menu_item}>Shop All</li>
            </Link>
            <li className={styles.seperator}>|</li>
            <div className={styles.menu_container}>
              <div className={styles.dropdown} id="myDropdown">
                <button onClick={toggleDropdown1} style={{ cursor: 'pointer' }}>
                  Collections
                  <img src='/static/chevron-down.svg' alt="chevron down" />
                </button>
                <div className={styles.dropdown_content} style={{ display: dropdown1Visible ? 'block' : 'none' }}>
                  {collections.map((collection, index) => {
                    const slug = collection.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link key={index} href={`/collections/${slug}`}>
                        {collection}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <li className={styles.seperator}>|</li>
            <div className={styles.menu_container}>
              <div className={styles.dropdown} id="myDropdown2">
                <button onClick={toggleDropdown2} style={{ cursor: 'pointer' }}>
                  About
                  <img src='/static/chevron-down.svg' alt="chevron down" />
                </button>
                <div className={styles.dropdown_content} style={{ display: dropdown2Visible ? 'block' : 'none' }}>
                  <Link href="/pages/about">Our Story</Link>
                  <Link href="/pages/contact">Contact Us</Link>
                </div>
              </div>
            </div>
          </ul>
          <div className={styles.mobile_menu_icon_2}>
            {/* <img className={styles.nav_icon_2} src="/static/account.svg" alt="menu icon" /> */}
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
    </>
  );
};

export default Navbar;
