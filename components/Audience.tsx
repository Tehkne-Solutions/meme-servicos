"use client";

const benefits = [
  {
    icon: "/images/meme-digital-para-quem-e-icone-crescer-com-estrutura.png",
    title: "Crescem sem estrutura",
  },
  {
    icon: "/images/meme-digital-para-quem-e-icone-alinhar-marketing-vendas-e-operacao.png",
    title: "Atuam no improviso",
  },
  {
    icon: "/images/meme-digital-para-quem-e-icone-melhorar-a-performance-comercial.png",
    title: "Melhorar performance comercial",
  },
  {
    icon: "/images/meme-digital-para-quem-e-icone-ter-um-plano-claro-de-execucao.png",
    title: "Sem plano de execução",
  },
];

export default function Audience() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Coluna Esquerda - Texto e CTA */}
          <div className="max-w-lg">
            <h2 className="text-[50px] font-bold text-[#1A1A1A] font-jakarta leading-tight">
              Para quem é?
            </h2>
            <p className="text-[22px] font-normal text-[#1A1A1A] font-jakarta leading-[32px] mt-6 max-w-[342px]">
              Para empresas que faturam a partir de R$ 70 mil/mês e querem:
            </p>
            <button className="mt-8 bg-[#FF1E5B] text-white px-10 py-6 rounded-lg font-semibold uppercase text-base hover:brightness-95 transition">
              Falar com um especialista
            </button>
          </div>

          {/* Coluna Direita - Grid de Benefícios */}
          <div className="grid grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative">
                {/* Ícone com fundo azul */}
                <div className="w-[150px] h-[150px] bg-[#6767F1] rounded-lg flex items-center justify-center relative">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-16 h-16 object-contain"
                  />
                  {/* Sinalizador rosa com seta */}
                  <div className="absolute bottom-0 right-0 w-[60px] h-[60px] bg-[#FF1E5B] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                {/* Texto do benefício */}
                <p className="text-[25px] font-semibold text-[#1A1A1A] font-jakarta leading-[32px] tracking-[-0.03em] mt-4">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
