# Prompts de imagem para o Gemini: site BruckerCare

16 imagens, uma por seção do site. Os nomes de arquivo batem com a tabela da seção 9 do prompt do Claude Code. Salve tudo em `D:\Freelas\bruckerCareSite\imagens\gemini\`.

Os prompts estão em inglês porque o Gemini costuma seguir instruções de fotografia (lente, luz, temperatura de cor) com mais precisão em inglês.

## Antes de começar

1. **Anexe a foto real da poltrona em todo prompt que mostra a poltrona.** Use a arte da poltrona marrom no showroom (é a mais nítida e mostra o produto inteiro). Sem a referência, o Gemini inventa outro modelo, e o site estaria mostrando uma poltrona que a cliente não aluga.
2. **Gere cada imagem numa conversa nova** com a referência anexada. Conversas longas fazem o modelo misturar detalhes de imagens anteriores.
3. **Proporção:** peça a proporção no prompt (já está em cada um) e, se a interface do Gemini tiver seletor de proporção, use o mesmo valor.
4. **Gere 3 a 4 variações** de cada e escolha a melhor.

### Bloco de estilo (já está colado no fim de cada prompt)

Ele garante que as 16 fotos pareçam da mesma sessão de fotos. Se mudar algo nele, mude em todos.

### Como reprovar uma imagem (o que denuncia IA)

- Poltrona diferente da real: número errado de porta-copos, botões no lugar errado, costura diferente, braço de outro formato.
- Mãos com dedos a mais, dedos fundidos, unhas estranhas.
- Qualquer letra, logo ou etiqueta com texto embaralhado.
- Pele de plástico, rosto perfeito demais, todo mundo sorrindo para a câmera.
- Couro brilhando como vinil, sem rugas naturais.
- Sombras que não batem com a direção da luz, objetos flutuando ou derretendo nas bordas.
- Simetria perfeita demais, ambiente de catálogo 3D.

Se a poltrona sair quase certa mas com um detalhe errado, peça a correção na mesma conversa: "Keep everything identical, only fix the armrest: it must have one recessed cup holder, exactly like the reference photo."

---

## Descrição da poltrona (base para todos os prompts)

Já incluída nos prompts. Fica aqui para você ajustar se a cliente confirmar outro detalhe:

> Power lift recliner armchair exactly like the attached reference photo: smooth leather upholstery, tall back with horizontal channel stitching in three padded sections, separate soft lumbar and head cushion, thick padded pillow-top armrests, a recessed cup holder on the top of each armrest, a small two-button power control panel on the outer side of the armrest, a coiled cable wired handheld remote, and an extendable padded footrest. Plain cushion with no embroidery and no logo.

---

## 01. hero-sala-poltrona

**Uso:** fundo do hero. Gere duas versões: 16:9 (desktop) e 4:5 (celular). A poltrona fica à direita para sobrar espaço calmo à esquerda para o título.

```
Wide editorial interior photograph, 16:9 aspect ratio. A power recliner armchair exactly like the attached reference photo, in dark chocolate brown leather, placed in the right third of a calm, upscale Brazilian living room. Three-quarter front view, camera at seated eye level. The left two thirds of the frame are quiet and uncluttered: a warm cream plaster wall, a vertical slatted light oak wood panel, soft late afternoon light coming through sheer linen curtains from the left. A small walnut side table beside the chair with a glass of water and a folded oatmeal linen throw. A tall green plant softly out of focus at the far edge. Nobody in the scene. The mood is welcoming, quiet and expensive, like a boutique hotel suite, not a clinic.

Professional interior and product photography, full-frame camera, 35mm lens at f/4, soft diffused natural light with warm color temperature around 3800K, gentle shadows, true-to-life leather texture with visible stitching and natural creases, subtle film grain, editorial magazine quality, warm neutral palette of cream, oatmeal linen, light oak and deep forest green accents. No text, no logos, no watermarks, no hospital equipment, no oversaturation, no CGI look.
```

Para a versão 4:5, troque a primeira linha por "Vertical editorial interior photograph, 4:5 aspect ratio" e "placed in the right third" por "placed in the lower half of the frame, leaving calm wall space in the upper third".

---

## 02. poltrona-recorte

**Uso:** camada da frente do parallax do hero. Gere com fundo liso e depois remova o fundo (Canva "Remover fundo" ou similar). Salve como `poltrona-recorte.png` com transparência.

```
Studio product photograph, 1:1 aspect ratio. A single power recliner armchair exactly like the attached reference photo, in dark chocolate brown leather, three-quarter front view from the left, in its upright seated position, centered with generous empty space around it. Seamless plain light warm grey studio backdrop and floor, evenly lit so the edges of the chair are crisp and easy to cut out. Soft large key light from the upper left, gentle fill from the right, a soft natural contact shadow under the chair only.

