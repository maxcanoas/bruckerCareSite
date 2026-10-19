// Exporta o logo original (imagens/PDF/LOGOS.pdf) para SVG, sem redesenho:
// recorta a prancheta em volta do desenho e arredonda as coordenadas.
// Uso: node scripts/export-logos.mjs
import * as mupdf from "mupdf";
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = "imagens/PDF/LOGOS.pdf";
const OUT = "src/assets/brand";
const CARAMEL = [196, 142, 82];

const doc = mupdf.Document.openDocument(fs.readFileSync(SRC), "application/pdf");

function pageSvg(index) {
  const page = doc.loadPage(index);
  const buf = new mupdf.Buffer();
  const writer = new mupdf.DocumentWriter(buf, "svg", "text=path");
  const dev = writer.beginPage(page.getBounds());
  page.run(dev, mupdf.Matrix.identity);
  writer.endPage();
  writer.close();
  return buf.asString();
}

// Geometric bounds of every filled path on the page, in drawing order.
function shapes(index) {
  const found = [];
  const dev = new mupdf.Device({
    fillPath(p, _evenOdd, ctm, _cs, color) {
      found.push({ bounds: p.getBounds(null, ctm), rgb: [...color].map((c) => Math.round(c * 255)) });
    },
  });
  doc.loadPage(index).run(dev, mupdf.Matrix.identity);
  return found;
}

const union = (list) => list.reduce(
  ([a, b, c, d], { bounds: [x0, y0, x1, y1] }) => [Math.min(a, x0), Math.min(b, y0), Math.max(c, x1), Math.max(d, y1)],
  [Infinity, Infinity, -Infinity, -Infinity],
);

const isCaramel = ({ rgb }) => rgb.every((v, i) => v === CARAMEL[i]);
const round = (s) => s.replace(/-?\d*\.\d+/g, (m) => String(Math.round(parseFloat(m) * 100) / 100));

function svgPaths(svg, keep = () => true) {
  return [...svg.matchAll(/<path transform="([^"]*)" d="([^"]*)" fill="([^"]*)"\/>/g)]
    .filter((m) => keep(m[3]))
    .map((m) => `<path transform="${round(m[1])}" d="${round(m[2])}" fill="${m[3]}"/>`);
}

function write(name, [x0, y0, x1, y1], body) {
  const pad = 0.5;
  const vb = [x0 - pad, y0 - pad, x1 - x0 + 2 * pad, y1 - y0 + 2 * pad].map((v) => Math.round(v * 100) / 100).join(" ");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}">${body.join("")}</svg>\n`;
  fs.writeFileSync(path.join(OUT, name), svg);
  console.log(name, vb, `${(svg.length / 1024).toFixed(1)} KB`);
}

// Página 1 = LOGOS-01 (horizontal, nome verde). No cabeçalho o SVG vai embutido
// e o nome troca para branco por CSS, como a versão LOGOS-04 (mesmo desenho).
// Página 5 = LOGOS-05 (vertical, nome branco), para o rodapé verde.
fs.mkdirSync(OUT, { recursive: true });
write("logo-horizontal.svg", union(shapes(0)), svgPaths(pageSvg(0)));
write("logo-vertical-light.svg", union(shapes(4)), svgPaths(pageSvg(4)));
const iconBounds = union(shapes(0).filter(isCaramel));
const iconPaths = svgPaths(pageSvg(0), (fill) => fill === "#c48e52");
write("logo-icon.svg", iconBounds, iconPaths);

// Ícones do navegador, a partir do mesmo ícone.
const [ix0, iy0, ix1] = iconBounds;
const iconSize = ix1 - ix0;
const tile = (pad, bg) => {
  const s = iconSize * (1 + 2 * pad);
  const vb = [ix0 - iconSize * pad, iy0 - iconSize * pad, s, s].join(" ");
  const rect = bg ? `<rect x="${ix0 - iconSize * pad}" y="${iy0 - iconSize * pad}" width="${s}" height="${s}" fill="${bg}"/>` : "";
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}">${rect}${iconPaths.join("")}</svg>`);
};
fs.writeFileSync("public/favicon.svg", tile(0.04).toString());
await sharp(tile(0.04), { density: 300 }).resize(32, 32).png().toFile("public/favicon-32.png");
await sharp(tile(0.16, "#061C19"), { density: 300 }).resize(180, 180).png().toFile("public/apple-touch-icon.png");
console.log("favicon.svg, favicon-32.png, apple-touch-icon.png");
