# Decisões do projeto BruckerCare

Decisões fechadas com o Maxwell no grilling de 18/10/2026. O que ainda depende da cliente está em `pendencias.md`.

## Marca e conteúdo

| Tema | Decisão |
|---|---|
| Grafia do nome | "BruckerCare" em todo texto, título, meta e dados estruturados. `bruckercare` só no logo (arquivo original). Frases das legendas com "Brucker Care" são ajustadas para "BruckerCare". |
| Título do hero | "Cuidar também é preparar o caminho da recuperação." (post 1). Subtítulo: o que é, para quem e onde. "A poltrona é o equipamento. O cuidado é o nosso trabalho." (post 16) vai para a seção do processo de preparo. |
| Preço | Não aparece no site. Botões levam ao WhatsApp ("Consultar disponibilidade"). O FAQ explica que o valor depende do período. |
| Cirurgias | Texto principal fala de recuperação pós-operatória em geral. Uma pergunta do FAQ e as meta descriptions citam "cirurgias em geral, inclusive plásticas". |
| Poltronas | O site não mostra cores nem quantidade. Cores informadas pela cliente: preto, verde, bege e marrom. Em 20/10/2026 a pergunta das cores saiu do FAQ (pedido da cliente) e a seção "Cores disponíveis" saiu da página A poltrona (pedido do Maxwell); com isso, o aluguel passou para o linho e o processo para o papel, para manter a alternância de tons. |
| Endereço | Só área de atendimento. Sem endereço nem mapa. Perfil da Empresa no Google como empresa que atende no local do cliente. JSON-LD com cidade, estado e área atendida. |
| Quem somos | Só a Pâmela (a proposta fala em "proprietários", no plural; decisão do Maxwell). |
| Foto da Pâmela | `pamela-zweibrucker.jpg` é foto real (confirmado pelo Maxwell). Usar com recorte, sem o logo aplicado. |
| October Rose | Não é citado no site. |
| Perguntas frequentes | Respostas enviadas pela cliente em 20/10/2026: período mínimo de 10 dias, entrega no dia anterior à cirurgia, renovação por mais dias, termo de locação, instalação pelo técnico que faz a entrega, higienização em quatro etapas (conferência, limpeza, sanitização com produtos próprios para o material, preparação), pagamento em dinheiro, Pix, cartão de crédito e de débito. A pedido dela, saíram as perguntas sobre cores, o que vem junto na entrega e conferência antes da entrega, e os trechos em aberto sobre indicação médica, lista exata das cidades e detalhes da retirada. Com a pergunta, saiu também a seção "O que vem junto" da página A poltrona (decisão do Maxwell). |
| Horário | Atendimento 24 horas, todos os dias (informado pelo Maxwell em 20/10/2026). Aparece no rodapé, na página de contato e nos dados estruturados (`openingHoursSpecification`, 00:00 às 23:59). |
| Razão social e CNPJ | Não aparecem no rodapé (decisão do Maxwell, 20/10/2026). Ficam só na política de privacidade, para identificar a empresa responsável pelos dados, e seguem pendentes com a cliente. |
| Dados que faltam | Respostas que dependem da cliente entram com lorem ipsum no tamanho do texto real, centralizadas em `src/data/empresa.ts`. O build de produção falha se ainda houver "lorem" ou `[CONFIRMAR` no site. |

## Técnica

