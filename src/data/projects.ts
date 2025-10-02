export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "Tableau de bord Analytics",
    description:
      "Dashboard réactif avec charts et dark mode, construit avec Astro.",
    tags: ["Astro", "Charts", "SSR"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    repo: "#",
  },
  {
    title: "Site vitrine SaaS",
    description: "Landing page moderne avec Hero, pricing et CTA.",
    tags: ["Astro", "Tailwind-free", "UI"],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    repo: "#",
  },
  {
    title: "Portfolio minimal",
    description: "Modèle rapide pour présenter des projets et un profil.",
    tags: ["Astro", "Minimal", "Responsive"],
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    repo: "#",
  },
];

