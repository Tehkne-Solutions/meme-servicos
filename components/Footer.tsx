"use client";

import Image from "next/image";
import LeadCaptureForm from "./LeadCaptureForm";

export default function Footer() {
  return (
    <footer id="contato" className="w-full scroll-mt-20 bg-[#1A1A1A] py-24 font-sans">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-16 px-8 lg:flex-row lg:px-12">
        <div className="w-full text-white lg:w-1/2">
          <h2 className="mb-8 text-[56px] font-bold leading-[1.1] lg:text-[64px]">
            Conectamos
            <br />
            Pessoas e
            <br />
            NegÃ³cios no
            <br />
            Digital
          </h2>

          <p className="mb-12 max-w-[500px] text-[20px] font-light leading-relaxed opacity-90">
            Somos uma agÃªncia <span className="font-semibold uppercase">MARTECH</span> de
            marketing digital e tecnologia dedicada a proporcionar boas experiÃªncias de usuÃ¡rio e
            impulsionar altas taxas de conversÃ£o no B2B e B2C.
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

        <div className="w-full max-w-[614px] rounded-sm bg-white p-10 shadow-2xl lg:p-14">
          <LeadCaptureForm
            variant="footer"
            submitLabel="ENCONTRE OPORTUNIDADES PARA SEU NEGÃ“CIO"
          />
        </div>
      </div>
    </footer>
  );
}
