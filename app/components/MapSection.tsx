"use client";

import React from "react";
import { Phone, Plane, Bus, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-24">
      {/* Custom Container Style */}
      <div className="w-full px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/3 space-y-12">
            {/* Section Heading Inline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-left"
            >
              <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-3 font-poppins text-neutral-400">
                Location
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                Getting Here
              </h2>
              <div className="mt-6 w-16 h-[1px] bg-white/30" />
            </motion.div>

            <div className="space-y-6 font-poppins text-neutral-300">
              <p className="leading-relaxed">
                Asterisks Inc | Creative Digital Studio
                <br />
                Shwetha Shubham, Sujeets Cricket Academy Rd, Jaibery Colony,
                Kompally,
                <br />
                Hyderabad, Telangana 500100
              </p>
              <div className="flex items-center gap-3 text-white">
                <Phone size={18} />
                <a
                  href="tel:+914067676767"
                  className="hover:text-[#c6a87c] transition-colors"
                >
                  +91 40-67676767
                </a>
              </div>
            </div>

 
          </div>

          <div className="w-full md:w-2/3 h-[500px] bg-neutral-800 rounded-sm rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.450072682199!2d78.48088157463017!3d17.533745798573385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb854db6e91eff%3A0xff94bacf06626aa5!2sAsterisks%20Inc%20%7C%20Creative%20Digital%20Studio!5e0!3m2!1sen!2sin!4v1765706513189!5m2!1sen!2sin"
              loading="lazy"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              title="The avanya Hyderabad Mindspace Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
