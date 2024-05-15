// components/All.js

import React from 'react'
import styles from './Bestsellers.module.css';

const All = async ({STRAPI_APP_BASE_URL}) => {
  const response = await fetch(`${STRAPI_APP_BASE_URL}/api/products?populate=image`);
  const { data } = await response.json();
  try {
    return (
      <>
        {STRAPI_APP_BASE_URL}
      </>
    )
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default All