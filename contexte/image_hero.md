# Image hero (à générer avec une IA)

## Contexte

Sur le site de référence (`reference.md`, capture `screenshots/01-hero.webp`),
la section hero n'utilise **aucune photo de stock générique** : c'est une
image **générée par IA**, mise en scène spécifiquement pour illustrer le
produit en usage réel, avec une direction artistique cinématographique et
chaleureuse. C'est cette même logique qu'il faut reproduire, adaptée à notre
contexte : un collaborateur comptable IA pour cabinets d'expertise comptable
français (voir `claude.md`).

## Ce que montre l'image de référence

Deux personnes attablées dans une cuisine/salon domestique, en train de
manger un plat de pâtes fraîchement préparé, souriantes et complices,
éclairage chaud de fin de journée (golden hour) qui entre par une grande
fenêtre à gauche. En arrière-plan à droite, discrètement posé sur un plan de
travail, l'appareil / le produit de la marque (un robot cuisinier, esthétique
premium, noir mat). Le produit n'est pas au centre de l'attention : ce sont
les personnes et le moment de vie qui sont mis en avant.

## Brief pour la nouvelle image hero

Direction artistique adaptée à notre contexte B2B (cabinets comptables) :

- **Scène de vie de cabinet, pas un packshot produit ni une image "IA
  futuriste" froide** : un ou deux collaborateurs comptables (ou un expert-
  comptable et un collaborateur) dans un bureau de cabinet français,
  détendus, en train de terminer leur journée sereinement ou d'échanger avec
  le sourire — l'image d'un quotidien apaisé, pas surchargé. On évite
  l'imagerie cliché "robot" ou "écrans de code" : le sujet, c'est le
  soulagement humain, pas la technologie.
- **Lumière chaude et naturelle** (golden hour, fin de journée, lumière qui
  entre par une fenêtre de bureau), ambiance intimiste et haut de gamme,
  pas de lumière froide de open-space ni de studio flashy — même mood que la
  référence, transposé à un cadre professionnel.
- **Cadrage** : format large (paysage), pensé pour occuper tout le hero en
  plein écran (ratio large, ex. 16:9 à 21:9, minimum ~1920×950px). Laisser
  de l'espace visuel dans le tiers inférieur / centre de l'image pour que le
  texte du headline, sous-titre et formulaire (blancs) restent lisibles
  par-dessus la photo.
- **Personnes souriantes, naturelles**, pas de pose figée façon stock photo
  corporate — un instant capturé, pas un regard caméra.
- **Présence de l'IA : ne pas essayer de la montrer visuellement.** Testé
  en v2 (écran flou avec interface de chat) → rendu artificiel, cassait la
  chaleur de l'image (voir section "Retour sur la v2" plus bas). La
  référence Mirabelle elle-même ne montre pas la techno dans son hero, juste
  le bénéfice humain. Le texte du site porte l'explication IA, pas l'image.
- **Rendu photoréaliste**, qualité "photographie éditoriale/lifestyle haut
  de gamme" (type campagne de marque premium B2B), pas de style illustration
  ni 3D stylisé.
- **Palette cohérente** avec le reste du site : tons chauds/naturels (bois,
  lumière ambrée) qui se marient avec le fond crème du reste de la page.

## Logos disponibles

- **Comptallié** : `contexte/logos/comptallie-logo.png` — icône monoligne
  blanche sur fond noir.
- **Sciences Po Paris** : `contexte/logos/sciences-po-logo.png` — wordmark
  officiel rouge (fourni par l'utilisateur, fond transparent).

Sur le site de référence, le badge du bas est "Backed by Y Combinator" (logo
+ texte). Pour notre site, il devient **"Pré-incubée à Sciences Po Paris"**
avec `sciences-po-logo.png` à la place du logo Y Combinator (cf.
`content.md`, section Footer). Le footer étant à fond noir et le wordmark
Sciences Po étant rouge sur fond transparent, prévoir un léger fond clair
(pastille blanche arrondie) derrière le logo pour le contraste, plutôt que
de le poser tel quel sur le noir.

## Retour sur la v2 (rejetée par l'utilisateur)

Image générée avec le prompt v2 (client + expert-comptable + écran flou) :
rendu trop "photo de stock corporate" — lumière neutre/froide au lieu de
chaleureuse, costumes gris identiques et interchangeables, et l'écran avec
l'interface de chat a produit un mockup UI visiblement faux/plaqué (blocs
colorés façon capture d'écran d'app, pas du tout crédible comme arrière-plan
flou de vraie photo). Résultat : toute la chaleur de la référence Mirabelle
a disparu. Retour à l'essentiel ci-dessous (v3).

