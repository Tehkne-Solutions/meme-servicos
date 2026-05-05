"use client";

import React, { useState } from "react";

const Secao30Dias = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const etapas = [
    {
      id: "1",
      sub: "Onboarding Técnico",
      itens: ["Mapeamento completo", "Coleta de dados", "Alinhamento de metas"],
    },
    {
      id: "2",
      sub: "Diagnóstico de Marketing",
      itens: [
        "Auditoria de campanhas",
        "Análise de criativos, CRO, UX e funis",
        "Plano de ação imediato",
      ],
    },
    {
      id: "3",
      sub: "Diagnóstico Comercial",
      itens: ["Análise de CRM e processos", "Conversão e follow-up", "Gargalos e oportunidades"],
    },
  ];

  return (
    <section className="bg-[#EEEEEE] py-24 font-['Plus_Jakarta_Sans']">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <div className="mb-20 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[539px] text-[48px] font-bold leading-[1.1] text-[#1D1D1D] md:text-[64px] md:leading-[81px]">
            O que acontece nesses <span className="text-[#FF1E5B]">30 dias</span>
          </h2>
          <a
            href="#contato"
            className="btn-premium flex h-[60px] w-full items-center justify-center text-[20px] font-normal tracking-wide md:w-[415px]"
          >
            Quero meu mapa estratégico
          </a>
        </div>

        <div className="grid w-full grid-cols-1 gap-[35px] md:grid-cols-3">
          {etapas.map((etapa, index) => (
            <div
              key={etapa.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative flex h-[415px] w-full cursor-pointer flex-col p-10 transition-all duration-500 ease-in-out ${
                hoveredIndex === index ? "bg-[#6C5CE7]" : "bg-white"
              } shadow-sm hover:shadow-2xl`}
            >
              <div className="mb-8 flex items-start gap-4">
                <span
                  className={`text-[150px] font-bold leading-[110px] transition-colors duration-500 ${
                    hoveredIndex === index ? "text-white" : "text-[#1D1D1D]"
                  }`}
                >
                  {etapa.id}
                </span>
                <div className="pt-4">
                  <h4
                    className={`text-[40px] font-normal leading-[50px] transition-colors duration-500 ${
                      hoveredIndex === index ? "text-white" : "text-[#1D1D1D]"
                    }`}
                  >
                    Semana
                  </h4>
                  <p
                    className={`text-[18px] font-extrabold leading-[27px] opacity-80 transition-colors duration-500 ${
                      hoveredIndex === index ? "text-white" : "text-[#1D1D1D]"
                    }`}
                  >
                    {etapa.sub}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {etapa.itens.map((item) => (
                  <li
                    key={item}
                    className={`text-[22px] font-normal leading-[34px] opacity-80 transition-colors duration-500 ${
                      hoveredIndex === index ? "text-white" : "text-[#1D1D1D]"
                    }`}
                  >
                    - {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secao30Dias;
