"use client";

import { FadeIn } from "./MotionWrapper";

const pains = [
  "Você investe, mas não tem previsibilidade de resultados",
  "Campanhas começam e param sem evolução clara",
  "O comercial sente dificuldade com a qualidade dos leads",
  "O time interno vive sobrecarregado e sem prioridade definida",
];

export default function PainSection() {
  return (
    <section className="bg-[#EEEEEE] py-20 font-['Plus_Jakarta_Sans'] md:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <h2 className="max-w-[880px] text-[40px] font-bold leading-tight text-[#1D1D1D] md:text-[60px]">
            Se o marketing da sua empresa hoje parece assim...
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {pains.map((pain, index) => (
            <FadeIn key={pain} delay={0.25 + index * 0.1}>
              <div className="flex min-h-[130px] items-start gap-5 bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FF1E5B] text-[22px] font-bold text-white">
                  ✓
                </span>
                <p className="text-[22px] font-semibold leading-snug text-[#1D1D1D]">{pain}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 bg-[#6C5CE7] p-8 text-white md:p-10">
            <p className="text-[28px] font-bold leading-tight md:text-[40px]">
              Muitas empresas não precisam fazer mais marketing.
            </p>
            <p className="mt-3 text-[24px] font-semibold leading-tight text-white/90 md:text-[34px]">
              Precisam organizar o marketing para crescer com consistência.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
