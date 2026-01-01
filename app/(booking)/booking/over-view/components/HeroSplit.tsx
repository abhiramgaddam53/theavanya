import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Crown ,Flame } from "lucide-react";
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
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-neutral-900">
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
      <section className="bg-white py-24 min-h-screen flex items-center justify-center">
        <CustomContainer  >
          <div className="flex flex-col items-center">
            {/* Welcome Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center w-full mb-8 md:mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-4 md:mb-6 text-neutral-900">
                Where Hyderabad Comes To Breathe Again.
              </h2>
              <p className="text-neutral-500 font-poppins font-light text-[12px] md:text-lg leading-relaxed max-w-5xl mx-auto px-2">
              A 5‑acre organic farm retreat with just three unique cabins, crafted for slow mornings, starry bonfires, and intimate gatherings minutes away from the city.
              </p>
            </motion.div>

            {/* Added Info Cards Section */}
            <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-6 max-w-5xl">
              {/* Seasonal Forest Experiences Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-neutral-200 rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-sm bg-white"
              >
                <div className="p-3 bg-neutral-100 rounded-full text-neutral-600">
                  <Leaf size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-neutral-900 mb-2">
                  Slow Life, Close To The City

                  </h3>
                  <p className="text-xs md:text-sm font-poppins text-neutral-600 leading-relaxed">
                  Check into a quiet 5‑acre plantation near Kompally and swap traffic noise for birdsong, bonfires, and barefoot walks on grass.

                  </p>
                </div>
                <button className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors whitespace-nowrap">
                  Discover Experiences &rarr;
                </button>
              </motion.div>

              {/* Privileges Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border border-neutral-200 rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-sm bg-white"
              >
                <div className="p-3 bg-neutral-100 rounded-full text-neutral-600">
                  <Flame size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-neutral-900 mb-2">
                  Stays Made For Moments
                  </h3>
                  <p className="text-xs md:text-sm font-poppins text-neutral-600 leading-relaxed">
                  From pre‑wedding shoots and birthday nights to digital detox weekends, each cabin is designed as a cozy, camera‑ready backdrop for your stories.
                  </p>
                </div>
                <button className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors whitespace-nowrap">
                  Explore Privileges &rarr;
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
