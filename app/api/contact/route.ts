import { NextResponse } from "next/server";

const RECIPIENT_EMAIL = "contato@memedigital.com.br";

type ContactRequestBody = {
  nome?: unknown;
  email?: unknown;
  empresa?: unknown;
  telefone?: unknown;
  setor?: unknown;
  faturamento?: unknown;
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function resolveEndpoint() {
  const customEndpoint = process.env.CONTACT_FORM_ENDPOINT?.trim();
  if (customEndpoint) {
    return customEndpoint;
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID?.trim();
  if (formspreeId) {
    return `https://formspree.io/f/${formspreeId}`;
  }

  return null;
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const nome = sanitize(body.nome);
  const email = sanitize(body.email);
  const empresa = sanitize(body.empresa);
  const telefone = sanitize(body.telefone);
  const setor = sanitize(body.setor);
  const faturamento = sanitize(body.faturamento);

  if (!nome || !email || !empresa || !telefone || !setor || !faturamento) {
    return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }

  const endpoint = resolveEndpoint();
  if (!endpoint) {
    return NextResponse.json(
      {
        error:
          "Configure CONTACT_FORM_ENDPOINT ou FORMSPREE_FORM_ID para habilitar o envio do formulário.",
      },
      { status: 503 }
    );
  }

  const payload = {
    nome,
    email,
    empresa,
    telefone,
    setor,
    faturamento,
    recipient: RECIPIENT_EMAIL,
    source: "meme-servicos-landing-page",
    _replyto: email,
    _subject: `Novo lead Meme Digital: ${empresa}`,
  };

  try {
    const upstreamResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!upstreamResponse.ok) {
      const errorBody = await upstreamResponse.text();
      console.error("Falha no encaminhamento do formulário:", upstreamResponse.status, errorBody);

      return NextResponse.json(
        { error: "Não foi possível encaminhar a mensagem para o destino configurado." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro interno ao enviar formulário:", error);
    return NextResponse.json({ error: "Erro interno ao processar o envio." }, { status: 500 });
  }
}
