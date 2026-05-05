import React from "react";

const steps = [
  { left: "Planejamento estratégico", right: "Criação de landing pages" },
  { left: "Tráfego pago segmentado", right: "Integração com CRM" },
  { left: "Nutrição automatizada", right: "Fechamento da venda" },
];

const AcquisitionSection = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-24">
      <div className="mx-auto grid max-w-[1336px] grid-cols-1 items-center gap-16 px-12 lg:grid-cols-2">
        <div className="flex w-full flex-col items-center lg:items-start">
          <h4 className="mb-10 self-center font-sans text-[30px] font-bold leading-tight text-[#1A1A1A] lg:self-start">
            Aquisição de Leads:
          </h4>

          <div className="flex w-full max-w-[580px] flex-col gap-y-[30px]">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <div className="flex h-[97px] w-[246px] shrink-0 items-center justify-center border-[2px] border-[#FF1E5B] bg-white px-4">
                  <span className="font-sans text-center text-[20px] font-medium leading-tight text-[#FF1E5B]">
                    {step.left}
                  </span>
                </div>

                <div className="z-10 -mx-[30px] flex h-[60px] w-[60px] shrink-0 items-center justify-center bg-[#6767F1] shadow-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex h-[97px] w-[245px] shrink-0 items-center justify-center border-[2px] border-[#FF1E5B] bg-white px-4">
                  <span className="font-sans text-center text-[20px] font-medium leading-tight text-[#FF1E5B]">
                    {step.right}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end text-right">
          <h2 className="mb-6 font-sans text-[48px] font-bold leading-[1.1] text-[#1A1A1A] lg:text-[62px]">
            Processo de Aquisição <br /> de Leads + Funil de Vendas
          </h2>

          <p className="mb-10 max-w-[450px] font-sans text-[20px] text-[#1A1A1A]/70">
            Atrair os clientes certos, aumentar o reconhecimento da marca e vender muito mais!
          </p>

          <button className="bg-[#80D509] px-12 py-6 text-[20px] font-bold uppercase text-white shadow-[0_10px_20px_rgba(128,213,9,0.3)] transition-all hover:bg-[#72be08]">
            Solicitar Proposta
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcquisitionSection;
