import logo from "@/assets/iskcon-gambheeram-logo.jpeg";

interface HeaderProps {
  onDonate: () => void;
}

export function Header({ onDonate }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 px-4 py-4 md:px-8 md:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl bg-background/90 px-3 py-3 shadow-lg backdrop-blur-sm md:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Srila Prabhupada's ISKCON Gambheeram Visakhapatnam"
            width={420}
            height={140}
            className="h-14 w-auto max-w-[220px] rounded-lg object-contain sm:h-16 sm:max-w-[280px] md:h-20 md:max-w-[360px]"
          />
          <div className="hidden border-l border-primary/20 pl-3 text-left md:block">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
              Akshaya Tritiya 2026
            </p>
            <p className="text-sm text-foreground/80">
              Seva, Annadan and Mandir Nirman
            </p>
          </div>
        </div>
        <button
          onClick={onDonate}
          className="shrink-0 rounded-lg bg-hero-gold px-4 py-2 text-sm font-semibold text-primary transition-opacity hover:opacity-90 md:px-5"
        >
          Donate
        </button>
      </div>
    </header>
  );
}