Professional product photography, full-frame camera, 70mm lens at f/8, everything in sharp focus, true-to-life leather texture with visible stitching and natural creases, accurate color. No text, no logos, no props, no reflections on the floor, no CGI look.
```

---

## 03. poltrona-estudio-verde

**Uso:** página A poltrona e seções de fundo verde. O fundo precisa se fundir com o verde do site.

```
Studio product photograph, 4:5 vertical aspect ratio. A power recliner armchair exactly like the attached reference photo, in caramel cognac leather, three-quarter view from the right, upright position, placed slightly low in the frame. Seamless deep forest green backdrop (close to hex #0F2622) and matching floor, very dark and velvety. One large soft light from the upper left sculpting the leather, a faint warm rim light separating the chair from the background, rich but natural shadows. Calm, premium, quiet.

Professional product photography, full-frame camera, 85mm lens at f/5.6, true-to-life leather texture with visible stitching and natural creases, subtle film grain, editorial magazine quality. No text, no logos, no props, no CGI look.
```

---

## 04. poltrona-reclinada-lateral

**Uso:** narrativa de scroll, mostra a reclinação e o apoio para as pernas aberto.

```
Interior product photograph, 3:2 aspect ratio. A power recliner armchair exactly like the attached reference photo, in dark chocolate brown leather, shown in clean side profile, fully reclined with the padded footrest extended, so the reclining angle and the leg support are clearly readable. Placed in a calm room with a warm cream wall and light oak wood floor, a sheer linen curtain on the left letting in soft daylight. Nobody in the scene. Minimal, orderly, plenty of empty wall above the chair.

Professional interior and product photography, full-frame camera, 50mm lens at f/5.6, soft diffused natural light with warm color temperature around 3800K, true-to-life leather texture with visible stitching and natural creases, subtle film grain, editorial magazine quality, warm neutral palette. No text, no logos, no watermarks, no hospital equipment, no CGI look.
```

---

## 05. detalhe-controle-mao

**Uso:** narrativa de scroll, "com apenas um toque no controle".

```
Close-up lifestyle photograph, 4:5 vertical aspect ratio. A woman's relaxed hand, natural skin with realistic texture and short natural nails, resting on the padded armrest of a dark chocolate brown leather recliner exactly like the attached reference photo, thumb gently pressing a button on the wired handheld remote with coiled cable. Shallow depth of field: the hand and remote in focus, the leather armrest and a soft oatmeal linen sleeve gently blurred. Warm, calm, intimate.

Professional lifestyle photography, full-frame camera, 85mm lens at f/2.2, soft window light from the left, warm color temperature around 3800K, true-to-life leather texture, subtle film grain, editorial magazine quality. No readable text or numbers on the remote, no logos, no jewelry glare, no extra fingers, no CGI look.
```

---

## 06. detalhe-botoes-braco

**Uso:** detalhe das funções na página A poltrona.

```
Macro product detail photograph, 1:1 aspect ratio. Close-up of the outer side of the padded leather armrest of a caramel cognac power recliner exactly like the attached reference photo, showing the small two-button power control panel and, above it, the edge of the recessed cup holder on top of the armrest. Precise stitching, natural leather grain and soft creases. Shallow depth of field, buttons in sharp focus.

Professional product photography, full-frame camera, 100mm macro lens at f/4, soft directional light from the upper left, warm color temperature, accurate color, subtle film grain. No text or symbols on the buttons, no logos, no CGI look.
```

---

## 07. detalhe-couro-costura

**Uso:** faixas de textura com parallax entre as seções. Precisa funcionar como fundo, então sem ponto de foco forte.

```
Macro texture photograph, 16:9 aspect ratio. Extreme close-up of dark chocolate brown leather upholstery with a single horizontal line of fine, even stitching crossing the frame slightly below the center, natural leather grain and very soft creases. Low raking light from the left revealing the texture, warm tones, most of the frame softly lit and calm so it works as a background.

Professional macro photography, full-frame camera, 100mm macro lens at f/8, warm color temperature, accurate color, subtle film grain. No text, no logos, no CGI look.
```

---

## 08. recuperacao-descanso

**Uso:** seção "a recuperação começa antes de chegar em casa".

```
Lifestyle interior photograph, 3:2 aspect ratio. A Brazilian woman in her early forties, natural look, hair loosely tied, wearing loose soft cream knit loungewear, resting in a dark chocolate brown leather power recliner exactly like the attached reference photo, partly reclined with the footrest raised, an oatmeal linen throw over her legs. Eyes closed or looking out of the window, peaceful, not posing, not smiling at the camera. Beside her, a walnut side table with a glass of water, her phone and a charger cable. Calm, warm living room with sheer linen curtains and soft afternoon light. Nothing medical in sight: no bandages, no hospital items.

Professional lifestyle photography, full-frame camera, 50mm lens at f/2.8, soft diffused natural light from the left, warm color temperature around 3800K, realistic skin texture, true-to-life leather texture, subtle film grain, editorial magazine quality, warm neutral palette of cream, oatmeal linen, light oak and deep forest green accents. No text, no logos, no watermarks, no CGI look.
```

---

## 09. acompanhante-cuidado

**Uso:** seção sobre quem acompanha alguém na recuperação.

```
Lifestyle interior photograph, 3:2 aspect ratio. A quiet caring moment at home: a Brazilian man in his forties, casual light shirt, gently placing a cup of tea on the side table next to his partner, who is resting in a caramel cognac leather power recliner exactly like the attached reference photo, partly reclined, wrapped in a soft oatmeal throw. His hand lightly touches her shoulder. Natural, unposed, both looking at each other or at the tea, nobody looking at the camera. Warm living room, light oak wood, cream walls, a green plant, soft morning light through linen curtains. Nothing medical in sight.

Professional lifestyle photography, full-frame camera, 50mm lens at f/2.8, soft diffused natural light, warm color temperature around 3800K, realistic skin texture, true-to-life leather texture, subtle film grain, editorial magazine quality, warm neutral palette. No text, no logos, no watermarks, no CGI look.
```

---

## 10. preparo-mesa-lateral

**Uso:** dicas de preparar a casa ("deixe o essencial por perto").

```
Still life interior photograph, 4:5 vertical aspect ratio. A small round walnut side table right beside the padded armrest of a dark chocolate brown leather recliner exactly like the attached reference photo (only the armrest edge visible on the right side of the frame). On the table, neatly but naturally arranged: a glass carafe of water and a glass, a smartphone with its charging cable, a TV remote, a hardcover book with a plain cover, reading glasses, and a small ceramic dish. Soft morning light from the left, long gentle shadows, cream wall behind.

Professional still life photography, full-frame camera, 50mm lens at f/4, soft diffused natural light, warm color temperature around 3800K, accurate color, subtle film grain, editorial magazine quality. No readable text on any object, no medicine bottles with labels, no logos, no CGI look.
```

---

## 11. higienizacao

**Uso:** processo antes da entrega, "higienizada e pronta para você".

```
Professional process photograph, 4:5 vertical aspect ratio. Close-up of hands wearing clean white nitrile gloves wiping the headrest area of a caramel cognac leather power recliner exactly like the attached reference photo with a folded light grey microfiber cloth. A small blank kraft paper tag with a natural twine string hangs from the armrest, with no writing on it. Clean, bright, orderly room with a pale cream wall. Only hands and forearms visible, wearing a deep forest green long sleeve uniform.

Professional photography, full-frame camera, 85mm lens at f/2.8, soft even daylight, slightly cooler but still warm color temperature around 4500K, true-to-life leather texture, subtle film grain, editorial quality. No text on the tag, no logos, no spray bottles with labels, no extra fingers, no CGI look.
```

> A etiqueta sai em branco de propósito. Se a cliente quiser o texto "higienizada e pronta para você" na foto, coloque depois no Canva com a fonte da marca, que fica com cara de foto real e não de letra gerada.

---

## 12. inspecao-mecanismo

**Uso:** processo antes da entrega, etapa de conferência.

```
Professional process photograph, 3:2 aspect ratio. A technician seen from behind and partly from the side, deep forest green uniform polo with no logo, kneeling next to a dark chocolate brown leather power recliner exactly like the attached reference photo, with the footrest extended, checking the underside mechanism and the power cable with care. Clean, well organized and bright storage room with light grey floor and cream walls, a second recliner wrapped in clear protective film in the soft-focus background. Calm, methodical, trustworthy.

Professional documentary-style photography, full-frame camera, 35mm lens at f/4, soft even daylight from large windows, color temperature around 4500K, realistic textures, subtle film grain, editorial quality. Face not the focus, no logos, no text, no messy tools, no CGI look.
```

---

## 13. entrega-porta

**Uso:** "a poltrona chega até você".

```
Lifestyle photograph, 3:2 aspect ratio. Two delivery professionals in deep forest green polo shirts with no logos and dark trousers carefully carrying a recliner armchair wrapped in a clean quilted cream protective cover through the open front door of a well kept Brazilian house with a light wood door and a few potted plants at the entrance. A woman in her fifties holds the door open with a relaxed, welcoming expression. Late morning sunlight, natural and warm. The scene feels careful, respectful and calm, nobody looking at the camera.

Professional lifestyle photography, full-frame camera, 35mm lens at f/4, natural daylight, warm color temperature, realistic skin and fabric textures, subtle film grain, editorial magazine quality. No truck, no text, no logos, no watermarks, no CGI look.
```

---

## 14. poltrona-quarto

**Uso:** "você utiliza pelo período necessário", a poltrona já instalada em casa.

```
Interior photograph, 3:2 aspect ratio. A dark chocolate brown leather power recliner exactly like the attached reference photo, positioned at an angle next to a neatly made bed with oatmeal linen sheets, in a serene Brazilian bedroom. A light oak bedside table with a small lamp and a glass of water, a soft wool rug, sheer curtains with early morning light. The space is organized, with a clear path to walk around the chair. Nobody in the scene.

Professional interior photography, full-frame camera, 28mm lens at f/5.6, soft diffused natural light, warm color temperature around 3800K, true-to-life leather texture with visible stitching, subtle film grain, editorial magazine quality, warm neutral palette of cream, oatmeal linen, light oak and deep forest green accents. No text, no logos, no hospital equipment, no CGI look.
```

---

## 15. cores-poltronas

**Uso:** cores disponíveis. **Só gere depois que a cliente confirmar quais cores ela tem.** Se tiver só duas, ajuste o prompt para duas.

```
Studio product photograph, 16:9 aspect ratio. Four identical power recliner armchairs exactly like the attached reference photo, lined up side by side with even spacing, all in the same upright position and same three-quarter angle, upholstered in four colors from left to right: dark chocolate brown leather, caramel cognac leather, warm beige leather, soft grey leather. Seamless warm cream studio backdrop and floor, soft large light from the upper left, gentle contact shadows.

Professional product photography, full-frame camera, 50mm lens at f/8, everything in sharp focus, accurate and consistent color, true-to-life leather textures, subtle film grain. No text, no logos, no props, no CGI look.
```

---

## 16. og-image

**Uso:** imagem que aparece quando o link do site é compartilhado no WhatsApp e nas redes. O logo entra depois, por cima, no espaço vazio da esquerda.

```
Studio product photograph, wide 1.91:1 aspect ratio (1200 by 630 pixels). A caramel cognac leather power recliner exactly like the attached reference photo, three-quarter view, placed in the right half of the frame. The left half is an empty, seamless deep forest green backdrop (close to hex #0F2622), clean and calm, reserved for a logo. One large soft light from the upper left, a faint warm rim light on the chair.

Professional product photography, full-frame camera, 85mm lens at f/5.6, true-to-life leather texture with visible stitching, subtle film grain, editorial quality. No text, no logos, no CGI look.
```

---

## Fora do Gemini

- **Foto da Pâmela:** tem que ser real. Peça a ela uma foto em boa resolução, com luz natural, de preferência com a poltrona. Nunca gere uma imagem de pessoa real.
- **Favicon e logo:** usar os arquivos da agência que estão em `imagens/`.
