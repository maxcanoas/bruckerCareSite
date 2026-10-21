# Direção de arte: site BruckerCare (versão 2)

Redesenho do frontend pedido pelo Maxwell em 18/10/2026: um site elegante, fino, delicado e harmonioso, que mostre o cuidado da empresa com quem procura o serviço. Tipografia (Inter) e imagens continuam as mesmas. A versão 1 inteira (código e docs) está guardada em `D:\Freelas\bruckerCareSite-v1`.

---

## 1. A ideia

**Para quem e para quê.** Quem chega é uma pessoa que vai operar em breve, ou alguém que organiza a volta para casa de um familiar, quase sempre pelo celular, vinda do Instagram. A página tem uma função: fazer essa pessoa confiar na BruckerCare e chamar no WhatsApp.

**Tese visual: o quarto preparado.** O site é uma casa arrumada para a recuperação: luz de janela, linho, couro, madeira. Tudo é leve e macio. Os títulos usam a Inter em peso fino, os cantos são arredondados como as almofadas da poltrona e as seções se sobrepõem como camadas de tecido. Nada de clínica.

**Assinatura: a etiqueta kraft "higienizada e pronta para você"** (post 7). Ela pende de um alfinete na foto do hero e balança de leve quando a página abre e quando a pessoa rola, como uma etiqueta de verdade. É a primeira coisa que o celular mostra junto com a poltrona: o "texto pequeno" que chama a atenção. A mesma etiqueta volta no fim da seção do processo, presa à costura que liga as quatro etapas, e explica o que ela promete. A etiqueta de verdade que aparece na foto `higienizacao.jpg`, pendurada na poltrona, faz o eco.

**O detalhe que costura o site: o ilhós.** O furo da etiqueta vira um anel fino na frente de cada rótulo de capítulo ("o processo", "em casa"). É pequeno e se repete sem enfeitar.

**O que este site não faz:** hero centralizado com dois botões, trio de cartões com ícone em círculo, gradiente colorido, bolhas, contadores, selos inventados, depoimentos, a mesma animação em tudo, texto que pula ou quica.

---

## 2. Paleta

As cores da marca (logo) e os tons das paredes de linho das fotos, medidos em pixel. Contrastes conferidos por script (WCAG 2.1).

| Nome | Hex | Variável | Uso |
|---|---|---|---|
| Papel | `#F8F5F0` | `--c-paper` | Fundo claro principal. Um tom acima das paredes das fotos (`#E2D9C8` a `#EFE1CE`), então as fotos "assentam" no fundo. |
| Linho | `#EFE8DE` | `--c-linen` | Segundo fundo claro, o tom das paredes das fotos. Alterna com o papel. |
| Concha | `#FCFAF7` | `--c-shell` | Cartões sobre o linho. |
| Verde profundo | `#061C19` | `--c-forest` | Seções verdes e rodapé. Quase o verde do estúdio das fotos (`#071812`), por isso a poltrona de estúdio se funde à seção. |
| Verde da marca | `#082B27` | `--c-brand` | Títulos e botão sobre o claro. |
| Caramelo | `#C48E52` | `--c-caramel` | Destaque sobre o verde, a costura, os anéis. Sobre o claro, só em traço. |
| Tabaco | `#82592F` | `--c-tobacco` | Destaque em texto sobre o claro. |
| Kraft | `#C9A273` | `--c-kraft` | Só a etiqueta. |
| Tinta / tinta suave | `#221F1B` / `#5E574F` | `--c-ink` / `--c-ink-soft` | Texto sobre o claro. |
| Creme / névoa | `#F7F2EA` / `#C3CBC5` | `--c-cream` / `--c-mist` | Texto sobre o verde. |

| Combinação | Razão |
|---|---|
| Tinta sobre papel | 15,09:1 |
| Tinta suave sobre papel / linho | 6,54 / 5,85:1 |
| Tabaco sobre papel / linho / concha | 5,65 / 5,05 / 5,19:1 (o tabaco antigo `#8A6239` dava 4,44:1 no linho) |
| Verde da marca sobre papel | 13,94:1 |
| Creme / névoa / caramelo sobre verde | 15,86 / 10,67 / 6,18:1 |
| Verde sobre caramelo (botão no verde) | 6,18:1 |
| Tinta sobre kraft (etiqueta) | 6,95:1 |
| Texto fora de foco da narrativa | `#7C8580` no verde (4,65:1), `#736B62` no papel (4,82:1) |
| Palavras ainda apagadas na faixa de movimentos | `#5D6A65` no verde (3,13:1, texto grande) |

---

## 3. Tipografia

**Só a Inter**, o mesmo arquivo variável de antes (eixo de peso, 48 KB, pré-carregado). A personalidade vem do peso: **títulos em 300**, a palavra-chave em tabaco ou caramelo um degrau acima (400), como o recurso das artes do feed, só que mais fino.

