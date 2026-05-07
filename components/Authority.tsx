"use client";

import { FadeIn } from "./MotionWrapper";

const numbers = [
  "+1.000 projetos entregues",
  "+R$10 milhões gerenciados em mídia e aquisição",
  "+10 anos ajudando empresas a crescer com marketing estruturado",
];

export default function Authority() {
  return (
    <section className="bg-[#1A1A1A] py-20 font-['Plus_Jakarta_Sans'] text-white md:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-[40px] font-bold leading-tight md:text-[58px]">
                Mais de uma década estruturando marketing que gera crescimento
              </h2>
              <p className="mt-6 text-[20px] leading-relaxed text-white/78">
                A Meme Digital já participou diretamente da construção de operações de marketing em
                diferentes mercados, combinando estratégia, execução e gestão de investimento em
                mídia.
              </p>
            </div>
            <div className="grid gap-4">
              {numbers.map((number) => (
                <div key={number} className="border-l-4 border-[#FF1E5B] bg-white/7 p-5">
                  <p className="text-[26px] font-bold leading-tight">{number}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-12 bg-white p-6 text-[#1D1D1D] md:p-8">
            <p className="text-[18px] font-bold uppercase tracking-wide text-[#6767F1]">
              Atuação prática em setores como:
            </p>
            <p className="mt-3 text-[24px] font-semibold leading-relaxed">
              Saúde, indústria, franquias, varejo, logística, construção, tecnologia, agro,
              auditorias e consultorias.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
