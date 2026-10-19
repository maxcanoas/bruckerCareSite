// Consentimento de cookies (LGPD) e GA4 com Consent Mode v2.
// O GA4 só é carregado depois que a pessoa aceita. Antes disso, nada vai para o Google.
// A escolha fica guardada no navegador por 12 meses; "Preferências de cookies" reabre o aviso.
// Eventos: clique_whatsapp (botao, pagina), clique_telefone, clique_instagram,
// envio_formulario e rolagem_75.

type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const KEY = "bruckercare-consent";
const MAX_AGE = 365 * 24 * 60 * 60 * 1000;

const banner = document.querySelector<HTMLElement>("[data-consent]");
const gaId = banner?.dataset.gaId ?? "";

window.dataLayer = window.dataLayer || [];
window.gtag = function gtag() {
  // O gtag espera o objeto `arguments`, não um array.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
};
window.gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
});

function readChoice(): Choice | null {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? "null");
    if ((saved?.choice === "granted" || saved?.choice === "denied") && Date.now() - saved.at < MAX_AGE) return saved.choice;
  } catch {
    // Sem acesso ao armazenamento (modo privado, bloqueio): o aviso aparece de novo.
  }
  return null;
}

function saveChoice(choice: Choice) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ choice, at: Date.now() }));
  } catch {
    // Segue valendo só nesta visita.
  }
}

let analyticsOn = false;

function enableAnalytics() {
  if (!gaId) return;
  window.gtag("consent", "update", { analytics_storage: "granted" });
  analyticsOn = true;
  if (document.querySelector("script[data-gtag]")) return;
  window.gtag("js", new Date());
  window.gtag("config", gaId);
  const script = document.createElement("script");
  script.async = true;
  script.dataset.gtag = "";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.append(script);
}

function disableAnalytics() {
  analyticsOn = false;
  window.gtag("consent", "update", { analytics_storage: "denied" });
  // Apaga os cookies do GA que já existirem neste domínio.
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    document.cookie = `${name}=; Max-Age=0; path=/`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, "")}`;
  }
}

// ---------- Aviso ----------

const root = document.documentElement;

function showBanner() {
  root.classList.add("consent-pending");
}

function hideBanner() {
  root.classList.remove("consent-pending");
}

banner?.addEventListener("click", (event) => {
  const button = (event.target as Element).closest<HTMLElement>("[data-consent-choice]");
  if (!button) return;
  const choice = button.dataset.consentChoice as Choice;
  saveChoice(choice);
  if (choice === "granted") enableAnalytics();
  else disableAnalytics();
  hideBanner();
});

document.addEventListener("click", (event) => {
  if (!(event.target as Element).closest("[data-consent-open]")) return;
  showBanner();
  banner?.querySelector<HTMLElement>("[data-consent-choice]")?.focus();
});

// O <head> já mostrou o aviso se não houver escolha salva.
if (readChoice() === "granted") enableAnalytics();

// ---------- Eventos ----------

const page = location.pathname.replace(/\.html$/, "") || "/";

function track(name: string, params: Record<string, string> = {}) {
  if (analyticsOn) window.gtag("event", name, { pagina: page, ...params });
}

document.addEventListener("click", (event) => {
  const element = (event.target as Element).closest<HTMLElement>("[data-track]");
  if (!element) return;
  const kind = element.dataset.track;
  if (kind === "whatsapp") track("clique_whatsapp", { botao: element.dataset.placement ?? "desconhecido" });
  else if (kind === "phone") track("clique_telefone");
  else if (kind === "instagram") track("clique_instagram");
});

document.addEventListener("submit", (event) => {
  if ((event.target as Element).matches("[data-whatsapp-form]")) track("envio_formulario", { formulario: "contato" });
});

let scrolled = false;
let pending = false;
addEventListener(
  "scroll",
  () => {
    if (scrolled || pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      const depth = (scrollY + innerHeight) / document.documentElement.scrollHeight;
      if (depth < 0.75) return;
      scrolled = true;
      track("rolagem_75");
    });
  },
  { passive: true },
);

export {};
