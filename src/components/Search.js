// component/Search.js

'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Search.module.css';
import Link from 'next/link';

const Search = ({ products }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchBarRef = useRef(null);
  const resultsWrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      searchBarRef.current &&
      resultsWrapperRef.current &&
      !searchBarRef.current.contains(event.target) &&
      !resultsWrapperRef.current.contains(event.target)
    ) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    if (isSearchVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchVisible]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLinkClick = () => {
    setSearchVisible(false);
  };

  const filteredProducts = searchQuery
    ? products.filter(product =>
        product.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  return (
    <>
      <button className={styles.navButton} onClick={() => setSearchVisible(true)}>
        <img src='/static/search.svg'></img>
      </button>
      {isSearchVisible && (
        <div className={styles.container}>
          <div className={styles.searchParentBackground}></div>
          <div className={styles.flex_container}>
            <div className={styles.flex_container_child}>
              <div className={styles.searchParent}>
                <div className={styles.searchBarContainer}>
                  <input
                    type="text"
                    ref={searchBarRef}
                    className={styles.searchBar}
                    placeholder="Type to search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <div>
                    <button className={styles.closeButton} onClick={() => setSearchVisible(false)}>
                    &times;
                    </button>
                  </div>
                </div>
              </div>
              {searchQuery && (
                <div className={styles.resultsWrapper} ref={resultsWrapperRef}>
                  <div className={styles.productsHeader}>Products</div>
                  <hr className={styles.hrColor}></hr>
                  <div className={styles.resultsContainer}>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <Link href={`/products/${product.attributes.slug}`} passHref key={product.id}>
                          <div className={styles.resultItem} onClick={handleLinkClick}>
                            <div className={styles.handler}>
                              <img
                                src={process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url}
                                className={styles.productImage}
                              />
                              <div className={styles.resultProductName}>{product.attributes.title}</div>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className={styles.noResults}>No results found.</div>
                    )}
                  </div>
                  <div className={styles.searchResultItem}>Search results for: "{searchQuery}"</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
