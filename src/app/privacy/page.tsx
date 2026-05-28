import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { privacySections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How personal data is collected and used on this portfolio site.",
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      intro="We respect your privacy. This policy explains what data we collect and why."
      sections={privacySections}
    />
  );
}
