// Dados da BruckerCare usados em todo o site.
//
// Tudo o que ainda está em lorem ipsum depende de resposta da cliente
// (lista em docs/pendencias.md). O build de produção falha enquanto
// houver lorem no site; use `npm run build:preview` para gerar uma prévia.

export const company = {
  name: "BruckerCare",
  founder: "Pâmela Zweibrucker",

  whatsapp: { number: "5551998631666", display: "(51) 99863-1666" },
  phone: { href: "tel:+5551998631666", display: "(51) 99863-1666" },
  email: "contato@bruckercare.com.br",
  instagram: { handle: "@bruckercare", url: "https://www.instagram.com/bruckercare/" },

  city: "Canoas",
  state: "RS",
  serviceArea: "Canoas, Porto Alegre e região",

  // PENDENTE: cidades exatas que entram em "região".
  serviceAreaDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  // PENDENTE: horário de atendimento no WhatsApp e das entregas.
  hours: "Lorem ipsum dolor sit amet, 00h às 00h.",
  // PENDENTE: razão social e CNPJ.
  legalName: "Lorem ipsum dolor sit amet",
  taxId: "CNPJ lorem ipsum",
} as const;
