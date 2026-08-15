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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1E2F] text-white py-3 px-4 shadow-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <LogoBarraVelhaEPI />
            <nav className="hidden md:flex gap-6">
              <a href="#produtos" className="text-sm hover:text-[#E85D04] transition-colors">Produtos</a>
              <a href="#diferenciais" className="text-sm hover:text-[#E85D04] transition-colors">Diferenciais</a>
              <a href="#localizacao" className="text-sm hover:text-[#E85D04] transition-colors">Localização</a>
              <a href="#contato" className="text-sm hover:text-[#E85D04] transition-colors">Contato</a>
            </nav>
          </div>
        </header>
        <main className="flex-1 pt-16 pb-12">{children}</main>
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-gray-400 py-2 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs">© 2026 Barra Velha EPIs — Todos os direitos reservados | Desenvolvido por <a href="https://http200.ti" className="text-[#E85D04] hover:underline">HTTP200.TI</a></p>
          </div>
        </footer>
        <a href="https://api.whatsapp.com/send/?phone=554791432541&text=Ol%C3%A1%2C%20peguei%20seu%20contato%20no%20site%20da%20Barra%20Velha%20EPIs%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0" className="fixed bottom-16 right-4 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors" aria-label="Fale no WhatsApp" title="Fale no WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
