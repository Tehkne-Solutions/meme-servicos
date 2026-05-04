import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meme Serviços | Landing Page",
  description: "Mapa Estratégico de Marketing para crescer com estratégia e previsibilidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