| Papel | Tamanho (360 → 1440 px) | Peso | Entrelinha | Entreletra |
|---|---|---|---|---|
| Hero | 28 → 80 px (acompanha a coluna) | 300 + 400 | 1,02 a 1,08 | −0,04em |
| Display | 36 → 72 px | 300 + 400 | 1,04 | −0,036em |
| Título 2 | 30 → 50 px | 300 + 400 | 1,1 | −0,03em |
| Título 3 | 19 → 23 px | 450 | 1,3 | −0,012em |
| Abertura | 17 → 20 px | 400 | 1,6 | 0 |
| Corpo | 16 → 17 px | 400 | 1,7 | 0 |
| Rótulo | 13 px, minúsculas | 500 | 1,2 | +0,02em |
| Numeração | 36 a 56 px | 200, algarismos tabulares | 1 | −0,03em |

Os números "01" só aparecem onde a ordem importa: os 6 passos do aluguel e as 4 etapas do processo. As dicas de casa levam uma marca de "feito", não número.

---

## 4. Forma, grid e espaço

- **Cantos macios:** fotos e cartões com raio de 18 a 28 px; botões em pílula. Recorte com `clip-path`, que também recorta a camada do parallax no Safari.
- **Lençóis:** cada seção que muda de tom começa com os cantos de cima arredondados (28 a 56 px) e os cantos mostram a cor da seção anterior. É a passagem de capítulo do site inteiro, sempre igual, para o ritmo ser harmonioso. Sem nenhuma seção cobrir o conteúdo da outra.
- **Grid:** 4 colunas no celular (margem 20 px), 8 no tablet (40 px), 12 no desktop (margem de 48 a 112 px). Conteúdo com até 1200 px.
- **Fotos sempre na proporção delas:** 4:5, 3:2 e 16:9, sem esticar nem cortar a poltrona. Nenhuma foto sangra até a borda em tela grande, porque a maior tem 1376 px de largura e ficaria borrada.

---

## 5. A home, seção por seção

| Seção | Tom | Composição | Movimento |
|---|---|---|---|
| Hero | Papel | **Celular:** a foto da poltrona (4:5) ocupa a primeira tela, com a etiqueta pendurada; embaixo, o rótulo e o título pequeno. **Desktop:** texto à esquerda, foto em pé à direita. A mesma foto vertical nas duas larguras. | A foto assenta (escala 1,05 → 1); a etiqueta entra balançando; parallax da foto dentro do quadro. O título não anima (LCP). |
| A recuperação começa antes | Papel | Díptico: a foto do descanso grande e a do acompanhante menor e mais baixa, com o texto na brecha. | Fotos se descobrem de baixo para cima; cada uma com uma velocidade de parallax. |
| Movimentos | Verde, lençol | "Sentar. Levantar. Deitar." em letras enormes e finas. | **Seção fixa** por ~2,7 telas: cada palavra acende e ganha peso; a frase "É sobre ter suporte." entra no fim. |
| A poltrona | Verde | **Seção fixa:** a foto fica presa e troca (estúdio, reclinada, controle) enquanto os textos passam. Celular: a foto presa no alto e os textos correndo por baixo. Indicador de três traços. | Troca em cruzamento; texto fora de foco num tom que ainda passa AA. |
| Como funciona | Linho, lençol | Os 6 passos viram **cartões que se empilham**; no desktop, o título fica preso à esquerda. Fotos da entrega e do quarto nos passos 04 e 05. | Só `position: sticky`, sem JavaScript. |
| O processo | Papel, lençol | Díptico de fotos (conferência e higienização) e a **costura**: pesponto caramelo que liga as 4 etapas e termina no alfinete da etiqueta. Desktop na horizontal; celular desce pela margem e faz a curva. Fecha com "A poltrona é o equipamento. O cuidado é o nosso trabalho." | A costura se desenha com a rolagem, os pontos se preenchem e a etiqueta balança quando aparece. |
| Pâmela | Verde, lençol | Foto num quadro macio, texto e uma frase dela em caramelo. Ícone da marca em traço de marca d'água. | Foto se descobre; parallax leve. |
| Em casa | Papel, lençol | Foto da mesa lateral presa ao lado (desktop); nota da equipe médica num cartão de linho; 5 dicas com marca de "feito". | Os fios entre as dicas crescem. |
| Perguntas | Linho, lençol | Título preso à esquerda (desktop); sanfona com sinal +/− num anel fino. | Abre com transição de altura onde há suporte. |
| Fechamento + rodapé | Verde, lençol | "Precisa de uma poltrona para a recuperação?" e a poltrona de estúdio subindo da borda, com as bordas da foto esfumadas no verde. | A poltrona sobe ao entrar. |

**Cabeçalho:** transparente no topo, vira vidro fosco ao rolar e **acompanha o tom da seção que está por baixo** (claro ou verde). Navegação completa a partir de 1200 px; abaixo disso, "Menu" (tela cheia, verde) e o botão do WhatsApp (a partir de 768 px).

**Aviso de cookies:** compacto (uma frase e os dois botões iguais), para não cobrir a foto do hero no celular.

