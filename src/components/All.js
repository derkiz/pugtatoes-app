'use client'

import React, { useState, useEffect, useRef } from 'react';
import styles from './Bestsellers.module.css';
import Link from 'next/link';

const fetchProducts = async ({ STRAPI_APP_BASE_URL }) => {
  const response = await fetch(`${STRAPI_APP_BASE_URL}/api/products?populate=image`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const { data } = await response.json();
  return data;
};

const All = ({ STRAPI_APP_BASE_URL }) => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState('Featured');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts({ STRAPI_APP_BASE_URL });
        setProducts(products);
        setOriginalProducts(products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [STRAPI_APP_BASE_URL]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSort = (order) => {
    let sortedProducts = [...products];
    let sortLabel = '';

    if (order === 'lowToHigh') {
      sortedProducts.sort((a, b) => a.attributes.price - b.attributes.price);
      sortLabel = 'Price: Low to High';
    } else if (order === 'highToLow') {
      sortedProducts.sort((a, b) => b.attributes.price - a.attributes.price);
      sortLabel = 'Price: High to Low';
    } else if (order === 'featured') {
      sortedProducts = [...originalProducts];
      sortLabel = 'Featured';
    }

    setProducts(sortedProducts);
    setCurrentSort(sortLabel);
    setDropdownOpen(false); // Close dropdown after sorting
  };

  return (
    <div className={styles.flex_padding}>
      <div className={styles.container}>
        <div className={styles.title}>Our Products</div>
        <div className={styles.filter}>
          <div>Sort by:</div>
          <div
            className={styles.dropdown}
            ref={dropdownRef}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div>{currentSort}</div>
            <svg // adds inline svg
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round">
              <polyline 
              points="6 9 12 15 18 9">
              </polyline>
            </svg>
            {dropdownOpen && (
              <div className={styles.dropdown_content}>
                <div className={styles.dropdown_item} onClick={() => handleSort('featured')}>Featured</div>
                <div className={styles.dropdown_item} onClick={() => handleSort('lowToHigh')}>Price: Low to High</div>
                <div className={styles.dropdown_item} onClick={() => handleSort('highToLow')}>Price: High to Low</div>
              </div>
            )}
          </div>
          <div className={styles.products_length}>{products.length} products</div>
        </div>
        <div className={styles.card_container}>
          {products.map(product => (
            <Link className={styles.card} href={`/products/${product.attributes.slug}`} key={product.id}>
              <div className={styles.card_image}>
              <img // Remove env variable when using railway
                src={`${process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL}${product.attributes.image.data[0].attributes.url}`} 
                alt={product.attributes.title} 
              />
              </div>
              <div className={styles.chead}>{product.attributes.title}</div>
              <div className={styles.cdesc}>${product.attributes.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default All;
