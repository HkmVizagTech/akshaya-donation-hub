import { createFileRoute } from "@tanstack/react-router";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const Route = createFileRoute("/cancellation-refunds-policy")({
  component: CancellationRefundsPolicyPage,
});

function CancellationRefundsPolicyPage() {
  return (
    <ContentPageLayout
      title="Cancellation/Refunds Policy"
      intro="Because donations made through this website are devotional and charitable contributions, cancellations and refunds are handled carefully and only in limited circumstances."
      sections={[
        {
          heading: "General Policy",
          paragraphs: [
            "Donations once processed are generally treated as final and non-refundable.",
            "If a donation is reported as duplicated, incorrect due to a technical issue, or charged in error, the donor may contact the organization for review.",
          ],
        },
        {
          heading: "Refund Review",
          paragraphs: [
            "Refund requests should be submitted promptly with transaction details, donor name, amount, and date of contribution.",
            "Approved refunds, if any, will be processed through the original payment method subject to payment provider timelines.",
          ],
        },
      ]}
    />
  );
}
