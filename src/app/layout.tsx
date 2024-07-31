// src/app/layout.tsx

import { Navbar, Footer } from "@/components";
import { CartProvider } from "@/contexts/CartContext";
import { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Pugtatoes - The Official Pugtatoes Store',
    template: '%s - Pugtatoes',
  },
  description: 'Pugtatoes - Unique and cute pug art for cool people.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
