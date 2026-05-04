"use client";

export default function StrategicMap() {
  return (
    <section className="bg-primary text-white py-section">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-h2 font-bold">O que é o Mapa Estratégico 2026?</h2>
            <p className="mt-4 text-body opacity-90 max-w-[420px]">
              Um planejamento visual e estratégico com clareza total do seu crescimento.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 space-y-4">
            <div className="rounded-card bg-white/10 p-5">
              <p className="text-body font-semibold">Diagnóstico de marketing, vendas e operação</p>
            </div>
            <div className="rounded-card bg-white/10 p-5">
              <p className="text-body font-semibold">Estratégia objetiva para aumentar o faturamento</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 space-y-4">
            <div className="rounded-card bg-white/10 p-5">
              <p className="text-body font-semibold">Entregáveis práticos para acelerar ações</p>
            </div>
            <div className="rounded-card bg-white/10 p-5">
              <p className="text-body font-semibold">Ponto de crescimento para próximos 12 meses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
