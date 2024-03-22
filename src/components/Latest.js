// src/app/components/Latest.js

import React from 'react'
import styles from './Latest.module.css'

const latest = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/products?populate=image');
    const { data } = await response.json();

    return (
      <>
        hi
      </>
      // <div className={styles.flex-container}>
      //   <div className={styles.latest-child}>
      //     <h>Entries</h>
      //       <ul>
      //         {data.map(product => (
      //           <li key={product.id}>
      //             <strong>Title:</strong> {product.attributes.title}, <strong>Price:</strong> {product.attributes.price}
      //             <br />
      //             <div>{process.env.STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url}</div>
      //             <img src={process.env.STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url}/>
      //           </li>
      //         ))}
      //       </ul>
      //   </div>
      // </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null in case of an error to render nothing
  }
};

export default latest;