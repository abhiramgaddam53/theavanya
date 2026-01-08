"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Heading1 } from "lucide-react";
import CustomContainer from "../over-view/components/CustomContainer";
import SectionHeading from "../over-view/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

// Mock Data
const OUTLETS = [
  {
    id: 1,
    title: "Forest Bathing Pavilion",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    type: "Wellness",
    desc: "Guided Shinrin-yoku experiences designed to slow the nervous system and reconnect you with the living forest.",
    link: "Discover More →"
  },
  {
    id: 2,
    title: "Ayurvedic Bio-Reset Spa",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    type: "Spa",
    desc: "Personalized therapies combining classical Ayurveda with modern recovery science for deep physical renewal.",
    link: "View Treatments →"
  },
  {
    id: 3,
    title: "Open-Air Yoga Deck",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
    type: "Movement",
    desc: "Sunrise and sunset sessions where breath, movement, and mist align naturally.",
    link: "Explore Sessions →"
  },
  {
    id: 4,
    title: "No-Menu Wellness Dining",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b00ca1?q=80&w=2070&auto=format&fit=crop",
    type: "Culinary",
    desc: "Chef-curated meals crafted around your body type, preferences, and daily rhythm.",
    link: "Learn More →"
  },
  {
    id: 5,
    title: "Digital Detox Experience",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    type: "Silence",
    desc: "A dedicated in-villa switch that disconnects Wi-Fi and EMF for uninterrupted rest.",
    link: "Experience Silence →"
  },
  {
    id: 6,
    title: "Private Waterfall Rituals",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    type: "Nature",
    desc: "Secluded forest clearings prepared for meditation, picnics, or quiet reflection.",
    link: "View Experience →"
  },
  {
    id: 7,
    title: "Deep Rest Sleep Program",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
    type: "Sleep",
    desc: "Custom bedding, lighting, and soundscapes designed to restore circadian balance.",
    link: "Learn More →"
  },
  {
    id: 8,
    title: "Guided Stillness Sessions",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b00ca1?q=80&w=2070&auto=format&fit=crop",
    type: "Recovery",
    desc: "One-on-one sessions focused on breathwork, mindfulness, and mental clarity.",
    link: "Book Session →"
  },
];

const INFO_BLURBS = [
  "Explore the heritage of Wayanad with a short drive to ancient plantations, forest trails, and cultural landmarks.",
  "Discover historic forts, temples, and protected rainforest reserves just a scenic journey away.",
  "Attend private cultural events and curated local experiences arranged seamlessly by our concierge.",
];

const NEARBY_THINGS = [
  {
    category: "FAMILY & CHILDREN'S ACTIVITIES",
    title: "Tribal Heritage Museum",
    distance: "6.2 KM",
    description: "Explore the living history, artifacts, and crafts of the Wayanad region.",
  },
  {
    category: "FITNESS",
    title: "Guided Mountain Trails",
    distance: "4.8 KM",
    description:
      "Moderate forest treks curated for all endurance levels.",
  },
  {
    category: "GOLF",
    title: "Private Hillview Golf Greens",
    distance: "18 KM",
    description: "A serene course surrounded by rolling hills and mist.",
  },
  {
    category: "SPA",
    title: "Natural Hot Springs",
    distance: "22 KM",
    description:
      "Mineral-rich waters known for therapeutic benefits.",
  },
];

const LOCAL_ATTRACTIONS = [
  { name: "Edakkal Caves", description: "Ancient rock carvings and panoramic hill views, offering a glimpse into early human history." },
  { name: "Banasura Sagar Dam", description: "A vast reservoir surrounded by lush hills—ideal for quiet boat rides and sunset views." },
  { name: "Chembra Peak", description: "A scenic trekking destination with sweeping views of the Western Ghats." },
  { name: "Wayanad Wildlife Sanctuary", description: "Home to rare flora and fauna, best explored with a trained naturalist." },
  { name: "Heritage Tea Plantations", description: "Walk through historic estates that shaped the region’s cultural landscape." },
  { name: "Tribal Villages of Wayanad", description: "Authentic encounters with indigenous communities and traditional crafts." },
];

