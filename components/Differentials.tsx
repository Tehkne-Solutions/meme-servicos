"use client";

const differentials = [
  {
    title: "Equipe especializada",
    desc: "Profissionais focados em crescimento digital e marketing de performance.",
  },
  {
    title: "Processo comprovado",
    desc: "Metodologia testada em empresas de diversos segmentos.",
  },
  {
    title: "Entregas de alto valor",
    desc: "Mapas estratégicos orientados para resultados reais.",
  },
];

export default function Differentials() {
  return (
    <section className="py-section bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-h2 font-bold text-dark">Diferenciais Meme Digital</h2>
          <p className="text-body text-gray mt-4 max-w-[680px] mx-auto">
            Uma abordagem orientada por dados, performance e tecnologia para conectar pessoas e negócios.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div key={index} className="bg-gray-light rounded-card p-8 shadow-card">
              <div className="w-12 h-12 bg-primary rounded-card mb-5" />
              <h3 className="text-h3 font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-body text-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
