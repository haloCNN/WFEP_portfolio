import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { termsSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using this portfolio website.",
};

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      intro="Please read these terms before using this website or submitting an enquiry."
      sections={termsSections}
    />
  );
}
