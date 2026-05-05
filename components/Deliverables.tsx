"use client";

import React from "react";
import { FadeIn } from "./MotionWrapper";

const Deliverables = () => {
  return (
    <section className="w-full py-32 bg-white font-['Plus_Jakarta_Sans']">
      <div className="mx-auto max-w-[1220px] px-4 md:px-0 relative h-[480px]">

        {/* Bloco Roxo — 90% da largura, alinhado à esquerda */}
        <div className="absolute left-0 top-0 w-[90%] h-[420px] bg-[#6767F1] flex items-center px-16 z-10">
          <div className="grid grid-cols-2 w-full items-center gap-8">

            <FadeIn delay={0.2}>
              <div className="text-white space-y-10">
                <div>
                  <p className="text-[22px] opacity-80">Valor total estimado:</p>
                  <h3 className="text-[32px] font-bold">R$ 80.000</h3>
                </div>
                <div>
                  <p className="text-[22px] opacity-80">Valor percebido:</p>
                  <h3 className="text-[32px] font-bold">acima de R$ 150.000</h3>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="text-white border-l border-white/30 pl-10">
                <h4 className="text-[32px] font-bold mb-6">Incluindo:</h4>
                <ul className="space-y-3 text-[18px] font-medium list-none">
                  <li>✓ Auditorias completas</li>
                  <li>✓ Plano de crescimento (12 meses)</li>
                  <li>✓ Ações priorizadas</li>
                  <li>✓ Materiais prontos para uso</li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Moldura preta — posicionada no canto direito, sobreposta ao roxo */}
        <div className="absolute right-0 top-[-30px] z-20 border-[4px] border-[#1D1D1D] flex items-center justify-center min-w-[380px] min-h-[480px] bg-transparent pointer-events-none">
          <FadeIn delay={0.6} direction="left">
            <h2 className="text-white text-[52px] font-bold leading-[1.1] text-right tracking-[-0.03em] px-10">
              Valor dos<br />Entregáveis
            </h2>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default Deliverables;
