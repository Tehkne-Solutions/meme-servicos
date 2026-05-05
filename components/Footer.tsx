"use client";

import Image from "next/image";
import { FadeIn } from "./MotionWrapper";
import LeadCaptureForm from "./LeadCaptureForm";

export default function Footer() {
  return (
    <footer id="contato" className="w-full scroll-mt-20 bg-[#1A1A1A] py-24 text-white font-['Plus_Jakarta_Sans']">
      <div className="mx-auto max-w-[1220px] px-6 flex flex-col md:flex-row justify-between items-start gap-20">

        <FadeIn delay={0.2}>
          <div className="w-full md:w-[550px]">
            <h2 className="text-[50px] font-bold leading-[1.1] mb-8">
              Conectamos Pessoas e Negócios no Digital
            </h2>
            <p className="text-white/70 text-[20px] leading-relaxed">
              Somos uma agência MARTECH que une tecnologia e estratégia para transformar sua presença online em faturamento real.
            </p>
            <div className="relative h-[61px] w-[196px] mt-12">
              <Image
                src="/images/meme-digital-logo-rodape.png"
                alt="Meme Digital"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} direction="left">
          <div className="flex-1 w-full max-w-[600px] bg-white p-10">
            <LeadCaptureForm
              variant="footer"
              submitLabel="ENCONTRE OPORTUNIDADES PARA SEU NEGÓCIO"
            />
          </div>
        </FadeIn>

      </div>
    </footer>
  );
}
