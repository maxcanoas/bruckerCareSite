# Pendências do site BruckerCare

Lista viva. Tudo o que falta para o site ficar completo e correto. Nada aqui entra no site antes de ser confirmado. Decisões já fechadas estão em `decisoes.md`.

Última atualização: 19/10/2026 (redesenho do frontend, versão 2).

---

## Para perguntar à cliente

Enquanto não houver resposta, o texto do site leva lorem ipsum no lugar, e o build de produção não publica.

- [ ] Período mínimo de locação.
- [ ] Prazo entre o pedido e a entrega.
- [ ] Cidades atendidas, com exatidão (quais cidades são "região").
- [ ] Horário de atendimento (WhatsApp e entregas).
- [ ] Formas de pagamento.
- [ ] Existe termo ou contrato de locação? Como é assinado?
- [ ] Quem instala a poltrona e como é a instalação.
- [ ] Precisa de indicação médica para alugar?
- [ ] Dá para renovar o período? Como funciona?
- [ ] O que vem junto na entrega (controle, cabo, capa, orientações de uso?).
- [ ] Como é a retirada (agendamento, quem precisa estar em casa).
- [ ] Detalhes da higienização que possam ser ditos no site (produtos, etapas), sem prometer o que não é feito.
- [ ] Razão social e CNPJ da BruckerCare (política de privacidade e registro do domínio).
- [ ] Nome e contato do responsável pelos dados pessoais (encarregado, LGPD).
- [ ] Link do Perfil da Empresa no Google (para os dados estruturados e para ligar ao site).
- [ ] **Confirmar dois detalhes da poltrona citados na página A poltrona:** o painel com dois botões na lateral do braço e o controle com fio. Eles vêm da descrição da poltrona real usada nos prompts das imagens, mas a cliente ainda não confirmou.
- [ ] Prazo de guarda dos dados (conversas e cadastro) para a política de privacidade.
- [ ] **Revisão jurídica da política de privacidade** (recomendado antes de publicar). O texto segue a LGPD, mas não substitui um advogado.
- [ ] **Foto real das 4 poltronas** (preto, verde, bege, marrom), mesmo de celular, para definir o tom do "marrom" e servir de referência ao regerar as imagens.
- [ ] Foto da Pâmela em resolução maior, se houver o arquivo original (o recorte atual só com ela tem cerca de 560x700 px).

## Para o Maxwell

- [ ] **Mostrar o redesenho (versão 2) à Pâmela.** Aprovado pelo Maxwell em 19/10/2026 e enviado ao GitHub. A versão 1 só existe em `D:\Freelas\bruckerCareSite-v1` (não entrou no histórico do git); pode ser apagada quando não for mais necessária.
- [ ] Confirmar se o plano HostGator da Brucker Printers aceita domínio adicional (no Brasil, o Plano P aceita 1 site; M e Turbo aceitam vários).
- [ ] Registrar `bruckercare.com.br` em nome da BruckerCare (pede CNPJ ou CPF do titular).
- [ ] Apontar o DNS para o Cloudflare e o MX para a HostGator.
- [ ] Criar a caixa `contato@bruckercare.com.br` e, se for o caso, o encaminhamento para o e-mail da Pâmela.
- [ ] ID do GA4 (vai para variável de ambiente).
- [ ] Cadastro no Search Console e envio do sitemap (Fase 3 da proposta).
- [ ] **Publicação na HostGator:** subir o conteúdo de `dist/` (o build de produção) inteiro, inclusive o `.htaccess` (arquivo oculto), que serve `/quem-somos` a partir de `quem-somos.html`, força HTTPS sem www e define o cache. No Cloudflare, usar SSL "Full" (com "Flexible" o redirecionamento entra em laço).
- [ ] **GA4:** colocar o ID em `.env` (`PUBLIC_GA4_ID=G-...`, modelo em `.env.example`) e gerar o build. No GA4: registrar as dimensões personalizadas `botao`, `pagina` e `formulario` (escopo de evento), marcar `clique_whatsapp`, `envio_formulario` e `clique_telefone` como eventos principais e definir a retenção de dados (o mesmo prazo vai para a política).
- [ ] **Testar num iPhone de verdade (Safari iOS).** A versão 2 foi testada no motor WebKit (perfil iPhone 13), no Chrome e no Firefox; o WebKit para Windows não substitui o aparelho. Conferir principalmente a etiqueta que balança, as três seções fixas e o vidro do cabeçalho.
- [ ] Quando o horário de atendimento for confirmado, ele entra também nos dados estruturados (`openingHours` em `src/lib/schema.ts`).
- [ ] Com as respostas reais do FAQ, avaliar incluir os dados estruturados `FAQPage`.

