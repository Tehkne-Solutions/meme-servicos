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
    <section className="py-section bg-secondary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-4">
            <p className="text-small opacity-80">Valor total estimado:</p>
            <h2 className="text-4xl font-bold mt-2">R$ 50.000</h2>
            <p className="mt-4 text-body text-white/80">
              Valor percebido com todos os entregáveis incluídos.
            </p>
            <div className="mt-6 bg-white text-secondary px-5 py-3 rounded-card inline-block font-semibold">
              GARANTIA TOTAL
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-h3 font-bold mb-4">Incluindo:</h3>
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={index} className="flex gap-3 items-start text-body">
                  <span className="text-green">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="border-2 border-white rounded-card p-8 text-center">
              <h3 className="text-h2 font-bold">Valor dos Entregáveis</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
