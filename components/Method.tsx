"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
  {
    title: "Fidelização",
    intro: "A experiência continua depois da primeira conversão:",
    items: [
      "Fluxos de relacionamento pós-venda",
      "Comunicação segmentada por perfil e estágio",
      "Conteúdos para retenção e expansão de conta",
      "Acompanhamento de satisfação e oportunidades",
    ],
  },
  {
    title: "Indicação",
    intro: "Clientes satisfeitos viram canais de crescimento:",
    items: [
      "Estratégias para estimular recomendações",
      "Campanhas de indicação e prova social",
      "Ativos para depoimentos, cases e validação",
      "Mapeamento de promotores da marca",
    ],
  },
  {
    title: "Análise de Dados",
    intro: "As decisões deixam de depender de achismo:",
    items: [
      "Dashboards de funil e performance",
      "Leitura de canais, campanhas e conversões",
      "Identificação de gargalos e oportunidades",
      "Ajustes orientados por métricas de negócio",
    ],
  },
  {
    title: "Recorrência",
    intro: "A operação ganha ritmo para crescer com consistência:",
    items: [
      "Rotina mensal de acompanhamento e otimização",
      "Priorização contínua das frentes de marketing",
      "Relatórios executivos com próximos passos",
      "Evolução do funil com foco em previsibilidade",
    ],
  },
];

const funnel = ["Atração", "Engajamento", "Conversão", "Vendas"];

export default function Method() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const normalizedIndex = Math.max(0, Math.min(index, pillars.length - 1));
    const card = container.children[normalizedIndex] as HTMLElement | undefined;

    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(normalizedIndex);
  };

  const goPrev = () => {
    scrollToIndex(activeIndex === 0 ? pillars.length - 1 : activeIndex - 1);
  };

  const goNext = () => {
    scrollToIndex(activeIndex === pillars.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <section className="w-full bg-[#EEEEEE] py-20 font-['Plus_Jakarta_Sans'] md:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="max-w-[900px]">
            <h2 className="mb-5 text-[48px] font-bold leading-tight text-[#1D1D1D] md:text-[64px]">
              Método Meme7
            </h2>

            <p className="text-[22px] leading-relaxed text-[#1D1D1D]/80">
              Uma operação completa para atrair, converter e vender, com as frentes trabalhando no
              mesmo plano.
            </p>
          </div>

          <div className="mt-6 w-full border-l-4 border-[#FF1E5B] bg-white p-5 md:p-7">
            <p className="max-w-[900px] text-[24px] font-bold leading-snug text-[#1D1D1D]">
              "O objetivo final é gerar demanda qualificada e impacto real no faturamento."
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex items-center justify-between gap-4">
            <p className="text-[18px] font-bold uppercase tracking-wide text-[#6767F1]">
              7 frentes conectadas
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Ver item anterior do Método Meme7"
                onClick={goPrev}
                className="flex h-11 w-11 items-center justify-center border-2 border-[#6767F1] text-[24px] font-bold text-[#6767F1] transition-all hover:bg-[#6767F1] hover:text-white"
              >
                ‹
              </button>

              <button
                type="button"
                aria-label="Ver próximo item do Método Meme7"
                onClick={goNext}
                className="flex h-11 w-11 items-center justify-center border-2 border-[#6767F1] text-[24px] font-bold text-[#6767F1] transition-all hover:bg-[#6767F1] hover:text-white"
              >
                ›
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-4"
          >
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                className="group flex min-h-[560px] min-w-full snap-start flex-col bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#FF1E5B] hover:text-white hover:shadow-2xl sm:min-w-[calc(50%-16px)] lg:min-w-[calc((100%-64px)/3)]"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <span className="text-[72px] font-bold leading-none">
                  {index + 1}
                </span>

                <h3 className="mt-4 text-[34px] font-bold">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-[18px] font-semibold leading-relaxed">
                  {pillar.intro}
                </p>

                <ul className="mt-6 space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="text-[17px] leading-relaxed">
                      - {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.title}
                type="button"
                aria-label={`Ir para ${pillar.title}`}
                onClick={() => scrollToIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-10 bg-[#FF1E5B]"
                    : "w-3 bg-[#6767F1]/35 hover:bg-[#6767F1]"
                }`}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-12 bg-[#6767F1] p-7 text-white md:p-9">
            <h3 className="mb-6 text-[28px] font-bold">
              Como isso aparece no funil
            </h3>

            <div className="grid gap-4 md:grid-cols-4">
              {funnel.map((step, index) => (
                <motion.div
                  key={step}
                  className="group flex items-center gap-4"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 * index,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <motion.div
                    className="flex min-h-[88px] flex-1 items-center justify-center border-2 border-white px-4 text-center text-[20px] font-bold transition-colors duration-300 group-hover:bg-white group-hover:text-[#6767F1]"
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  >
                    {step}
                  </motion.div>

                  {index < funnel.length - 1 && (
                    <motion.span
                      className="hidden text-[30px] font-bold md:block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                    >
                      →
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}