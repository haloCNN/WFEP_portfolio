export const site = {
  name: "Maya Chen",
  title: "Product & UI/UX Designer",
  tagline: "Crafting calm, human-centred digital experiences.",
  email: "hello@mayachen.design",
  location: "Hong Kong",
  year: new Date().getFullYear(),
} as const;

export const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export const footerLinks = {
  main: navLinks,
  legal: [
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
    { href: "/cookies", label: "Cookies" },
  ],
} as const;

export const services = [
  {
    title: "Product strategy",
    description:
      "Aligning business goals with user needs through research, journey mapping, and prioritised roadmaps.",
  },
  {
    title: "UI & interaction",
    description:
      "Scalable design systems, responsive layouts, and micro-interactions that feel intentional—not decorative.",
  },
  {
    title: "Prototyping & testing",
    description:
      "High-fidelity prototypes and moderated usability sessions to validate ideas before engineering spend.",
  },
] as const;
