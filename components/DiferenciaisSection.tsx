import Image from "next/image";

const tags = [
  "Profundidade real personalização total",
  "Ativos reais e não só análises",
  "Equipe sênior meme7",
  "Estratégia + execução",
  "Foco direto em faturamento",
];

export default function DiferenciaisSection() {
  return (
    <section className="w-full bg-white py-20 font-sans">
      <div className="mx-auto max-w-[1336px] px-6 md:px-12">
        <h2 className="mb-12 text-[40px] font-bold leading-[1.05] text-[#1A1A1A] md:text-[56px]">
          Diferenciais Meme Digital
        </h2>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="relative h-[320px] overflow-hidden rounded-sm md:col-span-2 md:h-[450px]">
            <Image
              src="/images/meme-digital-diferenciais-1.png"
              alt="Profissional da Meme Digital em ambiente de trabalho"
              fill
              sizes="(max-width: 767px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-sm md:h-[450px]">
            <Image
              src="/images/meme-digital-diferenciais-2.png"
              alt="Profissional da Meme Digital utilizando tablet"
              fill
              sizes="(max-width: 767px) 100vw, 34vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex max-w-[900px] flex-wrap gap-3">
            {tags.map((tag) => (
              <div
                key={tag}
                className="rounded-full border border-[#6767F1] px-6 py-2 text-[18px] font-medium text-[#6767F1]"
              >
                {tag}
              </div>
            ))}
          </div>

          <a
            href="#contato"
            className="cta-premium shrink-0 bg-[#FF1E5B] px-8 py-4 text-[18px] font-bold text-white hover:bg-[#E61A52] hover:shadow-[0_15px_30px_rgba(255,30,91,0.28)]"
          >
            Entender como trabalhamos
          </a>
        </div>

        <div className="w-full border-t border-gray-100 pt-12">
          <div className="relative h-[54px] w-full md:h-[80px]">
            <Image
              src="/images/meme-digital-diferenciais-3-clientes.png"
              alt="Logos de clientes da Meme Digital"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
