import Image from "next/image";
import LeadCaptureForm from "./LeadCaptureForm";

export default function Footer() {
  return (
    <footer id="contato" className="w-full scroll-mt-20 bg-[#1A1A1A] py-24 font-sans">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-8 lg:flex-row lg:px-[140px]">
        <div className="w-full text-white lg:w-1/2">
          <h2 className="mb-8 text-[64px] font-bold leading-[1.1]">
            Conectamos
            <br />
            Pessoas e
            <br />
            Negócios no
            <br />
            Digital
          </h2>

          <p className="mb-12 max-w-[440px] text-[18px] font-light opacity-80">
            Somos uma agência MARTECH dedicada a proporcionar boas experiências de usuário e
            impulsionar conversões no B2B e B2C.
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

        <div className="w-full max-w-[614px] bg-white p-12 shadow-2xl md:p-16">
          <LeadCaptureForm
            variant="footer"
            submitLabel="ENCONTRE OPORTUNIDADES PARA SEU NEGÓCIO"
          />
        </div>
      </div>
    </footer>
  );
}
