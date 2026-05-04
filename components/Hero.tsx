"use client";

export default function Hero() {
  return (
    <section className="bg-gray-light py-section">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6">
            <h1 className="text-hero font-bold text-dark">
              JÁ FATURA <span className="text-secondary">R$70 MIL/MÊS?</span>
              <br />
              ENTÃO NÃO FAZ SENTIDO SUA EMPRESA SEGUIR NO IMPROVISO.
            </h1>
            <p className="mt-6 text-body text-gray max-w-[480px]">
              Garanta seu Mapa Estratégico de Marketing e saiba exatamente onde focar para crescer em 2026.
            </p>
            <button className="mt-8 bg-primary text-white px-8 py-3 rounded-card font-semibold hover:opacity-90 transition">
              QUERO MEU MAPA
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-end">
            <div className="bg-secondary text-white p-6 w-full max-w-[360px] rounded-card shadow-card">
              <form className="flex flex-col gap-4">
                <input className="input bg-white/10 border-white/20 text-white placeholder-white/70" placeholder="Nome" />
                <input className="input bg-white/10 border-white/20 text-white placeholder-white/70" placeholder="Empresa" />
                <input className="input bg-white/10 border-white/20 text-white placeholder-white/70" placeholder="Email" />
                <input className="input bg-white/10 border-white/20 text-white placeholder-white/70" placeholder="Telefone" />
                <button className="bg-green text-dark py-3 rounded-card font-semibold hover:opacity-90 transition">
                  GARANTIR MEU MAPA
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
