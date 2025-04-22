import React from "react";
import { motion } from "framer-motion";

const MarqueeText = () => {
  const text = (
    <>
      welcome to my{" "}
      <span className="font-bold italic">portfolio</span>
      . let's work together! ▪
    </>
  );

  return (
    <div className="marquee-container absolute left-0 w-screen overflow-hidden bg-black text-white py-6 ">
      <motion.div
        className="flex text-5xl font-playfair"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
        style={{ whiteSpace: "nowrap" }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mr-6">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
