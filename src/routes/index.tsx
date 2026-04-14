import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuoteSection } from "@/components/QuoteSection";
import { DonationCards } from "@/components/DonationCards";
import { SignificanceSection } from "@/components/SignificanceSection";
import { TempleSection } from "@/components/TempleSection";
import { Footer } from "@/components/Footer";
import { StickyDonateBar } from "@/components/StickyDonateBar";
import { DonationModal } from "@/components/DonationModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Akshaya Tritiya 2026 Donation - Offer Seva and Daan | ISKCON Gambheeram Visakhapatnam",
      },
      {
        name: "description",
        content:
          "Donate on Akshaya Tritiya 2026 for Gau Seva, Annadaan Seva, Mahalakshmi Homa, and Mandir Nirman Seva at ISKCON Gambheeram Visakhapatnam.",
      },
      {
        property: "og:title",
        content: "Akshaya Tritiya 2026 Donation - ISKCON Gambheeram Visakhapatnam",
      },
      {
        property: "og:description",
        content:
          "Donate for Gau Seva, Annadaan & Temple Construction. Earn Akshaya Punya.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSeva, setSelectedSeva] = useState("Akshaya Tritiya Seva");

  const openDonation = (seva?: string) => {
    setSelectedSeva(seva || "Akshaya Tritiya Seva");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onDonate={() => openDonation()} />
      <HeroSection />
      <DonationCards onDonate={(seva) => openDonation(seva)} />
      <QuoteSection />
      <SignificanceSection />
      <TempleSection onDonate={() => openDonation("Mandir Nirman Seva")} />
      <Footer />
      <StickyDonateBar onDonate={() => openDonation()} />
      <DonationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        sevaType={selectedSeva}
      />
    </div>
  );
}
