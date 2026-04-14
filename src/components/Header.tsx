import logo from "@/assets/iskcon-gambheeram-logo.jpeg";

interface HeaderProps {
  onDonate: () => void;
}

export function Header({ onDonate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/95 shadow-lg backdrop-blur-sm">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Srila Prabhupada's ISKCON Gambheeram Visakhapatnam"
            width={420}
            height={140}
            className="h-16 w-auto max-w-[240px] rounded-lg object-contain sm:h-20 sm:max-w-[320px] md:h-24 md:max-w-[420px]"
          />
          <div className="hidden border-l border-primary/20 pl-3 text-left md:block">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80 lg:text-base">
              Akshaya Tritiya 2026
            </p>
            <p className="text-sm text-foreground/80 lg:text-base">
              ISKCON Gambheeram, Visakhapatnam
            </p>
          </div>
        </div>
        <button
          onClick={onDonate}
          className="gold-shine-button shrink-0 px-5 py-2.5 text-sm font-bold md:px-7 md:py-3 md:text-base"
        >
          Donate
        </button>
      </div>
    </header>
  );
}
