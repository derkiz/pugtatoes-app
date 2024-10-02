// src/app/layout.tsx
import { Navbar, Footer } from "@/components";
import { CartProvider } from "@/contexts/CartContext";
import { Metadata } from "next";
import './globals.css';
import ClientComponents from "./ClientComponents";

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
          <ClientComponents /> {/* Include client-side components */}
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
