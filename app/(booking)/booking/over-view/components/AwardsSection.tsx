import React from "react";
import { motion } from "framer-motion";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import { AWARDS } from "../constants";

const AwardsSection = () => {
  return (
    <section className="py-16 bg-white">
      <CustomContainer>
        <SectionHeading sub="Honors & Distinctions" title="Recognized for What We Preserve, Not What We Display." align="center" />

        <div className="mt-4 md:mt-12 flex flex-col gap-4 items-center">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {AWARDS.slice(0, 2).map((award) => (
              <motion.div
                key={award.id}
                className="
                  flex items-center gap-4 p-6
                  bg-white border border-neutral-200
                  shadow-lg rounded-lg hover:shadow-xl
                  transition-all duration-300
                  w-full max-w-[520px]
                "
              >
                <div className="p-4 bg-neutral-100 rounded-full text-[#c6a87c] shrink-0">
                  <award.icon size={24} />
                </div>

                <h4 className="font-poppins text-lg text-neutral-800">
                  {award.title}
                </h4>
              </motion.div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center w-full">
            {AWARDS.slice(2, 3).map((award) => (
              <motion.div
                key={award.id}
                className="
                  flex items-center gap-4 p-6
                  bg-white border border-neutral-200
                  shadow-lg rounded-lg hover:shadow-xl
                  transition-all duration-300
                  w-full max-w-[520px]
                "
              >
                <div className="p-4 bg-neutral-100 rounded-full text-[#c6a87c] shrink-0">
                  <award.icon size={24} />
                </div>

                <h4 className="font-serif text-lg text-neutral-800">
                  {award.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AwardsSection;