## Concept retenu (v3) — simple, chaleureux, fidèle à la référence

**Constat clé en revoyant la référence** : le hero de Mirabelle n'essaie
même pas d'expliquer visuellement la techno — il montre juste un moment
humain sincère et chaleureux (le repas), le produit est presque invisible.
Le texte du site (voir `content.md`) explique déjà ce qu'est Comptallié ;
le hero n'a pas à le faire aussi. La v2 a échoué en essayant de caser une
"interface IA" dans le cadre — c'est précisément ce qui a cassé l'ambiance
et donné un rendu artificiel.

**v3 reprend donc la formule de la référence à l'identique, juste
transposée** : lumière dorée de fin de journée, moment humain sincère entre
deux collaborateurs de cabinet, vêtements décontractés (pas de costume —
c'est ça qui donnait l'effet "stock photo corporate"), aucun écran, aucune
tentative de montrer la technologie. Simple et efficace, comme demandé.

**Prompt :**

```
Warm, intimate editorial lifestyle photograph inside a small, real French
accounting firm office at the end of the workday — warm wood shelving,
a few plants, soft clutter of a lived-in workspace, not a glossy corporate
office. Golden hour light pours through a large window, casting warm
amber tones across the room. Two colleagues, a man and a woman in their
30s, stand near the window sharing a genuine laugh over coffee, dressed in
casual smart clothes — knit sweaters or an open shirt, no suits, no
blazers, no ties. Candid, natural moment, caught mid-laughter, not posed,
not looking at the camera. Shallow depth of field, soft warm glow, photo-
realistic, premium lifestyle editorial photography like a high-end brand
campaign, shot on a full-frame camera with a 35mm lens, slightly warm film-
like color grading. Wide cinematic landscape composition, generous
negative space in the lower-center third of the frame for text overlay. No
screens, no visible UI, no text, no logos, no watermark anywhere in the
image.
```

**Negative prompt :**

```
suit, blazer, tie, corporate stock photo, cold lighting, fluorescent
lighting, sterile office, glass office, screen, laptop UI, app mockup,
futuristic tech, robot, hologram, looking at camera, stiff pose, text,
watermark, logo, deformed hands, extra fingers
```

**Paramètres conseillés** : identiques à avant — ratio `16:9`, résolution
la plus haute disponible (~1920×950px mini).

## Retour sur la v3 (chaleur retrouvée, mais contexte pro perdu)

Image v3 générée : la chaleur/complicité de la référence est enfin là
(lumière dorée, rire sincère, café). Mais remarque clé de l'utilisateur :
sans costume ET sans aucun élément de bureau visible (étagère à livres,
radiateur, bougies/bouteilles sur le rebord de fenêtre), la scène se lit
comme un appartement, pas comme un cabinet comptable — les vrais clients
(experts-comptables) ne s'y reconnaîtraient pas. Le costume n'était pas le
vrai problème en v2 (c'était la lumière froide + l'écran factice) ; le
retirer sans rien remettre à la place a fait perdre tout contexte pro.

## Concept retenu (v4) — chaleur + contexte de bureau reconnaissable

**Principe** : garder tout ce qui a marché en v3 (lumière dorée, moment
candide, complicité sincère, pas de costume rigide), mais ancrer la scène
dans un vrai bureau de cabinet — bureau, écran d'ordinateur, dossiers/
classeurs — et habiller les deux personnes en tenue "business casual"
(chemise/chemisier, cardigan ou blazer ouvert, sans cravate) plutôt qu'en
pull décontracté façon week-end. C'est le décor de bureau qui rend la scène
reconnaissable pour la cible, pas le costume.

**Prompt :**

