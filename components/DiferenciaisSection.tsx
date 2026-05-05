"use client";

import Image from "next/image";
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
      <div className="mx-auto max-w-[1220px] px-6 text-center">
        <FadeIn delay={0.2}>
          <h2 className="text-[45px] font-bold mb-16 text-[#1A1A1A]">
            Diferenciais Meme Digital
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex justify-center gap-6 mb-12">
            <div className="relative w-full max-w-[780px] aspect-[16/9] overflow-hidden">
              <Image
                src="/images/meme-digital-diferenciais-1.png"
                alt="Profissional da Meme Digital em ambiente de trabalho"
                fill
                sizes="(max-width: 767px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full max-w-[380px] aspect-[9/16] overflow-hidden">
              <Image
                src="/images/meme-digital-diferenciais-2.png"
                alt="Profissional da Meme Digital utilizando tablet"
                fill
                sizes="(max-width: 767px) 100vw, 34vw"
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-[#6767F1] px-6 py-2 text-[18px] font-medium text-[#6767F1]"
                >
                  {tag}
                </div>
              ))}
            </div>

            <motion.a
              href="#contato"
              className="btn-premium shrink-0 px-8 py-4 text-[18px] font-bold"
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
