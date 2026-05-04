"use client";

export default function StrategicMap() {
  return (
    <section className="relative bg-white">
      {/* Bloco Superior - Rosa */}
      <div className="bg-[#FF1E5B] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
            {/* Título com subtexto */}
            <div className="border-4 border-white p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-jakarta mb-4">
                O que é o Mapa Estratégico 2026?
              </h2>
              <p className="text-white font-jakarta leading-relaxed">
                É um processo intensivo de 30 dias para destravar o crescimento da sua empresa e entregar:
              </p>
            </div>

            {/* Benefícios - Sem fundo, apenas texto */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-white font-semibold font-jakarta leading-relaxed">
                  Diagnóstico de marketing, vendas e operação
                </p>
              </div>
              <div>
                <p className="text-white font-semibold font-jakarta leading-relaxed">
                  Estratégia objetiva para aumentar o faturamento
                </p>
              </div>
              <div>
                <p className="text-white font-semibold font-jakarta leading-relaxed">
                  Entregáveis práticos para acelerar ações
                </p>
              </div>
              <div>
                <p className="text-white font-semibold font-jakarta leading-relaxed">
                  Ponto de crescimento para próximos 12 meses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Garantia - Overlap com alinhamento perfeito */}
      <div className="relative -mt-10 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-center bg-white p-8 shadow-lg">
            {/* Box Garantia - Alinhado com o título */}
            <div className="border-4 border-[#6767F1] p-6">
              <h3 className="text-2xl font-bold text-[#5C5C5C] font-jakarta mb-6">
                Garantia total:
              </h3>
              <button className="w-full bg-[#F5C402] text-black font-bold py-3 px-6 hover:brightness-95 transition">
                RECEBER DIAGNÓSTICO
              </button>
            </div>

            {/* Texto descritivo */}
            <div className="text-[#5C5C5C] font-jakarta">
              <p className="text-lg leading-relaxed">
                Processo intensivo de 30 dias. Se não ficar satisfeito, devolvemos 100% do investimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
