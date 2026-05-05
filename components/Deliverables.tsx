"use client";

import React from "react";
import { FadeIn } from "./MotionWrapper";

const Deliverables = () => {
  return (
    <section className="w-full py-24 bg-white font-['Plus_Jakarta_Sans']">
      <div className="mx-auto max-w-[1220px] px-4 md:px-0 relative h-[450px]">
        {/* Container Roxo Principal */}
        <div className="absolute inset-0 bg-[#6767F1] flex items-center px-16 z-10">
          <div className="grid grid-cols-3 w-full items-center gap-8">

            {/* Esquerda: Valores */}
            <FadeIn delay={0.2}>
              <div className="text-white space-y-10">
                <div>
                  <p className="text-[25px] opacity-80">Valor total estimado:</p>
                  <h3 className="text-[32px] font-bold">R$ 80.000</h3>
                </div>
                <div>
                  <p className="text-[25px] opacity-80">Valor percebido:</p>
                  <h3 className="text-[32px] font-bold">acima de R$ 150.000</h3>
                </div>
              </div>
            </FadeIn>

            {/* Centro: Incluindo */}
            <FadeIn delay={0.4}>
              <div className="text-white">
                <h4 className="text-[35px] font-bold mb-6">Incluindo:</h4>
                <ul className="space-y-4 text-[20px] font-bold list-none">
                  <li>✓ Auditorias completas</li>
                  <li>✓ Plano de crescimento (12 meses)</li>
                  <li>✓ Ações priorizadas</li>
                  <li>✓ Materiais prontos para uso</li>
                </ul>
              </div>
            </FadeIn>

            {/* Direita: Fundo transparente, fonte branca */}
            <FadeIn delay={0.6} direction="left">
              <div className="text-right">
                <h2 className="text-white text-[55px] font-bold leading-[1.1] tracking-[-0.03em]">
                  Valor dos<br />Entregáveis
                </h2>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Borda Preta Decorativa (Rectangle 12354) — flutuante, fora do roxo */}
        <div className="absolute right-[-20px] top-[40px] w-[390px] h-[490px] border-[4px] border-[#1D1D1D] z-0 pointer-events-none" />
      </div>
    </section>
  );
};

export default Deliverables;
