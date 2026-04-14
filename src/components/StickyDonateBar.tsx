interface StickyDonateBarProps {
  onDonate: () => void;
}

export function StickyDonateBar({ onDonate }: StickyDonateBarProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 px-4">
      <div className="sticky-donate-shell pointer-events-auto mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border border-primary/10 bg-sticky-bg/95 px-4 py-3 text-donate-btn-foreground shadow-[0_22px_50px_rgba(53,21,10,0.35)] backdrop-blur md:px-6">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.3em] text-hero-gold/80 md:text-xs">
            Akshaya Tritiya
          </p>
          <p className="truncate text-sm font-semibold md:text-base">
            Offer your seva with a quick donation
          </p>
        </div>
        <button
          onClick={onDonate}
          className="gold-shine-button shrink-0 px-5 py-2.5 text-sm font-bold md:px-7"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}
