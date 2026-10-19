// Links do site. As rotas ficam em português, como o brief pede.
export const mainNav = [
  { href: "/a-poltrona", label: "A poltrona" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/perguntas-frequentes", label: "Perguntas frequentes" },
  { href: "/contato", label: "Contato" },
] as const;

export const footerNav = [{ href: "/", label: "Início" }, ...mainNav] as const;
