// src/app/page.tsx
import { Cta, Bestsellers } from "@/components";
import { CartProvider } from "@/contexts/CartContext"; // Ensure the path matches your project structure

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
