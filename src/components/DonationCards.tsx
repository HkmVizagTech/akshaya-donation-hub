import { donationCampaigns } from "@/lib/donations";

interface DonationCardsProps {
  onDonate: (sevaType: string) => void;
}

export function DonationCards({ onDonate }: DonationCardsProps) {
  return (
    <section
      id="donate"
      className="bg-[linear-gradient(180deg,_#fff8ea_0%,_#f3e1b4_100%)] px-4 py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/70">
            Offer Your Seva
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Choose a seva and donate instantly
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {donationCampaigns.map((campaign) => (
            <article
              key={campaign.name}
              className="group overflow-hidden rounded-[1.75rem] border border-primary/10 bg-card shadow-[0_18px_45px_rgba(90,44,16,0.1)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.name}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  width={640}
                  height={512}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <p className="absolute left-4 bottom-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {campaign.badge ?? "Seva"}
                </p>
              </div>
              <div className="space-y-4 p-5">
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    {campaign.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    {campaign.blurb}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-primary/80">
                    Starting from ₹{campaign.defaultAmount.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => onDonate(campaign.name)}
                  className="gold-shine-button w-full px-5 py-3 text-sm font-semibold"
                >
                  Donate for {campaign.name}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
