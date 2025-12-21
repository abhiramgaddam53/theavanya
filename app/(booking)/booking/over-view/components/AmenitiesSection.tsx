import React from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle, Briefcase, Star, Car } from "lucide-react";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import { AMENITIES } from "../constants";

const AmenitiesSection = () => {
  return (
    <section className="py-8 md:py-16 bg-[#1a1a1a] text-white">
      <CustomContainer>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-12">
          <div>
            <SectionHeading
              sub="Amenities"
              title="Curated For You"
              align="left"
              light={true}
            />
            <p className="text-gray-300 font-poppins mb-8 md:mb-12 leading-relaxed max-w-md text-sm md:text-base">
              From our world-class fitness studio to the serene outdoor pool,
              every detail is designed to elevate your stay. Experience a
              seamless blend of productivity and relaxation.
            </p>
            <button className="px-8 py-4 bg-[#f5f1eb] text-secondary-bg text-xs font-bold uppercase tracking-widest hover:bg-[#ede8df] transition-colors">
              Explore All Amenities
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-8 md:pt-6">
            {AMENITIES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-neutral-100 rounded-full shadow-sm text-neutral-800">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">{item.label}</h4>
                  <span className="text-xs text-neutral-500 font-poppins uppercase tracking-wider">
                    Included
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* HOTEL INFORMATION SUB-SECTION */}
        <div className="border-t border-gray-600 pt-8 md:pt-12 mt-4 md:mt-6">
          <h3 className="text-xl md:text-2xl font-serif text-white mb-6 md:mb-6 uppercase tracking-widest font-bold">
            Hotel Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 font-poppins text-xs md:text-sm text-gray-300">
            {/* Check-in/Out */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 text-gray-400" size={18} />
                <div>
                  <p className="font-bold text-white">Check-in: 3:00 pm</p>
                  <p className="font-bold text-white">Check-out: 12:00 pm</p>
                  <p className="mt-2 text-xs opacity-80">
                    Minimum Age to Check In: 18
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gray-400" size={18} />
                <a href="#" className="underline hover:text-white">
                  See Accessibility Features
                </a>
              </div>
            </div>

            {/* General */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Briefcase className="text-gray-400" size={18} />
                <span>Front Desk (24 hours)</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-gray-400" size={18} />
                <div>
                  <span className="block font-bold text-white">Pet Policy</span>
                  <span className="text-xs">Pets Not Allowed</span>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Car className="mt-1 text-gray-400" size={18} />
                <div>
                  <p className="font-bold text-white">Parking</p>
                  <ul className="mt-1 space-y-1 text-xs">
                    <li>Complimentary On-Site Parking</li>
                    <li>Complimentary Valet Parking</li>
                    <li>Electric Car Charging Station</li>
                    <li className="opacity-70 mt-2">
                      Additional Parking Information: Basement parking with
                      security and CCTV
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AmenitiesSection;
