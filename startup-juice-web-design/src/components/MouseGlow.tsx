import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Mouse following glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-juice/20 blur-[150px] mix-blend-screen"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 150,
          mass: 0.5,
        }}
      />
      
      {/* Auto moving glow */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full bg-juice-dark/10 blur-[150px] mix-blend-screen"
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          top: "50%",
          left: "50%",
          marginTop: "-500px",
          marginLeft: "-500px",
        }}
      />
    </div>
  );
}
