"use client";

import React, { useState } from "react";
import { FadeIn } from "./MotionWrapper";

const Method = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const memeCards = [
    {
      id: 1,
      title: "Atração",
      text: "Atrair o público-alvo com planejamento estratégico, branding, campanhas de marketing, landing pages otimizadas, conteúdo criativo, tráfego pago e SEO.",
    },
    {
      id: 2,
      title: "Engajamento",
      text: "Envolver o público oferecendo conteúdo valioso, construindo confiança por meio de UX otimizado e tornando a marca uma referência apaixonante.",
    },
    {
      id: 3,
      title: "Venda",
      text: "Converter engajamento em vendas com estratégias eficazes de tráfego pago, landing pages, CRM, automações e integração com a equipe comercial.",
    },
  ];

  return (
    <section className="w-full bg-[#EEEEEE] py-24 font-['Plus_Jakarta_Sans']">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-[600px]">
              <h2 className="mb-4 text-[64px] font-bold leading-[1.1] text-[#1D1D1D]">
                Método <span className="text-[#1D1D1D]">Meme7</span>
              </h2>
              <p className="text-[18px] leading-relaxed text-[#1D1D1D]/80">
                Atrair os clientes certos, aumentar o reconhecimento da marca e vender muito mais!
              </p>
            </div>
            <a
              href="#contato"
              className="btn-premium inline-flex w-full items-center justify-center bg-[#6C5CE7] px-10 py-4 text-[18px] font-semibold uppercase tracking-wider text-white lg:w-auto"
            >
              Fale com um especialista agora
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {memeCards.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <FadeIn key={card.id} delay={0.4 + card.id * 0.2}>
                <div
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex h-[415px] cursor-pointer flex-col justify-start border border-transparent p-10 shadow-sm transition-all duration-500 ${
                    isHovered ? "bg-[#FF1E5B] -translate-y-2" : "bg-white"
                  }`}
                >
                  <div className="mb-6 flex items-baseline gap-4">
                    <span
                      className={`text-[80px] font-bold leading-none transition-colors ${
                        isHovered ? "text-white" : "text-[#1D1D1D]"
                      }`}
                    >
                      {card.id}
                    </span>
                    <h3
                      className={`text-[32px] font-light transition-colors ${
                        isHovered ? "text-white" : "text-[#1D1D1D]"
                      }`}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p
                    className={`text-[18px] leading-[1.6] transition-colors ${
                      isHovered ? "text-white/90" : "text-[#1D1D1D]/70"
                    }`}
                  >
                    {card.text}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Method;
