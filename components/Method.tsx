"use client";

const steps = [
  "Atração",
  "Engajamento",
  "Venda",
];

export default function Method() {
  return (
    <section className="py-section bg-white">
      <div className="container-custom">
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-h2 font-bold text-dark">Método Meme7</h2>
            <span className="bg-secondary text-white px-5 py-3 rounded-card text-small font-semibold">
              Fale com um especialista agora
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-8 rounded-card shadow-card ${
                  index === 1 ? "bg-primary text-white" : "bg-white text-dark"
                }`}
              >
                <div className="text-5xl font-bold mb-4">{index + 1}</div>
                <h3 className="text-h3 font-bold mb-3">{step}</h3>
                <p className="text-body leading-relaxed opacity-90">
                  {step === "Atração" &&
                    "Atraia interesse com uma proposta clara, comunicação estratégica e posicionamento de mercado."}
                  {step === "Engajamento" &&
                    "Converta visitantes em leads com conteúdo relevante, ofertas claras e jornada otimizada."}
                  {step === "Venda" &&
                    "Transforme a conversa em resultado com processo de venda estruturado e oferta de valor."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
