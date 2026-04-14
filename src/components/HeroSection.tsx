import heroDesktop from "@/assets/akt-hero-desktop.jpeg";
import heroMobile from "@/assets/akt-hero-mobile.jpeg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#f6e7ba_0%,_#efe0b3_100%)] pt-0 pb-8 md:pb-12">
      <a
        href="#donate"
        className="block w-full cursor-pointer"
        aria-label="Scroll to seva donation cards"
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={heroMobile} />
          <img
            src={heroDesktop}
            alt="Akshaya Tritiya seva campaign"
            width={1366}
            height={768}
            className="block h-auto w-full"
          />
        </picture>
      </a>
    </section>
  );
}
