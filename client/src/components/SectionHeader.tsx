import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 max-w-2xl mx-auto px-4">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4 tracking-wider uppercase"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-display font-bold text-foreground"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"
      />
    </div>
  );
}
