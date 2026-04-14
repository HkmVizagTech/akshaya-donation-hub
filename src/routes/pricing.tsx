import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

function PricingPage() {
  return (
    <ContentPageLayout
      title="Pricing"
      intro="Seva contributions on this website are voluntary donations offered by devotees and well-wishers to support temple activities and festival service initiatives."
      sections={[
        {
          heading: "Donation Amounts",
          paragraphs: [
            "The website may display suggested contribution amounts for specific sevas such as Gau Seva, Annadana Seva, Mahalakshmi Homa, and Mandir Nirman Seva.",
            "These suggested amounts are indicative only. Devotees may choose any contribution amount unless a seva is specifically presented as a sponsorship level.",
          ],
        },
        {
          heading: "Feed a Number of People",
          paragraphs: [
            "Campaign cards such as Feed 100 People, Feed 200 People, Feed 400 People, Feed 500 People, and Feed 1000 People are devotional sponsorship options intended to help donors identify the scale of annadana they wish to support.",
            "Final use of funds will align with temple operations, festival needs, and charitable service priorities.",
          ],
        },
      ]}
    />
  );
}
