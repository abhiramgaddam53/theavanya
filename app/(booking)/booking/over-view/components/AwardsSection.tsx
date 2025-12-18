import React from "react";
import { motion } from "framer-motion";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import { AWARDS } from "../constants";

const AwardsSection = () => {
  return (
    <section className="py-24 bg-primary-bg border-t border-neutral-100">
      <CustomContainer>
        <SectionHeading sub="Recognition" title="Awards" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-3 mt-16 items-start justify-items-center">
          {AWARDS.map((award, idx) => {
            const baseClass =
              "flex items-center p-6 bg-[#f5f1eb] border border-neutral-200 shadow-lg rounded-xl gap-4 hover:shadow-xl transition-all duration-300 w-full max-w-[520px]";
            const thirdClass = "md:col-span-2 justify-self-center";

            return (
              <motion.div
                key={award.id}
                whileHover={{ y: -5 }}
                className={`${baseClass} ${idx === 2 ? thirdClass : ""}`}
              >
                <div className="p-4 bg-[#ede8df] rounded-full text-[#c6a87c]">
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
