// Movimento do site, sem biblioteca.
// - [data-reveal]: entrada única quando o elemento aparece (adiciona .is-in).
// - [data-range]: progresso de rolagem em --p (0 a 1). Onde o navegador tem
//   CSS scroll-driven animations, o próprio CSS faz isso e este laço não roda.
// - [data-story]: narrativa da poltrona, marca o texto que cruza a linha de leitura.
// - [data-process]: posição de cada ponto ao longo da costura do processo (--at).
// - [data-sway]: a etiqueta kraft balança de leve quando aparece e com a rolagem.
// Com movimento reduzido, nada de rolagem roda; o conteúdo já está completo.

export {};

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasObserver = "IntersectionObserver" in window;

// ---------- Entradas ----------

const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (reduced || !hasObserver) {
  reveals.forEach((element) => element.classList.add("is-in"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );
  reveals.forEach((element) => revealObserver.observe(element));
}

// ---------- Progresso de rolagem (só sem suporte a animation-timeline) ----------

type ScrollRange = "cover" | "contain" | "entry" | "exit" | "center";

// Mesmas faixas do CSS (animation-range), calculadas a partir da posição na tela.
function progress(range: ScrollRange, top: number, height: number, vh: number): number {
  let p: number;
  switch (range) {
    case "contain":
      p = height >= vh ? -top / (height - vh) : (vh - height - top) / (vh - height);
      break;
    case "entry":
      p = (vh - top) / Math.min(height, vh);
      break;
    case "exit":
      p = height >= vh ? (vh - height - top) / vh : -top / height;
      break;
    case "center":
      p = (vh / 2 - top) / height;
      break;
    default:
      p = (vh - top) / (vh + height);
  }
  return Math.min(1, Math.max(0, p));
}

const ranged = document.querySelectorAll<HTMLElement>("[data-range]");
const nativeTimeline = CSS.supports("animation-timeline: view()");

if (!reduced && hasObserver && !nativeTimeline && ranged.length) {
  const active = new Set<HTMLElement>();
  let queued = false;

  const update = () => {
    queued = false;
    const vh = window.innerHeight;
    for (const element of active) {
      const rect = element.getBoundingClientRect();
      const p = progress(element.dataset.range as ScrollRange, rect.top, rect.height, vh);
      element.style.setProperty("--p", p.toFixed(4));
    }
  };

  const queue = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  // Só calcula o que está perto da tela.
  const rangeObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.add(entry.target as HTMLElement);
        else active.delete(entry.target as HTMLElement);
      }
      queue();
    },
    { rootMargin: "25% 0px" },
  );

  ranged.forEach((element) => rangeObserver.observe(element));
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", queue);
}

// ---------- Narrativa da poltrona ----------
// A foto mostrada é a do último texto que já passou da linha de leitura: o meio
// da tela no desktop; no celular, mais abaixo, porque a foto ocupa o alto da
// tela. Calculado a cada quadro de rolagem (e não por cruzamento), uma rolagem
// rápida nunca pula uma troca. Só roda enquanto a narrativa está na tela.

document.querySelectorAll<HTMLElement>("[data-story]").forEach((story) => {
  if (!hasObserver) return;
  const steps = [...story.querySelectorAll<HTMLElement>("[data-story-step]")];
  const images = [...story.querySelectorAll<HTMLElement>("[data-story-image]")];
  const dots = [...story.querySelectorAll<HTMLElement>("[data-story-dot]")];
  const targets = steps.map((step) => step.querySelector<HTMLElement>("[data-story-focus]") ?? step);
  const desktop = matchMedia("(min-width: 1024px)");
  let current = 0;

  const activate = (index: number) => {
    if (index === current) return;
    current = index;
    for (const list of [steps, images, dots]) list.forEach((item, i) => item.classList.toggle("is-active", i === index));
  };

  let queued = false;
  const pick = () => {
    queued = false;
    const line = innerHeight * (desktop.matches ? 0.5 : 0.78);
    let index = 0;
    targets.forEach((target, i) => {
      if (target.getBoundingClientRect().top < line) index = i;
    });
    activate(index);
  };
  const queue = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(pick);
  };

  // Fora da tela, volta ao começo (ou fica no fim, se a narrativa ficou para trás).
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      addEventListener("scroll", queue, { passive: true });
      addEventListener("resize", queue);
      queue();
    } else {
      removeEventListener("scroll", queue);
      removeEventListener("resize", queue);
      activate(entry.boundingClientRect.top > 0 ? 0 : targets.length - 1);
    }
  }).observe(story);

  story.classList.add("is-enhanced");
});

