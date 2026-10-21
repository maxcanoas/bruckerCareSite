# SEO e GEO do site BruckerCare

Análise da busca no Google (SEO) e das respostas de assistentes de IA (GEO: ChatGPT, Gemini, Perplexity, AI Overviews do Google). Feita em 20/10/2026 sobre o build do site. Os ajustes aprovados pelo Maxwell já estão no código (commit `709a366`); as decisões estão em `decisoes.md`, seção "SEO e GEO", e o que falta está em `pendencias.md`.

Sem acesso a volumes de busca (Google Keyword Planner). As palavras-chave vêm do vocabulário dos concorrentes que aparecem nas buscas. Nas buscas feitas não apareceu nenhuma locadora com site forte em Canoas ou Porto Alegre: há pouca concorrência local.

---

## Resumo

A base técnica é boa: endereços limpos, HTTPS sem www, sitemap, robots, idioma `pt-BR`, dados estruturados, imagens em AVIF e WebP com texto alternativo, todo o texto no HTML (sem depender de JavaScript) e desempenho alto (98 no Lighthouse, LCP de 1,8 s, medição de 18/10/2026).

Foram encontrados e corrigidos:

1. **Endereço oficial da home errado.** O canonical e o `og:url` apontavam para `https://bruckercare.com.br/index`.
2. **Vocabulário de busca incompleto.** O site não usava "poltrona reclinável", "pós-cirúrgico" nem "locação", termos que os concorrentes usam.
3. **H1 da home sem palavra-chave.**
4. **Título da home longo demais** (73 caracteres; o Google corta perto de 60).
5. **Dados estruturados faltando:** `WebSite`, `FAQPage` e `Person`.

O maior ganho que ainda falta depende da cliente: citar pelo nome as cirurgias para as quais a poltrona é mais alugada.

---

## 1. Técnico

| Item | Situação |
|---|---|
| HTTPS e domínio sem www | No Cloudflare: "Always Use HTTPS" e uma Redirect Rule de `www` para o endereço sem www (301). |
| Endereços limpos | `/a-poltrona`, sem `.html` e sem barra no fim; `.html` e barra final redirecionam (307, o padrão do Cloudflare; nenhum link aponta para essas formas, e o canonical indica a certa). |
| Endereço oficial (canonical) | Em todas as páginas. **Corrigido na home:** era `/index`, agora é `/`. O Cloudflare também redireciona `/index` para `/`. |
| Sitemap | `sitemap-index.xml` com as 6 páginas indexáveis (a 404 fica de fora). Sem `lastmod`, o que é opcional. |
| robots.txt | Libera tudo e aponta o sitemap. Libera também os robôs de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). |
| Página 404 | `noindex`. |
| Idioma | `<html lang="pt-BR">` e `og:locale` `pt_BR`. |
| Celular | `viewport` correto; layout testado de 390 px a 1440 px. |
| Imagens | AVIF e WebP com `srcset`, largura e altura declaradas, texto alternativo descritivo. As decorativas têm `alt` vazio, de propósito. Nomes de arquivo descritivos. |
| Conteúdo sem JavaScript | Todo o texto está no HTML gerado. Robôs de IA quase nunca executam JavaScript. |
| Desempenho | 98 no Lighthouse e LCP de 1,8 s na home (18/10/2026). |
| Prévia no GitHub Pages | `noindex, nofollow` e `robots.txt` bloqueando tudo: não concorre com o domínio final. |

## 2. Palavras-chave

**Principal:** aluguel de poltrona pós-operatório + Canoas e Porto Alegre.

**Variações** que os concorrentes usam: poltrona reclinável, poltrona elétrica, pós-cirúrgico, locação de poltrona, alugar poltrona, nomes de cirurgias (lipoaspiração, lipoescultura, abdominoplastia, lipoabdominoplastia, mamoplastia).

**Regra:** cada termo entra onde a frase continua natural, sem repetir à força.

