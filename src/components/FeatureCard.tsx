import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, image, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="glass-card h-full p-3 sm:p-4 lg:p-6 hover:border-cyan/30 transition-all duration-300 relative overflow-hidden">
        {/* Icon */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-electric/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-glow-sm transition-all duration-300">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan" />
        </div>

        {/* Content */}
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-1 sm:mb-2">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">{description}</p>

        {/* App Screenshot Preview */}
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-[9/16] max-h-32 sm:max-h-48 lg:max-h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-cyan/5 blur-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
