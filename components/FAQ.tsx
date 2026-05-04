import React from 'react';

const FAQ = () => {
  return (
    <section className="relative w-[1336px] h-[324px] mx-auto my-32 font-['Plus_Jakarta_Sans']">
      <div className="grid grid-cols-4 gap-6 h-full">
        
        {/* COLUNA 1 */}
        <div className="flex flex-col gap-0">
          <div className="bg-[#FF1E5B] w-full h-[183px] flex items-center justify-center">
            <h2 className="text-white text-[65px] font-bold tracking-[-0.02em]">FAQ:</h2>
          </div>
          <div className="bg-[#1A1A1A] w-full h-[173px] p-10 flex flex-col justify-center">
            <h4 className="text-white text-[20px] font-semibold mb-2">Quanto custa?</h4>
            <p className="text-white/80 text-[16px] leading-[22px]">
              Investimento sob consulta, com devolução de 100% do valor se o plano final não se aplicar à sua realidade.
            </p>
          </div>
        </div>

        {/* COLUNA 2 */}
        <div className="flex flex-col gap-0">
          <div className="bg-[#1A1A1A] w-full h-[120px] p-10 flex flex-col justify-center">
            <h4 className="text-white text-[20px] font-semibold mb-2">Quanto tempo dura?</h4>
            <p className="text-white/80 text-[16px] leading-[22px]">30 dias de projeto intensivo.</p>
          </div>
          <div className="bg-[#6C5CE7] w-full h-[204px]"></div>
        </div>

        {/* COLUNA 3 */}
        <div className="flex flex-col gap-0">
          <div className="bg-[#FF1E5B] w-full h-[183px]"></div>
          <div className="bg-[#1A1A1A] w-full h-[161px] p-10 flex flex-col justify-center">
            <h4 className="text-white text-[20px] font-semibold mb-2">Quem pode participar?</h4>
            <p className="text-white/80 text-[16px] leading-[22px]">
              Empresas que faturam a partir de R$ 70 mil por mês.
            </p>
          </div>
        </div>

        {/* COLUNA 4 */}
        <div className="flex flex-col gap-0">
          <div className="bg-[#1A1A1A] w-full h-[173px] p-10 flex flex-col justify-center">
            <h4 className="text-white text-[20px] font-semibold mb-2">O que recebo?</h4>
            <p className="text-white/80 text-[16px] leading-[22px]">
              Diagnóstico completo, análises, materiais prontos para uso, organização do CRM e plano de 12 meses.
            </p>
          </div>
          <div className="bg-[#6C5CE7] w-full h-[151px]"></div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
