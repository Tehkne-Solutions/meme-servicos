import React from "react";

const deliverables = [
  "Auditorias completas",
  "Plano de crescimento (12 meses)",
  "Ações priorizadas",
  "Materiais prontos para uso",
];

const Deliverables = () => {
  return (
    <section className="w-full overflow-visible bg-white py-24 font-['Plus_Jakarta_Sans']">
      <div className="mx-auto max-w-[1320px] px-8 lg:px-12">
        <div className="relative flex min-h-[400px] flex-col justify-between gap-10 bg-[#6C5CE7] p-12 md:pr-[420px] lg:p-16 lg:pr-[440px]">
          <div className="w-full space-y-8 text-white md:w-1/2">
            <div>
              <p className="text-lg opacity-80">Valor total estimado:</p>
              <h3 className="text-3xl font-bold">R$ 80.000</h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-bold">Incluindo:</h4>
              <ul className="space-y-2 text-lg">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-lg opacity-80">Valor percebido:</p>
              <h3 className="text-3xl font-bold">acima de R$ 150.000</h3>
            </div>
          </div>

          <div className="w-full bg-white p-10 shadow-2xl md:absolute md:right-8 md:top-12 md:max-w-[380px] lg:right-16 lg:-bottom-12 lg:top-auto lg:p-12">
            <div className="flex items-center justify-center border-[3px] border-black px-8 py-10">
              <h2 className="text-center text-[42px] font-black leading-tight text-[#6C5CE7]">
                Valor dos
                <br />
                Entregáveis
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
