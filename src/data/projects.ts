export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  details?: string;
  link?: string;
  content?: string; // texte pour l'étude de cas
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "foot-resultats",
    title: "Foot Résultats",
    description:
      "Foot Résultats est une plateforme pour suivre en temps réel les matchs de football des plus grandes ligues européennes et mondiales.",
    tags: ["Next.js", "API", "Tailwind"],
    image: "/images/footresultats.png",
    details: "/projets/foot-resultats",
    link: "https://footresultats.com/",
    featured: true,
    content:
      "Création d'un site web de résultats sportifs en utilisant Next.js et Tailwind CSS. Utilisation de l'API Highlightly pour récupérer les résultats en temps réel. Gestion et maintenance du site web. Optimisation globale du site web, sur les performances et sur le SEO.",
  },
  {
    slug: "equipement-velo",
    title: "Équipement Vélo",
    description:
      "Découvrez les meilleurs conseils pour choisir vos équipements de vélo adaptés à votre style et à vos besoins.",
    tags: ["Next.js", "MongoDB", "Express", "Sass", "Node.js"],
    image: "/images/equipementvelo.png",
    details: "/projets/equipement-velo",
    link: "https://www.equipement-velo.fr/",
    content:
      "Création du site web en utilisant la MERN stack (MongoDB, Express, React, Node.js) et Next.js. Gestion et maintenance du site web. Optimisation globale du site web, sur les performances et sur le SEO.",
  },
  {
    slug: "saas-landing",
    title: "Saas Landing",
    description:
      "Un SaaS clé en main en open-source, avec landing page, gestion de l'authentification avec Node et MySQL et des paiements avec Stripe.",
    tags: ["Next.js", "Node.js", "Tailwind", "MySQL"],
    image: "/images/grocerylistpro.png",
    details: "/projets/saas-landing",
    link: "https://github.com/sulirb/SAAS-template",
    content:
      "Création d'une solution clé en main pour démarrer un SaaS avec gestion de l'authentification et des paiements. Utilisation de Next.js/Tailwind pour un design responsive et moderne. API Rest avec Node.js/Express reliable à MySQL.",
  },

  {
    slug: "meteo-maubeuge",
    title: "Météo-Maubeuge",
    description:
      "Manipulation de l'API Open-Meteo afin d'afficher les données météorologiques en temps réel. Création d'une expérience utilisateur informative et immersive.",
    tags: ["JavaScript"],
    image: "/images/meteo.png",
    link: "https://meteo-maubeuge.vercel.app",
    content:
      "Intégration de l'API Open-Meteo pour récupérer et afficher des données météo en temps réel. Focus sur l'UX pour rendre l'information claire et accessible sur desktop et mobile.",
  },
  {
    slug: "booki",
    title: "Booki",
    description:
      "Intégration de maquettes en suivant un design responsive et collaboration sur GitHub pour déployer le produit en ligne.",
    tags: ["SCSS", "Git"],
    image: "/images/booki.png",
    link: "https://sulirb.github.io/booki/",
    content:
      "Application des connaissances en intégration responsive à partir de maquettes fournies. Suivi du process de développement et déploiement sur GitHub Pages.",
  },
  {
    slug: "kasa",
    title: "Kasa",
    description:
      "Refonte du site avec React : initialisation avec Vite, navigation via React Router et style en SCSS pour un rendu responsive.",
    tags: ["React", "SCSS"],
    image: "/images/kasa.png",
    link: "https://sulirb.github.io/Kasa--P6/",
    content:
      "Migration vers React, création des composants réutilisables et mise en place d'une architecture front-end maintenable avec SCSS.",
  },
  {
    slug: "sophie-bluel",
    title: "Sophie Bluel",
    description:
      "Portfolio impliquant manipulation du DOM, gestion des événements et système d'authentification avec token sécurisé en localStorage.",
    tags: ["JavaScript", "Frontend"],
    image: "/images/bluel.png",
    link: "https://sulirb.github.io/Portfolio--P3/FrontEnd",
    content:
      "Conception d'un site portfolio avec interactions JS, gestion d'authentification et stockage sécurisé côté client. Focus sur l'expérience utilisateur et la robustesse du code.",
  },
  {
    slug: "nina-carducci",
    title: "Nina Carducci",
    description:
      "Debuggage et optimisation du site web (performances et SEO). Mise en place des métas sociales et amélioration de l'accessibilité.",
    tags: ["SEO"],
    image: "/images/carducci.png",
    link: "https://sulirb.github.io/nina-carducci-p5/",
    content:
      "Audit et optimisation : performances, SEO et accessibilité. Implémentation des meta tags réseaux sociaux et amélioration générale de l'expérience utilisateur.",
  },
  {
    slug: "mon-vieux-grimoire",
    title: "Mon vieux Grimoire",
    description:
      "Backend Express connecté à MongoDB pour gérer un site de notation de livres (CRUD, authentification, gestion des ressources).",
    tags: ["Express", "MongoDB"],
    image: "/images/grimoire.png",
    link: "https://github.com/sulirb/mon-vieux-grimoire-p7",
    content:
      "Développement d'une API REST avec Express et MongoDB permettant la création, lecture, modification et suppression de livres, avec gestion des utilisateurs.",
  },
];
