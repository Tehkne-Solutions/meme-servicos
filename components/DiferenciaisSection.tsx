"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionWrapper";
import { LogoCarousel } from "./LogoCarousel";

const differentials = [
  {
    title: "Agência martech de verdade",
    text: "Tecnologia, marketing e criação trabalhando no mesmo plano.",
  },
  {
    title: "Equipe especialista",
    text: "Especialistas por frente, com coordenação e acompanhamento contínuo.",
  },
  {
    title: "Estratégia e execução",
    text: "O planejamento define as prioridades e a execução valida as escolhas, com ajustes ao longo do mês.",
  },
  {
    title: "Visão de funil",
    text: "O objetivo não é postar mais, é conectar aquisição, conversão e comercial.",
  },
  {
    title: "Profundidade real e personalização total",
    text: "O escopo é desenhado pelo seu contexto, com o diagnóstico definindo prioridades e sequência.",
  },
  {
    title: "Equipe Sênior Meme7",
    text: "Coordenação sênior na rotina e nas prioridades do mês.",
  },
  {
    title: "Foco direto em faturamento",
    text: "Acompanhamento por indicadores do funil, com decisões orientadas para impacto no negócio.",
  },
];

export default function DiferenciaisSection() {
  return (
    <section className="w-full bg-white py-20 font-sans md:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <h2 className="mb-12 font-sans text-[42px] font-bold leading-tight text-[#1A1A1A] lg:text-[62px]">
            Diferenciais Meme Digital
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="h-[320px] overflow-hidden md:h-[380px]">
              <img
                src="/images/meme-digital-diferenciais-1.png"
                className="h-full w-full object-cover"
                alt="Diferencial Principal"
              />
            </div>
            <div className="h-[320px] overflow-hidden md:h-[380px]">
              <img
                src="/images/meme-digital-diferenciais-2.png"
                className="h-full w-full object-cover"
                alt="Diferencial Secundário"
              />
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <FadeIn key={item.title} delay={0.25 + index * 0.08}>
              <article className="h-full border-2 border-[#6767F1] p-6">
                <h3 className="text-[22px] font-bold leading-tight text-[#6767F1]">{item.title}</h3>
                <p className="mt-4 text-[17px] leading-relaxed text-[#1A1A1A]/75">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex justify-start">
            <motion.a
              href="#contato"
              className="shrink-0 bg-[#FF1E5B] px-10 py-5 text-center text-[15px] font-bold uppercase text-white transition-all hover:brightness-110"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Entender como trabalhamos
            </motion.a>
          </div>
        </FadeIn>
      </div>

      <LogoCarousel />
    </section>
  );
}
