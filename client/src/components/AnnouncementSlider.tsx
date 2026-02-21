import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementSlider() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-[80px] md:top-[100px] w-full z-40 overflow-hidden bg-gradient-to-r from-primary/30 to-secondary/30 backdrop-blur-sm border-y border-white/50 py-2 group">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/40 hover:bg-white/60 shadow-lg hover:shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-110"
        aria-label="Close announcement"
      >
        <X className="w-5 h-5 text-foreground/90 hover:text-foreground" />
      </button>
      <motion.div
        className="whitespace-nowrap flex space-x-12"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 15, 
          ease: "linear" 
        }}
      >
        <span className="text-sm font-semibold text-foreground/80 tracking-wide">🍬 Get 10% Off on All Orders for 2 Months! 🍭</span>
        <span className="text-sm font-semibold text-foreground/80 tracking-wide">🍩 Creating Digital Magic Daily! 🧁</span>
        <span className="text-sm font-semibold text-foreground/80 tracking-wide">🍪 Let's Build Something Beautiful! 🍫</span>
        <span className="text-sm font-semibold text-foreground/80 tracking-wide">🍬 Get 10% Off on All Orders for 2 Months! 🍭</span>
      </motion.div>
    </div>
  );
}
