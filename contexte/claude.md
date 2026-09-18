# Objectif du projet

Construire la landing page (waitlist) de ma startup, en reprenant **très
exactement** la structure, la mise en page, l'agencement des sections et le
style du site de référence documenté dans ce dossier — seuls le nom de la
marque, les textes et l'image hero changent.

## La startup

On remplace le collaborateur comptable. Le marché comptable français est en
pénurie de comptables : les cabinets n'arrivent plus à recruter assez de
collaborateurs pour absorber la charge de travail. L'idée est de transformer
des agents IA comme Claude en un collaborateur comptable complet pour les
cabinets français — pas un simple outil ponctuel, mais quelqu'un qui prend en
charge les tâches du quotidien d'un collaborateur (saisie, lettrage,
justification, préparation des déclarations, relances clients, etc.).

La partie la plus difficile du produit n'est pas la techno en elle-même,
c'est de **documenter finement l'ensemble des processus quotidiens d'un
collaborateur comptable** pour pouvoir ensuite les automatiser avec l'agent.

**Stade actuel : early-stage.** On est en approche "do things that don't
scale" / Wizard of Oz : on valide le problème et on construit le produit
avec des early adopters (cabinets comptables), en accompagnant certaines
tâches manuellement le temps de fiabiliser chaque processus, plutôt que
d'attendre un produit 100 % automatisé avant de lancer.

**Techno** : transformer Claude en collaborateur comptable via des
**plugins, des skills, des MCP et des connecteurs** — pas un produit
propriétaire construit from scratch, mais l'orchestration de l'écosystème
Claude autour des processus métier documentés.

**Soutien institutionnel** : la startup est **pré-incubée à Sciences Po
Paris**, dans le cadre du programme de pré-incubation de Sciences Po Paris.
C'est ce qui remplace le badge "Backed by Y Combinator" du site de
référence (voir `content.md` et `image_hero.md`).

**Positionnement de la LP** : cette page sera vue par des incubateurs, des
accélérateurs et des early adopters (cabinets comptables / experts-comptables).
Le ton doit être positif et valorisant — présenter la pénurie de comptables
comme un problème réel qu'on résout, l'approche Wizard of Oz comme une
méthode de construction produit sérieuse et itérative (pas comme un aveu de
faiblesse), et Sciences Po Paris comme une caution institutionnelle forte.
Ne jamais formuler les choses d'une façon qui nous desserve (ex: ne pas dire
"produit pas encore automatisé" de façon négative, mais "on construit avec
des early adopters, étape par étape").

## Fichiers de ce dossier

- `reference.md` — **la référence absolue**. Description exhaustive, section
  par section, de la structure, du contenu, de la palette, de la typographie
  et des interactions du site de référence Mirabelle (voir captures dans
  `screenshots/`). C'est le document à suivre en priorité pour l'implémentation
  visuelle et structurelle. Ce fichier décrit le site de référence **tel
  quel**, sans adaptation — c'est `content.md` qui porte notre propre texte.
- `content.md` — le texte réel de ma landing page (hero + accroche + FAQ +
  footer), rédigé à partir du contexte startup ci-dessus, à insérer dans la
  structure décrite par `reference.md`. Il ne reste que trois champs en
  attente : nom de la startup, logo, email de contact (`[NOM_STARTUP]` /
  `[LOGO]` / `[EMAIL]`).
- `image_hero.md` — brief pour générer (avec une IA d'images) l'image de
  fond de la section hero, dans le même esprit que celle du site de
  référence (photo lifestyle, chaude, mettant en scène l'usage du produit),
  adaptée à un contexte de cabinet comptable français. Contient aussi le
  sourcing du logo Sciences Po Paris pour le badge du footer.
- `screenshots/` — captures d'écran du site de référence (Mirabelle,
  meetmirabelle.com), dans l'ordre du scroll :
  - `01-hero.webp`
  - `02-value-faq.png`
  - `03-faq-footer.png`

## Ce que je veux exactement

Le même site que la référence, "idem" niveau structure : une landing page
one-page composée, dans cet ordre, de :

1. **Hero plein écran** avec image de fond (photo lifestyle générée par IA,
   cf. `image_hero.md`), logo centré en haut, grand titre serif italique,
   sous-titre, formulaire email + bouton CTA "rejoindre la liste d'attente".
2. **Bloc d'accroche** : paragraphe éditorial qui explique ce que fait le
   produit et le bénéfice pour l'utilisateur.
3. **FAQ en accordéon** : liste de questions/réponses repliables, style
   identique à la référence (chevron, séparateurs fines).
4. **Bouton CTA** répété après la FAQ.
5. **Footer noir** : handle social, contact, badge "Pré-incubée à Sciences
   Po Paris" (+ logo Sciences Po), liens réseaux sociaux.

Même direction artistique : fond crème/blanc cassé pour les sections hors
hero et hors footer, footer noir, boutons noirs à texte blanc avec flèche
"→", typo serif italique pour les titres, sans-serif pour l'UI, une seule
colonne centrée, beaucoup d'espace négatif, design minimal.

## Prochaines étapes

1. Récupérer nom / logo / email auprès de l'utilisateur pour compléter les
   trois champs restants de `content.md`.
2. Récupérer le fichier logo officiel de Sciences Po Paris (sourcing dans
   `image_hero.md` — pas téléchargeable automatiquement depuis cette
   session, accès réseau restreint).
3. Générer l'image hero via le brief de `image_hero.md`.
4. Choisir une stack technique (non définie pour l'instant — à discuter au
   moment de l'implémentation) et construire le site en suivant
   `reference.md` comme spec structurelle/visuelle et `content.md` comme
   source de contenu définitive.

**En résumé : `reference.md` = la structure et le style à copier fidèlement,
`content.md` = le texte définitif à insérer dedans, `image_hero.md` = le
brief de l'image hero + sourcing du logo Sciences Po.**
