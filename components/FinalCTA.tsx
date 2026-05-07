"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionWrapper";

export default function FinalCTA() {
  return (
    <section className="bg-[#FF1E5B] py-20 font-['Plus_Jakarta_Sans'] text-white md:py-24">
      <div className="mx-auto max-w-[1120px] px-6 text-center">
        <FadeIn delay={0.2}>
          <h2 className="text-[40px] font-bold leading-tight md:text-[64px]">
            Quando o marketing fica sem estrutura, o crescimento também desacelera
          </h2>
          <p className="mx-auto mt-8 max-w-[900px] text-[22px] leading-relaxed text-white/88">
            Quanto tempo mais o marketing da sua empresa pode continuar funcionando sem um plano
            claro de execução?
          </p>
          <p className="mx-auto mt-5 max-w-[900px] text-[22px] leading-relaxed text-white/88">
            Empresas que crescem com consistência tratam marketing como uma operação contínua — não
            como uma sequência de tentativas isoladas.
          </p>
          <p className="mx-auto mt-8 max-w-[900px] text-[28px] font-bold leading-tight">
            Organizar a estratégia, o ritmo e as prioridades é o que transforma esforço em resultado.
          </p>
          <p className="mt-10 text-[22px] font-semibold">
            Se você quer previsibilidade de crescimento, a conversa começa aqui.
          </p>
          <motion.a
            href="#contato"
            className="cta-premium mt-8 inline-flex bg-[#80D509] px-10 py-5 text-center text-[18px] font-black uppercase text-white shadow-[0_10px_20px_rgba(128,213,9,0.3)] hover:bg-[#8DEF0A]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Quero estruturar meu marketing
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
