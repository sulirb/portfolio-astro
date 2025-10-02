# Portfolio Astro – Ossified Osiris

Un template de portfolio moderne construit avec Astro 5.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez `http://localhost:4321`.

## Structure

- `src/layouts/PortfolioLayout.astro` – Layout principal avec thème clair/sombre
- `src/components/` – `Hero`, `ProjectCard`, `Footer`
- `src/pages/` – `index`, `projets`, `a-propos`, `contact`
- `src/styles/global.css` – Styles globaux et variables de thème
- `src/data/projects.ts` – Données d’exemple

## Personnalisation

- Mettez à jour votre nom/sous-titre dans `src/components/Hero.astro`
- Ajoutez vos projets dans `src/data/projects.ts`
- Remplacez les liens GitHub/LinkedIn et l’adresse `mailto:` de `contact.astro`
