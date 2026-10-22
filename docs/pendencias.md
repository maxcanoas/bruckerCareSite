# Pendências do site BruckerCare

Lista viva. Tudo o que falta para o site ficar completo e correto. Nada aqui entra no site antes de ser confirmado. Decisões já fechadas estão em `decisoes.md`.

Última atualização: 21/10/2026 (site publicado no Cloudflare).

---

## Para perguntar à cliente

Enquanto não houver resposta, o texto do site leva lorem ipsum no lugar, e o build de produção não publica.

- [ ] **CNPJ em aprovação** (informado em 21/10/2026). O site vai ao ar sem ele. Quando sair, decidir se a razão social e o CNPJ entram na política de privacidade.
- [ ] Link do Perfil da Empresa no Google (para os dados estruturados e para ligar ao site).
- [ ] **Para quais cirurgias as clientes mais alugam** (lipoaspiração, abdominoplastia, mamoplastia, ortopédicas?). Citar os procedimentos pelo nome é o maior ganho de palavras-chave que falta; hoje o site diz só "cirurgias em geral, inclusive plásticas".
- [ ] **A poltrona ajuda a levantar** (função "lift", "poltrona elevatória")? Se sim, é outro termo forte de busca. O site hoje não afirma isso.
- [ ] Se aceita listar no site as cidades atendidas na região (ajuda na busca local).
- [ ] Colocar o link do site na bio do Instagram.
- [ ] **Confirmar dois detalhes da poltrona citados na página A poltrona:** o painel com dois botões na lateral do braço e o controle com fio. Eles vêm da descrição da poltrona real usada nos prompts das imagens, mas a cliente ainda não confirmou.
- [ ] **Revisão jurídica da política de privacidade** (recomendado antes de publicar). O texto segue a LGPD, mas não substitui um advogado.
- [ ] **Foto real das 4 poltronas** (preto, verde, bege, marrom), mesmo de celular, para servir de referência ao regerar as imagens.
- [ ] Foto da Pâmela em resolução maior, se houver o arquivo original (o recorte atual só com ela tem cerca de 560x700 px).

## Para o Maxwell

