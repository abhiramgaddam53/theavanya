"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import { OFFERS } from "../constants";

const AppleCardsOffers = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
      const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of view width
      const targetScroll = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center mb-10 bg-white border-t border-neutral-100/50">
      <CustomContainer>
        <div className="mb-4">
          <h2 className="font-serif text-5xl tracking-tighter text-[#1a1a1a] leading-tight">
            Curated Moments. Singular Memories.
          </h2>
        </div>
        <div className="relative mt-4">
          {/* Horizontal Scrolling Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-5 md:gap-4 pb-12 pt-4 scrollbar-hide snap-x snap-mandatory pr-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {OFFERS.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[280px] sm:min-w-[320px] md:min-w-[360px] aspect-[3/4] shrink-0 snap-start snap-always rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 30vw"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

                {/* Content Overlay */}
                <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex flex-col items-start gap-3 z-10">
                  <span className="text-white/70 text-xs font-poppins font-semibold uppercase tracking-widest bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {item.category}
                  </span>
                  <h3 className="font-poppins text-white text-xl md:text-2xl font-medium leading-tight mt-2 max-w-[80%] drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>

                {/* Description at bottom left */}
                <div className="font-poppins absolute bottom-0 left-0 md:bottom-8 px-6 z-10">
                  <p className="text-white/80 text-xs md:text-sm font-poppins font-light leading-relaxed drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/50 pb-1 hover:border-white transition-colors">
                      {item.cta || "View Details ->"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-4 right-0 flex gap-4 pr-6 md:pr-0 z-20">
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
        </div>
      </CustomContainer>
    </section>
  );
};

export default AppleCardsOffers;
