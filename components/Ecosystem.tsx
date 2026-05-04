"use client";

const partners = [
  "MEME FRANQUIA",
  "MEME AGENDA",
  "MEME E-COMMERCE",
  "MEME DESIGN",
  "MEME PERFORMANCE",
  "MEME TECH",
  "MEME INFOPRODUTO",
];

export default function Ecosystem() {
  return (
    <section className="py-section bg-dark text-white">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-h2 font-bold mb-6">Nosso Ecossistema</h2>
            <p className="text-body text-white/80 max-w-[520px]">
              Um ecossistema completo em estratégia, tecnologia e performance para conectar sua marca ao mercado.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-card text-center text-small font-semibold hover:bg-primary transition">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
