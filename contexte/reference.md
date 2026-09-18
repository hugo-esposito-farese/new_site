# Référence absolue — site "Mirabelle" (meetmirabelle)

Ce dossier documente **exactement** la structure, la mise en page et le style
d'un site de landing page (waitlist) qui sert de référence absolue pour ce
projet. Le nouveau site doit reproduire **la même structure, les mêmes
sections, le même ordre, le même type de mise en page et le même ton visuel**
— seul le contenu (texte, image hero, nom de la marque) change pour coller à
la startup de l'utilisateur.

Captures d'écran de référence, dans l'ordre de scroll de la page :

- `screenshots/01-hero.webp` — section hero (haut de page)
- `screenshots/02-value-faq.png` — accroche + début de la FAQ
- `screenshots/03-faq-footer.png` — fin de la FAQ + footer

Le site de référence est une landing page one-page (pas de navigation entre
plusieurs pages), en scroll vertical, composée de 4 blocs empilés :

1. Hero (plein écran, image de fond)
2. Bloc d'accroche / value proposition (texte)
3. FAQ en accordéon
4. Footer

---

## 1. Section Hero (`01-hero.webp`)

- Occupe tout le viewport (full-bleed, hauteur ~100vh).
- **Image de fond** : photo lifestyle en pleine largeur/hauteur, ambiance
  chaleureuse (lumière dorée / golden hour, intérieur cosy). On y voit deux
  personnes attablées dans une cuisine/salon, en train de manger un plat de
  pâtes fraîchement préparé, souriantes, complices. En arrière-plan à droite,
  on aperçoit discrètement l'appareil / le produit (ici un robot cuisinier,
  posé sur un plan de travail, esthétique proche d'une machine à café haut de
  gamme — noir mat).
- **Logo** : centré tout en haut, petit icône (goutte/feuille stylisée,
  couleur orange/corail) + wordmark du nom de la marque en blanc, police
  sans-serif, taille modeste.
- **Headline** : grand titre centré, positionné dans le tiers inférieur de
  l'image, par-dessus la table. Police **serif italique**, blanc, grande
  taille (type display/hero). Un texte court (2-3 mots), ex. "Your robot
  chef".
- **Sous-titre** : juste en dessous du headline, une ligne courte en
  sans-serif blanc, taille moyenne, qui explicite la promesse. Ex. "Fresh
  dinner, cooked for you at home."
- **Formulaire waitlist** : juste sous le sous-titre, centré, composé de :
  - un champ email avec fond semi-transparent sombre / effet verre
    dépoli, placeholder clair ("you@email.com"), coins légèrement arrondis ;
  - un bouton accolé à droite du champ, fond blanc/crème, texte noir,
    libellé du type "Join the waitlist" + flèche "→".
- Tout le texte est lisible directement sur la photo (pas de bandeau uni
  derrière) grâce au contraste de l'image et probablement un léger
  assombrissement/dégradé sur la zone centrale.

## 2. Bloc d'accroche / value proposition (`02-value-faq.png`, haut)

- Fond **crème / blanc cassé** (pas blanc pur), toute la largeur.
- Contenu centré dans une colonne étroite (~600-650px), aligné à gauche à
  l'intérieur de cette colonne.
- Un paragraphe en police **serif noire**, taille assez grande (comme un
  sous-titre éditorial), qui explique concrètement ce que fait le produit et
  le bénéfice pour l'utilisateur. Ex. : "Give her raw ingredients. She chops,
  cooks, and serves a fresh meal, so you eat a healthy meal while saving time
  for your passions and your people."
- Une fine ligne de séparation horizontale en dessous du paragraphe, sur
  toute la largeur de la colonne.

## 3. FAQ en accordéon (`02-value-faq.png` bas, `03-faq-footer.png` haut)

- Toujours sur le même fond crème, juste après le bloc d'accroche, dans la
  même colonne centrée.
- Liste de questions, chacune sur une ligne :
  - texte de la question à gauche, en sans-serif noir, gras, taille
    moyenne ;
  - icône chevron (flèche vers le bas) à droite, qui indiquerait
    l'ouverture/fermeture au clic (accordéon) ;
  - une fine ligne de séparation horizontale entre chaque question et
    au-dessus de la première / en dessous de la dernière.
- Les 5 questions de référence (toutes fermées par défaut) :
  1. How does it work?
  2. How big is it?
  3. How do you clean it?
  4. When will it ship?
  5. Who's building it?
- Juste après la dernière question, un espace puis un **bouton CTA** identique
  en style à celui du hero mais en version pleine (fond noir, texte blanc,
  padding généreux) : "Join the waitlist →". Ce bouton n'est pas collé à un
  champ email ici, il est seul (probablement scrolle jusqu'au champ du hero
  ou ouvre un mini-form).

## 4. Footer (`03-faq-footer.png` bas)

- Fond **noir**, pleine largeur, contenu centré verticalement et
  horizontalement.
- Du haut vers le bas, empilé et centré :
  1. Le handle social de la marque en gras blanc, ex. "@meetmirabelle".
  2. Un lien "Contact" en blanc/gris clair.
  3. Un badge "Backed by Y Combinator" : petit logo carré orange "Y" +
     texte blanc.
  4. Une ligne de liens sociaux séparés par des espaces, en gris clair :
     Instagram · X · TikTok · LinkedIn.
- Chaque élément est sur sa propre ligne, empilement vertical, beaucoup
  d'espace (padding) au-dessus et en dessous.

---

## Palette & typographie observées

- **Fond principal (sections non-hero)** : crème / blanc cassé (proche de
  `#FAF8F0` / `#FAF7F0`).
- **Fond footer** : noir (`#111111` / `#0A0A0A`).
- **Accent** : orange/corail chaud (`#E8623C`-`#F2703F` environ), utilisé
  pour le logo et le badge Y Combinator uniquement — couleur d'accent rare,
  pas utilisée dans les CTA.
- **Boutons / CTA** : fond noir, texte blanc, flèche "→" après le libellé,
  coins légèrement arrondis, pas d'ombre marquée (flat design).
- **Typo display / titres** (hero headline, paragraphe d'accroche) :
  serif classique avec une variante italique pour le hero (type
  Freight/Canela/Tiempos — un serif éditorial haut de gamme).
- **Typo UI / body** (nav, boutons, questions FAQ, footer) : sans-serif
  neutre et moderne (type Inter/Helvetica).
- Beaucoup de **blanc/espace négatif**, design minimal, une seule colonne,
  contenu centré, pas de grille multi-colonnes.

## Comportement / interactions attendues

- Formulaire d'email en haut (hero) : validation simple, soumission →
  ajout à une waitlist.
- Bouton "Join the waitlist" du bas (après la FAQ) : scrolle vers le champ
  email du hero, ou ouvre le même formulaire.
- FAQ : accordéon, une question s'ouvre/se ferme au clic sur son header
  (chevron qui tourne à 180° à l'ouverture), affichage de la réponse en
  dessous du texte de la question.
- Site responsive, mobile-first probable vu l'usage (couleurs et mise en
  page très simples, une seule colonne à toutes les largeurs).

**Cette structure (hero plein écran avec photo + logo + headline + form  →
bloc d'accroche → FAQ accordéon → CTA → footer noir) doit être reprise à
l'identique pour le nouveau site. Seuls le nom de marque, les textes, et
l'image hero changent (cf. `content.md` et `image_hero.md`).**
