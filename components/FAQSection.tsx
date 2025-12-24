"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggle: () => void;
}

function FAQItem({ question, answer, isOpen, toggle }: FAQItemProps) {
    return (
        <div className="border-b border-[#1a1a1a]/20 py-5 cursor-pointer last:border-0" onClick={toggle}>
            <button
                className="w-full flex items-center justify-between text-left group cursor-pointer"
            >
                <h3 className="font-serif text-3xl text-[#1a1a1a] pr-8 leading-tight">
                    {question}
                </h3>
                <span className="shrink-0 relative w-6 h-6 flex items-center justify-center">
                    <motion.svg
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </motion.svg>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="font-poppins text-[#1a1a1a]/70 font-light leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface FAQSectionProps {
    tagline: string;
    description: string;
    faqs: {
        question: string;
        answer: string;
    }[];
}

export default function FAQSection({ tagline, description, faqs }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="px-25 py-25">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-6 space-y-6">
                    <h2 className="font-serif text-6xl text-[#1a1a1a] leading-none">
                        {tagline}
                    </h2>
                    <p className="font-poppins text-[#1a1a1a]/70 text-xl font-light">
                        {description}
                    </p>
                </div>

                {/* FAQ List */}
                <div className="w-full">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
