"use client";

export default function MartechSection() {
  return (
    <section className="bg-secondary min-h-[738px] flex items-center py-20 text-white font-inter">
      <div className="max-w-[1276px] mx-auto px-4 text-center">
        <h2 className="text-[50px] leading-[61px] font-bold lowercase mb-8">
          Agência Martech
        </h2>
        <p className="font-jakarta text-[20px] leading-[26px] tracking-[0.5px] max-w-[1154px] mx-auto opacity-90">
          In oculis quidem se... [Texto do Figma]
        </p>

        {/* Grid de Ícones/Serviços conforme o Group 427320434 do CSS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-20">
          {["Web Development", "Web Design", "User Interface Design", "Graphic Design"].map((service, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] bg-white/10 rounded-sm flex items-center justify-center">
                {/* Ícone aqui */}
              </div>
              <span className="font-jakarta font-bold text-[21px] leading-[20px]">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
