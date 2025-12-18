import React from "react";
import Image from "next/image";
import CustomContainer from "../over-view/components/CustomContainer";

// Mock Data
const OUTLETS = [
  {
    id: 1,
    title: "Heavenly Spa by avanya™",
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
    question:
      "Does The avanya Hyderabad Mindspace have a fitness center on-site?",
    answer: "Yes, we offer a state-of-the-art fitness center open 24/7.",
  },
  {
    question: "Does The avanya Hyderabad Mindspace have a pool on-site?",
    answer: "Yes, enjoy our outdoor swimming pool and kids pool.",
  },
  {
    question: "Does The avanya Hyderabad Mindspace have an on-site spa?",
    answer: "Yes, the Heavenly Spa by avanya™ offers a variety of treatments.",
  },
  {
    question:
      "What are some local attractions and things to do near The avanya Hyderabad Mindspace?",
    answer: "We are close to Inorbit Mall, Golconda Fort, and Shilparamam.",
  },
];

export default function WellnessPage() {
  return (
    <div className="w-full bg-primary-bg pb-32">
      {/* 1. Hero Image Section */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-gray-200">
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
          <div className="max-w-[900px] mx-auto py-16 md:py-10 text-center">
            <p className="text-[#4A4A4A] tracking-tight text-sm md:text-base mb-6 font-medium font-poppins">
              Welcome to The avanya Hyderabad Mindspace
            </p>
             <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-snug mb-6 text-neutral-900 max-w-4xl">
  Explore notable attractions from our spa hotel in Hyderabad
</h2>

          </div>
        </CustomContainer>
      </div>

      {/* 3. On-Site Outlets Section */}
      <div className="w-full mb-20">
        <CustomContainer>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-[1.5rem] md:text-2xl lg:text-[2.5rem] font-serif text-[#1a1a1a] leading-tight">
              On-Site Outlets
            </h2>
            <div className="hidden md:flex gap-4 text-sm text-[#4A4A4A]">
              <span>total experiences (4)</span>
              <span>included experiences (4)</span>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x md:grid md:grid-cols-4 md:overflow-visible scrollbar-hide">
            {OUTLETS.map((outlet) => (
              <div
                key={outlet.id}
                className="relative min-w-[280px] md:min-w-0 h-[400px] rounded-lg overflow-hidden group cursor-pointer snap-center"
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
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider rounded mb-3">
                    {outlet.type}
                  </span>
                  <h3 className="text-white font-serif text-[1.25rem] md:text-xl leading-tight mb-4">
                    {outlet.title}
                  </h3>
                  <button className="text-white text-sm border border-white/50 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300">
                    Learn More +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CustomContainer>
      </div>

      {/* 4. Informational Text Strip */}
      <div className="w-full mb-24 border-t border-[#1a1a1a]/10 pt-12">
        <CustomContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {INFO_BLURBS.map((text, i) => (
              <div
                key={i}
                className="text-[#4A4A4A] font-serif text-[1rem] md:text-[1.125rem] leading-[1.6]"
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
      <div className="w-full mb-24">
        <CustomContainer>
          <div className="text-center mb-10">
            <h2 className="text-[1.5rem] md:text-2xl lg:text-[2.5rem] font-serif text-[#1a1a1a] leading-tight mb-6">
              Nearby Things To Do
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
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
                      : "bg-[#f5f1eb] text-[#4A4A4A] border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NEARBY_THINGS.map((item, i) => (
              <div
                key={i}
                className="bg-[#f5f1eb] p-8 rounded-xl shadow-sm border border-[#1a1a1a]/10 hover:shadow-md transition-shadow"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#4A4A4A]/60 mb-2 block font-poppins">
                  {item.category}
                </span>
                <h3 className="font-serif text-[1.125rem] font-medium text-[#1a1a1a] leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#1a1a1a] mb-4">
                  {item.distance}
                </p>
                <p className="text-[1rem] md:text-[1.125rem] font-serif text-[#4A4A4A] border-t border-[#1a1a1a]/10 pt-4 leading-[1.6]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </CustomContainer>
      </div>

      {/* 6. Local Attractions */}
      <div className="w-full mb-24">
        <CustomContainer>
          <div className="text-center mb-10">
            <h2 className="text-[1.5rem] md:text-2xl lg:text-[2.5rem] font-serif text-[#1a1a1a] leading-tight">
              Local Attractions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {LOCAL_ATTRACTIONS.map((attr, i) => (
              <div
                key={i}
                className="p-6 bg-[#f5f1eb] rounded border border-[#1a1a1a]/10 hover:bg-[#f5f1eb] transition-colors"
              >
                <h3 className="font-serif text-[1.125rem] font-medium text-[#1a1a1a] leading-tight mb-1">
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
      <div className="w-full mb-24 pl-[64px] pr-[64px]">
        <h2 className="text-[1.5rem] md:text-2xl lg:text-[2.5rem] font-serif text-[#1a1a1a] leading-tight mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group border-b border-[#1a1a1a]/10 pb-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center font-serif font-medium text-[#1a1a1a] list-none leading-tight">
                <span className="text-[1rem] md:text-[1.125rem]">
                  {faq.question}
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </summary>
              <p className="text-[#4A4A4A] font-serif text-[1rem] md:text-[1.125rem] mt-4 leading-[1.6]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
