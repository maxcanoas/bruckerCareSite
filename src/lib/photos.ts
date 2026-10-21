import type { ImageMetadata } from "astro";

// Todas as fotos ficam disponíveis pelo nome do arquivo, sem extensão.
// Os recortes de src/assets/derived (npm run images) têm prioridade sobre a origem.
// Quando um arquivo ainda não existe, o componente Photo mostra o placeholder.
const sources = import.meta.glob<{ default: ImageMetadata }>(
  ["/imagens/gemini/*.{jpg,jpeg,png,webp,avif}", "/src/assets/derived/*.{jpg,jpeg,png,webp,avif}"],
  { eager: true },
);

// Arquivos que não entram no site: versões intermediárias.
const IGNORED = new Set(["poltrona-recorte-original", "og-image-base"]);

const byName = new Map<string, ImageMetadata>();
for (const [file, module] of Object.entries(sources)) {
  const name = file.split("/").pop()!.replace(/\.[^.]+$/, "");
  if (IGNORED.has(name)) continue;
  if (file.startsWith("/src/") || !byName.has(name)) byName.set(name, module.default);
}

export function photo(name: string): ImageMetadata | undefined {
  return byName.get(name);
}
