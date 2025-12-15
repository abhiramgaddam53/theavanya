import React from "react";
import { motion } from "framer-motion";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import { AWARDS } from "../constants";

const AwardsSection = () => {
  return (
    <section className="py-24 bg-white border-t border-neutral-100">
      <CustomContainer>
        <SectionHeading sub="Recognition" title="Awards" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {AWARDS.map((award) => (
            <motion.div
              key={award.id}
              whileHover={{ y: -5 }}
              className="flex items-center p-6 bg-white border border-neutral-100 shadow-lg rounded-xl gap-4 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 bg-neutral-50 rounded-full text-[#c6a87c]">
                <award.icon size={24} />
              </div>
              <h4 className="font-serif text-lg leading-tight text-neutral-800">
                {award.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default AwardsSection;
