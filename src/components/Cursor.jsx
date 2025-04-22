import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";

const CustomCursorApp = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isInSection2, setIsInSection2] = useState(false);

  useEffect(() => {
    const section2 = document.getElementById("section-2"); // Ambil elemen langsung dari DOM

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (section2) {
        const rect = section2.getBoundingClientRect();
        setIsInSection2(
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
      }
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: isInSection2 ? "white" : "black",
    },
    text: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      height: 100,
      width: 100,
      mixBlendMode: "difference",
      border: `2px solid ${isInSection2 ? "black" : "white"}`,
      backgroundColor: isInSection2 ? "white" : "black",
    },
  };

  return (
    <div>
      <motion.div
        className="cursor fixed top-0 left-0 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
      />
      <div
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
        className="content"
      >
        {children}
      </div>
    </div>
  );
};

export default CustomCursorApp;