---

## 6. Demais páginas

| Página | Composição |
|---|---|
| A poltrona | Abertura no verde com a foto de estúdio; a narrativa fixa no papel com 4 fotos (quarto, reclinada, controle, botões do braço); os 6 passos em cartões (no linho); o processo com a etiqueta (no papel); fechamento. |
| Quem somos | Abertura só de texto grande, com o ícone de marca d'água; a história com a foto da Pâmela presa ao lado; "Conforto. Praticidade. Ambiente. Acolhimento." com os anéis; "Como trabalhamos" no linho; fechamento. |
| Perguntas frequentes | Título e índice em pílulas presos à esquerda; grupos em sanfona; caixa verde "Não encontrou a sua dúvida?". |
| Contato | Contatos diretos à esquerda e o formulário (que abre o WhatsApp) num painel de linho. |
| Política, 404 | Coluna de leitura no papel, com índice num cartão de linho. |

Nas páginas que terminam no claro, o rodapé começa com os mesmos cantos macios.

---

## 7. Movimento

**Princípios:** lento e calmo, sem quique. Curvas `cubic-bezier(.22,.7,.2,1)` e `(.16,.84,.24,1)`. Só `transform`, `opacity`, `clip-path` e cor. Muitos elementos simplesmente estão lá.

**Técnica (sem biblioteca):**
- Animações ligadas à rolagem com CSS scroll-driven (`animation-timeline: view()`) onde o navegador suporta; nos outros, um laço `requestAnimationFrame` escreve `--p` só nos elementos que estão perto da tela.
- Entradas únicas com IntersectionObserver.
- Seções fixas com `position: sticky`.
- A etiqueta é um pêndulo amortecido em JavaScript (rigidez 0,0065, amortecimento 0,986 por quadro); o laço só roda enquanto ela está na tela e ainda se mexe.
- Nada lê o layout enquanto a página carrega (o cabeçalho usa um observador no lugar de `scrollY`).

**Vocabulário (cada efeito com um papel):** subir (texto), descobrir (fotos), fio (divisórias), parallax dentro do quadro (fotos), acender (palavras), trocar (narrativa), empilhar (passos), costurar (processo), balançar (etiqueta).

**Acessibilidade do movimento:** com `prefers-reduced-motion: reduce`, nada se move e o conteúdo aparece completo. **Aparelho fraco** (economia de dados, ou até 4 núcleos e até 4 GB): sem parallax. **Sem JavaScript:** tudo visível; a narrativa mostra cada texto com a própria foto.

---

## 8. Resultado medido (19/10/2026, prévia local)

| Teste | Resultado |
|---|---|
| Lighthouse celular, home | Desempenho 99, Acessibilidade 100, Boas práticas 100, SEO 100. LCP 1,7 s, CLS 0, Speed Index 1,3 a 1,6 s, 135 KB no total. |
| Lighthouse celular, A poltrona | 100 / 100 / 100 / 100. LCP 1,7 s, 158 KB. |
| Lighthouse desktop, home | 100 / 100 / 100 / 100. LCP 0,4 s. |
| axe-core (WCAG 2.2 AA + boas práticas), 7 páginas, 390 e 1440 px | 0 violações. |
| Larguras | 360, 390, 768, 1024, 1280, 1440 e 1920 px, sem rolagem horizontal e sem erro no console. |
| Modos | Movimento reduzido, sem JavaScript e menu por teclado (Esc fecha e devolve o foco). |
| `astro check` | 0 erros, 0 avisos. |

---

## 9. Mapa de imagens

| Seção | Arquivo | Quadro |
|---|---|---|
| Hero (celular e desktop) | `hero-sala-poltrona-mobile` (ou as camadas `hero-sala-vazia-mobile` + `hero-poltrona-recorte-mobile.png`) | 4:5 |
| A recuperação | `recuperacao-descanso`, `acompanhante-cuidado` | 3:2 e 4:5 |
| A poltrona (home) | `poltrona-estudio-verde`, `poltrona-reclinada-lateral-4x5`, `detalhe-controle-mao` | 4:5 |
| Como funciona | `entrega-porta`, `poltrona-quarto` | 3:2 |
| O processo | `inspecao-mecanismo`, `higienizacao` | 3:2 e 4:5 |
| Pâmela | `pamela-zweibrucker-recorte` | 4:5 |
| Em casa | `preparo-mesa-lateral` | 4:5 |
| Fechamento | `poltrona-estudio-verde` (bordas esfumadas) | livre |
| A poltrona (página) | as de cima e `detalhe-botoes-braco` | 4:5 |

Deixaram de ser usadas: `hero-sala-poltrona-desktop` (o hero usa a foto vertical nas duas larguras), `detalhe-couro-costura` (as faixas de couro saíram) e `cores-poltronas` (a seção de cores saiu da página A poltrona). Todas as fotos saem em AVIF e WebP com `srcset`; o hero com carga prioritária e o resto com carga tardia.
