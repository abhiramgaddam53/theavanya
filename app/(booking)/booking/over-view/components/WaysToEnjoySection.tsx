import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import CustomContainer from "./CustomContainer";
import { WAYS_TO_ENJOY } from "../constants";

const WaysToEnjoySection = () => {
  const [activeTab, setActiveTab] = useState("wellness");

  return (
    <section className="py-24 min-h-screen flex items-center justify-center bg-white text-neutral-900">
      <CustomContainer>
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif mb-8 md:mb-12">
            Choose Your Pace. We’ll Handle the Rest.
          </h2>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 md:space-x-12 border-b border-neutral-200 w-full md:w-auto">
            {WAYS_TO_ENJOY.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`pb-3 cursor-pointer font-poppins md:pb-4 text-xs md:text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === item.id
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-600"
                  }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 bg-[#c6a87c]"
                    style={{ height: 3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {WAYS_TO_ENJOY.map(
              (item) =>
                item.id === activeTab && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-left"
                  >
                    <div
                      className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg"
                      style={{ height: "300px" }}
                    >
                      <style jsx>{`
                        @media (min-width: 768px) {
                          div {
                            height: 500px !important;
                          }
                        }
                      `}</style>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4 block">
                        {item.tag ? item.tag.toUpperCase() : item.label.toUpperCase()}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-8">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 font-poppins leading-relaxed mb-6 md:mb-10 text-sm md:text-lg">
                        {item.desc}
                      </p>
                      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-6">
                        <button className="px-6 font-poppins md:px-8 py-3 md:py-4 bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-[#c6a87c] transition-colors shadow-lg">
                          {item.cta1 || "Book Now"}
                        </button>
                        <button className="flex font-poppins items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#c6a87c] transition-colors">
                          {item.cta2 || "Learn More"} <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </CustomContainer>
    </section>
  );
};

export default WaysToEnjoySection;
