import React from "react";
import { motion } from "framer-motion";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import { AWARDS } from "../constants";

const AwardsSection = () => {
  return (
    <section className="py-16 bg-white border-t border-neutral-100">
      <CustomContainer>
        <SectionHeading sub="Recognition" title="Awards" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 items-start justify-items-center">
          {AWARDS.map((award, idx) => {
            const baseClass =
              "flex items-center p-6 bg-white border border-neutral-200 shadow-lg rounded-lg gap-4 hover:shadow-xl transition-all duration-300 w-full max-w-[520px]";
            const thirdClass = "md:col-span-2 justify-self-center";

            return (
              <motion.div
                key={award.id}
                whileHover={{ y: -5 }}
                className={`${baseClass} ${idx === 2 ? thirdClass : ""}`}
              >
                <div className="p-4 bg-neutral-100 rounded-full text-[#c6a87c]">
                  <award.icon size={24} />
                </div>
                <h4 className="font-serif text-lg leading-tight text-neutral-800">
                  {award.title}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </CustomContainer>
    </section>
  );
};

export default AwardsSection;
