"use client";

const benefits = [
  {
    icon: "/images/meme-digital-para-quem-e-icone-crescer-com-estrutura.png",
    title: "Crescer com estrutura",
  },
  {
    icon: "/images/meme-digital-para-quem-e-icone-alinhar-marketing-vendas-e-operacao.png",
    title: "Alinhar marketing, vendas e operação",
  },
  {
    icon: "/images/meme-digital-para-quem-e-icone-melhorar-a-performance-comercial.png",
    title: "Melhorar a performance comercial",
  },
  {
    icon: "/images/meme-digital-para-quem-e-icone-ter-um-plano-claro-de-execucao.png",
    title: "Ter um plano claro de execução",
  },
];

export default function Audience() {
  return (
    <section className="max-w-[1283px] mx-auto py-20 px-4 flex flex-col lg:flex-row gap-16 items-start">
      {/* COLUNA ESQUERDA: COPY E CTA */}
      <div className="flex-1 max-w-[342px]">
        <h2 className="text-[50px] font-bold leading-[63px] text-[#1A1A1A] mb-6">
          Para quem é?
        </h2>
        <p className="text-[22px] leading-[32px] text-[#1A1A1A] mb-10 tracking-[-0.01em]">
          Para empresas que faturam a partir de R$ 70 mil/mês e querem:
        </p>
        <button className="w-full h-[70px] bg-[#FF1E5B] text-white text-[16px] font-semibold uppercase tracking-wider hover:brightness-110 transition-all">
          Falar com um Especialista
        </button>
      </div>

      {/* COLUNA DIREITA: GRID DE BENEFÍCIOS */}
      <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center group">
            {/* CONTAINER DO ÍCONE COM SETA SOBREPOSTA */}
            <div className="relative min-w-[150px] h-[150px]">
              <div className="w-[150px] h-[150px] bg-[#6767F1] flex items-center justify-center shadow-lg">
                <img src={benefit.icon} alt="" className="w-2/3 h-2/3 object-contain" />
              </div>

              {/* SETA ROSA: POSICIONADA EXATAMENTE NA BORDA DIREITA */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-[60px] h-[60px] bg-[#FF1E5B] flex items-center justify-center shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>

            {/* TEXTO DO BENEFÍCIO (ALINHADO À DIREITA DA SETA) */}
            <div className="ml-14">
              <span className="text-[25px] font-semibold leading-[32px] text-[#1A1A1A] tracking-[-0.03em] block max-w-[250px]">
                {benefit.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
