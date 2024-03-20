// src/app/collections/new/page.js

import { createClient } from 'contentful';

const newProducts = async () => {
  const client = createClient({
    space: process.env.contentful_space_id,
    accessToken: process.env.contentful_access_key,
  });

  const res = await client.getEntries({ content_type: 'products' });
  console.log(res.items);
  
};

export default newProducts;
