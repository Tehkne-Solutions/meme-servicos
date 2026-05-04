"use client";

const steps = [
  {
    number: "1",
    title: "Semana",
    subtitle: "Diagnóstico",
    desc: "Mapeamento completo do seu negócio e coleta de dados estratégicos.",
  },
  {
    number: "2",
    title: "Semana",
    subtitle: "Estratégia",
    desc: "Definição de canais, funil e plano de ação validado.",
    highlight: true,
  },
  {
    number: "3",
    title: "Semana",
    subtitle: "Execução",
    desc: "Aplicação prática e direcionamento claro para crescimento.",
  },
];

export default function Timeline30Days() {
  return (
    <section className="py-section bg-gray-light">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-6 mb-10 items-center">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-h2 font-bold text-dark">O Que Acontece Nesses 30 Dias</h2>
          </div>
          <div className="col-span-12 md:col-span-4">
            <span className="inline-block bg-primary text-white px-5 py-3 rounded-card text-small font-semibold">
              COMO FUNCIONA
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-card ${step.highlight ? "bg-secondary text-white" : "bg-white text-dark"}`}
            >
              <div className="flex items-start gap-4">
                <span className={`text-5xl font-bold ${step.highlight ? "text-white" : "text-dark"}`}>
                  {step.number}
                </span>
                <div>
                  <p className="text-small uppercase opacity-70">{step.title}</p>
                  <h3 className="text-h3 font-semibold">{step.subtitle}</h3>
                </div>
              </div>
              <p className="mt-4 text-small opacity-80">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
