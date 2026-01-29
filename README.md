# Zorg Just In Time

Website voor **Zorg Just In Time** – Justin Smits, ZZP in de zorg. Met contactformulier voor zorgvragers en zorgbemiddelaars.

## Kleuren

- Wit (achtergrond)
- Donkergroen (`#1a4d3e`)

## Lokaal draaien

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Bouwen en deployen op Vercel

1. Push de code naar GitHub (of GitLab/Bitbucket).
2. Ga naar [vercel.com](https://vercel.com) en log in.
3. Klik op **Add New Project** en kies deze repository.
4. Vercel herkent Next.js automatisch; klik op **Deploy**.

Of via CLI:

```bash
npm i -g vercel
vercel
```

## Contactformulier

Het formulier op `/contact` stuurt een POST naar `/api/contact`. Daar kun je later e-mail (bijv. Resend of SendGrid) of een database toevoegen om berichten op te slaan of door te sturen.
