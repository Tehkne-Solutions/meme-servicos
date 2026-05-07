"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionWrapper";

const steps = [
  "Reunião estratégica de aproximadamente 30–40 minutos",
  "Análise do cenário atual de marketing e vendas",
  "Recomendações iniciais de estrutura, canais e funil",
  "Orientação sobre onde investir primeiro para gerar resultado",
];

export default function StrategicDiagnosis() {
  return (
    <section className="bg-white py-20 font-['Plus_Jakarta_Sans'] md:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="max-w-[900px]">
            <h2 className="text-[44px] font-bold leading-tight text-[#1D1D1D] md:text-[64px]">
              Diagnóstico estratégico inicial
            </h2>
            <p className="mt-6 text-[22px] leading-relaxed text-[#4D4D4D]">
              A primeira reunião tem como objetivo analisar o cenário atual e indicar um plano
              inicial de evolução do marketing. A decisão de continuidade acontece somente se fizer
              sentido para os dois lados.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn delay={0.3}>
            <div className="bg-[#FF1E5B] p-8 text-white">
              <h3 className="text-[32px] font-bold leading-tight">
                O que acontece quando você solicita uma proposta
              </h3>
              <p className="mt-5 text-[20px] leading-relaxed text-white/90">
                Como funciona a primeira conversa com a Meme:
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <FadeIn key={step} delay={0.35 + index * 0.1}>
                <div className="flex items-start gap-4 border-2 border-[#6767F1] p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#80D509] font-bold text-white">
                    ✓
                  </span>
                  <p className="text-[20px] font-semibold leading-relaxed text-[#1D1D1D]">{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.45}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 bg-[#F4F4F4] p-7 md:flex-row md:items-center">
            <p className="max-w-[760px] text-[20px] font-semibold leading-relaxed text-[#4D4D4D]">
              Você não assume nenhum compromisso. É uma conversa para entender se faz sentido evoluir
              juntos.
            </p>
            <motion.a
              href="#contato"
              className="btn-premium inline-flex w-full justify-center px-10 py-5 text-center text-[16px] font-bold uppercase md:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Quero falar com um especialista
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
