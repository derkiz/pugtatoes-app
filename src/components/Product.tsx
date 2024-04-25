'use client'

import React, { useEffect, useState } from 'react';
import styles from './Product.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProductData {
  id: number;
  attributes: {
    slug: string;
    title: string;
    price: number;
    image: {
      data: {
        attributes: any;
        url: string;
      }[];
    };
  };
}

interface ProductProps {
  paramId: string;
  STRAPI_APP_BASE_URL: string;
}

const getProductDetails = async (): Promise<ProductData[]> => {
  try {
    const response = await fetch("http://localhost:1337/api/products?populate=image");
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const Product: React.FC<ProductProps> = ({ paramId, STRAPI_APP_BASE_URL }) => {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductDetails();
        const product = products.find(p => p.attributes.slug === paramId);
        if (product) {
          setProduct(product);
        } else {
          setProduct(null);
        }
      } catch (error) {
        // Handle the error, e.g., display an error message
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [paramId]);

  if (loading) {
    return null;
  }

  if (!product) {
    return <>{notFound()}</>;
  }

  return (
    <>
      <div>
        Product slug: {paramId}
        <br />
        Product title: {product.attributes.title}
        <br />
        Product img url: {STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url}
        <br />
        Product Price: {product.attributes.price}
      </div>
    </>
  );
};

export default Product;
