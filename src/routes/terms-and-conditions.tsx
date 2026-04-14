import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <ContentPageLayout
      title="Terms & Conditions"
      intro="By using this website and making a donation, you agree to the following terms governing devotional contributions and website usage."
      sections={[
        {
          heading: "Use of Website",
          paragraphs: [
            "Users agree to provide correct information while making donations and while contacting the organization through this website.",
            "This website is intended to facilitate voluntary donations and provide information related to Akshaya Tritiya seva offerings.",
          ],
        },
        {
          heading: "Donations",
          paragraphs: [
            "All donations made through this platform are voluntary and are intended for spiritual, charitable, and temple-related activities.",
            "The organization retains discretion to allocate donations in line with the stated seva purpose, campaign needs, and temple administration requirements.",
          ],
        },
      ]}
    />
  );
}
