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
- **Présence de l'IA suggérée avec subtilité**, jamais littérale : par
  exemple un ordinateur portable ouvert avec une interface épurée en
  arrière-plan, ou simplement l'absence de piles de dossiers/paperasse qui
  suggère une charge de travail allégée — jamais de robot, de hologramme ou
  d'imagerie "IA" clichée.
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

## Concept retenu (v2)

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

- Image hero : `[À GÉNÉRER]` — prompt prêt ci-dessus, génération bloquée
  depuis cette session par la politique réseau (voir section précédente).
- Logos Comptallié et Sciences Po Paris : disponibles dans
  `contexte/logos/`.
