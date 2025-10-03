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
      "Foot Résultats est une plateforme pour suivre en temps réel les matchs de football des plus grandes ligues mondiales.",
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
    description: "Landing page moderne avec Hero, pricing et CTA.",
    tags: ["Next.js", "MongoDB", "Express", "Sass", "Node JS"],
    image: "/images/equipementvelo.png",
    details: "/projets/equipement-velo",
    link: "https://equipement-velo.fr/",
    content:
      "Création du site web en utilisant en utilisant la MERN stack (MongoDB, Express, React, Node JS) et Next.js Gestion et maintenance du site web. Optimisation globale du site web, sur les performances et sur le SEO.",
  },
  {
    slug: "saas-landing",
    title: "Saas Landing",
    description:
      "Template pour un SaaS, avec gestion de l'autentification et des payments.",
    tags: ["Next.js", "Node JS", "Tailwind", "MySQL"],
    image: "/images/grocerylistpro.png",
    details: "/projets/saas-landing",
    link: "https://github.com/sulirb/SAAS-template",
    content:
      "Création d'une solution clé en main pour démarrer un SaaS (Service as a Software) avec gestion de l'autentification et des payments. Utilisation de la combinaison Next.js/Tailwind afin de créer de manière efficiente, un design responsive et moderne. Création d'une API Rest avec Node.js et Express, pouvant être relié à une base de données MySQL.",
  },
];
