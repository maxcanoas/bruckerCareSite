import { company } from "./empresa";

// Perguntas frequentes, em grupos. `home: true` aparece também na página inicial.
// Respostas em lorem ipsum esperam dados da cliente (docs/pendencias.md).
export interface Question {
  id: string;
  question: string;
  answer: string[];
  home?: boolean;
}

export interface QuestionGroup {
  id: string;
  title: string;
  questions: Question[];
}

const medicalTeam =
  "As orientações sobre a sua recuperação, incluindo o uso de equipamentos de apoio, vêm sempre da sua equipe médica.";

export const questionGroups: QuestionGroup[] = [
  {
    id: "locacao",
    title: "Locação",
    questions: [
      {
        id: "periodo-minimo",
        question: "Qual é o período mínimo de aluguel?",
        answer: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        home: true,
      },
      {
        id: "cirurgias",
        question: "Para quais cirurgias a poltrona serve?",
        answer: [
          "A poltrona pode ser usada na recuperação de cirurgias em geral, inclusive plásticas.",
          "Quem orienta o que é adequado para o seu caso é sempre a sua equipe médica.",
        ],
      },
      {
        id: "indicacao-medica",
        question: "Preciso de indicação médica para alugar?",
        answer: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", medicalTeam],
        home: true,
      },
      {
        id: "cores",
        question: "Quais cores estão disponíveis?",
        answer: ["Preto, verde, bege e marrom. A cor depende da disponibilidade na data."],
      },
      {
        id: "renovacao",
        question: "Dá para renovar o período de aluguel?",
        answer: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."],
      },
      {
        id: "contrato",
        question: "Existe contrato de locação?",
        answer: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."],
      },
    ],
  },
  {
    id: "entrega-e-retirada",
    title: "Entrega e retirada",
    questions: [
      {
        id: "prazo-de-entrega",
        question: "Em quanto tempo a poltrona chega?",
        answer: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."],
        home: true,
      },
      {
        id: "cidades",
        question: "Quais cidades vocês atendem?",
        answer: [`${company.serviceArea}, com entrega e retirada em casa.`, company.serviceAreaDetail],
        home: true,
      },
      {
        id: "instalacao",
        question: "Quem instala a poltrona?",
        answer: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."],
      },
      {
        id: "o-que-vem-junto",
        question: "O que vem junto na entrega?",
        answer: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."],
      },
      {
        id: "retirada",
        question: "Como é a retirada?",
        answer: [
          `Ao final do período combinado, a ${company.name} organiza a retirada do equipamento. Você não precisa se preocupar com o que fazer com a poltrona depois.`,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        ],
      },
    ],
  },
  {
    id: "higiene",
    title: "Higiene e preparo",
    questions: [
      {
        id: "higienizacao",
        question: "Como é feita a higienização?",
        answer: [
          "Antes de cada entrega, a poltrona passa por conferência, higienização, sanitização e preparação.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        ],
        home: true,
      },
      {
        id: "conferencia",
        question: "A poltrona é conferida antes da entrega?",
        answer: ["Sim. Antes de seguir para a entrega, cada equipamento é inspecionado e verificado."],
      },
    ],
  },
  {
    id: "valores-e-pagamento",
    title: "Valores e pagamento",
    questions: [
      {
        id: "valor",
        question: "Quanto custa o aluguel?",
        answer: [
          `O valor depende do período de aluguel. Fale com a ${company.name} pelo WhatsApp para consultar a disponibilidade e o valor para o seu caso.`,
        ],
      },
      {
        id: "pagamento",
        question: "Quais são as formas de pagamento?",
        answer: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."],
      },
    ],
  },
];

export const questions: Question[] = questionGroups.flatMap((group) => group.questions);