```
Warm, intimate editorial lifestyle photograph inside a real French
accounting firm office at the end of the workday. In the frame: a proper
office desk with a computer monitor (screen off or turned away, not the
focus), neat rows of binders and files on open shelving behind, a desk
lamp, a small plant — clearly a professional accounting workspace, not a
living room. Golden hour light pours through a large office window,
casting warm amber tones across the room. Two colleagues, a man and a
woman in their 30s, stand near the desk sharing a genuine warm laugh over
coffee, dressed in smart business-casual attire — a crisp shirt or blouse,
an open cardigan or unbuttoned blazer, no tie, nothing stiff or corporate-
stock-photo posed. Candid, natural moment, caught mid-laughter, not looking
at the camera. Shallow depth of field, soft warm glow, photorealistic,
premium lifestyle editorial photography like a high-end brand campaign,
shot on a full-frame camera with a 35mm lens, slightly warm film-like color
grading. Wide cinematic landscape composition, generous negative space in
the lower-center third of the frame for text overlay. No visible screen
content, no text, no logos, no watermark anywhere in the image.
```

**Negative prompt :**

```
living room, home apartment, bedroom, candles, wine bottles, sofa, suit,
full formal corporate stock photo, cold lighting, fluorescent lighting,
sterile office, looking at camera, stiff pose, text, watermark, logo,
deformed hands, extra fingers
```

**Paramètres conseillés** : ratio `16:9`, résolution la plus haute
disponible (~1920×950px mini).

## Retour sur la v4 (bon équilibre, mais bas de l'image surchargé)

Image v4 générée : chaleur + contexte de bureau enfin réunis (écran, lampe,
classeurs sur étagère en bois) sans retomber dans le corporate froid. Reste
un problème : le bas du cadre (là où se pose le headline/sous-titre/
formulaire) est net et chargé (boîtes, papiers, écran), pas assez calme
pour accueillir du texte blanc.

**Analyse détaillée de l'effet repéré sur la référence** (capture
`screenshots/01-hero.webp`) : deux effets superposés, pas un seul.

1. **Vignettage sombre asymétrique** : le premier plan (bord de la table en
   bois, tout en bas de l'image, là où le texte est posé) est nettement
   sous-exposé, presque noir, alors que l'arrière-plan (fenêtre, étagère)
   reste lumineux. Ce n'est pas un cadrage naturel — le bas de l'image est
   délibérément assombri pour que le texte blanc s'y détache sans effort.
2. **Grain filmique fin** : visible surtout dans les zones sombres (mur,
   pulls, table) — un vrai grain analogique texturé, pas du bruit numérique
   propre. Look "pellicule" (type Kodak Portra), pas "photo de smartphone".

**Limite à connaître** : un modèle de diffusion (FLUX) peut suggérer un
vignettage et un grain dans le prompt, mais ne reproduira jamais un
vignettage *localisé exactement où le texte doit aller* de façon fiable et
reproductible — il ne "sait" pas où sera le texte HTML par-dessus. La bonne
pratique (et la plus fiable) est de **combiner** : demander l'ambiance et le
grain dans le prompt de génération (v5 ci-dessous) **et** appliquer un
dégradé sombre + un léger grain en CSS au moment de l'intégration (overlay
`linear-gradient` noir en bas de l'image + `background-blend-mode` ou une
texture de bruit en `mix-blend-mode: overlay`) — c'est ce qui garantit que
le texte reste lisible quel que soit le rendu exact de l'image générée.

## Concept final (v5) — v4 + grain filmique + espace texte dégagé

**Changements vs v4** :
- Le premier plan / tiers inférieur du cadre est explicitement décrit comme
  simple, sombre et dégagé (bord de bureau en bois, hors focus, sans objet)
  — les éléments chargés (écran, classeurs, papiers) sont repoussés dans le
  tiers supérieur/central de l'image, jamais dans le tiers inférieur.
