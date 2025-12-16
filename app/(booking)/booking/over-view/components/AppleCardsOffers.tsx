import React from "react";
import { motion } from "framer-motion";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import { OFFERS } from "../constants";

const AppleCardsOffers = () => {
  return (
    <section className="py-24 bg-white">
      <CustomContainer>
        <SectionHeading sub="Specials" title="Offers & Packages" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="relative h-[70vh] min-h-[600px] rounded-[40px] overflow-hidden shadow-2xl cursor-pointer group"
            >
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/40 transition-colors duration-500" />
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute top-0 left-0 p-10 z-20 w-full h-full flex flex-col justify-between">
                <div>
                  {/* Category Pill Removed */}
                  <h3 className="text-4xl md:text-5xl font-serif text-white leading-[1.1] max-w-[90%] shadow-black/10 drop-shadow-lg mt-8">
                    {offer.title}
                  </h3>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/90 text-lg font-poppins mb-8 leading-relaxed max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {offer.desc}
                  </p>
                  <button className="px-8 py-4 bg-white text-neutral-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#c6a87c] hover:text-white transition-colors shadow-xl">
                    View Offer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default AppleCardsOffers;
