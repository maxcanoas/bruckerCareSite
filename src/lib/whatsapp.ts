import { company } from "../data/empresa";

// Cada ponto de clique abre o WhatsApp com uma mensagem própria,
// o que também ajuda a saber no atendimento de onde a pessoa veio.
export const whatsappMessages = {
  header: "Olá! Vim pelo site da BruckerCare e quero saber sobre a locação da poltrona.",
  menu: "Olá! Vim pelo site da BruckerCare e quero saber sobre a locação da poltrona.",
  floating: "Olá! Vim pelo site da BruckerCare e tenho uma dúvida sobre a locação da poltrona.",
  homeHero: "Olá! Vim pelo site e quero saber sobre a locação da poltrona para a recuperação.",
  homeHowItWorks: "Olá! Vim pelo site e quero consultar a disponibilidade da poltrona.",
  homeFaq: "Olá! Vim pelo site e tenho uma dúvida que não encontrei nas perguntas frequentes.",
  homeClosing: "Olá! Vim pelo site e quero consultar a disponibilidade da poltrona para a minha recuperação.",
  footer: "Olá! Vim pelo site da BruckerCare e quero falar sobre a locação da poltrona.",
  aboutClosing: "Olá! Vim pelo site, li sobre a BruckerCare e quero consultar a disponibilidade da poltrona.",
  chairIntro: "Olá! Vim pelo site e quero consultar a disponibilidade da poltrona elétrica.",
  chairRental: "Olá! Vim pelo site e quero saber como funciona o aluguel da poltrona.",
  chairClosing: "Olá! Vim pelo site e quero consultar a disponibilidade da poltrona para a recuperação.",
  faqAside: "Olá! Vim pelo site e tenho uma dúvida sobre o aluguel da poltrona.",
  faqEnd: "Olá! Vim pelo site e não encontrei a minha dúvida nas perguntas frequentes.",
  contactDirect: "Olá! Vim pelo site e quero falar com a BruckerCare sobre a locação da poltrona.",
} as const;

export type WhatsappPlacement = keyof typeof whatsappMessages;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
