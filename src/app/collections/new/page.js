// src/app/collections/new/page.js

import { createClient } from 'contentful';

const newProducts = async () => {
  try {
    const client = createClient({
      space: process.env.contentful_space_id,
      accessToken: process.env.contentful_access_key,
    });

    const res = await client.getEntries({ content_type: 'products' });
    console.log(res.items); // Log the products to the console

    // Extract relevant information from the response
    const productInfo = res.items.map((item) => ({
      title: item.fields.title,
      thumbnail: item.fields.thumbnail.url,
      price: item.fields.price.toFixed(2),
    }));

    return (
      <>
        <div>
          {productInfo.map((product) => (
            <div key={product.title}>
              <h2>{product.title}</h2>
              <img src={product.thumbnail} alt={product.title} />
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default newProducts;
