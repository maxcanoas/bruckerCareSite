// Confere o HTML gerado no fim do build.
// - Texto provisório (lorem, [CONFIRMAR], placeholder de imagem): falha o build de produção.
//   Para gerar uma prévia mesmo assim: npm run build:preview (ALLOW_PLACEHOLDERS=1).
// - Regras de texto do projeto (travessão, palavras proibidas): falham sempre.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PROVISIONAL = [
  ["lorem ipsum", /lorem ipsum/gi],
  ["[CONFIRMAR", /\[CONFIRMAR/g],
  ["placeholder de imagem", /data-placeholder/g],
];

const FORBIDDEN = [
  ["travessão (—)", /—/g],
  ["palavra proibida", /\b(descubra|transforme|experiência única|solução completa|excelência|jornada|elevar|potencializar|no mundo de hoje|saiba mais|seja bem-vind[oa])\b/gi],
];

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name.endsWith(".html") ? [full] : [];
  });
}

// Só o texto que a pessoa vê ou que vai para buscadores: sem <script> e <style>.
const visible = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");

function scan(root, checks) {
  const found = [];
  for (const file of htmlFiles(root)) {
    const html = visible(fs.readFileSync(file, "utf8"));
    for (const [label, re] of checks) {
      const hits = html.match(re);
      if (hits) found.push(`  ${path.relative(root, file)}: ${hits.length}x ${label} (${[...new Set(hits)].slice(0, 4).join(", ")})`);
    }
  }
  return found;
}

export default function contentGuard() {
  return {
    name: "bruckercare:content-guard",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        const root = fileURLToPath(dir);

        const broken = scan(root, FORBIDDEN);
        if (broken.length) throw new Error(`Texto fora das regras do projeto:\n${broken.join("\n")}`);

        const provisional = scan(root, PROVISIONAL);
        if (!provisional.length) return logger.info("Nenhum texto ou imagem provisória no site.");
        const message = `Ainda há conteúdo provisório (ver docs/pendencias.md):\n${provisional.join("\n")}`;
        if (process.env.ALLOW_PLACEHOLDERS === "1") logger.warn(message);
        else throw new Error(`${message}\nPara uma prévia, use: npm run build:preview`);
      },
    },
  };
}
