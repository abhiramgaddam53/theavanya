import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  sub: string;
  title: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  sub,
  title,
  align = "left",
  light = false,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
  >
    <span
      className={`block text-xs font-bold tracking-[0.2em] uppercase mb-3 font-poppins ${
        light ? "text-neutral-400" : "text-neutral-500"
      }`}
    >
      {sub}
    </span>
    <h2
      className={`text-4xl md:text-5xl font-serif ${
        light ? "text-white" : "text-neutral-900"
      }`}
    >
      {title}
    </h2>
    <div
      className={`mt-6 w-16 h-[1px] ${
        light ? "bg-white/30" : "bg-neutral-300"
      } ${align === "center" ? "mx-auto" : ""}`}
    />
  </motion.div>
);

export default SectionHeading;
