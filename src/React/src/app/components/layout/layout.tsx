import React, { useState, useEffect, ReactNode } from 'react';
import BurgerMenu from '../burger-menu/burger-menu';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showLayout, setShowLayout] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setShowLayout(typeof window !== 'undefined' && window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <html>
      <body>
        {showLayout ? <BurgerMenu /> : children}
      </body>
    </html>
  );
}