const FAQS = [
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is at 3:00 pm and Check-out is at 12:00 pm.",
  },
  {
    q: "Does The avanya Hyderabad Mindspace allow pets?",
    a: "Pets are not allowed at our property.",
  },
  {
    q: "What are the parking options?",
    a: "We offer complimentary on-site parking and valet parking for all guests.",
  },
  {
    q: "What property amenities are available?",
    a: "Guests can enjoy our fitness center, outdoor pool, multiple restaurants, and the Heavenly Spa.",
  },
  {
    q: "Does the hotel have in-room Wi-Fi?",
    a: "Yes, complimentary high-speed Wi-Fi is available in all guest rooms and public areas.",
  },
];

export default function WellnessPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll(); // Initial check
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      const targetScroll = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const formattedFaqs = FAQS.map(f => ({ question: f.q, answer: f.a }));

  const filteredThings = NEARBY_THINGS.filter((item) => {
    if (activeTab === "All") return true;
    // Convert activeTab to uppercase to match item.category
    return item.category === activeTab.toUpperCase();
  });

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Image Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] bg-gray-200 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
          alt="Wellness Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Intro Text Section */}
      <div className="w-full min-h-[60vh] md:min-h-[75vh] flex items-center justify-center pt-18 ">
        <CustomContainer>
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-[#4A4A4A] tracking-tight text-sm md:text-base mb-4 font-medium font-poppins">
              Wellness at The Avanya
            </p>
            <h1 className="font-serif text-[40px] md:text-5xl font-medium lg:text-5xl xl:text-7xl leading-tight mb-6 md:mb-8 text-neutral-900 max-w-4xl mx-auto">
              Where restoration becomes a way of staying.
            </h1>
          </div>
        </CustomContainer>
      </div>

      {/* 3. On-Site Outlets Section (Apple Cards Style) */}
      <div className="w-full px-4 md:px-0 min-h-[80vh] flex items-center justify-center py-6  md:py-24 bg-white">
        <CustomContainer>
          <div className="mb-12 flex flex-col md:flex-row items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-3xl lg:text-5xl xl:text-5xl text-[#1a1a1a] leading-tight mb-4">
                On-Site Outlets
              </h2>
              <p className="font-poppins text-[#4A4A4A] text-base md:text-lg font-light">
                Each experience is designed to feel unhurried, personal, and quietly indulgent.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-5 md:gap-4 pb-16 pt-4 scrollbar-hide snap-x snap-mandatory  "
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {OUTLETS.map((outlet) => (
                <div
                  key={outlet.id}
                  className="relative min-w-[280px] sm:min-w-[320px] md:min-w-[360px] aspect-9/16 md:aspect-3/5 shrink-0 snap-start snap-always rounded-sm md:rounded-sm overflow-hidden group cursor-pointer"
                >
                  {/* Background Image */}
                  <Image
                    src={outlet.image}
                    alt={outlet.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 80vw, 30vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

                  {/* Content Overlay */}
                  <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex flex-col items-start gap-3 z-10">
                    <span className="text-white/70 text-xs font-poppins font-semibold uppercase tracking-widest bg-black/20 backdrop-blur-md px-3 py-1 rounded-sm md:rounded-sm border border-white/10">
                      {outlet.type}
                    </span>
                    <h3 className="font-poppins text-white text-xl md:text-3xl font-bold leading-tight mt-2 max-w-[80%] drop-shadow-lg">
                      {outlet.title}
                    </h3>
                  </div>

                  {/* Description at bottom left */}
                  <div className="font-poppins absolute bottom-0 left-0 md:bottom-8 px-6 z-10 w-full">
                    <p className="text-white/80 text-[10px] md:text-sm font-poppins font-light leading-relaxed drop-shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {outlet.desc}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/50 pb-1 hover:border-white transition-colors">
                        {outlet.link || "Learn More ->"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-black/10
                              ${canScrollLeft
                  ? 'bg-white text-black hover:bg-black hover:text-white cursor-pointer shadow-sm'
                  : 'bg-transparent text-black/20 cursor-not-allowed'}`}
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-black/10
                              ${canScrollRight
                  ? 'bg-black text-white hover:bg-black/80 cursor-pointer shadow-lg'
                  : 'bg-transparent text-black/20 cursor-not-allowed'}`}
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </CustomContainer>
      </div>
      <CustomContainer>
          {/* Info Blurbs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 pt-6 md:pt-0 md:mb-16 border-b px-6 md:px-12 border-[#1a1a1a]/10 pb-24">
            {INFO_BLURBS.map((text, i) => (
              <div
                key={i}
                className="text-[#4A4A4A] font-serif text-base md:text-lg leading-relaxed"
              >
                {text}
                <a href="#" className="ml-1 underline text-[#1a1a1a]">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
          </CustomContainer>
      {/* 4. Nearby Things To Do (Combined with Blurbs) */}
      <div className="w-full h-auto md:min-h-screen flex  items-center justify-center py-12  md:py-24 bg-gray-50">
        <CustomContainer>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1a1a1a] leading-tight mb-8 md:mb-12">
              Beyond the sanctuary, <br />  thoughtfully close.
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
              {[
                "All",
                "Family & Children's Activities",
                "Fitness",
                "Golf",
                "Ski",
                "Spa",
              ].map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    let tabValue = filter;
                    // Special handling for "Family & Children's Activities" to match data
                    if (filter === "Family & Children's Activities") {
                      tabValue = "FAMILY & CHILDREN'S ACTIVITIES";
                    } else if (filter !== "All") { // For other specific tabs, convert to uppercase
                      tabValue = filter.toUpperCase();
                    }
                    setActiveTab(tabValue);
                  }}
                  className={`px-4 py-2 rounded-full font-poppins text-xs uppercase tracking-wider border transition-all
                  ${(activeTab === filter || (filter === "Family & Children's Activities" && activeTab === "FAMILY & CHILDREN'S ACTIVITIES") || (filter !== "All" && activeTab === filter.toUpperCase()))
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                      : "bg-white text-[#4A4A4A] border-[#1a1a1a]/20 hover:border-[#1a1a1a]/40"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {filteredThings.length > 0 ? (
              filteredThings.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 md:p-8 rounded-sm border border-neutral-100 group flex flex-col gap-4"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-poppins font-bold uppercase tracking-[0.15em] text-[#BEA585]">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-poppins font-medium text-neutral-400 bg-neutral-50 px-2 py-1 rounded-sm">
                      {item.distance}
                    </span>
                  </div>

                  <h3 className="font-poppins text-lg text-[#1a1a1a] font-light leading-tight">
                    {item.title}
                  </h3>

                  <p className="font-poppins text-sm text-neutral-500 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center col-span-full text-gray-500 py-12">
                No items found for this category.
              </div>
            )}
          </div>
        </CustomContainer>
      </div>

      {/* 5. Local Attractions */}
      <div className="w-full flex items-center justify-center my-8 py-10 md:py-8 bg-white">
        <CustomContainer>
          <div className="text-center mb-6 md:mb-10">
            <h2 className="font-serif text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1a1a1a] leading-tight">
              Local Attractions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full">
            {LOCAL_ATTRACTIONS.map((attr, i) => (
              <div
                key={i}
                className="bg-white p-4  md:p-8 rounded-sm border border-neutral-100 group flex flex-col justify-center"
              >
                <h3 className="font-poppins text-lg text-[#1a1a1a] font-light leading-tight mb-3">
                  {attr.name}
                </h3>
                <p className="font-poppins text-sm text-neutral-500 font-light leading-relaxed">
                  {attr.description}
                </p>
              </div>
            ))}
          </div>
        </CustomContainer>
      </div>

      {/* 6. FAQ Section */}
      <CustomContainer>
      <div className=" px-2 md:pt-0 md:p-16 pb-20 bg-primary-bg" >
        <FAQSection
          tagline="Information"
          description="Frequently Asked Questions"
          faqs={formattedFaqs}
        /></div>
      </CustomContainer>
      <div className="pb-16"></div>
    </div>
  );
}
