import React from 'react';
import styles from './Product.module.css';
import Link from 'next/link';

// const getProductDetails = async (): Promise<string[]> => {
//   try {
//     const response = await fetch("http://localhost:1337/api/products");
//     const { data } = await response.json();
//     const slugs = data.map((product: { attributes: { slug: string } }) => product.attributes.slug);
//     return slugs;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return []; // Return an empty array in case of error
//   }
// };

// export default getProductDetails;

// Define the prop types
type ProductProps = {
  paramId: string; // Declare paramId prop
};

const Product: React.FC<ProductProps> = ({ paramId }) => { // Add paramId to component props
  return (
    <div>
      <h2>Product Details</h2>
      <p>ParamId: {paramId}</p> {/* Display the paramId */}
      {/* Add more product details or functionality here */}
    </div>
  );
};

export default Product;
