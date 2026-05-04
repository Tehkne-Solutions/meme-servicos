"use client";

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="max-w-2xl text-left">
            <h1 className="text-[55px] leading-[65px] font-bold tracking-[-0.02em] text-[#6C5CE7] uppercase">
              JÁ FATURA R$ 70 MIL/MÊS?
              <br />
              ENTÃO NÃO FAZ SENTIDO SUA EMPRESA SEGUIR NO IMPROVISO.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-[#4D4D4D]">
              Garanta seu Mapa Estratégico de Marketing e saiba exatamente onde focar para crescer em 2026.
            </p>
            <div className="mt-8 inline-flex items-center rounded-full bg-[#FF1E5B] px-4 py-3 text-sm font-semibold uppercase text-white">
              Mapa Estratégico de Marketing
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[614px] rounded-[32px] bg-[#6C5CE7] p-8 sm:p-10 shadow-[0_40px_120px_rgba(108,92,231,0.18)]">
              <form className="grid gap-4">
                <input
                  className="h-[62px] rounded-[18px] border border-white/20 bg-white px-5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#80D509]/30"
                  placeholder="Nome"
                />
                <input
                  className="h-[62px] rounded-[18px] border border-white/20 bg-white px-5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#80D509]/30"
                  placeholder="E-mail"
                />
                <input
                  className="h-[62px] rounded-[18px] border border-white/20 bg-white px-5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#80D509]/30"
                  placeholder="Empresa"
                />
                <input
                  className="h-[62px] rounded-[18px] border border-white/20 bg-white px-5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#80D509]/30"
                  placeholder="Telefone"
                />
                <input
                  className="h-[62px] rounded-[18px] border border-white/20 bg-white px-5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#80D509]/30"
                  placeholder="Empresa"
                />
                <input
                  className="h-[62px] rounded-[18px] border border-white/20 bg-white px-5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#80D509]/30"
                  placeholder="Telefone"
                />
              </form>
              <button className="mt-6 w-[322px] rounded-[20px] bg-[#80D509] px-6 py-4 text-[15px] font-normal uppercase text-white shadow-[0_20px_60px_rgba(128,213,9,0.24)] transition hover:brightness-105">
                QUERO MEU MAPA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
