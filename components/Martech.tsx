import React from 'react';

const MartechSection = () => {
  const specialties = [
    'Planejamento & Personas',
    'Análise de Branding',
    'E-commerce & Landing Pages',
    'Design UX/UI',
    'Copywriting',
    'SEO Avançado',
    'Tráfego Pago',
    'Criativos Display',
    'Gestão de Conteúdo',
    'Produção de Fotos & Vídeos',
    'Automações, AI & BI',
    'CRM Marketing',
    'Dashboards & Relatórios',
    'Ciclo Contínuo de Marketing',
  ];

  return (
    <section className="w-full bg-[#6C5CE7] py-24 font-['Plus_Jakarta_Sans'] text-white">
      <div className="max-w-[1336px] mx-auto px-12">
        <div className="text-center mb-20">
          <h2 className="text-[52px] font-bold leading-[1.2] mb-6">
            o que uma agência <span className="uppercase font-extrabold tracking-tighter">MARTECH</span> pode fazer por você
          </h2>
          <p className="text-[20px] opacity-80 max-w-[1100px] mx-auto leading-relaxed font-light">
            Nossa equipe é especialista em transformação digital, atuando em growth, branding, design, UX/UI, AR/VR, SEO, tráfego pago, e-commerce, CRM, automações, landing pages, dashboards e soluções tecnológicas personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 transition-all duration-300 hover:scale-110 hover:translate-x-2 cursor-pointer"
            >
              <span className="text-[26px] font-bold text-white">→</span>
              <span className="text-[19px] font-bold leading-[1.3] text-white/95">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MartechSection;
