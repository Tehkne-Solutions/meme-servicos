"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionWrapper";
import { LogoCarousel } from "./LogoCarousel";

const tags = [
  "Profundidade real personalização total",
  "Ativos reais e não só análises",
  "Equipe sênior meme7",
  "Estratégia + execução",
  "Foco direto em faturamento",
];

export default function DiferenciaisSection() {
  return (
    <section className="w-full py-24 bg-white font-sans">
      <div className="mx-auto max-w-[1320px] px-8">
        <FadeIn delay={0.2}>
          <h2 className="mb-12 font-sans text-[48px] font-bold leading-[1.1] text-[#1A1A1A] lg:text-[62px]">
            Diferenciais Meme Digital
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex gap-10 items-end mb-16">
            {/* Imagem 1 — maior, altura fixa */}
            <div className="w-[62%] h-[352px] overflow-hidden">
              <img
                src="/images/meme-digital-diferenciais-1.png"
                className="w-full h-full object-cover"
                alt="Diferencial Principal"
              />
            </div>
            {/* Imagem 2 — menor, mesma altura */}
            <div className="w-[38%] h-[352px] overflow-hidden">
              <img
                src="/images/meme-digital-diferenciais-2.png"
                className="w-full h-full object-cover"
                alt="Diferencial Secundário"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-3 max-w-[850px]">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border-2 border-[#6767F1] text-[#6767F1] px-6 py-2 rounded-full text-[14px] font-medium uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.a
              href="#contato"
              className="shrink-0 bg-[#FF1E5B] text-white px-12 py-5 font-bold uppercase text-[15px] hover:brightness-110 transition-all"
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
