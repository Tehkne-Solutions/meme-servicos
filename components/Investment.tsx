"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionWrapper";

const criteria = [
  "Quantidade de frentes necessárias (performance, SEO, criação, web, LP, CRM, etc.)",
  "Volume de entregas mensais",
  "Complexidade da operação e do funil",
  "Nível de acompanhamento e relatórios necessários",
];

export default function Investment() {
  return (
    <section className="w-full bg-white py-20 font-['Plus_Jakarta_Sans'] md:py-24">
      <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <FadeIn delay={0.2}>
          <div>
            <h2 className="text-[48px] font-bold leading-tight text-[#1D1D1D] md:text-[64px]">
              Investimento
            </h2>
            <p className="mt-6 text-[22px] leading-relaxed text-[#4D4D4D]">
              Trabalhamos com operações mensais personalizadas de acordo com a complexidade da sua
              necessidade, o volume de entregas e as frentes envolvidas.
            </p>
            <motion.a
              href="#contato"
              className="btn-premium mt-10 inline-flex w-full justify-center px-10 py-5 text-center text-[16px] font-bold uppercase md:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Quero falar com um especialista
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction="left">
          <div className="bg-[#6767F1] p-7 text-white md:p-10">
            <p className="text-[18px] font-semibold uppercase tracking-wide text-white/75">
              A partir de
            </p>
            <p className="mt-2 text-[42px] font-black leading-tight md:text-[58px]">
              R$ 3.500/mês
            </p>
            <p className="mt-3 text-[22px] font-semibold">para operações essenciais</p>
            <p className="mt-8 text-[18px] leading-relaxed text-white/88">
              Projetos completos variam entre R$ 3.500 e R$ 12.000/mês, dependendo do escopo,
              número de frentes ativas e frequência de entregas. Para projetos maiores, sob
              consulta.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="w-full border-4 border-[#1D1D1D] p-7 md:p-9 lg:col-span-2">
            <h3 className="mb-8 text-[28px] font-bold text-[#1D1D1D]">Como definimos:</h3>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {criteria.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center bg-[#80D509] font-bold text-white">
                    ✓
                  </span>
                  <p className="text-[17px] leading-relaxed text-[#4D4D4D]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 w-full bg-[#F4F4F4] p-6 text-[18px] font-semibold leading-relaxed text-[#4D4D4D]">
              O valor é definido após diagnóstico inicial, garantindo que a estrutura montada seja
              adequada ao seu momento e objetivo.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
