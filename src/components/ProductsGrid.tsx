'use client';

import Image from 'next/image';

const products = [
  { name: 'Capacetes', img: '/img/capacete.jpg', alt: 'Capacetes de segurança para trabalho' },
  { name: 'Luvas', img: '/img/luvas.jpg', alt: 'Luvas de proteção industrial' },
  { name: 'Máscaras', img: '/img/mascara.png', alt: 'Máscaras de proteção respiratória' },
  { name: 'Óculos', img: '/img/oculos.webp', alt: 'Óculos de proteção para trabalho' },
  { name: 'Uniformes', img: '/img/uniforme.webp', alt: 'Uniformes profissionais de segurança' },
  { name: 'Calçados', img: '/img/calçados.webp', alt: 'Calçados de segurança EPI' },
  { name: 'Colete', img: '/img/coletes.webp', alt: 'Coletes de segurança e sinalização' },
  { name: 'Protetores', img: '/img/protetores.jpg', alt: 'Protetores auriculares e outros EPIs' },
];

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.name} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-square relative bg-gray-50">
            <Image
              src={product.img}
              alt={product.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="p-3 text-center">
            <p className="font-medium text-gray-800 text-sm">{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
