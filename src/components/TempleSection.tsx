import mandirNirman from "@/assets/mandir-nirman.jpg";

interface TempleSectionProps {
  onDonate: () => void;
}

export function TempleSection({ onDonate }: TempleSectionProps) {
  return (
    <section className="py-16 px-4 bg-section-dark">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              Support Temple Seva at ISKCON Gambheeram
            </h2>
            <p className="text-muted-foreground mb-6">
              Help strengthen worship services, festival offerings, and temple development in Visakhapatnam.
            </p>
            <button
              onClick={onDonate}
              className="gold-shine-button w-fit px-8 py-3 font-semibold"
            >
              Donate Now
            </button>
          </div>
          <div className="relative h-64 md:h-auto">
            <img
              src={mandirNirman}
              alt="Radha Krishna Temple Construction"
              loading="lazy"
              width={640}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
