import React from "react";
import { motion } from "framer-motion";
import { BedDouble, Users } from "lucide-react";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import { ROOMS } from "../constants";

const RoomsSection = () => {
  return (
    <section className="py-12 bg-primary-bg">
      <CustomContainer>
        {/* Heading */}
        <SectionHeading sub="Accommodations" title="Rooms & Suites" />

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer relative overflow-hidden rounded-sm aspect-[3/4] shadow-2xl"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <div className="flex justify-between items-end border-t border-white/20 pt-4">
                  <div className="text-left">
                    <h3 className="text-2xl font-serif leading-tight mb-1">
                      {room.name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest opacity-70">
                      View Details
                    </span>
                  </div>

                  <div className="text-right flex flex-col items-end gap-1 text-xs">
                    <div className="flex items-center gap-2">
                      <BedDouble size={14} />
                      <span>{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} />
                      <span>{room.guests}</span>
                    </div>
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

export default RoomsSection;
