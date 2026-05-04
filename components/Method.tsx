import React, { useState } from 'react';

const Method = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const memeCards = [
    {
      id: 1,
      title: 'Atração',
      text: 'Atrair o público-alvo com planejamento estratégico, branding, campanhas de marketing, landing pages otimizadas, conteúdo criativo, tráfego pago e SEO.',
    },
    {
      id: 2,
      title: 'Engajamento',
      text: 'Envolver o público oferecendo conteúdo valioso, construindo confiança por meio de UX otimizado e tornando a marca uma referência apaixonante.',
    },
    {
      id: 3,
      title: 'Venda',
      text: 'Converter engajamento em vendas com estratégias eficazes de tráfego pago, landing pages, CRM, automações e integração com a equipe comercial.',
    },
  ];

  return (
    <section className="relative w-[1310px] h-[777px] mx-auto bg-[#EEEEEE] overflow-hidden font-['Plus_Jakarta_Sans']">
      {/* Cabeçalho da Seção */}
      <div className="absolute left-[145px] top-[71px]">
        <h2 className="text-[64px] font-bold text-[#1D1D1D] leading-[81px]">Método Meme7</h2>
        <p className="text-[18px] text-[#1D1D1D]/80 mt-2 w-[457px]">
          Atrair os clientes certos, aumentar o reconhecimento da marca e vender muito mais!
        </p>
      </div>

      {/* Botão Premium */}
      <a
        href="#contato"
        className="btn-premium absolute left-[869px] top-[93px] w-[415px] h-[57px] bg-[#6C5CE7] flex items-center justify-center text-white text-[20px] uppercase transition-transform font-semibold"
      >
        Fale com um especialista agora
      </a>

      {/* Container de Cards */}
      <div className="absolute top-[280px] left-[145px] grid grid-cols-3 gap-[36px]">
        {memeCards.map((card) => {
          const isHovered = hoveredCard === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`transition-all duration-500 p-[36px] h-[415px] relative flex flex-col justify-end cursor-default ${
                isHovered ? 'bg-[#FF1E5B] scale-105 shadow-2xl' : 'bg-white'
              }`}
            >
              <span
                className={`absolute top-[15px] ${card.id === 2 ? 'left-[25px]' : card.id === 1 ? 'left-[36px]' : 'left-[42px]'} text-[150px] font-bold leading-none transition-colors duration-500 ${
                  isHovered ? 'text-white' : 'text-[#1D1D1D]'
                }`}
              >
                {card.id}
              </span>
              <h3
                className={`text-[35px] font-bold mb-4 transition-colors duration-500 ${
                  isHovered ? 'text-white' : 'text-[#1D1D1D]'
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-[20px] leading-[30px] transition-colors duration-500 ${
                  isHovered ? 'text-white/90' : 'text-[#1D1D1D]/80'
                }`}
              >
                {card.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Method;
