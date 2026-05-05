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
    <section className="mx-auto flex max-w-[1320px] flex-col items-start gap-16 px-6 py-20 lg:flex-row lg:px-8">
      <div className="max-w-[342px] flex-1">
        <h2 className="mb-6 text-[50px] font-bold leading-[63px] text-[#1A1A1A]">Para quem é?</h2>
        <p className="mb-10 text-[22px] leading-[32px] tracking-[-0.01em] text-[#1A1A1A]">
          Para empresas que faturam a partir de R$ 70 mil/mês e querem:
        </p>
        <a
          href="#contato"
          className="cta-premium flex h-[70px] w-full items-center justify-center bg-[#FF1E5B] text-[16px] font-semibold uppercase tracking-wider text-white hover:brightness-110 hover:shadow-[0_15px_30px_rgba(255,30,91,0.28)]"
        >
          Falar com um Especialista
        </a>
      </div>

      <div className="grid flex-[2] grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 xl:gap-x-24">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex items-center">
            <div className="relative h-[150px] min-w-[150px]">
              <div className="flex h-[150px] w-[150px] items-center justify-center bg-[#6767F1] p-8 shadow-lg">
                <img
                  src={benefit.icon}
                  alt=""
                  className={`h-full w-full object-contain ${
                    benefit.title.includes("Alinhar") ? "scale-125" : "scale-100"
                  }`}
                />
              </div>

              <div className="absolute -right-8 top-1/2 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center bg-[#FF1E5B] shadow-md">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>

            <div className="ml-14">
              <span className="block max-w-[250px] text-[25px] font-semibold leading-[32px] tracking-[-0.03em] text-[#1A1A1A]">
                {benefit.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
