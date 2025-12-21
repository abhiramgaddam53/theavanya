"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import CustomContainer from "../over-view/components/CustomContainer";
import SectionHeading from "../over-view/components/SectionHeading";

// Mock Data
const OUTLETS = [
  {
    id: 1,
    title: "Heavenlyy Spa by avanya™",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    type: "Included",
  },
  {
    id: 2,
    title: "avanyaWORKOUT® Fitness Studio",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    type: "Included",
  },
  {
    id: 3,
    title: "Kids Pool",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
    type: "Included",
  },
  {
    id: 4,
    title: "Swimming Pool",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b00ca1?q=80&w=2070&auto=format&fit=crop",
    type: "Included",
    link: "View Pool",
  },
];

const INFO_BLURBS = [
  "Visit Inorbit Mall during your stay at our hotel with a spa in Hyderabad.",
  "Make a short 8.7 mile trip to visit Golconda Fort and the area's most famous diamond and gem mines.",
  "Attend events at the Hyderabad International Convention Centre (HICC), just minutes from our hotel.",
];

const NEARBY_THINGS = [
  {
    category: "FAMILY & CHILDREN'S ACTIVITIES",
    title: "Village Museum, Shilparamam",
    distance: "2.5 KM",
    description: "Explore the artifacts at the Village Museum",
  },
  {
    category: "FAMILY & CHILDREN'S ACTIVITIES",
    title: "The Hidden Hour",
    distance: "3.3 KM",
    description:
      "Find the clues, solve the puzzles and escape within 60 minutes.",
  },
  {
    category: "GOLF",
    title: "Boulder Hills",
    distance: "5.7 KM",
    description: "18 Hole Golf Course",
  },
  {
    category: "SPA",
    title: "Meghavi Spa Hitech City",
    distance: "3.1 KM",
    description:
      "Meghavi Wellness is India's only brand with the perfect mix of domain expertise.",
  },
];

const LOCAL_ATTRACTIONS = [
  { name: "Chowmahalla Palace", location: "LARD BAZAAR, Telangana" },
  { name: "Charminar", location: "Charminar Rd, Char Kaman, Ghansi Bazaar" },
  { name: "Hi-Tech City IT Park", location: "Hyderabad, IN-TG, India" },
  { name: "Hussain Sagar Lake", location: "Hyderabad, IN-TG, India" },
  { name: "Golconda Fort", location: "Khair Complex, Ibrahim Bagh" },
  { name: "Dell Computers", location: "HITEC CITY, Telangana" },
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);
  return (
    <div className="w-full bg-white pb-16 md:pb-32">
      {/* 1. Hero Image Section */}
      <div className="relative w-full h-[50vh] md:h-[65vh] bg-gray-200">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
          alt="Wellness Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Intro Text Section */}
      <div className="w-full max-w-[1400px] mx-auto">
        <CustomContainer>
          <div className="max-w-[900px] mx-auto py-12 md:py-32 text-center">
            <p className="text-[#4A4A4A] tracking-tight text-sm md:text-base mb-8 font-medium font-poppins">
              Welcome to The avanya Hyderabad Mindspace
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 md:mb-8 text-neutral-900 max-w-4xl mx-auto">
              Explore notable attractions from our spa hotel in Hyderabad
            </h2>
          </div>
        </CustomContainer>
      </div>

      {/* 3. On-Site Outlets Section */}
      <div className="w-full py-8 md:py-16 min-h-screen flex items-center">
        <CustomContainer>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1a1a1a] leading-tight">
              On-Site Outlets
            </h2>
            <div className="hidden md:flex gap-4 text-sm text-[#4A4A4A]">
              <span>total experiences (4)</span>
              <span>included experiences (4)</span>
            </div>
          </div>

          <div
            className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x md:grid md:grid-cols-4 md:overflow-visible scrollbar-hide [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: "none" }}
          >
            {OUTLETS.map((outlet) => (
              <div
                key={outlet.id}
                className="relative min-w-[250px] md:min-w-0 h-[400px] md:h-[500px] rounded-lg overflow-hidden group cursor-pointer snap-center"
              >
                <div className="absolute inset-0 bg-gray-300">
                  <Image
                    src={outlet.image}
                    alt={outlet.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
                  <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider rounded mb-3">
                    {outlet.type}
                  </span>
                  <h3 className="text-white font-serif text-base md:text-lg lg:text-xl leading-tight mb-3 md:mb-4">
                    {outlet.title}
                  </h3>
                  <button className="text-white text-sm border border-white/50 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300">
                    {outlet.link || "Learn More +"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CustomContainer>
      </div>

      {/* 4. Informational Text Strip */}
      <div className="w-full py-8 md:py-16 border-t border-[#1a1a1a]/30">
        <CustomContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {INFO_BLURBS.map((text, i) => (
              <div
                key={i}
                className="text-[#4A4A4A] font-serif text-base md:text-lg leading-relaxed"
              >
                {text}
                <a href="#" className="ml-1 underline text-[#1a1a1a]">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </CustomContainer>
      </div>

      {/* 5. Nearby Things To Do */}
      <div className="w-full py-16">
        <CustomContainer>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1a1a1a] leading-tight mb-8 md:mb-12">
              Nearby Things To Do
            </h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
              {[
                "All",
                "Family & Children's Activities",
                "Fitness",
                "Golf",
                "Ski",
                "Spa",
              ].map((filter, i) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider border transition-all
                  ${
                    i === 0
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
            {NEARBY_THINGS.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-[#1a1a1a]/10 hover:shadow-md transition-shadow"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#4A4A4A]/60 mb-2 block font-poppins">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-medium text-[#1a1a1a] leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#1a1a1a] mb-4">
                  {item.distance}
                </p>
                <p className="font-serif text-base md:text-lg text-[#4A4A4A] border-t border-[#1a1a1a]/30 pt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </CustomContainer>
      </div>

      {/* 6. Local Attractions */}
      <div className="w-full py-8 md:py-16">
        <CustomContainer>
          <div className="text-center mb-6 md:mb-10">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1a1a1a] leading-tight">
              Local Attractions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {LOCAL_ATTRACTIONS.map((attr, i) => (
              <div
                key={i}
                className="bg-white p-4 md:p-8 rounded border border-[#1a1a1a]/20 hover:shadow-md transition-all"
              >
                <h3 className="font-serif text-lg font-medium text-[#1a1a1a] leading-tight mb-1">
                  {attr.name}
                </h3>
                <p className="text-xs text-[#4A4A4A]/70 uppercase font-poppins">
                  {attr.location}
                </p>
              </div>
            ))}
          </div>
        </CustomContainer>
      </div>

      {/* 7. FAQ Section */}
      <section className="py-12 md:py-24 bg-white">
        <CustomContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              sub="Information"
              title="Frequently Asked Questions"
            />

            <div className="space-y-3 md:space-y-4 mt-6 md:mt-0">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-serif text-base md:text-lg text-neutral-800 pr-2">
                      {faq.q}
                    </span>
                    {openIndex === idx ? (
                      <Minus size={20} className="text-[#c6a87c]" />
                    ) : (
                      <Plus size={20} className="text-neutral-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 md:p-6 pt-0 text-neutral-500 font-poppins text-xs md:text-sm leading-relaxed border-t border-dashed border-neutral-200 mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </CustomContainer>
      </section>
    </div>
  );
}
