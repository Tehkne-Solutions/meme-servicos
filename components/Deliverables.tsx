import React from "react";

const deliverables = [
  "Auditorias completas",
  "Plano de crescimento (12 meses)",
  "Ações priorizadas",
  "Materiais prontos para uso",
];

const Deliverables = () => {
  return (
    <section className="w-full overflow-visible py-24 font-['Plus_Jakarta_Sans']">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <div className="grid gap-8 bg-[#6767F1] px-8 py-10 lg:grid-cols-[280px_minmax(0,1fr)_378px] lg:px-10 lg:py-12">
          <div className="flex flex-col justify-between gap-12 lg:min-h-[360px]">
            <div>
              <p className="text-[25px] font-normal leading-[34px] text-white/80">
                Valor total estimado:
              </p>
              <p className="text-[25px] font-bold leading-[34px] text-white">R$ 80.000</p>
            </div>

            <div>
              <p className="text-[25px] font-normal leading-[34px] text-white/80">
                Valor percebido:
              </p>
              <p className="text-[25px] font-bold leading-[34px] text-white">
                acima de R$ 150.000
              </p>
            </div>
          </div>

          <div className="lg:pt-16">
            <h3 className="mb-6 text-[35px] font-bold leading-[32px] tracking-[-0.01em] text-white">
              Incluindo:
            </h3>
            <ul className="space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[22px] font-normal text-white">
                  <span className="text-[20px] font-bold text-[#1D1D1D]">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-h-[320px] items-center border-[4px] border-[#1D1D1D] px-10 py-12 lg:min-h-[450px]">
            <h2 className="max-w-[273px] text-left text-[44px] font-bold leading-[1.15] tracking-[-0.03em] text-white lg:text-[50px] lg:leading-[63px]">
              Valor dos Entregáveis
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