| Tema | Decisão |
|---|---|
| Domínio | `bruckercare.com.br` (livre em 18/10/2026), em nome da BruckerCare. |
| Hospedagem | HostGator, no mesmo plano da Brucker Printers. |
| DNS e CDN | Cloudflare (plano gratuito), como a Brucker Printers. MX do e-mail apontando para a HostGator. |
| E-mail | `contato@bruckercare.com.br`, caixa nova na HostGator. Só é exibido no site. |
| Formulário | Não envia nada ao servidor. Monta a mensagem e abre o WhatsApp da BruckerCare (`wa.me/5551998631666`). Botão: "Enviar pelo WhatsApp". Evento GA4 `envio_formulario` no clique. Sem PHP, sem anti-spam. |
| Campos do formulário | Nome, cidade, data em que precisa da poltrona, mensagem. Sem telefone (o número chega pelo próprio WhatsApp). Sem data da cirurgia (dado de saúde, sensível pela LGPD). Dica no campo de mensagem: não é preciso contar detalhes do procedimento. |
| Fonte | Inter (a mesma das artes do feed; o logo é desenhado sobre a Inter Tight). Licença OFL. Variável em woff2 (eixo de peso, 48 KB), hospedada no site e pré-carregada. A versão com eixo óptico (73 KB) foi trocada para dar folga ao LCP (decisão do Maxwell, 18/10/2026). |
| Logo no site | SVG exportado do `LOGOS.pdf` original com MuPDF, sem redesenho, conferido sobre o PNG. Ícone recortado do arquivo original para favicon e marca d'água. |
| Hero | Duas camadas tiradas da mesma foto: sala sem a poltrona (fundo) e poltrona recortada (frente), em desktop e celular. Até os arquivos existirem, o hero usa a foto única, e o código já suporta as duas camadas. |
| Imagens | O Maxwell regera no Gemini (2K/4K, sem texto nos botões, cores reais) e faz as camadas do hero. O código faz recortes, og-image 1200x630, recorte da Pâmela e AVIF/WebP. |
| Projeto | Astro 7.4 (estável mais recente em 18/10/2026), saída estática, sem framework de componentes. |
| Repositório | GitHub `maxcanoas/bruckerCareSite`, público, branch `main` (primeiro commit em 19/10/2026, com a versão 2). A proposta comercial (valores e pagamento) e o brief do projeto ficam fora do repositório, só no computador (`.gitignore`). |
| Trava de conteúdo | `npm run build` falha se houver lorem, `[CONFIRMAR` ou placeholder de imagem; `npm run build:preview` gera a prévia mesmo assim. Travessão e palavras proibidas do brief falham sempre. |
| Movimento | Sem GSAP. CSS scroll-driven animations onde há suporte, e um laço `requestAnimationFrame` só no navegador sem suporte. JavaScript total da home: 1,5 KB comprimido. |
| Fonte de reserva | Arial calibrada por peso para a largura da Inter, para o texto não pular quando a fonte carrega (CLS 0). |
| Aviso de cookies | Só existe com o ID do GA4 no `.env` (na prévia aparece mesmo sem ID). Aceitar e Recusar iguais. O `<head>` decide antes da primeira pintura se o aviso aparece, para não mexer no layout. No celular, o botão flutuante espera o aviso ser respondido. |
| GA4 | Consent Mode v2 em modo básico: o script do Google só carrega depois de "Aceitar". Eventos `clique_whatsapp` (`botao`, `pagina`), `clique_telefone`, `clique_instagram`, `envio_formulario` (`formulario`) e `rolagem_75`, todos com `pagina`. |
| Formulário sem JavaScript | Mostra só o campo de mensagem, que vai para o WhatsApp pelo próprio link `wa.me`. Com JavaScript, nome, cidade e data entram na mensagem. |
| `content-visibility` | Testado e retirado: deixava a auditoria de contraste (axe/Lighthouse) com falsos positivos. A home fica com 98 de desempenho e LCP de 1,8 s sem ele. |
| Página 404 | Criada (fora da busca e do sitemap), com volta ao início e WhatsApp. |

## Redesenho do frontend (versão 2), 18 e 19/10/2026

Pedido do Maxwell: recriar o frontend com um site elegante, fino, delicado e harmonioso, sem mudar tipografia e imagens, com a foto da poltrona primeiro no celular, animações sutis (rolagem, parallax, seção fixa) e sem peso. Direção completa em `direcao-de-arte.md`.

