# Contenu texte de la LP

Texte réel de la landing page, rédigé à partir du contexte startup (voir
`claude.md`), en suivant exactement les emplacements décrits dans
`reference.md`.

Tous les champs sont désormais définitifs.

---

## Logo (haut du hero)

- Nom de la marque : **Comptallié**
- Icône du logo : fichier `contexte/logos/comptallie-logo.png` — icône
  monoligne blanche sur fond noir (organigramme/réseau de nœuds reliés,
  évoquant collaborateur + processus). Sur le hero, à afficher en blanc à
  côté/au-dessus du wordmark "Comptallié", dans le même style que le
  couple icône + wordmark de la référence (petit, centré, en haut de
  l'image).

## Hero

- **Headline** (grand titre serif italique) :
  **Votre collaborateur comptable IA.**
- **Sous-titre** :
  La pénurie de comptables ne doit plus freiner votre cabinet.
- Placeholder du champ email : `vous@cabinet.fr`
- **Texte du bouton CTA** (avec flèche) : `Rejoindre la liste d'attente →`

## Bloc d'accroche / value proposition

> Donnez-lui vos pièces comptables. Il saisit, lettre, justifie et prépare
> vos déclarations, pour que votre cabinet tienne ses délais sans
> surcharger vos équipes — et que vos collaborateurs retrouvent du temps
> pour le conseil et vos clients.

## FAQ (accordéon)

1. **Comment ça marche ?**
   Claude, l'assistant IA d'Anthropic, devient le collaborateur comptable
   de votre cabinet. On commence par regarder avec vous vos tâches du
   quotidien — saisie, lettrage, justification des comptes, préparation
   des déclarations, relances clients — puis on les met en place une par
   une, toujours sous le contrôle de votre expert-comptable.

2. **Quelles tâches sont automatisées aujourd'hui ?**
   Nous sommes encore en tout début de lancement, avec une poignée de
   cabinets pilotes. Certaines tâches sont déjà prises en charge
   automatiquement, d'autres sont encore faites à la main le temps de bien
   les régler avant de les automatiser. Ça nous permet de vous faire
   gagner du temps dès maintenant, tout en construisant le produit avec
   vous.

   *(Changement du 18/09 : jargon retiré — "skills/plugins/connecteurs
   MCP" et "Wizard of Oz" étaient compris en interne mais pas par la
   cible, des experts-comptables non-tech. Texte en langage courant.)*

3. **Mes données sont-elles en sécurité ?**
   Oui. Vos dossiers comptables et les données de vos clients restent
   strictement confidentiels et ne sont jamais utilisés pour entraîner des
   modèles tiers. Nous travaillons selon les standards de sécurité et de
   confidentialité attendus par la profession comptable française.

4. **Quand est-ce disponible ?**
   Nous travaillons actuellement avec une poignée de cabinets early
   adopters en France pour valider et affiner le produit. Rejoignez la
   liste d'attente pour faire partie des premiers cabinets accompagnés
   lors de notre prochaine vague d'onboarding.

5. **Qui est derrière Comptallié ?**
   On est deux : Hugo, comptable de formation et passé par 42 Paris pour se
   spécialiser en IA agentique, et Méline, à Sciences Po Paris. On connaît
   le métier comptable de l'intérieur, et on sait construire des agents IA
   qui tiennent vraiment la route sur le terrain.

   *(Changement du 18/09 : on ne présente plus Comptallié comme
   "pré-incubée à Sciences Po Paris" — ce n'est pas l'identité de la
   startup, seulement le parcours d'une des deux fondatrices. Texte
   volontairement simple/court, sur le modèle des réponses FAQ de la
   référence — pas un CV. Ne pas mentionner Forvis Mazars : Hugo n'y
   travaille plus. Le badge footer "Pré-incubée à Sciences Po Paris" reste
   inchangé pour l'instant — l'utilisateur sait qu'il faudra itérer dessus,
   à traiter dans un prochain prompt.)*

CTA après la FAQ : `Rejoindre la liste d'attente →` (identique au bouton du
hero).

## Footer

- Handle social principal (gras, en haut du footer) : `@comptallie`
  *(à confirmer si le handle exact des réseaux sociaux diffère — dérivé du
  nom de marque par défaut)*.
- Lien "Contact" : `Contact` → `mailto:hugo.esposito.farese.pro@gmail.com`
  *(email du fondateur, à remplacer par une adresse `contact@comptallie.fr`
  dès qu'un domaine/boîte mail dédiée existe)*.
- **Badge** (remplace le "Backed by Y Combinator" de la référence) :
  **Pré-incubée à Sciences Po Paris**, avec le logo Sciences Po Paris
  (fichier `contexte/logos/sciences-po-logo.png` — wordmark rouge officiel
  sur fond transparent/blanc) à la place du logo YC. Comme le fond du
  footer est noir, prévoir soit une variante blanche/monochrome du
  wordmark Sciences Po pour le contraste, soit un badge avec fond clair
  autour du logo (pastille blanche) plutôt que le rouge directement sur
  noir — à trancher au moment de l'intégration visuelle.
- Liens réseaux sociaux : pour un produit B2B destiné aux cabinets
  comptables, LinkedIn et X sont les canaux prioritaires. Instagram/TikTok
  n'ont pas de valeur évidente ici — à garder uniquement si la startup y est
  déjà active, sinon les retirer et ne garder que :
  - `LinkedIn` → `[URL]`
  - `X` → `[URL]`

## Équipe fondatrice (pas affiché sur la LP)

- Hugo (cofondateur) : `hugo.esposito.farese.pro@gmail.com` — email utilisé
  pour le lien "Contact" du footer.
- Méline Auduon-Chaboud (cofondatrice) : `meline.auduonchaboud@sciencespo.fr`
  — email @sciencespo.fr car elle est cofondatrice de Comptallié via le
  programme de pré-incubation Sciences Po Paris, pas une référente externe.
  Ne remplace pas l'email du lien "Contact" pour l'instant (un seul email
  affiché sur la LP), mais à retenir pour toute mention future de l'équipe
  fondatrice sur le site.
