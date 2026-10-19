// A poltrona: fotos com texto alternativo, cores e o que vem junto na entrega.

export interface ChairPhoto {
  name: string;
  alt: string;
}

export const chairPhotos = {
  studio: {
    name: "poltrona-estudio-verde",
    alt: "Poltrona elétrica de couro caramelo, com a almofada do encosto bordada com o logo da BruckerCare e botões de ajuste na lateral do braço, sobre fundo verde escuro.",
  },
  reclined: {
    name: "poltrona-reclinada-lateral-4x5",
    alt: "Poltrona de couro marrom vista de lado, com o encosto reclinado e o apoio para as pernas levantado, numa sala clara com piso de madeira.",
  },
  room: {
    name: "poltrona-quarto",
    alt: "Poltrona elétrica de couro marrom com o logo da BruckerCare no encosto, num quarto ao lado da cama, com o abajur aceso na mesa de cabeceira.",
  },
  resting: {
    name: "recuperacao-descanso",
    alt: "Mulher descansando de olhos fechados numa poltrona elétrica de couro marrom reclinada, com as pernas apoiadas e uma manta clara, ao lado de uma janela com cortina de linho.",
  },
  remote: {
    name: "detalhe-controle-mao",
    alt: "Mão apoiada sobre o controle com fio da poltrona, no braço de couro marrom.",
  },
  armButtons: {
    name: "detalhe-botoes-braco",
    alt: "Detalhe do braço de uma poltrona de couro caramelo, com o painel de dois botões de ajuste na lateral e o porta-copos embutido no topo.",
  },
} satisfies Record<string, ChairPhoto>;

// Cores informadas pela cliente. A amostra é um tom aproximado.
// PENDENTE: conferir os quatro tons pela foto real das poltronas (docs/pendencias.md).
export const chairColors = [
  { name: "Preto", hex: "#1d1b1a" },
  { name: "Verde", hex: "#2f4a3e" },
  { name: "Bege", hex: "#d8c7ae" },
  { name: "Marrom", hex: "#4a3124" },
];

// PENDENTE: o que vem junto na entrega (controle, cabo, capa, orientações de uso?).
export const deliveryItems = [
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum consectetur adipiscing elit",
  "Lorem ipsum sed do eiusmod tempor",
];
