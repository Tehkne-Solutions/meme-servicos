"use client";

import { FadeIn } from "./MotionWrapper";

const pillars = [
  {
    title: "Atração",
    intro: "Você começa a aparecer para as pessoas certas:",
    items: [
      "Planejamento e personas",
      "Conteúdo e SEO para demanda real",
      "Tráfego pago com criativos e testes",
      "Landing pages pensadas para conversão",
    ],
  },
  {
    title: "Engajamento",
    intro: "A pessoa entende, confia e avança com menos dúvida:",
    items: [
      "UX/UI para reduzir fricção",
      "Copywriting e mensagens para páginas e campanhas",
      "Criativos e identidade visual com consistência",
      "Conteúdo que sustenta decisão, não só alcance",
    ],
  },
  {
    title: "Venda",
    intro: "O comercial recebe melhor e responde melhor:",
    items: [
      "CRM e automações de nutrição",
      "Fluxos, alertas e cadências de follow-up",
      "Dashboards e relatórios para decisões",
      "Ajustes contínuos com base no funil",
    ],
  },
];

const funnel = ["Atração", "Engajamento", "Conversão", "Vendas"];

export default function Method() {
  return (
    <section className="w-full bg-[#EEEEEE] py-20 font-['Plus_Jakarta_Sans'] md:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="mb-14 max-w-[900px]">
            <h2 className="mb-5 text-[48px] font-bold leading-tight text-[#1D1D1D] md:text-[64px]">
              Método Meme7
            </h2>
            <p className="text-[22px] leading-relaxed text-[#1D1D1D]/80">
              Uma operação completa para atrair, converter e vender, com as frentes trabalhando no
              mesmo plano.
            </p>
            <p className="mt-6 border-l-4 border-[#FF1E5B] bg-white p-5 text-[24px] font-bold leading-snug text-[#1D1D1D]">
              “O objetivo final é gerar demanda qualificada e impacto real no faturamento.”
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={0.3 + index * 0.15}>
              <article className="flex h-full flex-col bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#FF1E5B] hover:text-white hover:shadow-2xl">
                <span className="text-[72px] font-bold leading-none">{index + 1}</span>
                <h3 className="mt-4 text-[34px] font-bold">{pillar.title}</h3>
                <p className="mt-4 text-[18px] font-semibold leading-relaxed">{pillar.intro}</p>
                <ul className="mt-6 space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="text-[17px] leading-relaxed">
                      - {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.45}>
          <div className="mt-12 bg-[#6767F1] p-7 text-white md:p-9">
            <h3 className="mb-6 text-[28px] font-bold">Como isso aparece no funil</h3>
            <div className="grid gap-4 md:grid-cols-4">
              {funnel.map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex min-h-[88px] flex-1 items-center justify-center border-2 border-white px-4 text-center text-[20px] font-bold">
                    {step}
                  </div>
                  {index < funnel.length - 1 && <span className="hidden text-[30px] font-bold md:block">→</span>}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
