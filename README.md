Landing page waitlist de **Comptallié**, construite avec Next.js (App
Router) + Tailwind CSS v4. Contenu et brief complet dans `contexte/`.

## Développement

```bash
npm install
npm run dev
```

## Déploiement

Zéro config sur Vercel : connecter le repo, Vercel détecte Next.js
automatiquement. Projet Vercel déjà connecté : `new-site`.

## Stockage des emails de la waitlist (Google Sheet)

La route `src/app/api/waitlist/route.ts` envoie chaque inscription à un
Google Apps Script Web App qui ajoute une ligne au Google Sheet. Mise en
place (à faire une fois, côté Google — je n'y ai pas accès depuis cette
session) :

1. Ouvrir le Google Sheet, puis **Extensions → Apps Script**.
2. Coller le contenu de `google-apps-script/waitlist.gs` dans l'éditeur
   (remplacer le code par défaut).
3. **Déployer → Nouveau déploiement** → type **Application web** :
   - Exécuter en tant que : **Moi**
   - Qui a accès : **Tout le monde**
4. Autoriser les permissions demandées (accès au Sheet), puis copier
   l'URL du Web App donnée à la fin (`https://script.google.com/macros/s/.../exec`).
5. Ajouter cette URL comme variable d'environnement `GOOGLE_SHEETS_WEBHOOK_URL`
   sur le projet Vercel `new-site` (Settings → Environment Variables), puis
   redéployer.

Sans cette variable configurée, la route continue de fonctionner (elle
logge juste l'email dans les logs Vercel sans le persister dans le Sheet).

## Reste à faire

- `src/lib/content.ts` : le lien X du footer pointe vers `#` en attendant
  la vraie URL (LinkedIn est déjà renseigné).
- `contexte/content.md` note aussi que le handle `@comptallie` et l'email
  de contact (celui du fondateur) sont à ajuster dès qu'un domaine/compte
  dédié existe.
