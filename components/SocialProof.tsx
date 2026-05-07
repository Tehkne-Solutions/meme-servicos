"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionWrapper";

const results = [
  "+187% de crescimento em leads qualificados",
  "Redução de 32% no custo de aquisição",
  "Estruturação completa de funil comercial e marketing",
  "Operação contínua com entregas semanais",
];

export default function SocialProof() {
  return (
    <section className="bg-white">
      <div className="bg-[#FF1E5B] py-16 text-white md:py-24">
        <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-6 lg:grid-cols-[0.9fr_1.5fr] lg:px-8">
          <FadeIn delay={0.2}>
            <div className="border-4 border-white p-6">
              <h2 className="font-jakarta text-[38px] font-bold leading-tight md:text-[52px]">
                Resultados que já ajudamos clientes a construir
              </h2>
              <p className="mt-5 text-[18px] leading-relaxed text-white/85">
                Números de projetos reais, em operações acompanhadas de perto.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2">
            {results.map((result, index) => (
              <FadeIn key={result} delay={0.25 + index * 0.1}>
                <div className="flex min-h-[150px] items-end bg-white/10 p-6">
                  <p className="text-[24px] font-semibold leading-tight tracking-tight md:text-[30px]">
                    {result}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-8">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <div className="flex flex-col items-start justify-between gap-6 bg-white p-8 shadow-lg md:flex-row md:items-center">
              <p className="max-w-[720px] text-[20px] font-semibold leading-relaxed text-[#4D4D4D]">
                Operações acompanhadas de perto, com estratégia, execução e performance no mesmo
                plano.
              </p>
              <motion.a
                href="#contato"
                className="cta-premium flex w-full justify-center bg-[#F5C402] px-8 py-4 text-center font-bold uppercase text-black hover:brightness-95 md:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Quero entender o plano ideal
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
