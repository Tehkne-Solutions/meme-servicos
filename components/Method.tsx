import React from 'react';

const Method = () => {
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
      <div className="absolute top-[280px] left-[145px] flex gap-[36px]">
        {/* Card 1 */}
        <div className="w-[361px] h-[415px] bg-white p-[36px] relative flex flex-col justify-end">
          <span className="absolute top-[15px] left-[36px] text-[150px] font-bold text-[#1D1D1D] leading-none">1</span>
          <h3 className="text-[35px] text-[#1D1D1D] mb-4">Atração</h3>
          <p className="text-[20px] leading-[30px] text-[#1D1D1D]/80">
            Atrair o público-alvo com planejamento estratégico, branding, campanhas de marketing e SEO.
          </p>
        </div>

        {/* Card 2 - Destaque Rosa */}
        <div className="w-[359px] h-[415px] bg-[#FF1E5B] p-[36px] relative flex flex-col justify-end">
          <span className="absolute top-[15px] left-[25px] text-[150px] font-bold text-white leading-none">2</span>
          <h3 className="text-[30px] text-white mb-4">Engajamento</h3>
          <p className="text-[20px] leading-[30px] text-white/80">
            Envolver o público oferecendo conteúdo valioso, construindo confiança por meio de UX otimizado.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-[361px] h-[415px] bg-white p-[36px] relative flex flex-col justify-end">
          <span className="absolute top-[10px] left-[42px] text-[150px] font-bold text-[#1D1D1D] leading-none">3</span>
          <h3 className="text-[35px] text-[#1D1D1D] mb-4">Venda</h3>
          <p className="text-[20px] leading-[30px] text-[#1D1D1D]/80">
            Converter engajamento em vendas com estratégias eficazes de tráfego pago, CRM e automações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Method;
