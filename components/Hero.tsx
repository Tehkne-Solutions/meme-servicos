"use client";

import { FadeIn } from "./MotionWrapper";
import LeadCaptureForm from "./LeadCaptureForm";

export default function Hero() {
  return (
    <section className="relative bg-white pb-16 pt-24 md:pb-24">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn delay={0.1}>
            <div className="max-w-[620px] text-left font-jakarta">
              <img
                src="/images/meme-digital-logo.png"
                alt="Meme Digital Logo"
                className="mb-8 h-12 w-auto"
              />
              <h1 className="text-[42px] font-bold leading-[1.08] tracking-tight sm:text-[52px] lg:text-[64px]">
                <span className="block text-[#6C5CE7]">
                  Tenha um time de marketing completo
                </span>
                <span className="block text-[#4D4D4D]">
                  sem montar uma equipe interna do zero
                </span>
              </h1>
              <p className="mt-8 text-[24px] leading-[34px] text-[#4D4D4D] md:text-[30px] md:leading-[40px]">
                Estratégia, execução e performance integradas para gerar demanda, organizar o funil
                e aumentar as vendas sem depender de ações isoladas.
              </p>
              <p className="mt-6 text-[16px] font-semibold uppercase tracking-wide text-[#6C5CE7]">
                Reunião estratégica • Sem compromisso de continuidade
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="left">
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[614px] rounded-none bg-[#6C5CE7] p-8 sm:p-10">
                <LeadCaptureForm variant="hero" submitLabel="Quero estruturar meu marketing agora" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
