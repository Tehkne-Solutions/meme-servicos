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
    <section className="w-full bg-white py-20 font-sans">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <h2 className="mb-12 text-[40px] font-bold leading-[1.05] text-[#1A1A1A] md:text-[56px]">
            Diferenciais Meme Digital
          </h2>
        </FadeIn>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FadeIn delay={0.3}>
            <div className="relative h-[320px] overflow-hidden rounded-sm md:col-span-2 md:h-[450px]">
              <Image
                src="/images/meme-digital-diferenciais-1.png"
                alt="Profissional da Meme Digital em ambiente de trabalho"
                fill
                sizes="(max-width: 767px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.45} direction="left">
            <div className="relative h-[320px] overflow-hidden rounded-sm md:h-[450px]">
              <Image
                src="/images/meme-digital-diferenciais-2.png"
                alt="Profissional da Meme Digital utilizando tablet"
                fill
                sizes="(max-width: 767px) 100vw, 34vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex max-w-[900px] flex-wrap gap-3">
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
