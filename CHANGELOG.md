# Changelog - Meme Serviços Landing Page

## [Unreleased]

### Fixed

- **Encoding UTF-8 (mojibake)**: Corrigidos caracteres corrompidos em `Footer.tsx`, `AcquisitionSection.tsx` e `FAQ.tsx` — textos como `NegÃ³cios`, `AquisiÃ§Ã£o`, `DiagnÃ³stico`, `devoluÃ§Ã£o`, `mÃªs` restaurados para PT-BR correto
- **Footer**: `submitLabel` corrigido de `NEGÃ"CIO` para `NEGÓCIO`; parágrafo de descrição da agência restaurado com acentuação correta
- **AcquisitionSection**: Título `AquisiÃ§Ã£o de Leads` e steps do funil (`estratÃ©gico`, `CriaÃ§Ã£o`, `TrÃ¡fego`, `IntegraÃ§Ã£o`, `NutriÃ§Ã£o`) corrigidos
- **FAQ**: Respostas `devoluÃ§Ã£o`, `mÃªs` e `DiagnÃ³stico` corrigidas

---

## [69b0214] - 2025

### Fixed

- **Performance**: Removidos `SmoothScroll` (ReactLenis) e `Header` do `page.tsx` — rolagem volta a ser nativa do navegador
- **Fidelidade Figma**: `Header` excluído do layout; Hero permanece no topo sem sobreposição
- **Deliverables**: Mojibake corrigido (`SeÃ§Ã£o`, `AÃ§Ãµes`, `EntregÃ¡veis`, `CompensaÃ§Ã£o`); caixa branca restaurada com `bg-white` e `text-[#6767F1]`
- **DiferenciaisSection**: Mojibake nas tags corrigido; bloco de imagem inexistente (`meme-digital-diferenciais-3-clientes.png`) removido e substituído por `<LogoCarousel />`
- **LogoCarousel**: Título inventado removido; nova ordem de logos; triplo array com `animate -33.33%`; `img` nativo substituindo `Image` do Next.js

### Removed

- `SmoothScroll.tsx` — dependência `@studio-freight/react-lenis` não utilizada
- `Header.tsx` — componente não previsto no Figma
- `public/images/meme-digital-diferenciais-3-clientes.png` — arquivo inexistente removido do repositório

---

## [8ed3b15] - 2025

### Added

- **LogoCarousel Component**: Carrossel infinito com logos de clientes, máscaras de gradiente e efeito hover grayscale
- **SmoothScroll Component**: Rolagem suave via Lenis
- **Header Component**: Header com glassmorphism e efeito de scroll
- **Framer Motion**: Animações spring em todos os CTAs (`stiffness: 400, damping: 17`)

### Fixed

- **Import Corrections**: Corrigidas importações duplicadas em `page.tsx`
- **Carrossel**: Corrigido para usar logos de clientes reais

### Technical

- Dependência `@studio-freight/react-lenis` adicionada
- Logos de clientes adicionados em `public/images/clientes/`
