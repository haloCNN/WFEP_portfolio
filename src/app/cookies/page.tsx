import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { cookieSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information about cookies and how to manage your preferences.",
};

export default function CookiesPage() {
  return (
    <LegalDocument
      title="Cookie Policy"
      intro="This site uses a small number of cookies. You control optional analytics via the consent banner."
      sections={cookieSections}
    />
  );
}