- Ajout du grain filmique et du vignettage directement dans le prompt
  (langage de photographie analogique que FLUX comprend bien : "Kodak
  Portra 400", "visible film grain", "vignette").

**Prompt :**

```
Warm, intimate editorial lifestyle photograph inside a real French
accounting firm office at the end of the workday, shot on Kodak Portra 400
film with visible fine film grain and a natural vignette darkening the
lower third and edges of the frame. In the middle and upper part of the
frame: a proper office desk with a computer monitor (screen off, not the
focus), neat rows of binders and files on open shelving behind, a desk
lamp, a small plant — clearly a professional accounting workspace, not a
living room. The bottom third of the frame is a simple, softly out-of-
focus, darker wooden desk edge with nothing on it — calm and uncluttered,
deliberately underexposed like a natural vignette, leaving clean empty
space for text to be placed on top later. Golden hour light pours through
a large office window behind the desk, casting warm amber tones across the
upper half of the room. Two colleagues, a man and a woman in their 30s,
stand near the desk in the middle of the frame sharing a genuine warm
laugh over coffee, dressed in smart business-casual attire — a crisp shirt
or blouse, an open cardigan or unbuttoned blazer, no tie, nothing stiff or
corporate-stock-photo posed. Candid, natural moment, caught mid-laughter,
not looking at the camera. Shallow depth of field, soft warm glow,
photorealistic, premium lifestyle editorial photography like a high-end
brand campaign, shot on a full-frame camera with a 35mm lens. Wide
cinematic landscape composition. No visible screen content, no text, no
logos, no watermark anywhere in the image.
```

**Negative prompt :**

```
living room, home apartment, bedroom, candles, wine bottles, sofa, suit,
full formal corporate stock photo, cold lighting, fluorescent lighting,
sterile office, looking at camera, stiff pose, clean digital sharpness, no
grain, flat lighting, oversaturated, HDR, cluttered foreground, busy
bottom of frame, text, watermark, logo, deformed hands, extra fingers
```

**Paramètres conseillés** : ratio `16:9`, résolution la plus haute
disponible (~1920×950px mini).

**À faire en plus, côté intégration (CSS), quel que soit le résultat de la
génération** : superposer un dégradé `linear-gradient(to bottom, transparent
0%, rgba(0,0,0,0.55) 100%)` sur le tiers inférieur de l'image derrière le
texte, et éventuellement une texture de grain léger en `mix-blend-mode:
overlay` sur toute l'image pour renforcer l'effet pellicule de façon
garantie et cohérente sur toutes les générations/tailles d'écran — c'est
la méthode la plus fiable pour la lisibilité du texte, indépendamment de ce
que produit exactement le modèle d'image.

## Ancien concept (v2, archivé pour mémoire)

**Pourquoi une v2** : la première version ("deux personnes souriantes au
bureau, golden hour") ne racontait rien de spécifique à Comptallié — elle
aurait pu illustrer n'importe quelle startup B2B. Elle avait aussi un
signal IA quasi invisible (juste "un laptop épuré"), et un risque fort de
tomber dans le cliché photo de stock corporate.

**Le principe narratif** (analogue à la référence, qui montre le couple au
premier plan et le robot discret derrière) : **au premier plan, le
bénéfice humain concret** — un expert-comptable qui a le temps et l'esprit
libre pour un vrai échange avec son client, complice, pas en train de
remplir un formulaire. **En arrière-plan, flou, l'IA au travail** — un
écran avec une interface de chat/assistant qui traite visiblement un
dossier, discrète, jamais le sujet principal. Ça montre littéralement ce
que dit le bloc d'accroche de `content.md` : le travail ingrat est géré en
arrière-plan, le collaborateur récupère du temps pour le conseil et ses
clients.

⚠️ **Piège connu des modèles de génération d'image : le texte à l'écran.**
Les modèles type FLUX rendent mal le texte lisible (bulles de chat avec de
vraies lettres = artefacts illisibles quasi garantis). Le prompt garde donc
l'écran **flou et hors focus** — reconnaissable comme "une interface de
chat" par ses formes/couleurs, sans jamais demander de texte net. C'est
aussi plus réaliste : dans une vraie photo, un écran en arrière-plan flou
est la norme.

**Modèle conseillé** : `fal-ai/flux-pro/v1.1-ultra` (ou `fal-ai/flux/dev`
si budget plus serré) — gère bien les ratios larges et le photoréalisme
éditorial. Prompt en anglais (les modèles FLUX y répondent mieux).

**Prompt :**

```
Editorial lifestyle photograph inside a real, modern French accounting
firm office — believable furniture, filing shelves, a plant, nothing
staged or like a trendy coworking space. In sharp focus in the foreground,
a French expert-comptable (accountant, business casual attire, 30s-40s)
sits across a desk from a small business owner client, both leaning in,
genuinely smiling and relaxed, mid-conversation as if discussing strategy
and growth rather than paperwork — a natural candid moment, neither looking
at the camera, only a couple of clean documents on the desk between them,
no clutter. In the soft out-of-focus background, a second desk shows a
laptop screen with a blurred, minimal chat-assistant interface — soft
rounded message bubbles and a document icon, colors and shapes only,
no legible text — quietly suggesting the tedious accounting work is being
handled automatically while the humans focus on their relationship in the
foreground. Soft natural daylight through a large office window, warm but
credible and neutral lighting — not overly golden or orange, not cold
fluorescent. Shallow depth of field. Photorealistic, premium editorial B2B
brand campaign photography, shot on a full-frame camera with a 50mm lens
look, high-end quality. Wide cinematic landscape composition with generous
negative space in the lower-center third of the frame for text overlay. No
visible text, no logos, no watermark anywhere in the image.
```

**Negative prompt :**

```
robot, android, hologram, sci-fi, futuristic tech, cluttered desk, messy
papers everywhere, illustration, 3d render, cartoon, cold fluorescent
lighting, generic corporate stock photo pose, looking at camera, empty
sterile office, coworking space aesthetic, sharp legible text on screen,
readable letters, watermark, logo, deformed hands, extra fingers
```

**Paramètres conseillés :** ratio `16:9` (voir échange précédent — plus
sûr que `21:9` pour un hero qui doit rester lisible sur des viewports
desktop standards), résolution la plus haute disponible
(~1920×950px mini).

**Note sur les logos Claude/Anthropic** : l'utilisateur veut potentiellement
rendre l'IA du cabinet visuellement identifiable comme "Claude" (crédibilité
auprès d'incubateurs qui reconnaissent la marque). Les fichiers logo n'ont
pas encore été transmis (message coupé). Un modèle de génération d'image ne
reproduira jamais fidèlement un vrai logo ou une vraie UI à partir d'une
description textuelle — si on veut la vraie identité Claude visible, la bonne
approche est de **composer le logo en post-traitement** (overlay HTML/CSS
sur l'écran flou de la photo, ou petit badge à part, comme le badge Sciences
Po du footer), pas de le demander dans le prompt de génération.

**Alternative plus simple si la scène à deux personnes pose problème**
(mains/visages qui se génèrent mal sur les scènes à deux sujets qui
interagissent — courant sur les modèles de diffusion) : remplacer le duo
expert-comptable/client par une seule personne, assise, qui referme son
ordinateur portable et se lève pour partir avec un sourire détendu — signal
plus simple à générer, qui raconte "je pars à l'heure, le travail est fait
sans moi", cohérent avec le sous-titre "la pénurie ne doit plus freiner
votre cabinet".

## Génération via l'API fal.ai — contrainte réseau de cette session

L'utilisateur a une clé API fal.ai, mais **le domaine `fal.ai` (et
`fal.run`/`queue.fal.run`) est bloqué par la politique d'egress réseau de
cet environnement Claude Code** (confirmé : la requête sort en 403 via le
proxy, comme pour d'autres domaines externes non listés dans l'allowlist).
Cela veut dire que je ne peux pas appeler l'API fal.ai directement depuis
cette session, même avec une clé valide — ce n'est pas contournable
depuis l'intérieur de la session.

Deux façons de débloquer, au choix de l'utilisateur :

1. **Générer l'image en dehors de cette session** (playground fal.ai, ou un
   script local sur sa machine avec le prompt ci-dessus), puis envoyer le
   fichier résultat dans la conversation pour que je l'intègre au repo
   (`contexte/logos/` ou un nouveau dossier `contexte/hero/`).
2. **Élargir la politique réseau de l'environnement** pour autoriser
   `fal.ai`/`fal.run` en sortant (réglage fait au niveau de l'environnement
   Claude Code on the web, pas depuis cette conversation) — voir
   https://code.claude.com/docs/en/claude-code-on-the-web. Une fois fait,
   je pourrai appeler l'API directement (la clé devrait alors être passée
   en variable d'environnement de la session, jamais collée en clair dans
   le chat).

## Statut

- Image hero : `[À GÉNÉRER]` — v2 rejetée (trop froide/corporate), v3
  rejetée (chaleur retrouvée mais plus aucun contexte de bureau
  reconnaissable), v4 bon équilibre mais bas de cadre trop chargé pour le
  texte. **Prompt v5 (section "Concept final (v5)") à tester** — génération
  toujours bloquée depuis cette session par la politique réseau (voir
  section précédente), à faire côté utilisateur via le playground fal.ai.
  Ne pas oublier le dégradé CSS + grain en overlay à l'intégration, quel
  que soit le résultat de la v5.
- Logos Comptallié et Sciences Po Paris : disponibles dans
  `contexte/logos/`.
