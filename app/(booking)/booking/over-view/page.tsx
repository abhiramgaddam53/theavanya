"use client"

import HeroSplit from "./components/HeroSplit";
import RoomsSection from "./components/RoomsSection";
import AppleCardsOffers from "./components/AppleCardsOffers";
import AmenitiesSection from "./components/AmenitiesSection";
import WaysToEnjoySection from "./components/WaysToEnjoySection";
import MapSection from "./components/MapSection";
import AwardsSection from "./components/AwardsSection";
import FAQSection from "@/components/FAQSection";
import { FAQS } from "./constants";

export default function OverviewPage() {
  const formattedFaqs = FAQS.map(f => ({ question: f.q, answer: f.a }));
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#171717] overflow-x-hidden selection:bg-[#c6a87c] selection:text-white">
      <HeroSplit />
      <RoomsSection />
      <AppleCardsOffers />
      <AmenitiesSection />
      <WaysToEnjoySection />
      <MapSection />
      <AwardsSection />
      <FAQSection
        tagline="Everything You Need to Know Without the Noise."
        description=" "
        faqs={formattedFaqs}
      />
    </div>
  );
}
