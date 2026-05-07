"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionWrapper";

const benefits = [
  {
    icon: "/images/meme-digital-para-quem-e-icone-crescer-com-estrutura.png",
    title: "Crescer com estrutura",
    text: "Deixar de improvisar e ter uma operação organizada",
  },
  {
    icon: "/images/meme-digital-para-quem-e-icone-alinhar-marketing-vendas-e-operacao.png",
    title: "Alinhar marketing, vendas e operação",
    text: "Marketing e comercial com rotina, responsabilidades e acompanhamento definidos",
  },
  {
    icon: "/images/meme-digital-para-quem-e-icone-melhorar-a-performance-comercial.png",
    title: "Melhorar a performance comercial",
    text: "Aumentar conversão e reduzir desperdício de verba",
  },
  {
    icon: "/images/meme-digital-para-quem-e-icone-ter-um-plano-claro-de-execucao.png",
    title: "Ter um plano claro de execução",
    text: "Saber exatamente o que fazer e em que ordem",
  },
];

export default function Audience() {
  return (
    <section className="mx-auto flex max-w-[1320px] flex-col items-start gap-16 px-6 py-20 lg:flex-row lg:px-8">
      <FadeIn delay={0.2}>
        <div className="max-w-[370px] flex-1">
          <h2 className="mb-6 text-[48px] font-bold leading-tight text-[#1A1A1A] md:text-[60px]">
            Para quem faz sentido
          </h2>
          <p className="mb-10 text-[22px] leading-[32px] tracking-[-0.01em] text-[#1A1A1A]">
            Para empresas que faturam a partir de R$ 70 mil/mês e querem:
          </p>
          <motion.a
            href="#contato"
            className="btn-premium flex h-[70px] w-full items-center justify-center text-center text-[16px] font-semibold uppercase tracking-wider"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Quero falar com um especialista
          </motion.a>
        </div>
      </FadeIn>

      <div className="grid flex-[2] grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 xl:gap-x-24">
        {benefits.map((benefit, i) => (
          <FadeIn key={benefit.title} delay={0.3 + i * 0.15}>
            <div className="flex items-start">
              <div className="relative h-[132px] min-w-[132px]">
                <div className="flex h-[132px] w-[132px] items-center justify-center bg-[#6767F1] p-7 shadow-lg">
                  <img src={benefit.icon} alt="" className="h-full w-full object-contain" />
                </div>

                <div className="absolute -right-7 top-1/2 flex h-[54px] w-[54px] -translate-y-1/2 items-center justify-center bg-[#FF1E5B] shadow-md">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>

              <div className="ml-12">
                <h3 className="max-w-[280px] text-[24px] font-semibold leading-tight tracking-[-0.03em] text-[#1A1A1A]">
                  {benefit.title}
                </h3>
                <p className="mt-3 max-w-[280px] text-[17px] leading-relaxed text-[#1A1A1A]/70">
                  {benefit.text}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
