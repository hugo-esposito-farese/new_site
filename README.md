Landing page waitlist de **Comptallié**, construite avec Next.js (App
Router) + Tailwind CSS v4. Contenu et brief complet dans `contexte/`.

## Développement

```bash
npm install
npm run dev
```

## Déploiement

Zéro config sur Vercel : connecter le repo, Vercel détecte Next.js
automatiquement.

## À faire avant un vrai lancement

- `src/app/api/waitlist/route.ts` valide l'email et le logge, mais ne le
  persiste nulle part de façon fiable (les logs Vercel ne sont pas un
  stockage durable). Brancher un vrai stockage avant d'envoyer du trafic
  payant : email de notification (Resend), Google Sheet, Airtable,
  Supabase...
- `src/lib/content.ts` : les liens LinkedIn/X du footer pointent vers `#`
  en attendant les vraies URLs.
- `contexte/content.md` note aussi que le handle `@comptallie` et l'email
  de contact (celui du fondateur) sont à ajuster dès qu'un domaine/compte
  dédié existe.
