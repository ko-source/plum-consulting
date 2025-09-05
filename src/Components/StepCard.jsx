import React from "react";
import { motion } from "framer-motion";

export function StepCard({ number = "01", title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className="flex items-start gap-5 rounded-3xl bg-white p-6 sm:p-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
    >
      <div className="text-[#BB00C9] text-[72px] leading-none font-extrabold tabular-nums select-none">
        {number}
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg sm:text-xl font-bold text-[#000]">
          {title}
        </h3>
        <p className="mt-2 text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}