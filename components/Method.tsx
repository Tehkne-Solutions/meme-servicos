"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./MotionWrapper";

const pillars = [
  {
    title: "Atração",
    description:
      "Atrair o público-alvo com planejamento estratégico, branding, campanhas de marketing, landing pages otimizadas por produto, conteúdo atraente, tráfego pago, SEO e anúncios criativos.",
  },
  {
    title: "Engajamento",
    description:
      "Envolver o público oferecendo conteúdo valioso, construindo confiança por meio de landing pages otimizadas (UX), copywriting persuasivo e tornando a marca uma referência apaixonante para o cliente.",
  },
  {
    title: "Venda",
    description:
      "Converter engajamento em vendas com estratégias eficazes de tráfego pago, landing pages, CRM, automação de marketing e integração com o time comercial para abordagens personalizadas.",
  },
  {
    title: "Fidelização",
    description:
      "Construir relacionamentos sólidos por meio de automação de e-mail marketing, pós-venda atencioso, integração com a equipe comercial e campanhas exclusivas para clientes recorrentes.",
  },
  {
    title: "Indicação",
    description:
      "Incentivar clientes a recomendarem a marca por meio de depoimentos, avaliações no Google e ações digitais que aumentem a confiança e a reputação da empresa.",
  },
  {
    title: "Análise de Dados",
    description:
      "Monitorar resultados e performance, adotar novas tecnologias e ajustar estratégias com base em insights obtidos por dashboards e relatórios detalhados.",
  },
  {
    title: "Recorrência",
    description:
      "Garantir a retenção e fidelização do cliente com o uso de CRM, automações para estimular compras recorrentes e estratégias para assegurar uma experiência satisfatória e contínua.",
  },
];

const cycle = [
  "Atração",
  "Engajamento",
  "Venda",
  "Fidelização",
  "Indicação",
  "Análise de Dados",
  "Recorrência",
];

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
              Atrair os clientes certos, aumentar o reconhecimento da marca e vender muito mais!
            </p>
          </div>

          <div className="mt-6 w-full border-l-4 border-[#FF1E5B] bg-white p-5 md:p-7">
            <p className="max-w-[900px] text-[24px] font-bold leading-snug text-[#1D1D1D]">
              Agora é apenas uma questão de repetir esse ciclo de forma contínua e consistente.
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
                className="group flex min-h-[500px] min-w-full snap-start flex-col bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#FF1E5B] hover:text-white hover:shadow-2xl sm:min-w-[calc(50%-16px)] lg:min-w-[calc((100%-64px)/3)]"
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
                  {pillar.description}
                </p>
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
              Como o ciclo MEME7 se conecta
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
              {cycle.map((step, index) => (
                <motion.div
                  key={step}
                  className="group relative flex min-h-[88px] items-center justify-center border-2 border-white px-4 text-center text-[17px] font-bold transition-colors duration-300 group-hover:bg-white group-hover:text-[#6767F1]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.06 * index,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  {step}

                  {index < cycle.length - 1 && (
                    <span className="pointer-events-none absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-[24px] font-bold text-white lg:block">
                      →
                    </span>
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