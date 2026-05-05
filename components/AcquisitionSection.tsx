import React from 'react';

const AcquisitionSection = () => {
  const steps = [
    { left: "Planejamento estratégico", right: "Criação de landing pages" },
    { left: "Tráfego pago segmentado", right: "Integração com CRM" },
    { left: "Nutrição automatizada", right: "Fechamento da venda" }
  ];

  return (
    <section className="w-full bg-white py-24 font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-[1336px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO ESQUERDO: DIAGRAMA (Corrigido para mimetizar o Figma) */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="text-[28px] font-bold text-[#1A1A1A] mb-8 self-center lg:self-start ml-0 lg:ml-20">
            Aquisição de Leads:
          </h4>
          
          <div className="flex flex-col gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center">
                {/* Card Esquerdo */}
                <div className="w-[220px] h-[90px] border-[1.5px] border-[#FF1E5B] flex items-center justify-center px-4 bg-white">
                  <span className="font-['Poppins'] font-medium text-[18px] text-[#FF1E5B] text-center leading-tight">
                    {step.left}
                  </span>
                </div>
                
                {/* Seta Centralizada (O elemento que faltava) */}
                <div className="w-[50px] h-[50px] bg-[#6767F1] flex items-center justify-center z-10 -mx-[25px] shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Card Direito */}
                <div className="w-[220px] h-[90px] border-[1.5px] border-[#FF1E5B] flex items-center justify-center px-4 bg-white">
                  <span className="font-['Poppins'] font-medium text-[18px] text-[#FF1E5B] text-center leading-tight">
                    {step.right}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: TEXTO E CTA */}
        <div className="flex flex-col items-end text-right">
          <h2 className="text-[48px] lg:text-[56px] font-bold text-[#1A1A1A] leading-[1.1] mb-6">
            Processo de Aquisição <br /> de Leads + Funil de Vendas
          </h2>
          
          <p className="text-[18px] text-[#1A1A1A]/70 mb-10 max-w-[400px]">
            Atrair os clientes certos, aumentar o reconhecimento da marca e vender muito mais!
          </p>
          
          <button className="bg-[#80D509] hover:bg-[#72be08] text-white px-10 py-5 text-[18px] font-bold uppercase transition-colors shadow-xl">
            Solicitar Proposta
          </button>
        </div>

      </div>
    </section>
  );
};

export default AcquisitionSection;
