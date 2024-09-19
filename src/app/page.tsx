// src/app/page.tsx
import { Cta, Bestsellers } from "@/components";
import { CartProvider } from "@/contexts/CartContext"; // Ensure the path matches your project structure

const Page = () => {
  const STRAPI_APP_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL || 'failed';

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
