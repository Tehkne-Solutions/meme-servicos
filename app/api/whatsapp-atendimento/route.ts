import { NextResponse } from "next/server";

type Department = {
  id: string;
  label: string;
  subtitle: string;
  phone: string;
};

export const dynamic = "force-dynamic";

function normalizePhone(value: string | undefined): string {
  const digits = (value ?? "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("55")) return digits;
  return `55${digits}`;
}

function buildDepartments(): Department[] {
  const defaultPhone = normalizePhone(process.env.MEME_WHATSAPP_PHONE ?? process.env.NEXT_PUBLIC_MEME_WHATSAPP_PHONE);

  return [
    {
      id: "estrategia-proposta",
      label: "Estratégia e proposta",
      subtitle: "Diagnóstico, escopo, investimento e plano ideal para sua empresa",
      phone: normalizePhone(process.env.MEME_WHATSAPP_ESTRATEGIA_PHONE) || defaultPhone,
    },
    {
      id: "performance",
      label: "Tráfego e performance",
      subtitle: "Campanhas, mídia paga, aquisição, leads e funil comercial",
      phone: normalizePhone(process.env.MEME_WHATSAPP_PERFORMANCE_PHONE) || defaultPhone,
    },
    {
      id: "sites-lps-crm",
      label: "Sites, LPs, CRM e automação",
      subtitle: "Landing pages, integrações, automações e estrutura Martech",
      phone: normalizePhone(process.env.MEME_WHATSAPP_MARTECH_PHONE) || defaultPhone,
    },
    {
      id: "branding-criacao",
      label: "Branding e criação",
      subtitle: "Identidade, criativos, copy, conteúdo e experiência visual",
      phone: normalizePhone(process.env.MEME_WHATSAPP_CRIACAO_PHONE) || defaultPhone,
    },
    {
      id: "geral",
      label: "Atendimento geral",
      subtitle: "Dúvidas gerais e direcionamento para o especialista certo",
      phone: defaultPhone,
    },
  ];
}

export async function GET() {
  return NextResponse.json({ items: buildDepartments() });
}
