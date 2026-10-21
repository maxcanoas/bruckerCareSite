// A poltrona: fotos com texto alternativo.

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
