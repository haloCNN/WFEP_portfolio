export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  tags: string[];
  accent: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "nova-banking",
    title: "Nova Banking",
    subtitle: "Mobile-first retail banking",
    year: "2025",
    role: "Lead product designer",
    tags: ["Fintech", "Mobile", "Design system"],
    accent: "#5B7CFF",
    summary:
      "Redesigned onboarding and everyday banking flows for a digital-first audience, reducing drop-off and support tickets.",
    challenge:
      "Legacy flows felt bureaucratic; new users abandoned KYC before completing verification.",
    approach: [
      "Mapped 40+ support tickets into journey pain points",
      "Ran 8 moderated tests on progressive disclosure patterns",
      "Shipped a token-based UI kit adopted by engineering in 6 weeks",
    ],
    outcome:
      "Onboarding completion rose 34% and average time-to-first-transfer dropped from 12 to 7 minutes.",
    metrics: [
      { label: "Completion", value: "+34%" },
      { label: "NPS", value: "+18" },
      { label: "Time to value", value: "−42%" },
    ],
  },
  {
    slug: "atelier-commerce",
    title: "Atelier Commerce",
    subtitle: "Luxury e-commerce experience",
    year: "2024",
    role: "Senior UI/UX designer",
    tags: ["E-commerce", "Web", "Accessibility"],
    accent: "#C4A574",
    summary:
      "Elevated a heritage fashion brand online without sacrificing editorial storytelling or checkout clarity.",
    challenge:
      "High bounce on product pages; mobile checkout felt cramped and untrustworthy.",
    approach: [
      "Introduced editorial PDP templates with shoppable lookbooks",
      "WCAG 2.2 AA audit with focus on contrast and touch targets",
      "A/B tested express checkout vs. guest-first funnel",
    ],
    outcome:
      "Mobile conversion improved 22% while maintaining brand NPS among returning customers.",
    metrics: [
      { label: "Mobile CVR", value: "+22%" },
      { label: "Return rate", value: "−11%" },
    ],
  },
  {
    slug: "pulse-health",
    title: "Pulse Health",
    subtitle: "Patient portal & care plans",
    year: "2024",
    role: "Product designer",
    tags: ["Healthcare", "SaaS", "Research"],
    accent: "#3D9B8F",
    summary:
      "Unified appointment booking, lab results, and care-plan tasks into a single calm dashboard for chronic-care patients.",
    challenge:
      "Patients missed follow-ups because information lived across three disconnected tools.",
    approach: [
      "Co-designed workshops with nurses and 12 patients",
      "Defined information hierarchy around “next best action”",
      "Validated IA with tree testing before visual design",
    ],
    outcome:
      "Missed appointment rate fell 19%; task completion for care plans reached 81% within 30 days.",
    metrics: [
      { label: "Missed visits", value: "−19%" },
      { label: "Care-plan tasks", value: "81%" },
    ],
  },
  {
    slug: "wayfinder-maps",
    title: "Wayfinder Maps",
    subtitle: "Outdoor navigation app",
    year: "2023",
    role: "UI/UX designer",
    tags: ["Consumer", "iOS", "Motion"],
    accent: "#E86B4A",
    summary:
      "Reimagined offline trail navigation with glanceable wayfinding and battery-conscious UI patterns.",
    challenge:
      "Hikers struggled to read maps in bright sunlight; battery drain forced early exits.",
    approach: [
      "High-contrast outdoor mode with adaptive typography",
      "Gesture-first map controls for one-handed use",
      "Motion guidelines tied to GPS confidence states",
    ],
    outcome:
      "Session length increased 27%; app store rating moved from 3.8 to 4.6 stars.",
    metrics: [
      { label: "Session length", value: "+27%" },
      { label: "App rating", value: "4.6★" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count);
}
