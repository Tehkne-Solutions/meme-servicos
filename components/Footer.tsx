"use client";

import Image from "next/image";
import { FadeIn } from "./MotionWrapper";
import LeadCaptureForm from "./LeadCaptureForm";

export default function Footer() {
  return (
    <footer id="contato" className="w-full scroll-mt-20 bg-[#1A1A1A] py-24 text-white font-['Plus_Jakarta_Sans']">
      <div className="mx-auto max-w-[1320px] px-8 flex flex-col md:flex-row justify-between items-start gap-32">

        <FadeIn delay={0.2}>
          <div className="flex-1 max-w-[550px]">
            <h2 className="text-[64px] font-bold leading-[1.05] mb-12">
              Conectamos<br />Pessoas e<br />Negócios no<br />Digital
            </h2>
            <p className="text-[18px] leading-relaxed mb-16 opacity-90">
              Somos uma agência <span className="font-bold">MARTECH</span> de marketing digital e tecnologia dedicada a proporcionar boas experiências de usuário e impulsionar altas taxas de conversão no B2B e B2C.
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
          <div className="w-full md:w-[500px] bg-white p-12 shadow-2xl">
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
