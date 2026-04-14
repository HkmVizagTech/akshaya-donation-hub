import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/contact-us")({
  component: ContactUsPage,
});

function ContactUsPage() {
  return (
    <ContentPageLayout
      title="Contact Us"
      intro="For seva-related questions, donation support, or festival coordination, please get in touch with the ISKCON Gambheeram team."
      sections={[
        {
          heading: "General Enquiries",
          paragraphs: [
            "If you need help choosing a seva, understanding the campaign, or confirming a donation, please contact the temple support desk.",
            "Email: support@iskcongambheeram.org",
            "Phone: +91 90000 00000",
          ],
        },
        {
          heading: "Temple Office",
          paragraphs: [
            "ISKCON Gambheeram, Visakhapatnam",
            "Office Hours: 9:00 AM to 7:00 PM, all days during the Akshaya Tritiya campaign period.",
          ],
        },
      ]}
    />
  );
}
