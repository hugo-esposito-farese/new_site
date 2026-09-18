# Objectif du projet

Construire la landing page (waitlist) de ma startup, en reprenant **très
exactement** la structure, la mise en page, l'agencement des sections et le
style du site de référence documenté dans ce dossier — seuls le nom de la
marque, les textes et l'image hero changent.

## Fichiers de ce dossier

- `reference.md` — **la référence absolue**. Description exhaustive, section
  par section, de la structure, du contenu, de la palette, de la typographie
  et des interactions du site de référence (voir captures dans
  `screenshots/`). C'est le document à suivre en priorité pour l'implémentation
  visuelle et structurelle.
- `content.md` — le texte réel de ma landing page (hero + accroche + FAQ +
  footer), à insérer dans la structure décrite par `reference.md`. **Ce
  fichier est encore vide/à compléter** : je fournirai le texte définitif
  plus tard. Ne pas inventer de contenu marketing à sa place, laisser les
  emplacements `[À COMPLÉTER]` jusqu'à ce que je les remplisse.
- `image_hero.md` — brief pour générer (avec une IA d'images) l'image de
  fond de la section hero, dans le même esprit que celle du site de
  référence (photo lifestyle, chaude, mettant en scène l'usage du produit),
  mais adaptée à mon produit. **Image pas encore générée.**
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
   identique à la référence (chevron, séparateurs fins).
4. **Bouton CTA** répété après la FAQ.
5. **Footer noir** : handle social, contact, badge (si applicable), liens
   réseaux sociaux.

Même direction artistique : fond crème/blanc cassé pour les sections hors
hero et hors footer, footer noir, boutons noirs à texte blanc avec flèche
"→", typo serif italique pour les titres, sans-serif pour l'UI, une seule
colonne centrée, beaucoup d'espace négatif, design minimal.

## Prochaines étapes (une fois ce contexte complet)

1. Je complète `content.md` avec le vrai texte de ma LP.
2. On génère l'image hero via `image_hero.md`.
3. On choisit une stack technique (non définie pour l'instant — à discuter
   au moment de l'implémentation) et on construit le site en suivant
   `reference.md` comme spec structurelle/visuelle et `content.md` comme
   source de contenu.

**En résumé : `reference.md` = la structure et le style à copier fidèlement,
`content.md` = le texte à insérer dedans (à venir), `image_hero.md` = le
brief de l'image à générer (à venir).**
