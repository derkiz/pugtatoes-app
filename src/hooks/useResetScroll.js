// src/hooks/useResetScroll.ts
'use client'; // Mark this as a client component

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useResetScroll = () => {
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    // Reset scroll position to the top whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Effect depends on pathname changes
};

export default useResetScroll;
