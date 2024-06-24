// component/Search.js

'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Search.module.css';

const Search = ({ products }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchBarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
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

  const filteredProducts = searchQuery
    ? products.filter(product =>
        product.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <button className={styles.navButton} onClick={() => setSearchVisible(true)}>Search</button>
      {isSearchVisible && (
        <div className={styles.container}>
          <div className={styles.flex_container}>
            <div className={styles.padding}></div>
            <div className={styles.flex_container_child}>
              <div className={styles.searchBarContainer}>
                <input
                  type="text"
                  ref={searchBarRef}
                  className={styles.searchBar}
                  placeholder="Type to search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              {searchQuery && (
                <div className={styles.resultsWrapper}>
                  <div>PRODUCTS</div>
                  <hr className={styles.hrColor}></hr>
                  <div className={styles.resultsContainer}>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <div key={product.id} className={styles.resultItem}>
                          <img
                            src={process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url}
                            className={styles.productImage}
                          />
                          <div className={styles.resultProductName}>{product.attributes.title}</div>
                        </div>
                      ))
                    ) : (
                      <div className={styles.noResults}>No results found</div>
                    )}
                  </div>
                  <hr className={styles.hrColor}></hr>
                  <div>SEARCH RESULTS FOR: "{searchQuery}"</div>
                </div>
              )}
            </div>
            <div className={styles.padding}>
              <button className={styles.closeButton} onClick={() => setSearchVisible(false)}>
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