| Termo | Antes | Agora |
|---|---|---|
| aluguel de poltrona pós-operatório | título da home | título da home, H1 da home (rótulo do hero), títulos das perguntas e do contato |
| poltrona reclinável | 0 | título, descrição e H1 de A poltrona; descrições da home, das perguntas e de Quem somos; texto da home; dados estruturados |
| pós-cirúrgico | 0 | texto da home ("cada momento do pós-cirúrgico") e abertura de A poltrona ("recuperação pós-cirúrgica") |
| locação | só em "contrato de locação" | descrição das perguntas ("locação de poltrona reclinável") e "suporte durante toda a locação" (home e A poltrona) |
| alugar | só no FAQ | descrição de A poltrona ("para alugar no pós-operatório") e pergunta "Como faço para alugar a poltrona?" |
| Canoas, Porto Alegre | 3 a 7 vezes por página | igual; a descrição de A poltrona passou a citar Porto Alegre |
| cirurgias pelo nome | só "inclusive plásticas" | igual: **depende da cliente** |
| cidades da região | 0 | 0: **depende da cliente** |
| poltrona elevatória / lift | 0 | 0: **só se a poltrona tiver essa função** |

## 3. Títulos, descrições e H1

Títulos com até cerca de 60 caracteres e descrições com até cerca de 160 (acima disso o Google corta). A home ficou sem "| BruckerCare" no título: o nome do site aparece acima do título nos resultados, pelo dado estruturado `WebSite`.

| Página | Title | Description | H1 |
|---|---|---|---|
| Início | Aluguel de poltrona pós-operatório em Canoas e Porto Alegre (59) | Aluguel de poltrona reclinável elétrica para o pós-operatório de cirurgias em geral, inclusive plásticas. Entrega e retirada em Canoas, Porto Alegre e região. (158) | aluguel de poltronas para o pós-operatório |
| A poltrona | Poltrona reclinável elétrica para pós-operatório \| BruckerCare (62) | Poltrona reclinável elétrica para alugar no pós-operatório, com apoio para as pernas e controle. Entrega e retirada em Canoas, Porto Alegre e região. (149) | Poltrona reclinável elétrica para a recuperação em casa. |
| Perguntas frequentes | Dúvidas sobre aluguel de poltrona pós-operatório \| BruckerCare (62) | Período mínimo, entrega, cidades atendidas, higienização e pagamento: as dúvidas mais comuns sobre a locação de poltrona reclinável para o pós-operatório. (154) | Dúvidas sobre o aluguel da poltrona |
| Quem somos | Quem somos \| BruckerCare, poltronas para pós-operatório (55) | A BruckerCare nasceu da experiência de recuperação da fundadora, Pâmela Zweibrucker. Aluguel de poltronas reclináveis para o pós-operatório em Canoas e região. (159) | A BruckerCare nasceu de uma experiência pessoal. |
| Contato | Contato \| BruckerCare, aluguel de poltrona pós-operatório (57) | Fale com a BruckerCare pelo WhatsApp (51) 99863-1666 e consulte a disponibilidade da poltrona. Entrega e retirada em casa em Canoas, Porto Alegre e região. (155) | Fale com a BruckerCare |
| Política de privacidade | Política de privacidade \| BruckerCare (37) | Como a BruckerCare trata os seus dados pessoais no site, no WhatsApp e na medição de audiência, de acordo com a LGPD. (117) | Política de privacidade |

**H1 da home.** O rótulo pequeno "aluguel de poltronas para o pós-operatório" virou o H1, e a frase grande "Cuidar também é preparar o caminho da recuperação." virou parágrafo. Nada muda no visual; o H1 passa a dizer o serviço com as palavras da busca.

**Compartilhamento.** Open Graph e Twitter Card em todas as páginas, com o title e a description da página e a imagem `og-image.jpg` (1200 x 630).

## 4. Dados estruturados (JSON-LD)

| Tipo | Onde | O que diz |
|---|---|---|
| `LocalBusiness` | todas as páginas | Nome, descrição, telefone, e-mail, logo, imagem, cidade e estado (sem endereço de rua), área atendida (Canoas e Porto Alegre), atendimento 24 horas todos os dias, fundadora, Instagram. |
| `WebSite` | home | Nome do site ("BruckerCare") para os resultados do Google. **Novo.** |
| `Service` | home e A poltrona | Aluguel de poltrona reclinável elétrica para recuperação pós-operatória, ligado à empresa. |
| `FAQPage` | perguntas frequentes | As 14 perguntas com as respostas. Desde 2023 o Google não mostra as respostas abertas nos resultados para sites como este, mas elas ficam legíveis para buscadores e IAs. **Novo.** |
| `Person` | Quem somos | Pâmela Zweibrucker, fundadora, ligada à empresa. Reforça quem está por trás do negócio. **Novo.** |
| `BreadcrumbList` | páginas internas | Início > página. |

