import React from 'react'
import './latest.css'

const test = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/products?populate=image');
    const { data } = await response.json();

    return (
      <>
        <h1>Entries</h1>
          <ul>
            {data.map(product => (
              <li key={product.id}>
                <strong>Title:</strong> {product.attributes.title}, <strong>Price:</strong> {product.attributes.price}
                <br />
                <div>{process.env.STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url}</div>
                <img src={process.env.STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url}/>
              </li>
            ))}
          </ul>
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null in case of an error to render nothing
  }
};

export default test;