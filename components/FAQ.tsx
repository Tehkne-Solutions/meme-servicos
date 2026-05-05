"use client";

import React from "react";
import { FadeIn } from "./MotionWrapper";

const FAQ = () => {
  return (
    <section className="py-24 font-['Plus_Jakarta_Sans']">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <FadeIn delay={0.2}>
            <div className="flex min-h-[356px] flex-col">
              <div className="flex h-[183px] items-center justify-center bg-[#FF1E5B]">
                <h2 className="text-[65px] font-bold tracking-[-0.02em] text-white">FAQ:</h2>
              </div>
              <div className="flex h-[173px] flex-col justify-center bg-[#1A1A1A] p-8">
                <h4 className="mb-2 text-[20px] font-semibold text-white">Quanto custa?</h4>
                <p className="text-[16px] leading-[22px] text-white/80">
                  Investimento sob consulta, com devolução de 100%.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex min-h-[356px] flex-col">
              <div className="flex h-[120px] flex-col justify-center bg-[#1A1A1A] p-8">
                <h4 className="mb-2 text-[20px] font-semibold text-white">Quanto tempo dura?</h4>
                <p className="text-[16px] leading-[22px] text-white/80">
                  30 dias de projeto intensivo.
                </p>
              </div>
              <div className="h-[236px] bg-[#6C5CE7]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex min-h-[356px] flex-col">
              <div className="h-[183px] bg-[#FF1E5B]" />
              <div className="flex h-[173px] flex-col justify-center bg-[#1A1A1A] p-8">
                <h4 className="mb-2 text-[20px] font-semibold text-white">Quem pode participar?</h4>
                <p className="text-[16px] leading-[22px] text-white/80">
                  Empresas com faturamento acima de R$ 70 mil/mês.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex min-h-[356px] flex-col">
              <div className="flex h-[173px] flex-col justify-center bg-[#1A1A1A] p-8">
                <h4 className="mb-2 text-[20px] font-semibold text-white">O que recebo?</h4>
                <p className="text-[16px] leading-[22px] text-white/80">
                  Diagnóstico, CRM, materiais e plano de 12 meses.
                </p>
              </div>
              <div className="h-[183px] bg-[#6C5CE7]" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
