// Recortes e versões derivadas das fotos de imagens/gemini/.
// Rode de novo sempre que uma foto de origem for trocada: npm run images
// As coordenadas valem para as fotos atuais; confira o resultado ao trocar um arquivo.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = "imagens/gemini";
const OUT = "src/assets/derived";
fs.mkdirSync(OUT, { recursive: true });

const jpeg = (img) => img.jpeg({ quality: 92, mozjpeg: true });

const jobs = [
  {
    // Só a Pâmela: deixa de fora o logo aplicado à esquerda da foto (termina perto de x = 777).
    from: "pamela-zweibrucker.jpg",
    to: "pamela-zweibrucker-recorte.jpg",
    run: (img) => img.extract({ left: 795, top: 0, width: 560, height: 700 }),
  },
  {
    // 4:5 em volta da poltrona reclinada, para o quadro fixo da narrativa.
    from: "poltrona-reclinada-lateral.jpg",
    to: "poltrona-reclinada-lateral-4x5.jpg",
    run: (img) => img.extract({ left: 350, top: 0, width: 678, height: 848 }),
  },
  {
    // Imagem de compartilhamento (WhatsApp, redes): 1200 x 630, servida em /og-image.jpg.
    from: "og-image.jpg",
    to: "../../../public/og-image.jpg", // relativo a src/assets/derived
    run: (img) => img.resize({ width: 1200, height: 630, fit: "cover" }),
  },
];

// Logo para os dados estruturados: o PNG original da agência (LOGOS-02), reduzido.
await sharp("imagens/PNG/LOGOS-02.png").trim().resize({ width: 600 }).png().toFile("public/logo.png");
console.log("public/logo.png");

for (const job of jobs) {
  const source = path.join(SRC, job.from);
  if (!fs.existsSync(source)) {
    console.warn(`faltando: ${source}`);
    continue;
  }
  const target = path.join(OUT, job.to);
  const info = await jpeg(job.run(sharp(source))).toFile(target);
  console.log(`${job.to}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
