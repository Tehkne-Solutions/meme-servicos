"use client";

const items = [
  "Diagnóstico completo",
  "Plano de crescimento estratégico",
  "Funil de aquisição estruturado",
  "Plano de execução 30 dias",
  "Direcionamento de canais",
  "Métricas e acompanhamento",
];

export default function Deliverables() {
  return (
    <section className="relative py-24 px-4 bg-[#1D1D1D] font-['Plus_Jakarta_Sans'] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF1E5B] to-[#6C5CE7]"></div>
      </div>

      <div className="relative max-w-[1310px] mx-auto">
        {/* Overlay Box */}
        <div className="relative bg-white rounded-[20px] p-16 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[64px] font-bold leading-[81px] text-[#1D1D1D] mb-4">
              Valor dos <span className="text-[#FF1E5B]">Entregáveis</span>
            </h2>
            <p className="text-[24px] leading-[36px] text-[#666666] max-w-[800px] mx-auto">
              Tudo que você recebe ao contratar nossos serviços de marketing estratégico
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Valor Total */}
            <div className="text-center lg:text-left">
              <p className="text-[20px] font-normal text-[#666666] mb-2">Valor total estimado:</p>
              <h3 className="text-[48px] font-bold text-[#1D1D1D] mb-4">R$ 50.000</h3>
              <p className="text-[18px] leading-[27px] text-[#666666] mb-6">
                Valor percebido com todos os entregáveis incluídos.
              </p>
              <div className="inline-block bg-[#80D509] text-white px-6 py-3 rounded-[10px] font-semibold text-[16px]">
                GARANTIA TOTAL
              </div>
            </div>

            {/* Lista de Itens */}
            <div>
              <h4 className="text-[32px] font-bold text-[#1D1D1D] mb-6">Incluindo:</h4>
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start text-[20px] leading-[30px] text-[#1D1D1D]">
                    <span className="text-[#80D509] text-[24px] mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="text-center lg:text-right">
              <p className="text-[20px] leading-[30px] text-[#666666] mb-6">
                Pronto para transformar seu negócio com estratégia de marketing profissional?
              </p>
              <a href="#contato" className="btn-premium inline-flex items-center justify-center w-full lg:w-[300px] h-[60px] text-[18px] font-normal">
                Quero meus entregáveis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
