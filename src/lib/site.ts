export const site = {
  name: "Cynthia Fung Sze Yan",
  title: "Hybrid Alchemist",
  tagline: "Get connect and healing",
  email: "halo_cynthia@yahoo.com.hk",
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
    title: "個人成長與探索服務",
    description:
      "以科學及心理學打底，用占星挖掘天賦與盲點，利用NLP 執行改變，療癒心靈。",
 
  },
  {
    title: "設計與內容呈現",
    description:
      "提供美觀且符合品牌調性的設計與內容呈現，幫助你更好地展現品牌價值與故事。",
  },
  {
    title: "教育支援",
    description:
      "用教育陪孩子找到適合自己的節奏，在教學的同時，也為家長提供情緒支持與親子溝通協助。",
 
  },
] as const;
