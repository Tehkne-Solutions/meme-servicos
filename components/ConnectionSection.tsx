"use client";

import { FadeIn } from "./MotionWrapper";

export default function ConnectionSection() {
  return (
    <section className="bg-[#EEEEEE] py-20 font-['Plus_Jakarta_Sans'] md:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FadeIn delay={0.2}>
          <h2 className="text-[42px] font-bold leading-tight text-[#1D1D1D] md:text-[62px]">
            Conectamos pessoas e negócios no digital
          </h2>
        </FadeIn>
        <FadeIn delay={0.3} direction="left">
          <div className="bg-white p-8 shadow-sm md:p-10">
            <p className="text-[24px] leading-relaxed text-[#4D4D4D]">
              Somos uma agência MARTECH de marketing digital e tecnologia dedicada a proporcionar
              boas experiências de usuário e impulsionar altas taxas de conversão no B2B e B2C.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
