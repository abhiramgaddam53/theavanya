import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Imported ChevronRight
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import Button from "../../../../../components/Button";
import { OFFERS } from "../constants";

const AppleCardsOffers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalCards = OFFERS.length;

  // Updated handler to accept direction
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 450; // Adjusted scroll distance for card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Track scroll position for dots
  React.useEffect(() => {
    const handleScrollUpdate = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
        const index = Math.round(scrollPercentage * (totalCards - 1));
        setCurrentIndex(index);
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScrollUpdate);
      return () => ref.removeEventListener("scroll", handleScrollUpdate);
    }
  }, [totalCards]);

  return (
    <section className="py-16 bg-white">
      <CustomContainer noRightPadding>
        <SectionHeading sub="Specials" title="Offers & Packages" align="left" />

        <div className="mt-8 relative">
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mr-6"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {OFFERS.map((offer, idx) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer group shrink-0"
                style={{
                  height: "450px",
                  width: "calc(28.57% - 17px)", // Shows 3.5 cards: 100% / 3.5 ≈ 28.57%
                }}
              >
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/40 transition-colors duration-500" />
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute top-0 left-0 p-10 z-20 w-full h-full flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase text-white/90 font-poppins tracking-widest">
                      {offer.category}
                    </p>
                    <h3 className="text-4xl md:text-5xl font-serif text-white leading-[1.1] max-w-[90%] shadow-black/10 drop-shadow-lg mt-3">
                      {offer.title}
                    </h3>
                  </div>

                  <div className="transition-colors duration-300">
                    <p className="text-white/90 text-lg font-poppins mb-6 leading-relaxed max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {offer.desc}
                    </p>

                    <div className="pointer-events-auto">
                      <Button
                        text="View Offer"
                        variant="underline-white"
                        size="none"
                        className="drop-shadow-md text-xs"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation below cards */}
          <div className="flex items-center justify-between mt-6 pr-[91px]">
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {OFFERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (scrollRef.current) {
                      const cardWidth =
                        scrollRef.current.scrollWidth / totalCards;
                      scrollRef.current.scrollTo({
                        left: cardWidth * idx,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`h-[2px] transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-neutral-900"
                      : "w-8 bg-neutral-300 hover:bg-neutral-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => handleScroll("left")}
                className="p-4 rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 flex items-center justify-center group"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="p-4 rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 flex items-center justify-center group"
                aria-label="Scroll Right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AppleCardsOffers;
