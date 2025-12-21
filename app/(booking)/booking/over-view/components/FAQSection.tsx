import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";
import { FAQS } from "../constants";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="py-12 md:py-24 bg-white">
      <CustomContainer>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            sub="Information"
            title="Frequently Asked Questions"
          />

          <div className="space-y-3 md:space-y-4 mt-6 md:mt-0">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-serif text-base md:text-lg text-neutral-800 pr-2">
                    {faq.q}
                  </span>
                  {openIndex === idx ? (
                    <Minus size={20} className="text-[#c6a87c]" />
                  ) : (
                    <Plus size={20} className="text-neutral-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-6 pt-0 text-neutral-500 font-poppins text-xs md:text-sm leading-relaxed border-t border-dashed border-neutral-200 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default FAQSection;
