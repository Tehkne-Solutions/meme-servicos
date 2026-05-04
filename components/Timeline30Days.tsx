"use client";

import React, { useState } from 'react';

const Secao30Dias = () => {
  // Estado para controlar qual card está com hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const etapas = [
    { id: "1", sub: "Onboarding Técnico", itens: ["Mapeamento completo", "Coleta de dados", "Alinhamento de metas"] },
    { id: "2", sub: "Diagnóstico de Marketing", itens: ["Auditoria de campanhas", "Análise de criativos, CRO, UX e funis", "Plano de ação imediato"] },
    { id: "3", sub: "Diagnóstico Comercial", itens: ["Análise de CRM e processos", "Conversão e follow-up", "Gargalos e oportunidades"] }
  ];

  return (
    <section className="bg-[#EEEEEE] py-24 px-4 font-['Plus_Jakarta_Sans']">
      <div className="max-w-[1310px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <h2 className="text-[64px] font-bold leading-[81px] text-[#1D1D1D] max-w-[539px]">
            O que acontece nesses <span className="text-[#FF1E5B]">30 dias</span>
          </h2>
          {/* Botão com link para o formulário no rodapé */}
          <a href="#contato" className="btn-premium flex items-center justify-center w-full md:w-[415px] h-[60px] text-[20px] font-normal tracking-wide">
            Quero meu mapa estratégico
          </a>
        </div>

        <div className="relative flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[35px] w-full">
            {etapas.map((etapa, index) => (
              <div
                key={etapa.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative w-full h-[415px] p-10 cursor-pointer
                  transition-all duration-500 ease-in-out
                  ${hoveredIndex === index ? 'bg-[#6C5CE7]' : 'bg-white'}
                  shadow-sm hover:shadow-2xl
                `}
              >
                <div className="flex items-start gap-4 mb-8">
                  <span className={`text-[150px] font-bold leading-[110px] transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-[#1D1D1D]'}`}>
                    {etapa.id}
                  </span>
                  <div className="pt-4">
                    <h4 className={`text-[40px] font-normal leading-[50px] transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-[#1D1D1D]'}`}>
                      Semana
                    </h4>
                    <p className={`text-[18px] font-extrabold leading-[27px] opacity-80 transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-[#1D1D1D]'}`}>
                      {etapa.sub}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {etapa.itens.map((item, i) => (
                    <li key={i} className={`text-[22px] leading-[34px] font-normal opacity-80 transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-[#1D1D1D]'}`}>
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secao30Dias;
