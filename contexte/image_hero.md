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

## Logo Sciences Po Paris (footer)

Sur le site de référence, le badge du bas est "Backed by Y Combinator" (logo
+ texte). Pour notre site, il devient **"Pré-incubée à Sciences Po Paris"**
avec le logo officiel de Sciences Po à la place du logo Y Combinator (cf.
`content.md`, section Footer).

Sources officielles identifiées pour le fichier logo (non téléchargées
automatiquement — l'accès réseau de cette session est restreint à une
allowlist qui exclut ces domaines) :

- Page presse officielle Sciences Po (logo FR) :
  `https://newsroom.sciencespo.fr/logo-fr`
- Fichier vectoriel sur Wikimedia Commons (logo institutionnel Sciences Po,
  format SVG) :
  `https://commons.wikimedia.org/wiki/File:Logo_Sciences_Po.svg`

**Action manuelle nécessaire avant mise en prod** : télécharger le logo
depuis l'une de ces deux sources (privilégier le kit presse officiel
`newsroom.sciencespo.fr` qui donne les conditions d'usage exactes de la
marque), le placer dans `contexte/screenshots/logo-sciences-po.svg` (ou
`.png`), et vérifier les règles d'usage de la marque Sciences Po (taille
minimale, zone de protection, contexte d'usage autorisé pour un badge de
type "pré-incubé par") avant publication du site.

## Statut

- Image hero : `[À GÉNÉRER]` — à produire une fois le nom/identité visuelle
  de la startup connus (voir `content.md`), en suivant le brief ci-dessus.
- Logo Sciences Po Paris : `[À TÉLÉCHARGER MANUELLEMENT]` — sources
  identifiées ci-dessus, téléchargement à faire depuis un environnement
  avec accès web complet.
