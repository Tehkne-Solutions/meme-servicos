"use client";

export default function Hero() {
  return (
    <section className="bg-gray-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Texto à esquerda */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark leading-tight">
              JÁ FATURA <span className="text-secondary">R$70 MIL/MÊS?</span>
              <br />
              ENTÃO NÃO FAZ SENTIDO SUA EMPRESA SEGUIR NO IMPROVISO.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray max-w-[480px] mx-auto lg:mx-0">
              Garanta seu Mapa Estratégico de Marketing e saiba exatamente onde focar para crescer em 2026.
            </p>
            <button className="mt-8 bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition">
              QUERO MEU MAPA
            </button>
          </div>

          {/* Formulário à direita */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="bg-white p-8 w-full max-w-[400px] rounded-xl shadow-xl">
              <form className="flex flex-col gap-4">
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nome"
                />
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Empresa"
                />
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Email"
                />
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Telefone"
                />
                <button className="w-full bg-success text-white py-3 rounded-lg font-semibold hover:brightness-105 transition">
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
