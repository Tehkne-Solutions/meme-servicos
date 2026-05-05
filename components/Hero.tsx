"use client";

import LeadCaptureForm from "./LeadCaptureForm";

export default function Hero() {
  return (
    <section className="relative bg-white pb-16 pt-24 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-[469px] text-left font-jakarta">
            <img
              src="/images/meme-digital-logo.png"
              alt="Meme Digital Logo"
              className="mb-8 h-12 w-auto"
            />
            <h1 className="text-[55px] font-bold uppercase leading-[1.1] tracking-[-0.02em]">
              <span className="block text-[#6C5CE7]">JÁ FATURA</span>
              <span className="block text-[#6C5CE7]">R$ 70 MIL/MÊS?</span>
              <span className="block text-[#4D4D4D]">ENTÃO NÃO FAZ</span>
              <span className="block text-[#4D4D4D]">SENTIDO SUA</span>
              <span className="block text-[#4D4D4D]">EMPRESA SEGUIR</span>
              <span className="block text-[#4D4D4D]">NO IMPROVISO.</span>
            </h1>
            <p className="mt-8 text-[30px] leading-[35px] text-[#4D4D4D]">
              Garanta seu{" "}
              <span className="inline-block bg-[#FF1E5B] px-2 py-1 text-white">
                Mapa Estratégico de Marketing
              </span>{" "}
              e saiba exatamente onde focar para crescer em 2026.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[614px] rounded-none bg-[#6C5CE7] p-8 sm:p-10">
              <LeadCaptureForm variant="hero" submitLabel="Quero meu mapa estratégico" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
