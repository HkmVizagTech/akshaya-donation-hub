import heroBanner from "@/assets/hero-banner.jpg";

interface HeroSectionProps {
  onDonate: () => void;
}

export function HeroSection({ onDonate }: HeroSectionProps) {
  return (
    <section className="relative w-full">
      <div className="relative min-h-[500px] overflow-hidden md:min-h-[600px]">
        <img
          src={heroBanner}
          alt="Akshaya Tritiya 2026"
          width={1920}
          height={800}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/90 via-hero-bg/70 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl flex-col justify-center px-4 py-24 md:min-h-[600px] md:py-32">
          <h1 className="text-5xl font-bold leading-tight text-primary md:text-7xl">
            Akshaya
            <br />
            Tritiya
          </h1>
          <p className="mt-2 text-lg italic text-primary/80 md:text-xl">
            A sacred day for seva and blessings
          </p>
          <p className="mt-6 max-w-lg text-base font-semibold text-primary md:text-lg">
            Gau Seva | Annadan Seva | Mandir Nirman
          </p>
          <p className="mt-2 max-w-lg text-sm text-foreground/80 md:text-base">
            Offer your contribution on this auspicious occasion and support
            temple service, prasadam distribution, and compassionate seva.
          </p>
          <button
            onClick={onDonate}
            className="mt-8 inline-flex w-fit items-center justify-center rounded-lg border-2 border-hero-gold bg-donate-btn px-8 py-3 text-lg font-semibold text-donate-btn-foreground transition-opacity hover:opacity-90"
          >
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}
