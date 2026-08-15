'use client';

import { useState } from 'react';

const categories = [
  { name: 'Capacetes', icon: '⛑️' },
  { name: 'Luvas', icon: '🧤' },
  { name: 'Máscaras', icon: '😷' },
  { name: 'Óculos', icon: '👓' },
  { name: 'Uniformes', icon: '👕' },
  { name: 'Calçados', icon: '👟' },
  { name: 'Colete', icon: '🦺' },
  { name: 'Protetores', icon: '🛡️' },
];

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div className="absolute inset-y-0 left-0 w-72 max-w-[80%] bg-[#0B1E2F] shadow-xl flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-gray-700">
          <h2 className="text-base font-bold text-white">Categorias</h2>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center text-gray-300 hover:bg-gray-800 rounded-lg transition-colors" aria-label="Fechar menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 space-y-2">
          {categories.map((category) => (
            <a key={category.name} href="#produtos" onClick={onClose} className="flex items-center gap-3 px-4 py-3 rounded-lg text-left text-base font-medium text-white hover:bg-gray-800 transition-colors">
              <span>{category.icon}</span> {category.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
