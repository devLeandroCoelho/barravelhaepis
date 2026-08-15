'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-gray-800 rounded-lg transition-colors" aria-label="Abrir menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </>
  );
}
