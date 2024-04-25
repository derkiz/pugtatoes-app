'use client'
import React, { useEffect, useState } from 'react';
import styles from './Product.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProductData {
  id: number;
  attributes: {
    slug: string;
  };
}

const getProductDetails = async (): Promise<string[]> => {
  try {
    const response = await fetch("http://localhost:1337/api/products");
    const { data } = await response.json();
    const slugs = data.map((product: ProductData) => product.attributes.slug);
    return slugs;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of error
  }
};

// Define the prop types
type ProductProps = {
  paramId: string; // Declare paramId prop
};

const Product: React.FC<ProductProps> = ({ paramId }) => {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const slugs = await getProductDetails();
      setSlugs(slugs);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Product Details</h2>
      {slugs.length > 0 && !slugs.includes(paramId) ? (
        <>{notFound()}</>
      ) : (
        <>In</>
      )}
    </div>
  );
};

export default Product;
