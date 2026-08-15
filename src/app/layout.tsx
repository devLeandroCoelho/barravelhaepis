import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LogoBarraVelhaEPI from '@/components/LogoBarraVelhaEPI';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Barra Velha EPIs — Equipamentos de Proteção Individual',
  description: 'Distribuidora de EPIs em Barra Velha. Qualidade e segurança para sua equipe.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-[#0B1E2F] text-white py-4 px-4 shadow-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <LogoBarraVelhaEPI />
            <nav className="hidden md:flex gap-6">
              <a href="#produtos" className="text-sm hover:text-[#E85D04] transition-colors">Produtos</a>
              <a href="#diferenciais" className="text-sm hover:text-[#E85D04] transition-colors">Diferenciais</a>
              <a href="#localizacao" className="text-sm hover:text-[#E85D04] transition-colors">Localização</a>
              <a href="#contato" className="text-sm hover:text-[#E85D04] transition-colors">Contato</a>
            </nav>
            <a href="https://wa.me/5548988547455?text=gostaria%20de%20entrar%20em%20contato.%20Peguei%20seu%20n%C3%BAmero%20no%20site%20da%20Barra%20Velha%20EPIs." className="bg-[#E85D04] hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors">
              WhatsApp
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