## Material da marca

- [ ] **Manual da marca.** Não está na pasta. A proposta lista como material do contratante: manual, códigos das cores e arquivos das fontes.
- [ ] **Códigos oficiais das cores.** Provisórios, amostrados dos PNGs do logo: verde `#082B27`, caramelo `#C48E52`. Creme e marrom ainda sem fonte oficial.
- [ ] **Confirmar a fonte com a agência.** Decisão provisória: Inter, identificada nas artes dos posts 11 e 16. O logo é desenhado sobre a Inter Tight, com o "k" encurtado e cantos arredondados à mão.

## Imagens (`imagens/gemini/`)

Divisão do trabalho: o Maxwell regera e faz as camadas do hero; o código faz recortes, og-image, AVIF e WebP.

- [ ] **Cores das poltronas.** As fotos mostram dois tons de marrom (chocolate escuro e caramelo/conhaque) e nenhuma poltrona preta. As artes do feed também usam os dois tons (post 11 caramelo, post 16 chocolate). Depois da foto real, regerar as fotos com tom que não existe.
  - Em chocolate: hero desktop e celular, recorte, reclinada lateral, controle, descanso, mesa lateral, quarto, inspeção.
  - Em caramelo: estúdio verde, botões do braço, higienização, acompanhante, og-image, foto da Pâmela.
- [ ] **`cores-poltronas.jpg` está errada.** Mostra marrom, caramelo, verde e bege. Precisa ser preto, verde, bege e marrom. Também tem uma mancha clara no canto superior esquerdo. Por isso ela está bloqueada no site (aparece o placeholder). Ao salvar a versão nova com o mesmo nome, tirar `cores-poltronas` da lista `IGNORED` em `src/lib/photos.ts`.
- [ ] **Tons das amostras de cor** na página A poltrona são aproximados (`src/data/poltrona.ts`). Ajustar pela foto real das quatro poltronas.
- [ ] **Hero em duas camadas (opcional, versão 2):** só o par vertical, `hero-sala-vazia-mobile` (a sala sem a poltrona) e `hero-poltrona-recorte-mobile.png` (a poltrona da mesma foto, com fundo transparente). **Os dois precisam ter exatamente o mesmo tamanho em pixels e o mesmo enquadramento da foto original.** Basta salvar em `imagens/gemini/`: o hero passa a usar as camadas sozinho. O par desktop deixou de ser necessário, porque o hero usa a foto vertical nas duas larguras.
- [ ] **Depois de trocar qualquer foto**, rodar `npm run images`. Ele refaz os recortes de `src/assets/derived/` (Pâmela e poltrona reclinada 4:5) e a og-image. As coordenadas dos recortes valem para as fotos atuais e precisam ser conferidas se o enquadramento mudar.
- [ ] **Foto da Pâmela.** O logo aplicado na foto termina perto de x = 777 px, então o recorte começa em 795 e ela fica na borda esquerda do quadro. Por isso a foto sangra pela direita na home. O arquivo original, sem o logo, permitiria centralizá-la.
- [ ] **Resolução.** Maior largura disponível hoje: 1376 px. Na versão 2 nenhuma foto sangra até a borda, então o site já fica nítido; ainda assim, regerar em 2K deixa tudo mais firme em telas de alta densidade. Prioridade: `hero-sala-poltrona-mobile` (pelo menos 1600 px de largura) e `cores-poltronas` (aparece com cerca de 1000 px, pede 2000 px). `detalhe-couro-costura` e `hero-sala-poltrona-desktop` não são mais usados.
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
