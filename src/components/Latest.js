// src/app/components/Latest.js

{/* debugging... to show url: <div>{process.env.STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url}</div> */}

import React from 'react'
import styles from './Latest.module.css'

const latest = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/products?populate=image');
    const { data } = await response.json();

    return (
      <div className={styles.flex_padding}>
        <div className={styles.container}>
          <div className={styles.card_container}>
            {data.map(product => (
              <div className={styles.card} key={product.id}>
                <img src={process.env.STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url}/>
                <div className={styles.chead}>{product.attributes.title}</div>
                <div className={styles.cdesc}>€{product.attributes.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null in case of an error to render nothing
  }
};

export default latest;