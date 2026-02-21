import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay: number;
}

export function ServiceCard({ icon: Icon, title, description, color, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className={`
        bg-gradient-to-br from-${color}/5 to-${color}/10 rounded-[2rem] p-8
        shadow-lg shadow-black/5
        border border-${color}/30
        hover:shadow-2xl hover:shadow-${color}/20
        transition-all duration-300
        group relative overflow-hidden
      `}
    >
      <div className={`
        absolute -right-8 -top-8 w-32 h-32 rounded-full 
        bg-gradient-to-br from-secondary to-transparent opacity-20 
        group-hover:scale-150 transition-transform duration-500 ease-out
      `} />
      
      <div className={`
        w-16 h-16 rounded-2xl mb-6 flex items-center justify-center
        bg-${color}/10 text-${color}-600
        group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white
        transition-all duration-300
      `}>
        <Icon size={32} />
      </div>

      <h3 className="text-xl font-bold font-display text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
