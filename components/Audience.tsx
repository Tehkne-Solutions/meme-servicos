"use client";

const items = [
  {
    title: "Crescem sem estrutura",
    desc: "Sua empresa cresce, mas sem previsibilidade",
  },
  {
    title: "Atuam no improviso",
    desc: "Sem plano claro de marketing",
  },
  {
    title: "Melhorar performance comercial",
    desc: "Querem aumentar conversão e vendas",
  },
  {
    title: "Sem plano de execução",
    desc: "Não sabem o próximo passo",
  },
];

export default function Audience() {
  return (
    <section className="py-section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-h2 font-bold text-dark">Para quem é?</h2>
            <p className="text-body text-gray mt-4">
              Para empresas que querem crescer com estratégia, previsibilidade e um plano claro.
            </p>
            <button className="mt-6 bg-primary text-white px-8 py-3 rounded-card font-semibold hover:opacity-90 transition">
              FAZ SENTIDO PRA MIM
            </button>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div key={index} className="bg-gray-light p-5 rounded-card flex gap-4 items-start">
                  <div className="w-10 h-10 bg-secondary rounded-card flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">{item.title}</h3>
                    <p className="text-small text-gray mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
