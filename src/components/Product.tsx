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
    throw error; // Rethrow the error to be handled by the caller
  }
};

// Define the prop types
type ProductProps = {
  paramId: string; // Declare paramId prop
};

const Product: React.FC<ProductProps> = ({ paramId }) => {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const slugs = await getProductDetails();
        setSlugs(slugs);
      } catch (error) {
        // Handle the error, e.g., display an error message
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return null; // Display nothing while loading,
  }

  if (slugs.length === 0 || !slugs.includes(paramId)) {
    return <>{notFound()}</>; // Display the notFound message if slugs are empty or paramId is not found
  }

  return (
    <div>
      <>In: {slugs.length}</>
    </div>
  );
};

export default Product;
