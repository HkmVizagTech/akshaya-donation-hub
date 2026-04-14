import { createFileRoute, Link } from "@tanstack/react-router";

type ThankYouSearch = {
  paymentId?: string;
  amount?: string;
  seva?: string;
};

export const Route = createFileRoute("/thank-you")({
  validateSearch: (search: Record<string, unknown>): ThankYouSearch => ({
    paymentId: search.paymentId as string | undefined,
    amount: search.amount as string | undefined,
    seva: search.seva as string | undefined,
  }),
  head: () => ({
    meta: [
      { title: "Thank You - ISKCON Gambheeram Visakhapatnam" },
      {
        name: "description",
        content:
          "Thank you for your generous donation to ISKCON Gambheeram Visakhapatnam.",
      },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const { paymentId, amount, seva } = Route.useSearch();

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-bg px-4 py-16">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-card text-center shadow-2xl">
        <div className="bg-primary p-8">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-hero-gold">
            <svg
              className="h-10 w-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-primary-foreground">
            Thank You
          </h1>
          <p className="mt-2 text-primary-foreground/80">
            Your donation has been received for ISKCON Gambheeram Visakhapatnam
          </p>
        </div>
        <div className="space-y-4 p-8">
          {seva && (
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">Seva Type</p>
              <p className="text-lg font-bold text-foreground">{seva}</p>
            </div>
          )}
          {amount && (
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">Amount Donated</p>
              <p className="text-2xl font-bold text-foreground">
                INR {parseInt(amount).toLocaleString()}
              </p>
            </div>
          )}
          {paymentId && (
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">Payment ID</p>
              <p className="font-mono text-sm text-foreground">{paymentId}</p>
            </div>
          )}
          <p className="mt-6 leading-relaxed text-foreground/80">
            May Sri Sri Radha Gopinath and Srila Prabhupada bless you and your
            family. Your contribution supports seva activities in ISKCON
            Gambheeram Visakhapatnam.
          </p>
          <Link
            to="/"
            className="gold-shine-button mt-6 inline-block px-8 py-3 font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
