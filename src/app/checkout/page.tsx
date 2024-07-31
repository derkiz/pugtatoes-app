// src/app/checkout/page.tsx

'use client'

import React from 'react';
import { useCart } from '@/contexts/CartContext';

const Checkout = () => {
  const { cart } = useCart();

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Checkout;
