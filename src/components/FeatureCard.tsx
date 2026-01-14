import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      {/* Outer container with a very subtle border glow on hover */}
      <div className="relative h-full p-6 rounded-2xl bg-[#0f172a]/40 border border-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan/50 group-hover:bg-[#0f172a]/60 flex flex-col items-start shadow-xl">
        
        {/* Animated Icon Container */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/10 to-blue-500/10 border border-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-cyan filter drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
          </div>
        </div>

        {/* Text content stays prominent */}
        <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-cyan transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Subtle "Learn More" or accent line to fill space beautifully */}
        <div className="mt-auto pt-4 w-full">
          <div className="h-[2px] w-0 bg-gradient-to-r from-cyan to-transparent group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;