"use client";

export default function StrategicMap() {
  return (
    <section className="relative bg-white">
      {/* Bloco Superior - Rosa */}
      <div className="bg-[#FF1E5B] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-center">
            <div className="border-4 border-white p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-jakarta">
                O que é o Mapa Estratégico 2026?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white/10 p-5 rounded-lg">
                <p className="text-white font-semibold font-jakarta">
                  Diagnóstico de marketing, vendas e operação
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg">
                <p className="text-white font-semibold font-jakarta">
                  Estratégia objetiva para aumentar o faturamento
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg">
                <p className="text-white font-semibold font-jakarta">
                  Entregáveis práticos para acelerar ações
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg">
                <p className="text-white font-semibold font-jakarta">
                  Ponto de crescimento para próximos 12 meses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Garantia - Overlap */}
      <div className="relative -mt-10 z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="border-4 border-[#6767F1] p-6">
            <h3 className="text-2xl font-bold text-[#5C5C5C] font-jakarta mb-4">
              Garantia total:
            </h3>
            <button className="w-full bg-[#F5C402] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#F5C402]/90 transition">
              RECEBER DIAGNÓSTICO
            </button>
          </div>
          <div className="text-[#5C5C5C] font-jakarta">
            <p className="text-lg leading-relaxed">
              Processo intensivo de 30 dias. Se não ficar satisfeito, devolvemos 100% do investimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
