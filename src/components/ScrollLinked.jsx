// ScrollLinked.jsx
import { motion, useScroll } from "framer-motion";

export function ScrollLinked() {  // Ekspor bernama
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#181818",
        zIndex: 50,
      }}
    />
  );
}
