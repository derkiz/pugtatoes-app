// src/app/ClientComponents.tsx
'use client'; // Mark this file as a client component

import useResetScroll from "@/hooks/useResetScroll";

const ClientComponents = () => {
  useResetScroll(); // Use your client-side hook

  return null; // Or you can render any other client-side content here if needed
};

export default ClientComponents;
