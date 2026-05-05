import Image from "next/image";
import LeadCaptureForm from "./LeadCaptureForm";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="relative flex min-h-[839px] w-full items-center bg-[#1A1A1A] py-24 font-sans"
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col justify-between gap-16 px-8 lg:flex-row lg:items-end lg:gap-0 lg:px-[140px]">
        <div className="flex h-full min-h-[300px] w-full items-end justify-start lg:w-1/2 lg:pb-12">
          <div className="relative h-[61px] w-[196px]">
            <Image
              src="/images/meme-digital-logo-rodape.png"
              alt="Meme Digital Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full max-w-[614px] shrink-0 border-t-8 border-[#6C5CE7] bg-white p-8 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] md:p-12">
          <LeadCaptureForm
            variant="footer"
            submitLabel="Encontre oportunidades para seu negócio"
          />
        </div>
      </div>
    </footer>
  );
}
