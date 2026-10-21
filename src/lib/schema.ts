// Dados estruturados (JSON-LD) para buscadores e assistentes de IA.
// Empresa que atende no local do cliente: cidade e estado, sem endereço de rua.
// Atendimento 24 horas, todos os dias (00:00 às 23:59, como o Google pede).
// Faixa de preço fica de fora até a cliente confirmar (docs/pendencias.md).
import { company } from "../data/empresa";
import type { Question } from "../data/perguntas";

const SITE = "https://bruckercare.com.br";
const businessId = `${SITE}/#empresa`;
const founderId = `${SITE}/quem-somos#pamela`;

const areaServed = [
  { "@type": "City", name: "Canoas" },
  { "@type": "City", name: "Porto Alegre" },
];

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: company.name,
    description: `Aluguel de poltronas reclináveis elétricas para recuperação pós-operatória, com entrega e retirada em casa em ${company.serviceArea}.`,
    url: `${SITE}/`,
    telephone: "+55-51-99863-1666",
    email: company.email,
    image: `${SITE}/og-image.jpg`,
    logo: `${SITE}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.state,
      addressCountry: "BR",
    },
    areaServed,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    founder: { "@type": "Person", "@id": founderId, name: company.founder },
    sameAs: [company.instagram.url],
  };
}

// Só na home: dá ao Google o nome do site que aparece acima do título nos resultados.
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#site`,
    name: company.name,
    url: `${SITE}/`,
    inLanguage: "pt-BR",
    publisher: { "@id": businessId },
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aluguel de poltrona reclinável elétrica para recuperação pós-operatória",
    serviceType: "Aluguel de poltrona para pós-operatório",
    description:
      "Poltrona reclinável elétrica com apoio para as pernas, para a recuperação em casa de cirurgias em geral, inclusive plásticas. Entrega e retirada no endereço combinado.",
    provider: { "@id": businessId },
    areaServed,
  };
}

// Perguntas frequentes. O Google não mostra mais as respostas abertas nos
// resultados para sites como este, mas elas ficam legíveis para buscadores e IAs.
export function faqSchema(questions: Question[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer.join(" ") },
    })),
  };
}

export function founderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": founderId,
    name: company.founder,
    jobTitle: "Fundadora",
    worksFor: { "@id": businessId },
  };
}

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE}${path}` },
    ],
  };
}
