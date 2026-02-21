import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-[15%] w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
        animate={{ 
          y: [0, 60, 0],
          x: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-accent/30 blur-2xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}
