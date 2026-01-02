import React from "react";
import { motion } from "framer-motion";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import { AWARDS } from "../constants";

const AwardsSection = () => {
  return (
    <section className=" py-16 md:py-24 flex items-center justify-center bg-white">
      <CustomContainer>
        <SectionHeading sub="Honors & Distinctions" title="Recognized for What We Preserve." align="center" />
        {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={"mb-4 md:mb-6 text-center" 
             }
          >
            <span
              className={"block text-[10px] font-bold tracking-[0.2em] uppercase mb-1 font-poppins text-neutral-500 " }
            >
            Honors & Distinctions             
            </span>
        
            <h2
              className={"text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-neutral-900 "}
            >
              Recognized for What We Preserve, <br/> <span className="line-through"  > Not What We Display.</span>
            </h2>
        
            <div
              className={" mt-3 w-12 h-[1px] mx-auto bg-neutral-300 "}
            />
          </motion.div> */}
        <div className="mt-4 md:mt-12 flex flex-col gap-4 items-center">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {AWARDS.slice(0, 4).map((award) => (
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

  
        </div>
      </CustomContainer>
    </section>
  );
};

export default AwardsSection;
