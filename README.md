# Zorg Just In Time

Website voor **Zorg Just In Time** – Justin Smits, ZZP in de zorg. Met contactformulier voor zorgvragers en zorgbemiddelaars.

**Repository:** [github.com/Ebruarslan1/zorgjustintime](https://github.com/Ebruarslan1/zorgjustintime) *(private)*

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
   *Bij een private repo: geef Vercel toegang tot je GitHub-account (Settings → Git → Connect) zodat de private repo zichtbaar is.*
4. Vercel herkent Next.js automatisch; klik op **Deploy**.

Of via CLI:

```bash
npm i -g vercel
vercel
```

## Contactformulier en e-mail

Het contactformulier stuurt berichten naar een e-mailadres via **Resend**.

### Lokaal en op Vercel

1. Maak een gratis account op [resend.com](https://resend.com).
2. Ga naar **API Keys** en maak een nieuwe key aan.
3. Zet de key in je omgeving:
   - **Lokaal:** maak een bestand `.env.local` met:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxx
     ```
   - **Vercel:** ga naar je project → **Settings** → **Environment Variables** en voeg `RESEND_API_KEY` toe.

4. Installeer dependencies en start:
   ```bash
   npm install
   npm run dev
   ```

Berichten gaan standaard naar **zorgjustintime@hotmail.com**. Je kunt een ander adres instellen met `CONTACT_EMAIL_TO`. Optioneel kun je `RESEND_FROM` zetten als je een geverifieerd domein hebt; anders wordt er vanaf het Resend-testadres verzonden. Zie `.env.example` voor alle opties.
