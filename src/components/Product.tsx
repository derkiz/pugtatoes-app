'use client'

import React, { useEffect, useState } from 'react';
import styles from './Product.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';

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
  const [quantity, setQuantity] = useState<number>(1); // State to store quantity
  const { addToCart } = useCart(); // Use the cart context

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

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.attributes.title,
        price: product.attributes.price,
        imageUrl: STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url, // CHANGES MADE HERE
        quantity
      });
    }
  };

  if (loading) {
    return null;
  }

  if (!product) {
    return <>{notFound()}</>;
  }

  return (
    <>
      <div className={styles.flex_container}>
        <div className={styles.product_container}>
          <div className={styles.product}>
            <img src={STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url}></img>
          </div>
          <div className={styles.product_details}>
            <div className={styles.title}>{product.attributes.title}</div>
            <div className={styles.desc_price}>€{product.attributes.price}</div>
            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat.
            </div>
            <div className={styles.miscdesc}>Quantity</div>
            <div className={styles.amount}>
              <img src='/static/dash.svg' onClick={decrementQuantity}></img>
              <div className={styles.valpar}>
                <div className={styles.value}>{quantity}</div>
              </div>
              <img src='/static/plus.svg' onClick={incrementQuantity}></img>
            </div>
            <div className={styles.add_to_cart} onClick={handleAddToCart}>Add to cart</div>
            <div className={styles.buy_now}>Buy now</div>
            <div className={styles.share}>
              <img src='/static/upload.svg' alt='share.svg'></img>
              <div className={styles.miscdesc}>Share</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
