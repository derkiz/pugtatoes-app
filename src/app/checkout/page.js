// app/checkout/page.js

'use client';

import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import styles from './checkout.module.css';

// Load Stripe outside of a component’s render to avoid recreating the `stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const { cart, removeFromCart } = useCart(); // Destructure removeFromCart from useCart

  // Function to calculate the total amount in cents
  const calculateTotalAmount = () => {
    // Convert dollars to cents and round to the nearest integer
    return Math.round(cart.reduce((total, item) => total + item.price * item.quantity, 0) * 100);
  };

  const handleCheckout = async () => {
    console.log('Initiating checkout...');
    const stripe = await stripePromise;

    if (!stripe) {
      console.error('Stripe initialization failed');
      return;
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }), // Send the cart items
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId, // Use sessionId from the backend
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.title}>Your cart</div>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                <ul>
                  {cart.map((item) => (
                    <div key={item.id} className={styles.cart_flex}>
                      <div className={styles.section}>
                        <img src={item.imageUrl} alt={item.title}/>
                        <div>
                          <div>{item.title}</div>
                          <div>${item.price}</div>
                        </div>
                      </div>
                      <div className={styles.section_2}>
                        QUANTITY
                      </div>
                      <div className={styles.section_3}>
                        <button onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                      </div>
                      
                    </div>
                  ))}
                </ul>
                <button onClick={handleCheckout}>Check out</button>
              </>
            )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
