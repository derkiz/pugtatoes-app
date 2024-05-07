//getData.js

import React from 'react'

const getData = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/products');
    const { data } = await response.json();
    const filteredArray = Array.from(new Set(data.map(item => item.attributes.collection)));
    return filteredArray;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default getData