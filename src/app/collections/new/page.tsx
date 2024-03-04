// src/app/collections/new/page.tsx

import { createClient } from 'contentful';

const newProducts = async () => {
  try {
    const client = createClient({
      space: process.env.contentful_space_id,
      accessToken: process.env.contentful_access_key,
    });

    const res = await client.getEntries({ content_type: 'products' });
    console.log(res.items); // Log the products to the console

    return (
      <div>new products</div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default newProducts;