- [x] **Mostrar o redesenho (versão 2) à Pâmela.** Aprovado por ela (informado pelo Maxwell em 21/10/2026, antes da publicação). Aprovado pelo Maxwell em 19/10/2026 e enviado ao GitHub. A versão 1 só existe em `D:\Freelas\bruckerCareSite-v1` (não entrou no histórico do git); pode ser apagada quando não for mais necessária.
- [x] **Domínio ativo no Cloudflare.** A troca dos servidores DNS foi feita no registro.br em 21/10/2026 (`a/b.auto.dns.br` por `major.ns.cloudflare.com` e `rose.ns.cloudflare.com`; o domínio não tinha DNSSEC). Conferido na noite de 21/10/2026: o `a.dns.br`, o Google (8.8.8.8) e o Cloudflare (1.1.1.1) já respondem com os servidores do Cloudflare; o certificado do Cloudflare (Let's Encrypt, para `bruckercare.com.br` e `*.bruckercare.com.br`) saiu às 17h13; o `www` redireciona com 301 para `https://bruckercare.com.br/`, mantendo o caminho e a query string. O endereço sem www ainda não tem registro A nem AAAA: quem cria é o primeiro deploy.
- [x] ID do GA4: `G-JGTM72NX18` (recebido em 21/10/2026), no `.env` desta máquina. O `.env` fica fora do git: outro computador que for publicar precisa do mesmo arquivo, e a prévia do GitHub Pages segue sem GA.
- [x] Cadastro no Search Console e envio do sitemap (Fase 3 da proposta). Feito em 22/10/2026, na conta Google maxcanoas@gmail.com: propriedade do tipo Domínio (`bruckercare.com.br`, cobre http, https e www), verificada pelo registro TXT `google-site-verification=...` no DNS do Cloudflare. **Esse TXT não pode ser apagado**, senão a propriedade perde a verificação. Sitemap `https://bruckercare.com.br/sitemap-index.xml` enviado e processado. As 6 páginas já estavam no índice do Google quando a propriedade foi criada (rastreadas na madrugada de 22/10/2026, como Googlebot Smartphone), então não foi preciso pedir indexação.
- [ ] Adicionar a conta da BruckerCare (`bruckercare@gmail.com`) como proprietária no Search Console (Configurações > Usuários e permissões), para os dados de busca ficarem também com a empresa.
- [x] Cadastro no Bing Webmaster Tools com o mesmo sitemap. A busca do ChatGPT e o Copilot usam o índice do Bing. Feito em 22/10/2026, na conta do Bing que o Maxwell já usa (a mesma do site da Braskit), sem importar do Search Console (a importação pediria acesso do Bing à conta Google): site `https://bruckercare.com.br/` adicionado à mão e verificado pelo CNAME `f87edd559d2fdcfbcfecb237d0aa1a4d` → `verify.bing.com` no DNS do Cloudflare (Somente DNS). **Esse CNAME não pode ser apagado.** Sitemap `sitemap-index.xml` enviado; o Bing avisa que os relatórios levam até 48 horas.
- [ ] **Perfil da Empresa no Google com avaliações de clientes.** É o que mais pesa na busca local e nas respostas do Gemini e do Google. Prioridade número 1 fora do código depois da publicação.
- [x] **Publicação no Cloudflare:** `npm run deploy` gera o build de produção e manda o `dist/` para o Worker `bruckercare`. Na primeira vez, `npx wrangler login`, marcando a conta "BruckerCare" (na 9vee, o login chegou a enxergar só a conta "Freguês"; aqui o `account_id` no `wrangler.jsonc` evita publicar na conta errada). Em 21/10/2026, o login do Wrangler nesta máquina enxergava só a "Maxcanoas@gmail.com's Account" (a do preview da 9vee) e a API recusou a conta BruckerCare (erro 10000). O login foi refeito na mesma noite, com as duas contas marcadas: o Wrangler enxerga a BruckerCare e a da 9vee. O primeiro deploy saiu na mesma noite (versão `b891d526`, 164 arquivos), com o domínio ligado ao Worker. Para publicar de novo, basta `npm run deploy`. O deploy liga o domínio sozinho (o `routes` do `wrangler.jsonc`), mas só funciona com o domínio já ativo no Cloudflare. O site não tem mais lorem (21/10/2026), então o build de produção passa.
- [x] **Conferir no ar:** a home e as páginas em 200; `http://`, `www.` e `/quem-somos.html` redirecionando para o endereço limpo, com HTTPS e sem www; endereço inexistente em 404, com a página do site; o cabeçalho `Cache-Control` de um arquivo de `/_astro/` com `immutable`. Conferido em 21/10/2026, logo depois do primeiro deploy: as 6 páginas em 200 e idênticas, byte a byte, ao `dist/`; `http://` em 301 para `https://`; `www.` em 301 para o endereço sem www, com o caminho e a query string; `/quem-somos.html`, `/quem-somos/`, `/index` e `/index.html` em 307 para o endereço limpo; endereço inexistente em 404 com a `404.html`; `/_astro/` com `max-age=31536000, immutable`; os cabeçalhos do `_headers`, o `robots.txt`, os sitemaps, a og-image e os ícones no ar. O DNS local pode demorar alguns minutos para enxergar o domínio novo (no Windows, `ipconfig /flushdns` resolve).
- [ ] **GA4:** o ID já está no `.env` e o build com ele passou nos testes de consentimento (21/10/2026: aviso na primeira visita, nada vai ao Google antes de "Aceitar" nem depois de "Recusar", `gtag.js` com o ID certo depois de "Aceitar", evento `clique_whatsapp` registrado). Publicado na mesma noite (versão `912598dd`) e conferido no ar com os mesmos testes. Falta só, no painel do GA4: registrar as dimensões personalizadas `botao`, `pagina` e `formulario` (escopo de evento), marcar `clique_whatsapp`, `envio_formulario` e `clique_telefone` como eventos principais e definir a retenção de dados em **14 meses**, o prazo que a política de privacidade promete.
- [ ] **Testar num iPhone de verdade (Safari iOS).** A versão 2 foi testada no motor WebKit (perfil iPhone 13), no Chrome e no Firefox; o WebKit para Windows não substitui o aparelho. Conferir principalmente a etiqueta que balança, as três seções fixas e o vidro do cabeçalho.

## Material da marca

- [ ] **Manual da marca.** Não está na pasta. A proposta lista como material do contratante: manual, códigos das cores e arquivos das fontes.
- [ ] **Códigos oficiais das cores.** Provisórios, amostrados dos PNGs do logo: verde `#082B27`, caramelo `#C48E52`. Creme e marrom ainda sem fonte oficial.
- [ ] **Confirmar a fonte com a agência.** Decisão provisória: Inter, identificada nas artes dos posts 11 e 16. O logo é desenhado sobre a Inter Tight, com o "k" encurtado e cantos arredondados à mão.

## Imagens (`imagens/gemini/`)

Divisão do trabalho: o Maxwell regera e faz as camadas do hero; o código faz recortes, og-image, AVIF e WebP.

- [ ] **Cores das poltronas.** As fotos mostram dois tons de marrom (chocolate escuro e caramelo/conhaque) e nenhuma poltrona preta. As artes do feed também usam os dois tons (post 11 caramelo, post 16 chocolate). Depois da foto real, regerar as fotos com tom que não existe.
  - Em chocolate: hero desktop e celular, recorte, reclinada lateral, controle, descanso, mesa lateral, quarto, inspeção.
  - Em caramelo: estúdio verde, botões do braço, higienização, acompanhante, og-image, foto da Pâmela.
- [ ] **Hero em duas camadas (opcional, versão 2):** só o par vertical, `hero-sala-vazia-mobile` (a sala sem a poltrona) e `hero-poltrona-recorte-mobile.png` (a poltrona da mesma foto, com fundo transparente). **Os dois precisam ter exatamente o mesmo tamanho em pixels e o mesmo enquadramento da foto original.** Basta salvar em `imagens/gemini/`: o hero passa a usar as camadas sozinho. O par desktop deixou de ser necessário, porque o hero usa a foto vertical nas duas larguras.
- [ ] **Depois de trocar qualquer foto**, rodar `npm run images`. Ele refaz os recortes de `src/assets/derived/` (Pâmela e poltrona reclinada 4:5) e a og-image. As coordenadas dos recortes valem para as fotos atuais e precisam ser conferidas se o enquadramento mudar.
- [ ] **Foto da Pâmela.** O logo aplicado na foto termina perto de x = 777 px, então o recorte começa em 795 e ela fica na borda esquerda do quadro. Por isso a foto sangra pela direita na home. O arquivo original, sem o logo, permitiria centralizá-la.
- [ ] **Resolução.** Maior largura disponível hoje: 1376 px. Na versão 2 nenhuma foto sangra até a borda, então o site já fica nítido; ainda assim, regerar em 2K deixa tudo mais firme em telas de alta densidade. Prioridade: `hero-sala-poltrona-mobile` (pelo menos 1600 px de largura). `detalhe-couro-costura`, `hero-sala-poltrona-desktop` e `cores-poltronas` não são mais usados.
- [ ] **Texto embaralhado gerado pela IA.** `detalhe-controle-mao.jpg`: "RAG/AG" no painel do canto inferior esquerdo. `poltrona-estudio-verde.jpg`: letras nos dois botões do braço.
- [ ] **`poltrona-reclinada-lateral.jpg`.** A poltrona ocupa cerca de um terço do quadro. Ao regerar, pedir a poltrona maior.
- [ ] **Formato.** Os arquivos estão em `.jpg`, não `.png` como na tabela da seção 9 do brief. Não atrapalha. Só os recortes do hero precisam ser PNG (transparência).
- [ ] **Verde das fotos de estúdio** (`#071812` no alto, `#10281D` no piso) é um pouco diferente do verde das seções (`#061C19`). No fechamento, as bordas da foto se esfumam e a emenda não aparece; na abertura de A poltrona a foto fica num quadro. Se regerar, pedir o fundo liso em `#061C19`.

## Fora da proposta, por decisão

- Quem somos apresenta só a Pâmela, embora a proposta fale em "proprietários".
- Contato sem endereço e sem mapa (a empresa não recebe público). A proposta previa endereço e mapa.
- Formulário envia pelo WhatsApp, não por e-mail.

## Acessibilidade de cor (já verificado)

- Caramelo do logo sobre creme: **2,57:1**. Não passa AA nem como título grande (mínimo 3:1). Sobre creme, o destaque precisa de um caramelo mais escuro (definir na direção de arte).
- Caramelo do logo sobre verde: 5,30:1. Passa AA em texto normal.
- Branco ou creme sobre verde, e texto escuro sobre creme: acima de 13:1.
