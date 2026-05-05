"use client";

import React from "react";
import { FadeIn } from "./MotionWrapper";

const Deliverables = () => {
  return (
    <section className="relative w-full py-32 bg-white flex justify-center font-['Plus_Jakarta_Sans']">
      {/* Container fixo 1220px */}
      <div className="relative w-[1220px] h-[530px]">

        {/* Bloco Roxo (Rectangle 12352) */}
        <div className="absolute w-[1220px] h-[450px] bg-[#6767F1] left-0 top-0 z-10 flex items-center px-[45px]">
          <div className="grid grid-cols-2 w-full">

            <FadeIn delay={0.2}>
              <div className="space-y-[50px]">
                <div className="text-white">
                  <p className="text-[25px] leading-[34px] opacity-80">Valor total estimado:</p>
                  <p className="text-[25px] font-bold">R$ 80.000</p>
                </div>
                <div className="text-white">
                  <p className="text-[25px] leading-[34px] opacity-80">Valor percebido:</p>
                  <p className="text-[25px] font-bold">acima de R$ 150.000</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="text-white">
                <h4 className="text-[35px] font-bold mb-6 tracking-[-0.01em]">Incluindo:</h4>
                <ul className="space-y-4 text-[20px] font-bold list-none">
                  <li>✓ Auditorias completas</li>
                  <li>✓ Plano de crescimento (12 meses)</li>
                  <li>✓ Ações priorizadas</li>
                  <li>✓ Materiais prontos para uso</li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Borda Preta (Rectangle 12354) — pixel-perfect do Figma */}
        <FadeIn delay={0.6} direction="left">
          <div className="absolute w-[378px] h-[480px] left-[792px] top-[50px] border-[4px] border-[#1D1D1D] z-20 flex items-center justify-center">
            <h2 className="text-white text-[50px] font-bold leading-[63px] tracking-[-0.03em] text-center">
              Valor dos<br />Entregáveis
            </h2>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Deliverables;
