import React from "react";

const deliverables = [
  "Auditorias completas",
  "Plano de crescimento",
  "Ações priorizadas",
  "Materiais prontos para uso",
];

const Deliverables = () => {
  return (
    <section className="w-full bg-white py-32 font-sans">
      <div className="mx-auto max-w-[1320px] px-8 lg:px-12">
        <div className="relative flex min-h-[500px] items-center bg-[#6C5CE7] p-12 lg:p-16">
          <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Coluna de Valores (Esquerda) */}
            <div className="flex flex-col justify-between space-y-16 text-white md:space-y-24">
              <div className="space-y-2">
                <p className="text-[20px] font-medium opacity-90">Valor total estimado:</p>
                <h3 className="text-[40px] font-bold leading-none">R$ 80.000</h3>
              </div>
              <div className="space-y-2">
                <p className="text-[20px] font-medium opacity-90">Valor percebido:</p>
                <h3 className="text-[40px] font-bold leading-none">acima de R$ 150.000</h3>
              </div>
            </div>

            {/* Coluna da Lista (Centro) */}
            <div className="flex-1 text-white lg:pl-16">
              <h4 className="mb-8 text-[28px] font-bold uppercase tracking-tight">Incluindo:</h4>
              <ul className="space-y-5 text-[18px]">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 font-bold">✓</span>
                    {item === "Plano de crescimento" ? (
                      <span>
                        {item} <span className="text-[16px] opacity-80">(12 meses)</span>
                      </span>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Espaçador para o Card Absoluto no Desktop */}
            <div className="hidden w-[380px] lg:block" />

            {/* Card Lateral (Design Fiel: Retângulo vertical com borda vazando) */}
            <div className="z-10 w-full max-w-[380px] md:absolute md:-bottom-24 md:right-12 lg:right-16">
              <div className="absolute -bottom-4 -right-4 h-full w-full border-[3px] border-black bg-white" />
              <div className="relative flex h-[520px] flex-col justify-center border-[3px] border-black bg-[#6C5CE7] p-12">
                <h2 className="text-left text-[50px] font-black uppercase leading-[1.05] text-white lg:text-[64px]">
                  Valor dos<br />Entregáveis
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
