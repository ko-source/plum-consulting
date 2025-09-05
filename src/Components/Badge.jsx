import React from "react";
import { motion } from "framer-motion";
const Badge = ({ textPart1, textPart2, color1, color2, shadow }) => {
  return (
    <motion.div
      className="inline-flex bg-fixed items-center justify-center px-6 py-2  rounded-full shadow-lg"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: shadow || "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: 0.5, duration: 1 }}
    >
      <span className="text-sm font-medium  pr-1" style={{ color: color1 || "#BB00C9" }}>
        {textPart1}
      </span>
      <span className="text-sm font-medium" style={{ color: color2 || "#000000" }}>
         {textPart2}
      </span>
    </motion.div>
  );
};

export default Badge;