'use client';

import Image from 'next/image';
import TypingEffect from '@/components/TypingEffect';

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero */}
      <section className="bg-[#0B1E2F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-44 h-44 md:w-64 md:h-64">
              <Image
                src="/logo-barravelhaepis.png"
                alt="Barra Velha EPIs"
                width={256}
                height={256}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Barra Velha EPIs</h1>
          <p className="text-xl mb-8">
            <span className="text-[#E85D04]">
              <TypingEffect />
            </span>
          </p>
        </div>
      </section>

      {/* Marcas / Credibilidade */}
      <section id="marcas" className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0B1E2F] mb-6">Marcas que trabalhamos</h2>
          <p className="text-gray-600">Trabalhamos com as melhores marcas do mercado. Consulte-nos para orçamentos.</p>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-16 px-4">
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
          <div className="mt-10 text-center">
            <a href="/catalogo-barravelhaepis.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0B1E2F] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Baixar Catálogo Completo
            </a>
            <p className="text-sm text-gray-500 mt-2">46 páginas com todos os produtos</p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1E2F] text-center mb-10">Por que escolher a Barra Velha EPIs?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="font-bold text-[#0B1E2F] mb-2">Produtos de qualidade</h3>
              <p className="text-gray-600 text-sm">Equipamentos certificados e confiáveis</p>
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
      <section id="galeria" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1E2F] text-center mb-10">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <iframe src="https://www.instagram.com/p/DbRUFMKtQ5w/embed/" height="450" frameBorder="0" scrolling="no" allowFullScreen={false} title="Post Instagram Barra Velha EPIs" className="w-full" />
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <iframe src="https://www.instagram.com/p/DZ3XdrrRQPD/embed/" height="450" frameBorder="0" scrolling="no" allowFullScreen={false} title="Post Instagram Barra Velha EPIs" className="w-full" />
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <iframe src="https://www.instagram.com/p/DZ3Wqx6R4i8/embed/" height="450" frameBorder="0" scrolling="no" allowFullScreen={false} title="Post Instagram Barra Velha EPIs" className="w-full" />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Acompanhe nosso Instagram para mais novidades</p>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1E2F] text-center mb-10">Onde estamos</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.1234567890!2d-48.6872217!3d-26.6496575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d92be0608d4297%3A0xd6597c22b2743fd5!2sBarra%20velha%20comercio%20de%20EPIS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Barra Velha EPIs"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-800 font-medium">Paralela da BR101, nº 360 - São Cristóvão, Barra Velha - SC, 88390-000</p>
              <p className="text-gray-600 text-sm mt-1">Atendimento para empresas e profissionais da região</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 px-4 bg-[#0B1E2F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Contato</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="font-medium mb-1">Telefone / WhatsApp</p>
              <a href="https://api.whatsapp.com/send/?phone=5547991432541&text=Ol%C3%A1%2C%20peguei%20seu%20contato%20no%20site%20da%20Barra%20Velha%20EPIs%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0" className="text-[#E85D04] hover:underline">(47) 99143-2541</a>
            </div>
            <div>
              <p className="font-medium mb-1">Instagram</p>
              <a href="https://www.instagram.com/barravelhaepis/" target="_blank" rel="noopener noreferrer" className="text-[#E85D04] hover:underline">@barravelhaepis</a>
            </div>
            <div>
              <p className="font-medium mb-1">Horário</p>
              <div className="grid grid-cols-3 gap-12 text-left">
                <div>
                  <p className="text-sm font-semibold whitespace-nowrap">SEG-SEX:</p>
                  <p className="text-sm whitespace-nowrap">07:30 às 12:00</p>
                  <p className="text-sm whitespace-nowrap">13:15 às 17:30</p>
                </div>
                <div>
                  <p className="text-sm font-semibold whitespace-nowrap">SÁB:</p>
                  <p className="text-sm whitespace-nowrap">07:30 às 12:00</p>
                </div>
                <div>
                  <p className="text-sm font-semibold whitespace-nowrap">DOM:</p>
                  <p className="text-sm whitespace-nowrap">FECHADO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
