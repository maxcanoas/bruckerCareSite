import { company } from "./empresa";

// Os 6 passos do aluguel (post 12). Usados na home e na página A poltrona.
export interface RentalStep {
  title: string;
  text: string;
  /** Frase que fecha a sequência, em destaque. */
  closing?: string;
}

export const rentalSteps: RentalStep[] = [
  {
    title: "Você entra em contato.",
    text: `Fale com a ${company.name} e conte o que você precisa. A gente orienta você sobre a disponibilidade e as opções de aluguel.`,
  },
  {
    title: "Entendemos a sua necessidade.",
    text: "Conversamos sobre o período de recuperação e encontramos a opção mais adequada para esse momento.",
  },
  {
    title: "Combinamos os detalhes.",
    text: "Definimos o período de aluguel, o endereço de entrega e as demais informações necessárias. Sem complicação.",
  },
  {
    title: "A poltrona chega até você.",
    text: "O equipamento é preparado e entregue no endereço combinado, pronto para fazer parte da rotina de recuperação.",
  },
  {
    title: "Você usa pelo período necessário.",
    text: "A poltrona fica com você durante o período contratado, com mais conforto e apoio no dia a dia.",
  },
  {
    title: "Quando não precisar mais, a gente retira.",
    text: `Ao final do período combinado, a ${company.name} organiza a retirada do equipamento.`,
    closing: "Você não precisa se preocupar com o que fazer com a poltrona depois.",
  },
];
