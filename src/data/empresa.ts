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
  email: "bruckercare@gmail.com",
  instagram: { handle: "@bruckercare", url: "https://www.instagram.com/bruckercare/" },

  city: "Canoas",
  state: "RS",
  serviceArea: "Canoas, Porto Alegre e região",

  hours: "Atendimento 24 horas.",
  // Sem razão social e CNPJ: o CNPJ está em aprovação, e o site vai ao ar sem ele (21/10/2026).
} as const;
