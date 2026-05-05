import Image from "next/image";

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
    <section className="flex w-full justify-center overflow-hidden bg-white py-24 font-sans">
      <div className="flex w-full max-w-[1320px] flex-col items-start justify-between gap-12 px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex max-w-[500px] shrink-0 flex-col">
          <h2 className="mb-[25px] text-[65px] font-bold leading-[82px] tracking-[-0.02em] text-[#000000]">
            Nosso <br /> Ecossistema
          </h2>
          <p className="max-w-[330px] text-[22px] font-normal leading-[30px] text-[#8F8FA3]">
            A Meme Digital é uma agência Martech com abordagem integrada, squads e soluções sob
            medida.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-[22px]">
          {ecossistemaItems.map((item) => (
            <div key={item.name} className="flex items-center gap-4">
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
          ))}
        </div>

        <div className="flex h-[238px] w-full max-w-[513px] shrink-0 items-center justify-center bg-[#6C5CE7] p-8">
          <p className="max-w-[376px] text-[22px] font-normal leading-[30px] text-[#FFFFFF]">
            Criamos soluções completas em design, desenvolvimento web, branding e performance para
            alcançar resultados excepcionais.
          </p>
        </div>
      </div>
    </section>
  );
}
