import React from 'react';

const FAQ = () => {
  return (
    <section className="relative w-[1336px] mx-auto my-32 font-['Plus_Jakarta_Sans']">
      <div className="grid grid-cols-4 gap-6 h-[356px]">
        
        {/* COLUNA 1 - Total 356px */}
        <div className="flex flex-col">
          <div className="bg-[#FF1E5B] w-full h-[183px] flex items-center justify-center">
            <h2 className="text-white text-[65px] font-bold tracking-[-0.02em]">FAQ:</h2>
          </div>
          <div className="bg-[#1A1A1A] w-full h-[173px] p-8 flex flex-col justify-center">
            <h4 className="text-white text-[20px] font-semibold mb-2">Quanto custa?</h4>
            <p className="text-white/80 text-[16px] leading-[22px]">Investimento sob consulta, com devolução de 100%.</p>
          </div>
        </div>

        {/* COLUNA 2 - Total 356px */}
        <div className="flex flex-col">
          <div className="bg-[#1A1A1A] w-full h-[120px] p-8 flex flex-col justify-center">
            <h4 className="text-white text-[20px] font-semibold mb-2">Quanto tempo dura?</h4>
            <p className="text-white/80 text-[16px] leading-[22px]">30 dias de projeto intensivo.</p>
          </div>
          <div className="bg-[#6C5CE7] w-full h-[236px]"></div>
        </div>

        {/* COLUNA 3 - Total 356px */}
        <div className="flex flex-col">
          <div className="bg-[#FF1E5B] w-full h-[183px]"></div>
          <div className="bg-[#1A1A1A] w-full h-[173px] p-8 flex flex-col justify-center">
            <h4 className="text-white text-[20px] font-semibold mb-2">Quem pode participar?</h4>
            <p className="text-white/80 text-[16px] leading-[22px]">Empresas com faturamento acima de R$ 70k/mês.</p>
          </div>
        </div>

        {/* COLUNA 4 - Total 356px */}
        <div className="flex flex-col">
          <div className="bg-[#1A1A1A] w-full h-[173px] p-8 flex flex-col justify-center">
            <h4 className="text-white text-[20px] font-semibold mb-2">O que recebo?</h4>
            <p className="text-white/80 text-[16px] leading-[22px]">Diagnóstico, CRM, materiais e plano de 12 meses.</p>
          </div>
          <div className="bg-[#6C5CE7] w-full h-[183px]"></div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
