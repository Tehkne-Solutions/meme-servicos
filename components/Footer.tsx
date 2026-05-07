"use client";

import Image from "next/image";
import { FadeIn } from "./MotionWrapper";
import LeadCaptureForm from "./LeadCaptureForm";

export default function Footer() {
  return (
    <footer id="contato" className="w-full scroll-mt-20 bg-[#1A1A1A] py-20 font-['Plus_Jakarta_Sans'] text-white md:py-24">
      <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-12 px-6 md:flex-row lg:px-8">
        <FadeIn delay={0.2}>
          <div className="max-w-[550px] flex-1">
            <h2 className="mb-12 text-[44px] font-bold leading-[1.05] md:text-[64px]">
              Conectamos
              <br />
              Pessoas e
              <br />
              Negócios no
              <br />
              Digital
            </h2>

            <p className="mb-16 text-[18px] leading-relaxed opacity-90">
              Somos uma agência <span className="font-bold">MARTECH</span> de marketing digital e
              tecnologia dedicada a proporcionar boas experiências de usuário e impulsionar altas
              taxas de conversão no B2B e B2C.
            </p>
            <div className="relative h-[61px] w-[196px]">
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
          <div className="w-full bg-white p-8 shadow-2xl md:w-[500px] md:p-12">
            <LeadCaptureForm variant="footer" submitLabel="Quero estruturar meu marketing" />
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
