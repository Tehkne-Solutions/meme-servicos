"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] text-gray text-small py-8">
      <div className="container-custom border-t border-white/10 pt-6">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="font-semibold text-white">Meme Digital</p>
            <p className="mt-2">Estratégia Digital para Crescimento Real</p>
          </div>
          <div className="col-span-12 md:col-span-2">
            <p className="font-semibold text-white mb-3">Links</p>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Sobre</a></li>
              <li><a href="#" className="hover:text-white transition">Serviços</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2">
            <p className="font-semibold text-white mb-3">Contato</p>
            <ul className="space-y-2">
              <li><a href="mailto:contato@meme.digital" className="hover:text-white transition">Email</a></li>
              <li><a href="https://wa.me" className="hover:text-white transition">WhatsApp</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4 text-right">
            <p>© {year} Meme Digital. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
