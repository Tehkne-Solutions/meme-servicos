"use client";

import React, { useState } from 'react';

const Method = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const memeCards = [
    {
      id: 1,
      title: 'Atração',
      text: 'Atrair o público-alvo com planejamento estratégico, branding, campanhas de marketing, landing pages otimizadas, conteúdo criativo, tráfego pago e SEO.',
    },
    {
      id: 2,
      title: 'Engajamento',
      text: 'Envolver o público oferecendo conteúdo valioso, construindo confiança por meio de UX otimizado e tornando a marca uma referência apaixonante.',
    },
    {
      id: 3,
      title: 'Venda',
      text: 'Converter engajamento em vendas com estratégias eficazes de tráfego pago, landing pages, CRM, automações e integração com a equipe comercial.',
    },
  ];

  return (
    <section className="w-full bg-[#EEEEEE] py-24 font-['Plus_Jakarta_Sans']">
      <div className="max-w-[1336px] mx-auto px-12">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-[600px]">
            <h2 className="text-[64px] font-bold text-[#1D1D1D] leading-[1.1] mb-4">Método <span className="text-[#1D1D1D]">Meme7</span></h2>
            <p className="text-[18px] text-[#1D1D1D]/80 leading-relaxed">
              Atrair os clientes certos, aumentar o reconhecimento da marca e vender muito mais!
            </p>
          </div>
          <a
            href="#contato"
            className="btn-premium bg-[#6C5CE7] text-white px-10 py-4 text-[18px] font-semibold uppercase tracking-wider"
          >
            Fale com um especialista agora
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {memeCards.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`transition-all duration-500 p-10 h-[415px] flex flex-col justify-start border border-transparent shadow-sm cursor-pointer ${
                  isHovered ? 'bg-[#FF1E5B] -translate-y-2' : 'bg-white'
                }`}
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span
                    className={`text-[80px] font-bold leading-none transition-colors ${
                      isHovered ? 'text-white' : 'text-[#1D1D1D]'
                    }`}
                  >
                    {card.id}
                  </span>
                  <h3
                    className={`text-[32px] font-light transition-colors ${
                      isHovered ? 'text-white' : 'text-[#1D1D1D]'
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className={`text-[18px] leading-[1.6] transition-colors ${
                    isHovered ? 'text-white/90' : 'text-[#1D1D1D]/70'
                  }`}
                >
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Method;
