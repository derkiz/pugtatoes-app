// components/Cards.js

import React from 'react';
import styles from './Bestsellers.module.css';
import Link from 'next/link';

const Cards = async ({ collectionId }) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL;
    const response = await fetch(`${baseUrl}/api/products?populate=image`);
    const { data } = await response.json();
    // Filter products based on collectionId
    const filteredData = data.filter(product => product.attributes.collection === collectionId);
    return (
      <div className={styles.flex_padding}>
        <div className={styles.container}>
          <div className={styles.title}>{collectionId} Collection</div>
          <div className={styles.card_container}>
            {filteredData.map(product => (
              <Link className={styles.card} href={`/products/${product.attributes.slug}`} key={product.id}>
                <div className={styles.card_image}>
                  <img // Remove env variable when using railway
                    src={`${process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL}${product.attributes.image.data[0].attributes.url}`} 
                    alt={product.attributes.title} 
                  />
                </div>
                <div className={styles.chead}>{product.attributes.title}</div>
                <div className={styles.cdesc}>€{product.attributes.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default Cards;
