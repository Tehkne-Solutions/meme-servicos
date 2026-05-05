import React from 'react';

const AcquisitionSection = () => {
  const steps = [
    { left: "Planejamento estratégico", right: "Criação de landing pages" },
    { left: "Tráfego pago segmentado", right: "Integração com CRM" },
    { left: "Nutrição automatizada", right: "Fechamento da venda" }
  ];

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-[1336px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO ESQUERDO: DIAGRAMA (Ajustado para fidelidade total) */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-sans font-bold text-[30px] text-[#1A1A1A] mb-10 self-center lg:self-start leading-tight">
            Aquisição de Leads:
          </h4>
          
          {/* gap-8 fornece aproximadamente 32px de espaçamento vertical entre os blocos */}
          <div className="flex flex-col gap-8 w-full max-w-[550px]">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center justify-center lg:justify-start">
                
                {/* Bloco Esquerdo - Fonte aumentada para 21px e forçada Poppins/Sans */}
                <div className="w-[246px] h-[97px] border-[2px] border-[#FF1E5B] flex items-center justify-center px-6 bg-white shrink-0">
                  <span className="font-sans font-medium text-[21px] text-[#FF1E5B] text-center leading-[1.2] tracking-tight">
                    {step.left}
                  </span>
                </div>
                
                {/* Seta Central - Corrigida para sobreposição exata */}
                <div className="w-[60px] h-[60px] bg-[#6767F1] flex items-center justify-center z-10 -mx-[30px] shadow-lg shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Bloco Direito - Fonte aumentada para 21px e forçada Poppins/Sans */}
                <div className="w-[245px] h-[97px] border-[2px] border-[#FF1E5B] flex items-center justify-center px-6 bg-white shrink-0">
                  <span className="font-sans font-medium text-[21px] text-[#FF1E5B] text-center leading-[1.2] tracking-tight">
                    {step.right}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: CONTEÚDO */}
        <div className="flex flex-col items-end text-right">
          <h2 className="font-sans text-[48px] lg:text-[62px] font-bold text-[#1A1A1A] leading-[1.1] mb-6">
            Processo de Aquisição <br /> de Leads + Funil de Vendas
          </h2>
          
          <p className="font-sans text-[20px] text-[#1A1A1A]/70 mb-10 max-w-[450px]">
            Atrair os clientes certos, aumentar o reconhecimento da marca e vender muito mais!
          </p>
          
          <button className="bg-[#80D509] hover:bg-[#72be08] text-white px-12 py-6 text-[20px] font-bold uppercase transition-all shadow-[0_10px_20px_rgba(128,213,9,0.3)]">
            Solicitar Proposta
          </button>
        </div>

      </div>
    </section>
  );
};

export default AcquisitionSection;
