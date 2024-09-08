'use client';

import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import styles from './checkout.module.css';

// Load Stripe outside of a component’s render to avoid recreating the `stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart(); // Destructure updateCartItemQuantity

  // Function to calculate the total amount in cents
  const calculateTotalAmount = () => {
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
                <div className={styles.divider}></div>
                  {cart.map((item) => (
                    <div key={item.id} className={styles.cart_flex}>
                      <div className={styles.section}>
                        <img src={item.imageUrl} alt={item.title}/>
                        <div>
                          <div className={styles.header}>{item.title}</div>
                          <div className={styles.desc}>${item.price}</div>
                          <div className={styles.quant_section}>
                            <div className={styles.quant}>
                              <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <div className={styles.bin} onClick={() => removeFromCart(item.id)}>
                              <img src='/static/trash.svg' alt='x'></img>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.section_2}>
                        <div className={styles.quantity}>
                          <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <div className={styles.bin} onClick={() => removeFromCart(item.id)}>
                          <img src='/static/trash.svg' alt='x'></img>
                        </div>
                      </div>
                      <div className={styles.section_3}>
                        <div>
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
                <div className={styles.chout}>
                  <div className={styles.chout_header}>
                    <strong>Subtotal</strong>
                  </div>
                  <div className={styles.chout_total}>{`$${(calculateTotalAmount() / 100).toFixed(2)}`}</div>
                </div>
                <div className={styles.chout_desc}> Taxes and shipping fees will be handled at checkout</div>
                <div className={styles.checkout} onClick={handleCheckout}>Check out</div>
              </>
            )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
