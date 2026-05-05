import React from "react";

const AcquisitionSection = () => {
  return (
    <section className="bg-[#130B2C] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[18px] uppercase tracking-[0.5em] text-[#FA7AB1]">
              Processo de Aquisição
            </p>
            <h2 className="mt-4 text-[54px] font-bold leading-[1.05] text-white">
              Chegando ao lead certo com copy memorável.
            </h2>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.9] text-[#DFE0F6]">
              Captamos seu público ideal, nutrimos cada contato e geramos valor em todas as etapas do funil.
            </p>
          </div>

          <a
            className="btn-premium inline-flex rounded-full border border-[#FFFFFF1A] bg-[#0F071E]/70 px-9 py-4 text-[16px] font-semibold text-white shadow-[0_20px_60px_rgba(255,30,91,0.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#FF1E5B]"
            href="#"
          >
            Vamos descobrir juntos
          </a>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="text-[16px] uppercase tracking-[0.3em] text-[#82D91B]">01</p>
            <h3 className="mt-4 text-[28px] font-semibold text-white">Definição de ICP</h3>
            <p className="mt-4 text-[17px] leading-[1.85] text-[#DFE0F6]">
              Analisamos seu mercado e identificamos o perfil de cliente que mais converte.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="text-[16px] uppercase tracking-[0.3em] text-[#82D91B]">02</p>
            <h3 className="mt-4 text-[28px] font-semibold text-white">Roadmap de Jornada</h3>
            <p className="mt-4 text-[17px] leading-[1.85] text-[#DFE0F6]">
              Construímos a jornada de compra com pontos de contato que educam e engajam.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="text-[16px] uppercase tracking-[0.3em] text-[#82D91B]">03</p>
            <h3 className="mt-4 text-[28px] font-semibold text-white">Nutrição automática</h3>
            <p className="mt-4 text-[17px] leading-[1.85] text-[#DFE0F6]">
              Entregamos conteúdo personalizado e follow-up estratégico para converter mais rápido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcquisitionSection;