// ---------- Costura do processo ----------
// Onde cada ponto fica ao longo da costura (0 a 1), para ele se preencher
// quando o traço chega: na vertical no celular, na horizontal no desktop.

document.querySelectorAll<HTMLElement>("[data-process]").forEach((track) => {
  const line = track.querySelector<HTMLElement>("[data-process-line]");
  const dots = [...track.querySelectorAll<HTMLElement>("[data-process-dot]")];
  if (!line) return;
  const measure = () => {
    const box = line.getBoundingClientRect();
    const horizontal = box.width > box.height;
    for (const dot of dots) {
      const d = dot.getBoundingClientRect();
      const at = horizontal
        ? (d.left + d.width / 2 - box.left) / box.width
        : (d.top + d.height / 2 - box.top) / box.height;
      dot.style.setProperty("--at", Math.min(1, Math.max(0, at)).toFixed(4));
    }
  };
  // O ResizeObserver mede logo após o primeiro layout e a cada mudança de tamanho.
  if ("ResizeObserver" in window) new ResizeObserver(measure).observe(track);
  else requestAnimationFrame(measure);
});

// ---------- A etiqueta que balança ----------
// Um pêndulo amortecido: entra com um pequeno balanço e reage à velocidade da
// rolagem. O laço só roda enquanto a etiqueta está na tela e ainda se mexe.

interface Swing {
  body: HTMLElement;
  start: number;
  angle: number;
  speed: number;
  visible: boolean;
  started: boolean;
}

const swings: Swing[] = [];
document.querySelectorAll<HTMLElement>("[data-sway]").forEach((tag) => {
  const body = tag.querySelector<HTMLElement>("[data-sway-body]");
  if (body) swings.push({ body, start: Number(tag.dataset.sway) || 0, angle: 0, speed: 0, visible: false, started: false });
});

if (!reduced && hasObserver && swings.length) {
  const STIFFNESS = 0.0065; // quanto a gravidade puxa de volta
  const DAMPING = 0.986; // quanto o balanço perde por quadro
  const REST = -2; // a etiqueta descansa levemente inclinada
  const MAX = 11;
  let running = false;
  let lastY: number | undefined; // lido só na rolagem, para não forçar layout ao abrir

  const tick = () => {
    let moving = false;
    for (const swing of swings) {
      if (!swing.visible) continue;
      swing.speed = (swing.speed - swing.angle * STIFFNESS) * DAMPING;
      swing.angle = Math.max(-MAX, Math.min(MAX, swing.angle + swing.speed));
      swing.body.style.rotate = `${(REST + swing.angle).toFixed(3)}deg`;
      if (Math.abs(swing.angle) > 0.02 || Math.abs(swing.speed) > 0.02) moving = true;
    }
    running = moving;
    if (running) requestAnimationFrame(tick);
  };

  const run = () => {
    if (running) return;
    running = true;
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const swing = swings.find((s) => s.body.parentElement === entry.target);
        if (!swing) continue;
        swing.visible = entry.isIntersecting;
        // A primeira vez que aparece, entra balançando (no hero, logo ao abrir).
        if (swing.visible && !swing.started) {
          swing.started = true;
          swing.angle = swing.start;
          if (!swing.start) swing.speed = 0.55;
        }
      }
      run();
    },
    { rootMargin: "0px 0px -18% 0px" },
  );
  swings.forEach((swing) => swing.body.parentElement && observer.observe(swing.body.parentElement));

  // A rolagem dá um empurrão proporcional à velocidade (mais rápido, mais balanço).
  addEventListener(
    "scroll",
    () => {
      const y = scrollY;
      const delta = lastY === undefined ? 0 : y - lastY;
      lastY = y;
      const push = Math.max(-0.35, Math.min(0.35, delta * 0.006));
      for (const swing of swings) if (swing.visible && swing.started) swing.speed += push;
      run();
    },
    { passive: true },
  );
}