| Tema | Decisão |
|---|---|
| Cópia da versão 1 | Código, docs e configs da versão 1 copiados para `D:\Freelas\bruckerCareSite-v1` antes de reescrever (o git ainda não tem commit). As imagens não mudaram. |
| Assinatura | A etiqueta kraft "higienizada e pronta para você" (post 7) pendurada na foto do hero, balançando de leve, e de novo no fim da costura do processo. Usada como símbolo visual, sem afirmar que toda poltrona sai com uma etiqueta física. |
| Hero no celular | A foto da poltrona vem primeiro (cerca de 60% da tela), com a etiqueta e o título pequeno embaixo. |
| Foto do hero | A foto vertical (`hero-sala-poltrona-mobile`, 4:5) nas duas larguras. Para o parallax em camadas, bastam `hero-sala-vazia-mobile` e `hero-poltrona-recorte-mobile.png`; o par desktop deixou de ser necessário. |
| Tipografia | A mesma Inter (arquivo variável de 48 KB). Títulos em peso 300; a palavra-chave em tabaco ou caramelo, peso 400. |
| Tabaco | Escurecido de `#896239` para `#82592F` para passar AA também sobre o linho (5,05:1). |
| Forma | Cantos macios (fotos 18 a 28 px, botões em pílula) e as "camadas de tecido": cada troca de tom começa com cantos arredondados que mostram a cor anterior. |
| Seções fixas | Três: a faixa "Sentar. Levantar. Deitar.", a narrativa da poltrona (também no celular, com a foto presa no alto) e os passos do aluguel em cartões que se empilham. |
| Faixas de couro | Removidas. `detalhe-couro-costura` e o fundo desfocado de "Como funciona" saíram do site, e os recortes que não são mais usados saíram do `npm run images`. |
| Cabeçalho | Acompanha o tom da seção que está por baixo. Navegação completa a partir de 1200 px (em 1024 px os links quebravam linha); abaixo disso, "Menu" e o botão do WhatsApp. |
| Aviso de cookies | Mais curto: "Usamos cookies de análise (Google Analytics) só com a sua permissão.", com Aceitar e Recusar iguais. |
| Movimento | Continua sem biblioteca. A etiqueta é um pêndulo em JavaScript que só roda enquanto aparece e se mexe. |

## SEO e GEO, 20/10/2026

Análise de busca (Google) e de respostas de IA (ChatGPT, Gemini, Perplexity). Ajustes aprovados pelo Maxwell.

| Tema | Decisão |
|---|---|
| Endereço oficial da home | O canonical e o `og:url` da home apontavam para `/index`. Corrigido para `/` no `BaseLayout`; o `.htaccess` redireciona `/index` para `/`. |
| Palavras-chave | Principal: "aluguel de poltrona pós-operatório" + Canoas e Porto Alegre. Variações que os concorrentes usam e o site não tinha: "poltrona reclinável" (agora em títulos, descrições, H1 de A poltrona e textos), "pós-cirúrgico", "locação". Sem repetir à força: cada termo entra onde a frase continua natural. |
| H1 da home | O rótulo "aluguel de poltronas para o pós-operatório" virou o H1; a frase grande "Cuidar também é preparar o caminho da recuperação." virou parágrafo. Nada muda no visual. |
| Títulos | Até cerca de 60 caracteres. A home ficou sem "\| BruckerCare" (o nome do site vem do dado estruturado `WebSite`). |
| Dados estruturados | `WebSite` na home, `FAQPage` nas perguntas frequentes (sem resultado expandido no Google para sites como este, mas legível para buscadores e IAs), `Person` da Pâmela em Quem somos, ligada à empresa como fundadora. |
| Perguntas novas | "Como faço para alugar a poltrona?" e "Vocês atendem nos fins de semana?", só com fatos já confirmados. |
| Depende da cliente | Procedimentos citados por nome, função de levantar ("lift") e lista de cidades só entram com confirmação da cliente (`pendencias.md`). |
