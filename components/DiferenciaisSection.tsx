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
          <h2 className="text-[48px] font-bold text-[#1A1A1A] mb-20 text-center">
            Diferenciais Meme Digital
          </h2>
        </FadeIn>

        {/* items-end alinha as bases das duas imagens */}
        <FadeIn delay={0.3}>
          <div className="flex gap-10 items-end mb-16">
            <div className="w-[62%]">
              <img
                src="/images/meme-digital-diferenciais-1.png"
                className="w-full h-auto object-contain block"
                alt="Diferencial Principal"
              />
            </div>
            <div className="w-[38%]">
              <img
                src="/images/meme-digital-diferenciais-2.png"
                className="w-full h-auto object-contain block"
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
                  className="border border-[#6767F1] text-[#6767F1] px-6 py-2 rounded-full text-[14px] font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.a
              href="#contato"
              className="btn-premium shrink-0 px-12 py-5 font-bold uppercase text-[15px]"
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
