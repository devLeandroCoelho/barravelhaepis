import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LogoBarraVelhaEPI from '@/components/LogoBarraVelhaEPI';
import MobileMenuButton from '@/components/MobileMenuButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Barra Velha EPIs — Equipamentos de Proteção Individual',
  description: 'Distribuidora de EPIs em Barra Velha. Capacetes, luvas, máscaras, óculos, uniformes, calçados e mais. Atendimento para empresas e profissionais da região.',
  keywords: ['EPI', 'equipamentos de proteção', 'Barra Velha', 'Santa Catarina', 'capacetes', 'luvas', 'máscaras', 'óculos', 'uniformes', 'calçados', 'coletores', 'protetores'],
  authors: [{ name: 'HTTP200.TI' }],
  creator: 'HTTP200.TI',
  publisher: 'Barra Velha EPIs',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://barravelhaepis.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Barra Velha EPIs — Equipamentos de Proteção Individual',
    description: 'Distribuidora de EPIs em Barra Velha. Qualidade e segurança para sua equipe. Capacetes, luvas, máscaras, óculos, uniformes, calçados e mais.',
    url: 'https://barravelhaepis.vercel.app',
    siteName: 'Barra Velha EPIs',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/logo-barravelhaepis.png',
        width: 800,
        height: 800,
        alt: 'Barra Velha EPIs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barra Velha EPIs — Equipamentos de Proteção Individual',
    description: 'Distribuidora de EPIs em Barra Velha. Qualidade e segurança para sua equipe.',
    images: ['/logo-barravelhaepis.png'],
  },
  icons: {
    icon: '/logo-barravelhaepis.png',
    apple: '/logo-barravelhaepis.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Barra Velha EPIs',
  description: 'Distribuidora de EPIs em Barra Velha. Equipamentos de proteção individual para empresas e profissionais.',
  image: 'https://barravelhaepis.vercel.app/logo-barravelhaepis.png',
  telephone: '+5547991432541',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Paralela da BR101, nº 360 - São Cristóvão',
    addressLocality: 'Barra Velha',
    addressRegion: 'SC',
    postalCode: '88390-000',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -26.6496575,
    longitude: -48.6872217,
  },
  openingHours: [
    'Mo-Fr 07:30-12:00',
    'Mo-Fr 13:15-17:30',
    'Sa 07:30-12:00',
  ],
  priceRange: '$$',
  url: 'https://barravelhaepis.vercel.app',
  sameAs: [
    'https://www.instagram.com/barravelhaepis/',
    'https://api.whatsapp.com/send/?phone=5547991432541',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1E2F] text-white py-3 px-4 shadow-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <LogoBarraVelhaEPI />
            <nav className="hidden md:flex gap-6">
              <a href="#marcas" className="text-sm hover:text-[#E85D04] transition-colors">Marcas</a>
              <a href="#produtos" className="text-sm hover:text-[#E85D04] transition-colors">Produtos</a>
              <a href="#diferenciais" className="text-sm hover:text-[#E85D04] transition-colors">Diferenciais</a>
              <a href="#galeria" className="text-sm hover:text-[#E85D04] transition-colors">Galeria</a>
              <a href="#localizacao" className="text-sm hover:text-[#E85D04] transition-colors">Localização</a>
              <a href="#contato" className="text-sm hover:text-[#E85D04] transition-colors">Contato</a>
            </nav>
            <MobileMenuButton />
          </div>
        </header>
        <main className="flex-1 pt-16 pb-12">{children}</main>
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-gray-400 py-2 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs">© 2026 Barra Velha EPIs — Todos os direitos reservados | Desenvolvido por <a href="https://api.whatsapp.com/send/?phone=5548988547455&text=Ol%C3%A1%2C%20peguei%20seu%20contato%20no%20site%20da%20Barra%20Velha%20EPIs%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0" className="text-[#E85D04] hover:underline">HTTP200.TI</a></p>
          </div>
        </footer>
        <a href="https://api.whatsapp.com/send/?phone=5547991432541&text=Ol%C3%A1%2C%20peguei%20seu%20contato%20no%20site%20da%20Barra%20Velha%20EPIs%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0" className="fixed bottom-16 right-4 z-50 flex flex-col items-center gap-1 group" aria-label="Fale no WhatsApp" title="Fale no WhatsApp">
          <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            Chame no
          </span>
          <span className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors animate-bounce-slow">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </span>
        </a>
      </body>
    </html>
  );
}
