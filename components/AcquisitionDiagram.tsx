import React from 'react';

const AcquisitionDiagram = () => {
  const steps = [
    { left: "Planejamento estratégico", right: "Criação de landing pages" },
    { left: "Tráfego pago segmentado", right: "Integração com CRM" },
    { left: "Nutrição automatizada", right: "Fechamento da venda" }
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-[550px]">
      {/* Título do Diagrama */}
      <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[30px] text-[#1A1A1A] mb-10 text-center">
        Aquisição de Leads:
      </h4>

      <div className="flex flex-col gap-[31px] w-full">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center justify-center">
            {/* Bloco Esquerdo (Rectangle 4/5337/12349) */}
            <div className="w-[246px] h-[97px] border-[2px] border-[#FF1E5B] flex items-center justify-center px-6 bg-white shrink-0">
              <span className="font-['Poppins'] font-medium text-[21px] text-[#FF1E5B] leading-[1] text-center uppercase tracking-tight">
                {step.left}
              </span>
            </div>

            {/* Seta Central (Group 427320429) */}
            <div className="w-[60px] h-[60px] bg-[#6767F1] flex items-center justify-center z-10 -mx-[30px] shadow-md shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Bloco Direito (Rectangle 3/5335/12348) */}
            <div className="w-[245px] h-[97px] border-[2px] border-[#FF1E5B] flex items-center justify-center px-6 bg-white shrink-0">
              <span className="font-['Poppins'] font-medium text-[21px] text-[#FF1E5B] leading-[1] text-center uppercase tracking-tight">
                {step.right}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcquisitionDiagram;
