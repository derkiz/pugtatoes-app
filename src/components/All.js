// src/app/components/All.js

import React from 'react';
import styles from './Bestsellers.module.css';
import Link from 'next/link';

const All = async ({STRAPI_APP_BASE_URL}) => {
  try {
    const response = await fetch('http://localhost:1337/api/products?populate=image');
    const { data } = await response.json();

    // Group products by collection
    const collections = data.reduce((acc, product) => {
      const collection = product.attributes.collection || 'Uncategorized';
      if (!acc[collection]) {
        acc[collection] = [];
      }
      acc[collection].push(product);
      return acc;
    }, {});

    return (
      <div className={styles.flex_padding}>
        <div className={styles.container}>
          <div className={styles.title}>Explore our collections</div>
          {Object.keys(collections).map(collection => (
            <div key={collection} className={styles.collection}>
              <h2 className={styles.collection_title}>{collection}</h2>
              <div className={styles.card_container}>
                {collections[collection].map(product => (
                  <Link className={styles.card} href={`/products/${product.attributes.slug}`} key={product.id}>
                    <img 
                      src={STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url} 
                      alt={product.attributes.title} 
                    />
                    <div className={styles.chead}>{product.attributes.title}</div>
                    <div className={styles.cdesc}>€{product.attributes.price}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default All;
