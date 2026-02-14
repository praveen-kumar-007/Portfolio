import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  badge: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHeader = ({ badge, title, description, children }: PageHeaderProps) => {
  return (
    <div className="relative py-12 md:py-32 overflow-hidden">
      {/* Enhanced gradient orbs (hide on small screens) */}
      <div className="hidden sm:block absolute top-0 left-1/4 sm:w-[320px] md:w-[500px] sm:h-[320px] md:h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="hidden sm:block absolute bottom-0 right-1/4 sm:w-[260px] md:w-[400px] sm:h-[260px] md:h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[220px] md:w-[300px] sm:h-[220px] md:h-[300px] bg-neon-purple/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium tracking-widest text-sm uppercase mb-6"
          >
            {badge}
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-7xl font-display font-bold tracking-wider mb-6"
          >
            <span className="text-gradient">{title}</span>
          </motion.h1>
          
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}
          
          {children}
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
};

export default PageHeader;
