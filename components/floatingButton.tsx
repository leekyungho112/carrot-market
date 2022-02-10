import Link from 'next/link';
import React from 'react';

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

const FloatingButton = ({ children, href }: FloatingButton) => {
  return (
    <Link href={href}>
      <a className="fixed bottom-24 right-5 hover:bg-orange-600  transition-colors bg-orange-400 rounded-full shadow-xl p-4 text-white">
        {children}
      </a>
    </Link>
  );
};

export default FloatingButton;
