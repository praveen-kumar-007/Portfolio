import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
  id?: string;
}

const GlowCard = ({ children, className = "", delay = 0, hoverEffect = true, id }: GlowCardProps) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      className={`relative group ${className}`}
    >
      {/* Subtle hover accent */}
      <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-slate-800/5 to-slate-700/5" />
      
      {/* Card content */}
      <div className="relative card-glass h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
