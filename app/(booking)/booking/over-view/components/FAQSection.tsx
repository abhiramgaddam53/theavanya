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
    <section className="py-24 bg-primary-bg">
      <CustomContainer>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            sub="Information"
            title="Frequently Asked Questions"
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#f5f1eb] border border-neutral-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#ede8df] transition-colors"
                >
                  <span className="font-serif text-lg text-neutral-800">
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
                      <div className="p-6 pt-0 text-neutral-500 font-poppins text-sm leading-relaxed border-t border-dashed border-neutral-200 mt-2">
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
