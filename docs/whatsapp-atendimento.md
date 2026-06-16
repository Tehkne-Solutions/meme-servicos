# WhatsApp de atendimento — Meme Serviços

Sistema portado e adaptado a partir do módulo de atendimento do Savol Seminovos.

## Arquivos adicionados

- `components/MemeWhatsAppButton.tsx`
- `app/api/whatsapp-atendimento/route.ts`
- `app/template.tsx`

## Como funciona

O botão flutuante abre um mini chat guiado, coleta:

1. Nome
2. E-mail
3. Telefone/WhatsApp
4. Assunto do atendimento

Depois direciona o visitante para o WhatsApp com uma mensagem pronta contendo os dados e a página de origem.

## Variáveis de ambiente

Configure pelo menos uma variável no Vercel:

```env
MEME_WHATSAPP_PHONE=5519999999999
```

Também é possível separar números por frente:

```env
MEME_WHATSAPP_ESTRATEGIA_PHONE=5519999999999
MEME_WHATSAPP_PERFORMANCE_PHONE=5519999999999
MEME_WHATSAPP_MARTECH_PHONE=5519999999999
MEME_WHATSAPP_CRIACAO_PHONE=5519999999999
```

Se as variáveis específicas não existirem, todas as frentes usam `MEME_WHATSAPP_PHONE`.

## Frentes configuradas

- Estratégia e proposta
- Tráfego e performance
- Sites, LPs, CRM e automação
- Branding e criação
- Atendimento geral

## Observação

O sistema não envia mensagens automáticas pelo WhatsApp. Ele apenas monta o link oficial `wa.me` com consentimento do usuário, após clique no botão “Ir para o WhatsApp”.
