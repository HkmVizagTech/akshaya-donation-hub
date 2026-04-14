import { Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface ContentSection {
  heading: string;
  paragraphs: string[];
}

interface ContentPageLayoutProps {
  title: string;
  intro: string;
  sections: ContentSection[];
}

export function ContentPageLayout({
  title,
  intro,
  sections,
}: ContentPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f8edd0_0%,_#fffaf0_100%)]">
      <Header onDonate={() => undefined} />
      <main className="px-4 pt-32 pb-16 md:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary/10 bg-card/95 p-8 shadow-[0_24px_60px_rgba(93,39,11,0.12)] md:p-12">
          <Link
            to="/"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70 transition-colors hover:text-primary"
          >
            Back to Home
          </Link>
          <h1 className="mt-4 text-4xl font-bold text-primary md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
            {intro}
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-primary">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-foreground/75 md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
