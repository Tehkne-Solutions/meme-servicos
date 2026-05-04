"use client";

const Secao30Dias = () => {
  const etapas = [
    {
      id: "1",
      sub: "Onboarding Técnico",
      itens: ["Mapeamento completo", "Coleta de dados", "Alinhamento de metas"]
    },
    {
      id: "2",
      sub: "Diagnóstico de Marketing",
      itens: ["Auditoria de campanhas", "Análise de criativos, CRO, UX e funis", "Plano de ação imediato"],
      destaque: true // Estado inicial sugerido pelo Figma
    },
    {
      id: "3",
      sub: "Diagnóstico Comercial",
      itens: ["Análise de CRM e processos", "Conversão e follow-up", "Gargalos e oportunidades"]
    }
  ];

  return (
    <section className="bg-[#EEEEEE] py-24 px-4 font-['Plus_Jakarta_Sans']">
      <div className="max-w-[1310px] mx-auto">

        {/* HEADER: GRID 2 COLUNAS CONFORME FIGMA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <h2 className="text-[64px] font-bold leading-[81px] text-[#1D1D1D] max-w-[539px]">
            O que acontece nesses <span className="text-[#FF1E5B]">30 dias</span>
          </h2>
          <button className="bg-[#FF1E5B] text-white w-full md:w-[415px] h-[60px] text-[20px] font-normal uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
            Quero meu mapa estratégico
          </button>
        </div>

        {/* TRACK DE CARDS COM NAVEGAÇÃO */}
        <div className="relative flex items-center">

          {/* SETA ESQUERDA (FIXA ROSA) */}
          <div className="absolute -left-12 z-10 hidden xl:block">
            <button className="bg-[#FF1E5B] w-[30px] h-[30px] flex items-center justify-center rounded-[3.3px]">
               <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M13 5H1M1 5L5 1M1 5L9 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* GRID DE CARDS: 361px x 415px */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[35px] w-full">
            {etapas.map((etapa) => (
              <div
                key={etapa.id}
                className={`
                  relative w-full h-[415px] p-10 cursor-pointer
                  transition-all duration-500 ease-in-out
                  ${etapa.destaque ? 'bg-[#6C5CE7]' : 'bg-white hover:bg-[#6C5CE7]'}
                  group shadow-sm hover:shadow-2xl
                `}
              >
                {/* LINHA SUPERIOR: NÚMERO E SEMANA */}
                <div className="flex items-start gap-4 mb-8">
                  <span className={`text-[150px] font-bold leading-[110px] transition-colors duration-500 ${etapa.destaque ? 'text-white' : 'text-[#1D1D1D] group-hover:text-white'}`}>
                    {etapa.id}
                  </span>
                  <div className="pt-4">
                    <h4 className={`text-[40px] font-normal leading-[50px] transition-colors duration-500 ${etapa.destaque ? 'text-white' : 'text-[#1D1D1D] group-hover:text-white'}`}>
                      Semana
                    </h4>
                    <p className={`text-[18px] font-extrabold leading-[27px] opacity-80 transition-colors duration-500 ${etapa.destaque ? 'text-white' : 'text-[#1D1D1D] group-hover:text-white'}`}>
                      {etapa.sub}
                    </p>
                  </div>
                </div>

                {/* LISTA DE ENTREGÁVEIS */}
                <ul className="space-y-3">
                  {etapa.itens.map((item, i) => (
                    <li
                      key={i}
                      className={`text-[22px] leading-[34px] font-normal opacity-80 transition-colors duration-500 ${etapa.destaque ? 'text-white' : 'text-[#1D1D1D] group-hover:text-white'}`}
                    >
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* SETA DIREITA (OUTLINED) */}
          <div className="absolute -right-12 z-10 hidden xl:block">
            <button className="border border-[#1D1D1D] w-[30px] h-[30px] flex items-center justify-center rounded-[3.3px]">
               <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="rotate-180"><path d="M13 5H1M1 5L5 1M1 5L9 5" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Secao30Dias;
