"use client";

import React from "react";

const Deliverables = () => {
  return (
    <section className="w-full bg-white py-24 font-['Plus_Jakarta_Sans']">
      <div className="mx-auto max-w-[1220px] px-4 md:px-0">
        {/* Container Principal (Rectangle 12352) */}
        <div className="relative flex h-auto min-h-[450px] w-full flex-col items-start bg-[#6767F1] p-8 md:flex-row md:p-0">
          {/* Valor Total Estimado */}
          <div className="mb-8 space-y-1 md:absolute md:left-[45px] md:top-[122px] md:mb-0">
            <p className="text-[25px] font-normal leading-[34px] text-white opacity-80">
              Valor total estimado:
            </p>
            <h3 className="text-[32px] font-bold text-white">R$ 80.000</h3>
          </div>

          {/* Seção Incluindo (Centro) */}
          <div className="mb-8 max-w-[378px] md:absolute md:left-[460px] md:top-[122px] md:mb-0">
            <h4 className="mb-6 text-[35px] font-bold leading-[32px] tracking-[-0.01em] text-white">
              Incluindo:
            </h4>
            <ul className="list-none space-y-4 text-[20px] font-bold text-white">
              <li className="flex items-start gap-2">✓ Auditorias completas</li>
              <li className="flex items-start gap-2">
                ✓ Plano de crescimento{" "}
                <span className="text-[14px] font-normal opacity-80">(12 meses)</span>
              </li>
              <li className="flex items-start gap-2">✓ Ações priorizadas</li>
              <li className="flex items-start gap-2">✓ Materiais prontos para uso</li>
            </ul>
          </div>

          {/* Valor Percebido */}
          <div className="md:absolute md:left-[45px] md:top-[240px]">
            <p className="text-[25px] font-normal leading-[34px] text-white opacity-80">
              Valor percebido:
            </p>
            <h3 className="text-[32px] font-bold text-white">acima de R$ 150.000</h3>
          </div>

          {/* A CAIXA BRANCA (Rectangle 12354) */}
          <div className="z-10 flex h-[480px] w-full items-center justify-center border-[4px] border-[#1D1D1D] bg-transparent p-8 shadow-xl md:absolute md:left-[792px] md:top-[50px] md:w-[378px]">
            <h2 className="text-left text-[50px] font-bold leading-[63px] tracking-[-0.03em] text-white">
              Valor dos
              <br />
              Entregáveis
            </h2>
          </div>
        </div>
        {/* Compensação do overflow para o layout da página */}
        <div className="hidden h-[100px] md:block" />
      </div>
    </section>
  );
};

export default Deliverables;
