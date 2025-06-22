"use client";

import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { notFound, useRouter } from "next/navigation"; // Import useRouter for redirection
import { useCart } from "@/contexts/CartContext";

interface ProductData {
  id: number;
  attributes: {
    description: string;
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
}

const getProductDetails = async (): Promise<ProductData[]> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL;
    const response = await fetch(`${baseUrl}/api/products?populate=image`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const Product: React.FC<ProductProps> = ({ paramId }) => {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1); // State to store quantity
  const { addToCart } = useCart(); // Use the cart context
  const router = useRouter(); // Use the router for redirection

  // New state for the "Copied to clipboard" popup
  const [copied, setCopied] = useState<boolean>(false);
  const [hasShared, setHasShared] = useState<boolean>(false); // State to prevent multiple clicks

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductDetails();
        const product = products.find((p) => p.attributes.slug === paramId);
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
        imageUrl: `${process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL}${product.attributes.image.data[0].attributes.url}`, // Add base URL here
        quantity,
      });
    }
  };

  const handleBuyNow = () => {
    if (product) {
      // Add the product to cart and immediately redirect to /checkout
      addToCart({
        id: product.id,
        title: product.attributes.title,
        price: product.attributes.price,
        imageUrl: `${process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL}${product.attributes.image.data[0].attributes.url}`, // Add base URL here
        quantity,
      });
      router.push("/checkout"); // Redirect to the checkout page
    }
  };

  const handleShareClick = async () => {
    if (product && !hasShared) {
      // Construct the product URL (you can adjust this as needed)
      const productUrl = `${window.location.origin}/products/${product.attributes.slug}`;
      try {
        await navigator.clipboard.writeText(productUrl);
        setCopied(true); // Show the copied message
        setHasShared(true); // Prevent further clicking

        // Hide the message after 2 seconds
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
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
            <img // Remove env variable when deployed with strapi cloud ${process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL}
              src={`${product.attributes.image.data[0].attributes.url}`}
              alt={product.attributes.title}
            />
          </div>
          <div className={styles.product_details}>
            <div className={styles.title}>{product.attributes.title}</div>
            <div className={styles.desc_price}>€{product.attributes.price}</div>
            {/* modify under */}
            <div className={styles.desc}>{product.attributes.description}</div>
            {/* modify end */}
            <div className={styles.miscdesc}>Quantity</div>
            <div className={styles.amount}>
              <img src="/static/dash.svg" onClick={decrementQuantity}></img>
              <div className={styles.valpar}>
                <div className={styles.value}>{quantity}</div>
              </div>
              <img src="/static/plus.svg" onClick={incrementQuantity}></img>
            </div>
            <div className={styles.add_to_cart} onClick={handleAddToCart}>
              Add to cart
            </div>
            <div className={styles.buy_now} onClick={handleBuyNow}>
              Buy now
            </div>

            {/* Share button */}
            <div
              className={`${styles.share} ${hasShared ? styles.disabled : ""}`}
              onClick={handleShareClick}
              style={{ pointerEvents: hasShared ? "none" : "auto" }}
            >
              <img src="/static/upload.svg" alt="share.svg"></img>
              <div className={styles.miscdesc}>Share</div>
            </div>

            {copied && <div className={styles.copiedPopup}>Copied to clipboard!</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
