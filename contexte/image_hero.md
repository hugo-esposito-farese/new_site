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

## Prompt prêt à l'emploi (fal.ai)

À utiliser tel quel dans le playground fal.ai, ou via l'API (voir note
réseau ci-dessous). Modèle conseillé : un modèle FLUX haut de gamme qui
gère bien les ratios larges et le photoréalisme éditorial, ex.
`fal-ai/flux-pro/v1.1-ultra` (ou `fal-ai/flux/dev` si budget plus serré).
Les modèles FLUX répondent mieux en anglais, d'où le prompt en anglais
ci-dessous.

**Prompt :**

```
Editorial lifestyle photograph, warm golden-hour light streaming through a
large window into a small modern French accounting firm office at the end
of the day. Two accounting professionals in business casual attire,
standing near a wooden desk, relaxed and smiling warmly at each other,
mid-conversation, natural candid moment, not looking at the camera. The
desk is clean and uncluttered, no piles of paperwork, with a sleek open
laptop showing a minimal clean interface on screen — subtly suggesting
AI-assisted work without any literal robot, hologram, or futuristic tech
imagery. Warm amber and honey tones, soft natural light, shallow depth of
field, premium brand campaign photography, photorealistic, high-end
editorial quality, shot on a full-frame camera with a 35mm lens look. Wide
cinematic landscape composition with generous negative space in the
lower-center third of the frame for text overlay. No text, no logos, no
watermark in the image.
```

**Negative prompt (si le modèle le supporte) :**

```
robot, android, hologram, sci-fi, futuristic tech, cluttered desk, messy
papers, illustration, 3d render, cartoon, cold fluorescent office
lighting, stock photo pose, looking at camera, text, watermark, logo
```

**Paramètres conseillés :** ratio large type `16:9` ou `21:9`
(`image_size`/`aspect_ratio` selon le modèle fal.ai choisi), résolution la
plus haute disponible pour couvrir un hero plein écran (~1920×950px mini).

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