Faltam, quando houver o dado: link do Perfil da Empresa no Google (`sameAs` e `hasMap`) e faixa de preço (`priceRange`), que hoje fica de fora por decisão.

## 5. GEO: respostas de assistentes de IA

**O que já ajuda:**

- Todo o conteúdo no HTML, sem JavaScript.
- Robôs de IA liberados no `robots.txt`.
- **Fatos curtos e fáceis de citar no FAQ:**
  - período mínimo de 10 dias;
  - entrega no dia anterior à cirurgia;
  - renovação;
  - termo de locação;
  - instalação pelo técnico;
  - higienização em quatro etapas;
  - atendimento 24 horas, todos os dias;
  - área atendida;
  - formas de pagamento.
- Perguntas no formato em que as pessoas perguntam às IAs. Entraram "Como faço para alugar a poltrona?" e "Vocês atendem nos fins de semana?".
- **Dados da empresa iguais em todo o site:** nome, telefone, área atendida e horário.
- Quem somos com a fundadora pelo nome e a história, um fator de confiança.

**O que falta, fora do código:**

- **Perfil da Empresa no Google com avaliações de clientes.** É o que mais pesa na busca local (o mapa) e nas respostas do Gemini e do Google. Prioridade número 1 depois da publicação.
- **Bing Webmaster Tools.** A busca do ChatGPT e o Copilot usam o índice do Bing. Dá para importar o site do Search Console.
- **Menções em outros sites:** clínicas e cirurgiões parceiros, perfis locais, Instagram com o link do site na bio.
- **Dados iguais em todo lugar:** nome, telefone, área atendida e horário iguais no site, no Perfil da Empresa e no Instagram.

O `llms.txt` (arquivo de resumo para IAs) ficou de fora. Ainda não há sinal de que os principais assistentes o usem, e o conteúdo do site já é legível sem ele.

## 6. Depende da cliente

- **Cirurgias pelo nome.** Para quais cirurgias as clientes mais alugam: lipoaspiração, abdominoplastia, mamoplastia, ortopédicas? É o maior ganho de palavras-chave que falta. Os concorrentes citam lipoescultura e lipoabdominoplastia. Entra no FAQ ("Para quais cirurgias a poltrona serve?") e nas descrições, sempre com a equipe médica como quem orienta.
- **Função de levantar.** Se a poltrona ajuda a levantar ("lift", "poltrona elevatória"), o termo entra em A poltrona. O site hoje não afirma isso.
- **Cidades da região.** Se ela aceita listar as cidades atendidas, elas entram no FAQ e em `areaServed`.
- **Link do site na bio do Instagram.**

## 7. Depois da publicação

- [ ] Search Console: verificar o domínio, enviar `sitemap-index.xml`, pedir indexação da home.
- [ ] Bing Webmaster Tools: importar do Search Console.
- [ ] Perfil da Empresa no Google: categoria de aluguel de equipamentos médicos (a mais próxima disponível), área atendida, horário 24 horas, link do site, fotos reais; pedir avaliações às clientes.
- [ ] Testar os dados estruturados no Teste de pesquisa aprimorada do Google (Rich Results Test) e no validador do schema.org.
- [ ] Depois de algumas semanas, ver no Search Console por quais buscas o site aparece e ajustar títulos e textos.

---

## Fontes consultadas (concorrentes)

- [Aluguel de Poltronas Reclináveis Pós Operatório (OHub)](https://www.ohub.com.br/anuncio/aluguel-de-poltronas-reclinaveis-pas-operatario-80772)
- [Locação de Poltronas Reclináveis Pós Operatório (OHub)](https://www.ohub.com.br/anuncio/locaaao-de-poltronas-reclinaveis-pas-operatario-80773)
- [Aluguel de poltronas elétricas para pós-cirúrgico em Campo Grande](https://www.campograndenews.com.br/conteudo-patrocinado/aluguel-de-poltronas-eletricas-para-pos-cirurgico-em-campo-grande)
- [Poltronas reclináveis ajudam no pós-operatório](https://www.campograndenews.com.br/conteudo-patrocinado/festas-e-eventos-tv/poltronas-reclinaveis-ajudam-no-pos-operatorio)
- [Conforte-se chega a Campo Grande](https://www.campograndenews.com.br/conteudo-patrocinado/conforte-se-chega-a-campo-grande-com-poltronas-que-transformam-o-pos-operatorio)
