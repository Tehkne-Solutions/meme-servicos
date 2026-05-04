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
      <div className="max-w-[1250px] mx-auto text-center px-4">
        <h2 className="text-[50px] font-bold leading-tight mb-6">
          o que uma agência <span className="uppercase">MARTECH</span> pode fazer por você
        </h2>
        <p className="text-[18px] opacity-80 max-w-[1000px] mx-auto mb-20 leading-relaxed">
          Nossa equipe é especialista em transformação digital, atuando em growth, branding, design, UX/UI, AR/VR, SEO, tráfego pago, e-commerce, CRM, automações, landing pages, dashboards e soluções tecnológicas personalizadas.
        </p>

        {/* Grid de Especialidades */}
        <div className="grid grid-cols-4 gap-y-10 gap-x-12 text-left">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 transition-transform duration-300 hover:scale-110 cursor-default"
            >
              <span className="text-[28px] font-bold text-white">→</span>
              <span className="text-[18px] font-semibold leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MartechSection;
