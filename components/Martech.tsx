"use client";

const martechList = [
  "Planejamento e Performance",
  "Análise de Dados",
  "E-commerce / Web/App",
  "Design UX/UI",
  "Consultoria de Vendas",
  "Produção de Conteúdo",
];

export default function MartechSection() {
  return (
    <section className="py-section bg-secondary text-white">
      <div className="container-custom">
        <h2 className="text-h2 font-bold text-center mb-10">O que uma agência MARTECH pode fazer por você</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-primary p-8 rounded-card">
            <h3 className="text-h3 font-bold mb-3">Automação</h3>
            <p className="text-body opacity-90">Processos conectados, cadências automáticas e fluxo contínuo.</p>
          </div>
          <div className="bg-white text-dark p-8 rounded-card">
            <h3 className="text-h3 font-bold mb-3">Integração</h3>
            <p className="text-body opacity-90">Plataformas unidas com dados e execução alinhados.</p>
          </div>
          <div className="bg-primary p-8 rounded-card">
            <h3 className="text-h3 font-bold mb-3">Performance</h3>
            <p className="text-body opacity-90">Resultados monitorados e escalados com foco em ROI.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {martechList.map((item, index) => (
            <div key={index} className="bg-white text-dark p-4 rounded-card text-center text-small font-semibold hover:bg-primary hover:text-white transition">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
