import { motion } from "framer-motion";
import { MapPin, Clock, CreditCard, Home } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: MapPin,
    title: "Discover Nearby",
    description: "Find available parking spots near your destination with real-time availability.",
  },
  {
    icon: Clock,
    title: "Book in Seconds",
    description: "Reserve your spot instantly. Choose your time slot and you're all set.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Pay safely with Stripe. Your transactions are protected and encrypted.",
  },
  {
    icon: Home,
    title: "Earn as a Host",
    description: "List your driveway and start earning. Set your own prices.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
      
      <div className="relative section-container px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-cyan text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            The DriveBay Advantage
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tighter">
            Smart Features for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">Modern Drivers.</span>
          </h2>
        </div>

        {/* 2 columns on mobile, 4 on desktop - looks great without photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;