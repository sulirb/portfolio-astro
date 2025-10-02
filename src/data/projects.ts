export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  repo?: string;
  content?: string; // texte pour l'étude de cas
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "analytics-dashboard",
    title: "Tableau de bord Analytics",
    description:
      "Dashboard réactif avec charts et dark mode, construit avec Astro.",
    tags: ["Astro", "Charts", "SSR"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    link: "/projets/analytics-dashboard",
    repo: "#",
    featured: true,
    content:
      "Objectif: centraliser des métriques clés. Rôle: intégration frontend, optimisation LCP < 1s. Résultats: -35% temps de chargement, +22% rétention.",
  },
  {
    slug: "saas-landing",
    title: "Site vitrine SaaS",
    description: "Landing page moderne avec Hero, pricing et CTA.",
    tags: ["Astro", "Tailwind-free", "UI"],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    link: "/projets/saas-landing",
    repo: "#",
    content:
      "Refonte orientée conversion. A/B test des sections, accessibilité AA, +18% CTR sur le CTA principal.",
  },
  {
    slug: "portfolio-minimal",
    title: "Portfolio minimal",
    description: "Modèle rapide pour présenter des projets et un profil.",
    tags: ["Astro", "Minimal", "Responsive"],
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop",
    link: "/projets/portfolio-minimal",
    repo: "#",
    content:
      "Architecture épurée, dark/light mode, pages statiques rapides, base pour itérations futures.",
  },
];
