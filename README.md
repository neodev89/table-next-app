This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Objective

L'obiettivo dell'applicazione sarà quello di permettere ad ogni freelancer di calcolare quanto guadagnato e quanto guadagnare,
quanto dovrà pagare in dichiarazione dei redditi e quanto accantonare 
(facoltativo) per avere - come se fosse un subordinato - una mensilità simile alla tredicesima e una per simil TFR.

# Stack

Lo stack tecnologico prevede le seguenti:
    - Next.js è il framework del progetto;
    - TypeORM per gestire le modifiche a Database MySQL;
    - MySQL sul quale sarà alloggiato il database;
    - Zod per la validazione e il controllo dei campi;
    - React Hook Form per la gestione dei form e il salvataggio        a front-end dei dati;
    - Redux per la gestione degli stati globali;
    - JsonWebToken per la creazione di token di accesso e mantenimento della sessione;
    - UUID per la generazione di ID dinamici e sempre univoci;
    - Material UI per una bella e user-friendly esperienza utente;
    - tanstack query e axios per una migliore gestione delle chiamate alle API;
    - bcrypt per l'hash sulle password;
    - sass per un layout migliore e per stili con funzionalità potenti;
