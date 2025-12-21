import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";
import CustomContainer from "./CustomContainer";
import { HERO_SLIDES } from "../constants";

const HeroSplit = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top 70% VH Image Carousel */}
      <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[current].image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Bottom Content Section */}
      <section className="bg-white py-12 md:py-32 min-h-[30vh]">
        <CustomContainer>
          <div className="flex flex-col items-center">
            {/* Welcome Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center w-full mb-8 md:mb-20"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4 md:mb-6 text-neutral-900">
                Experience wellness at our luxury hotel <br /> in the heart of
                HITEC City.
              </h2>
              <p className="text-neutral-500 font-poppins font-light text-sm md:text-lg leading-relaxed max-w-5xl mx-auto px-2">
                Located in the heart of Raheja Mindspace IT Park, The avanya
                Hyderabad Mindspace is a luxurious hotel with 427 rooms catering
                to business and leisure travellers. The hotel in HITEC City
                offers state-of-the-art facilities and a sanctuary of calm.
              </p>
            </motion.div>

            {/* Added Info Cards Section */}
            <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-6 max-w-5xl">
              {/* Festive Celebrations Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-neutral-200 rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-sm bg-white"
              >
                <div className="p-3 bg-neutral-100 rounded-full text-neutral-600">
                  <Gift size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-neutral-900 mb-2">
                    Festive Celebrations at avanya
                  </h3>
                  <p className="text-xs md:text-sm font-poppins text-neutral-600 leading-relaxed">
                    Indulge in the joy of the season with curated cuisine,
                    crafted beverages, and spirited celebrations. Your perfect
                    holiday moments await across our festive feasts and
                    enchanting experiences.
                  </p>
                </div>
                <button className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors whitespace-nowrap">
                  Learn More &rarr;
                </button>
              </motion.div>

              {/* Credit Card Offer Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border border-neutral-200 rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-sm bg-white"
              >
                <div className="flex items-center gap-6 w-full">
                  <div className="w-16 h-10 bg-neutral-900 rounded-md relative overflow-hidden flex-shrink-0">
                    <div className="absolute top-2 left-2 w-4 h-3 bg-[#c6a87c] rounded-[2px]" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-serif font-bold text-neutral-900">
                      Earn up to 4 Free Nights and Silver Elite Status
                    </h3>
                    <p className="text-xs font-poppins text-neutral-500 mt-1">
                      Get the Marriott Bonvoy® HDFC Bank Credit Card. Spend
                      requirements; see terms.
                    </p>
                  </div>
                </div>
                <button className="px-6 py-3 bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-colors whitespace-nowrap">
                  Apply Now
                </button>
              </motion.div>
            </div>
          </div>
        </CustomContainer>
      </section>
    </>
  );
};

export default HeroSplit;
