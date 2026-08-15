'use client';

import Image from 'next/image';

export default function Home() {
  const whatsappNumber = '5548988547455';
  const whatsappMessage = 'gostaria%20de%20entrar%20em%20contato.%20Peguei%20seu%20n%C3%BAmero%20no%20site%20da%20Barra%20Velha%20EPIs.';

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0B1E2F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-300 mb-2">Desenvolvido por HTTP200.TI</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Barra Velha EPIs</h1>
          <p className="text-xl mb-8">Equipamentos de Proteção Individual — qualidade e segurança para sua equipe</p>
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} className="bg-[#E85D04] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Fale no WhatsApp
          </a>
        </div>
      </section>

      {/* Marcas / Credibilidade */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0B1E2F] mb-6">Marcas que trabalhamos</h2>
          <p className="text-gray-600">Trabalhamos com as melhores marcas do mercado. Consulte-nos para orçamentos.</p>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1E2F] text-center mb-10">Nossos Produtos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '⛑️', name: 'Capacetes' },
              { icon: '🧤', name: 'Luvas' },
              { icon: '😷', name: 'Máscaras' },
              { icon: '👓', name: 'Óculos' },
              { icon: '👕', name: 'Uniformes' },
              { icon: '👟', name: 'Calçados' },
              { icon: '🦺', name: 'Colete' },
              { icon: '🛡️', name: 'Protetores' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="font-medium text-gray-800">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1E2F] text-center mb-10">Por que escolher a Barra Velha EPIs?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="font-bold text-[#0B1E2F] mb-2">Entrega rápida</h3>
              <p className="text-gray-600 text-sm">Atendimento ágil para sua equipe não parar</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-[#0B1E2F] mb-2">Preço justo</h3>
              <p className="text-gray-600 text-sm">Orçamentos competitivos sem perder qualidade</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-[#0B1E2F] mb-2">Atendimento local</h3>
              <p className="text-gray-600 text-sm">Atendemos a região com dedicação e confiança</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1E2F] text-center mb-10">Galeria</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="bg-gray-200 rounded-xl aspect-square flex items-center justify-center text-gray-400">
                <span>Imagem {item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Substitua estas imagens pelas fotos dos produtos do Instagram</p>
        </div>
      </section>

      {/* Localização */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1E2F] text-center mb-10">Onde estamos</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
              <a href="https://maps.google.com/?q=Barra+Velha+SC" target="_blank" rel="noopener noreferrer" className="text-[#E85D04] hover:underline font-medium">
                Ver localização no Google Maps
              </a>
            </div>
            <div className="p-6">
              <p className="text-gray-800 font-medium">Barra Velha — Santa Catarina</p>
              <p className="text-gray-600 text-sm mt-1">Atendimento para empresas e profissionais da região</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 px-4 bg-[#0B1E2F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Contato</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="font-medium mb-1">Telefone / WhatsApp</p>
              <a href={`https://wa.me/${whatsappNumber}`} className="text-[#E85D04] hover:underline">(48) 98854-7455</a>
            </div>
            <div>
              <p className="font-medium mb-1">Instagram</p>
              <a href="https://www.instagram.com/barravelhaepis/" target="_blank" rel="noopener noreferrer" className="text-[#E85D04] hover:underline">@barravelhaepis</a>
            </div>
            <div>
              <p className="font-medium mb-1">Horário</p>
              <p>Seg a Sex — 8h às 18h</p>
            </div>
          </div>
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} className="bg-[#E85D04] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
            Fale no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">© 2026 Barra Velha EPIs — Todos os direitos reservados</p>
          <p className="text-xs mt-2">Desenvolvido por <a href="https://http200.ti" className="text-[#E85D04] hover:underline">HTTP200.TI</a></p>
        </div>
      </footer>
    </main>
  );
}
