import React from "react";
import { motion } from "framer-motion";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import Button from "../../../../../components/Button";
import { OFFERS } from "../constants";

const AppleCardsOffers = () => {
  return (
    <section className="py-24 bg-primary-bg">
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
              className="relative h-[70vh] rounded-[24px] overflow-hidden shadow-2xl cursor-pointer group"
              style={{ minHeight: 600 }}
            >
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/40 transition-colors duration-500" />
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover transition-transform duration-1000"
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

                  {/* CTA visible by default, description appears on hover */}
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
      </CustomContainer>
    </section>
  );
};

export default AppleCardsOffers;
