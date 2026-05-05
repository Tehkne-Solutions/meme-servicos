import React from "react";

const MartechSection = () => {
  const specialties = [
    "Planejamento & Personas",
    "Análise de Branding",
    "E-commerce & Landing Pages",
    "Design UX/UI",
    "Copywriting",
    "SEO Avançado",
    "Tráfego Pago",
    "Criativos Display",
    "Gestão de Conteúdo",
    "Produção de Fotos & Vídeos",
    "Automações, AI & BI",
    "CRM Marketing",
    "Dashboards & Relatórios",
    "Ciclo Contínuo de Marketing",
  ];

  return (
    <section className="w-full bg-[#6C5CE7] py-24 font-['Plus_Jakarta_Sans'] text-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-[52px] font-bold leading-[1.2]">
            o que uma agência{" "}
            <span className="font-extrabold uppercase tracking-tighter">MARTECH</span> pode fazer
            por você
          </h2>
          <p className="mx-auto max-w-[1100px] text-[20px] font-light leading-relaxed opacity-80">
            Nossa equipe é especialista em transformação digital, atuando em growth, branding,
            design, UX/UI, AR/VR, SEO, tráfego pago, e-commerce, CRM, automações, landing pages,
            dashboards e soluções tecnológicas personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item) => (
            <div
              key={item}
              className="flex cursor-pointer items-center gap-4 transition-all duration-300 hover:translate-x-2 hover:scale-110"
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
