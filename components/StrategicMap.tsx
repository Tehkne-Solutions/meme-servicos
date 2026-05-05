"use client";

export default function StrategicMap() {
  return (
    <section className="relative bg-white">
      <div className="bg-[#FF1E5B] py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_2fr]">
            <div className="border-4 border-white p-6">
              <h2 className="mb-4 font-jakarta text-3xl font-bold text-white md:text-4xl">
                O que é o Mapa Estratégico 2026?
              </h2>
              <p className="font-jakarta text-sm leading-relaxed text-white md:text-base">
                É um processo intensivo de 30 dias para destravar o crescimento da sua empresa e
                entregar:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white/10 p-5">
                <p className="font-jakarta text-[25px] font-semibold leading-[32px] tracking-[-0.03em] text-white">
                  Diagnóstico de marketing, vendas e operação
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-5">
                <p className="font-jakarta text-[25px] font-semibold leading-[32px] tracking-[-0.03em] text-white">
                  Estratégias objetivas para aumentar o faturamento
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-5">
                <p className="font-jakarta text-[25px] font-semibold leading-[32px] tracking-[-0.03em] text-white">
                  Entregáveis prontos para colocar em prática
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-5">
                <p className="font-jakarta text-[25px] font-semibold leading-[32px] tracking-[-0.03em] text-white">
                  Roteiro de crescimento para os próximos 12 meses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-10">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
          <div className="grid items-center gap-8 bg-white p-8 shadow-lg lg:grid-cols-[1fr_2fr]">
            <div className="border-4 border-[#6767F1] p-6">
              <h3 className="mb-6 font-jakarta text-2xl font-bold text-[#5C5C5C]">
                Garantia total:
              </h3>
              <a
                href="#contato"
                className="cta-premium flex w-full items-center justify-center bg-[#F5C402] px-6 py-3 font-semibold uppercase text-black hover:brightness-95 hover:shadow-[0_15px_30px_rgba(245,196,2,0.22)]"
              >
                Receber Diagnóstico
              </a>
            </div>

            <div className="font-jakarta text-[#5C5C5C]">
              <p className="text-lg leading-relaxed">
                Se você não enxergar valor prático na entrega final, devolvemos 100% do
                investimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
