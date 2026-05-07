"use client";

import Image from "next/image";
import { FadeIn } from "./MotionWrapper";

const ecossistemaItems = [
  { name: "FRANQUIA", color: "#F05A64" },
  { name: "AGÊNCIA", color: "#5A9BD5" },
  { name: "E-COMMERCE", color: "#D155CA" },
  { name: "DESIGN", color: "#F04B82" },
  { name: "PERFORMANCE", color: "#4B82F0" },
  { name: "TECH", color: "#1E4BFF" },
  { name: "INFOPRODUTO", color: "#F08C4B" },
];

export default function NossoEcossistema() {
  return (
    <section className="flex w-full justify-center overflow-hidden bg-white py-20 font-sans md:py-24">
      <div className="flex w-full max-w-[1320px] flex-col items-start justify-between gap-12 px-6 lg:flex-row lg:items-center lg:px-8">
        <FadeIn delay={0.2}>
          <div className="flex max-w-[520px] shrink-0 flex-col">
            <h2 className="mb-[25px] text-[48px] font-bold leading-tight tracking-[-0.02em] text-[#000000] md:text-[65px]">
              Nosso <br /> Ecossistema
            </h2>
            <p className="max-w-[460px] text-[21px] font-normal leading-[30px] text-[#8F8FA3]">
              A Meme Digital atua como uma agência Martech com estrutura integrada e squads
              especializados, organizados conforme a necessidade de cada operação.
            </p>
          </div>
        </FadeIn>

        <div className="flex shrink-0 flex-col gap-[22px]">
          {ecossistemaItems.map((item, i) => (
            <FadeIn key={item.name} delay={0.2 + i * 0.08}>
              <div className="flex items-center gap-4">
                <div className="relative h-[42px] w-[42px] shrink-0">
                  <Image
                    src="/images/meme-digital-icone-meme.jpeg"
                    alt={`Ícone ${item.name}`}
                    fill
                    className="object-contain mix-blend-multiply"
                  />
                </div>

                <div className="flex items-center text-[20px] font-bold tracking-wide lg:text-[22px]">
                  <span style={{ color: item.color }} className="mr-2">
                    /
                  </span>
                  <span className="text-[#B0B0C0]">MEME.</span>
                  <span style={{ color: item.color }}>{item.name}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} direction="left">
          <div className="flex w-full max-w-[513px] shrink-0 flex-col justify-center bg-[#6C5CE7] p-8 text-white">
            <h3 className="text-[30px] font-bold leading-tight">
              Estrutura completa para sustentar crescimento
            </h3>
            <p className="mt-5 text-[19px] font-normal leading-[29px]">
              Squads conectando estratégia, criação, performance e tecnologia em uma rotina contínua
              de execução e otimização.
            </p>
            <p className="mt-4 text-[19px] font-normal leading-[29px]">
              Desenvolvemos soluções em design, desenvolvimento web, branding e aquisição para
              apoiar o crescimento com consistência.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
