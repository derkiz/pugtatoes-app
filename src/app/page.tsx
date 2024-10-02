// src/app/page.tsx
import { Cta, Bestsellers } from "@/components";
import { CartProvider } from "@/contexts/CartContext";
import ClientComponents from './ClientComponents'; // Import ClientComponents

const Page = () => {

  return (
    <CartProvider>
      <div>
        <Cta />
        <Bestsellers />
      </div>
    </CartProvider>
  );
};

export default Page;
