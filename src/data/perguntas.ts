import { company } from "./empresa";

// Perguntas frequentes, em grupos. `home: true` aparece também na página inicial.
// Respostas enviadas pela cliente em 20/10/2026.
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
        answer: ["O período mínimo de aluguel é de 10 dias."],
        home: true,
      },
      {
        id: "como-alugar",
        question: "Como faço para alugar a poltrona?",
        answer: [
          `Pelo WhatsApp ${company.whatsapp.display}, com atendimento 24 horas. A gente confere a disponibilidade, combina o período e entrega a poltrona no dia anterior à cirurgia.`,
        ],
      },
      {
        id: "fins-de-semana",
        question: "Vocês atendem nos fins de semana?",
        answer: ["Sim. O atendimento é 24 horas, todos os dias."],
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
        answer: [medicalTeam],
        home: true,
      },
      {
        id: "renovacao",
        question: "Dá para renovar o período de aluguel?",
        answer: [
          "Sim. Se você entender que o pacote de dias escolhido não será suficiente, é possível renovar por mais dias.",
        ],
      },
      {
        id: "contrato",
        question: "Existe contrato de locação?",
        answer: ["Sim. Existe um termo de locação, com todas as informações sobre a locação contratada."],
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
        answer: [
          "A poltrona é entregue no dia anterior à cirurgia, para que tudo já esteja organizado quando o paciente voltar para casa.",
        ],
        home: true,
      },
      {
        id: "cidades",
        question: "Quais cidades vocês atendem?",
        answer: [`${company.serviceArea}, com entrega e retirada em casa.`],
        home: true,
      },
      {
        id: "instalacao",
        question: "Quem instala a poltrona?",
        answer: ["A poltrona é instalada pelo técnico capacitado que a leva até a casa do paciente."],
      },
      {
        id: "retirada",
        question: "Como é a retirada?",
        answer: [
          `Ao final do período combinado, a ${company.name} organiza a retirada do equipamento. Você não precisa se preocupar com o que fazer com a poltrona depois.`,
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
          "Antes de cada entrega, a poltrona passa por quatro etapas: conferência, higienização, sanitização e preparação.",
          "Primeiro, conferimos o estado geral da poltrona, como estrutura, regulagens e estofado. Depois, fazemos a limpeza completa de todas as partes que encostam no corpo, como assento, encosto, braços e apoios. Em seguida, aplicamos produtos próprios para sanitização, seguros para o tipo de material da poltrona. Por fim, deixamos tudo seco e protegido para a entrega.",
          "Assim, quem está em recuperação recebe a poltrona limpa e pronta para usar, sem se preocupar com nada.",
        ],
        home: true,
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
        answer: ["Dinheiro, Pix, cartão de crédito e cartão de débito."],
      },
    ],
  },
];

export const questions: Question[] = questionGroups.flatMap((group) => group.questions);
