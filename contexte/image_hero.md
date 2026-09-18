# Image hero (à générer avec une IA)

## Contexte

Sur le site de référence (`reference.md`, capture `screenshots/01-hero.webp`),
la section hero n'utilise **aucune photo de stock générique** : c'est une
image **générée par IA**, mise en scène spécifiquement pour illustrer le
produit en usage réel, avec une direction artistique cinématographique et
chaleureuse. C'est cette même logique qu'il faut reproduire : générer une
image hero sur-mesure pour la startup de l'utilisateur, dans le même esprit
visuel que la référence, mais qui montre *son* produit / *son* contexte
d'usage à elle.

## Ce que montre l'image de référence

Deux personnes attablées dans une cuisine/salon domestique, en train de
manger un plat de pâtes fraîchement préparé, souriantes et complices,
éclairage chaud de fin de journée (golden hour) qui entre par une grande
fenêtre à gauche. En arrière-plan à droite, discrètement posé sur un plan de
travail, l'appareil / le produit de la marque (un robot cuisinier, esthétique
premium, noir mat, forme proche d'une machine à café/expresso haut de
gamme). Le produit n'est pas au centre de l'attention : ce sont les
personnes et le moment de vie qui sont mis en avant, le produit est visible
mais discret.

## Brief pour la génération de la nouvelle image hero

À adapter une fois que l'on connaît le produit / service de la startup de
l'utilisateur (voir `claude.md` et `content.md`). En attendant, la direction
artistique à respecter est :

- **Scène de vie réelle**, pas un packshot produit : montrer des personnes
  en train d'utiliser / de bénéficier du produit, dans un contexte crédible
  (domicile, bureau, extérieur… selon le produit).
- **Lumière chaude et naturelle** (golden hour, intérieur cosy, tons
  ambrés/dorés), ambiance intimiste et haut de gamme, pas de lumière froide
  ni de studio flashy.
- **Cadrage** : format large (paysage), pensé pour occuper tout le hero en
  plein écran (ratio large, ex. 16:9 à 21:9, minimum ~1920×950px). Laisser
  de l'espace visuel dans le tiers inférieur / centre de l'image pour que le
  texte du headline, sous-titre et formulaire (blancs) restent lisibles
  par-dessus la photo sans bandeau supplémentaire — éviter les zones trop
  chargées visuellement à cet endroit.
- **Personnes souriantes, naturelles**, pas de pose figée façon stock
  photo — plutôt un instant capturé, regard entre les personnes ou vers le
  produit/l'activité, pas vers la caméra.
- **Le produit visible mais discret**, en arrière-plan ou en usage, jamais
  au centre exact du cadre.
- **Rendu photoréaliste**, qualité "photographie éditoriale/lifestyle haut
  de gamme" (type campagne de marque premium), pas de style illustration ni
  3D stylisé.
- **Palette cohérente** avec le reste du site : tons chauds/naturels qui
  se marient avec le fond crème du reste de la page et l'accent
  orange/corail du logo.

## Statut

`[À GÉNÉRER]` — image non encore produite. Une fois le produit/contexte de
la startup précisé dans `content.md`, générer l'image et la placer dans
`contexte/screenshots/hero-final.<ext>` (ou directement dans les assets du
projet une fois le site en cours de construction), puis mettre à jour ce
fichier avec le prompt exact utilisé et le chemin final de l'image.
