"use client";

export default function Hero() {
  return (
    <section className="relative bg-white pt-24 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="max-w-[469px] text-left font-jakarta">
            <img
              src="/images/meme-digital-logo.png"
              alt="Meme Digital Logo"
              className="mb-8 h-12 w-auto"
            />
            <h1 className="text-[55px] leading-[1.1] font-bold uppercase tracking-[-0.02em]">
              <span className="block text-[#6C5CE7]">JÁ FATURA</span>
              <span className="block text-[#6C5CE7]">R$ 70 MIL/MÊS?</span>
              <span className="block text-[#4D4D4D]">ENTÃO NÃO FAZ</span>
              <span className="block text-[#4D4D4D]">SENTIDO SUA</span>
              <span className="block text-[#4D4D4D]">EMPRESA SEGUIR</span>
              <span className="block text-[#4D4D4D]">NO IMPROVISO.</span>
            </h1>
            <p className="mt-8 text-[30px] leading-[35px] text-[#4D4D4D]">
              Garanta seu{' '}
              <span className="inline-block bg-[#FF1E5B] px-2 py-1 text-white">
                Mapa Estratégico de Marketing
              </span>{' '}
              e saiba exatamente onde focar para crescer em 2026.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[614px] bg-[#6C5CE7] p-8 sm:p-10 rounded-none">
              <form className="grid gap-4">
                <input
                  className="h-[62px] w-full rounded-none border border-white/10 bg-white px-5 text-sm text-[#4D4D4D] placeholder-[#4D4D4D] focus:outline-none"
                  placeholder="Nome"
                />
                <input
                  className="h-[62px] w-full rounded-none border border-white/10 bg-white px-5 text-sm text-[#4D4D4D] placeholder-[#4D4D4D] focus:outline-none"
                  placeholder="E-mail"
                />
                <input
                  className="h-[62px] w-full rounded-none border border-white/10 bg-white px-5 text-sm text-[#4D4D4D] placeholder-[#4D4D4D] focus:outline-none"
                  placeholder="Empresa"
                />
                <input
                  className="h-[62px] w-full rounded-none border border-white/10 bg-white px-5 text-sm text-[#4D4D4D] placeholder-[#4D4D4D] focus:outline-none"
                  placeholder="Telefone"
                />
                <select
                  className="h-[62px] w-full rounded-none border border-white/10 bg-white px-5 text-sm text-[#4D4D4D] focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Setor
                  </option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="varejo">Varejo</option>
                  <option value="servicos">Serviços</option>
                  <option value="industria">Indústria</option>
                  <option value="outros">Outros</option>
                </select>
                <select
                  className="h-[62px] w-full rounded-none border border-white/10 bg-white px-5 text-sm text-[#4D4D4D] focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Faturamento
                  </option>
                  <option value="ate-50k">Até 50k</option>
                  <option value="50k-200k">50k-200k</option>
                  <option value="200k-1m">200k-1M</option>
                  <option value="acima-1m">Acima de 1M</option>
                </select>
              </form>
              <button className="mt-6 h-[62px] w-fit rounded-none bg-[#80D509] px-8 text-[15px] font-bold uppercase text-white transition hover:brightness-105">
                QUERO MEU MAPA ESTRATÉGICO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
