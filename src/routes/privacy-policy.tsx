import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <ContentPageLayout
      title="Privacy Policy"
      intro="This Privacy Policy explains how donor and visitor information may be collected, used, and protected when interacting with this website."
      sections={[
        {
          heading: "Information We Collect",
          paragraphs: [
            "We may collect your name, email address, phone number, donation amount, and any details submitted through donation or contact forms.",
            "Payment processing may be handled by third-party providers. Sensitive payment credentials are not stored directly by this website unless clearly stated.",
          ],
        },
        {
          heading: "How Information Is Used",
          paragraphs: [
            "Your information may be used to process donations, issue acknowledgements, respond to enquiries, and improve donor communication.",
            "We may also use contact details to share updates about seva activities, campaigns, and temple initiatives.",
          ],
        },
      ]}
    />
  );
}
