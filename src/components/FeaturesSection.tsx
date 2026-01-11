import { motion } from "framer-motion";
import { MapPin, Clock, CreditCard, Home } from "lucide-react";
import FeatureCard from "./FeatureCard";
import screenSearch from "@/assets/screen-search.jpg";
import screenBooking from "@/assets/screen-booking.jpg";
import screenPayment from "@/assets/screen-payment.jpg";
import screenList from "@/assets/screen-list.jpg";

const features = [
  {
    icon: MapPin,
    title: "Discover Nearby",
    description: "Find available parking spots near your destination with real-time availability.",
    image: screenSearch,
  },
  {
    icon: Clock,
    title: "Book in Seconds",
    description: "Reserve your spot instantly. Choose your time slot and you're all set.",
    image: screenBooking,
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Pay safely with Stripe. Your transactions are protected and encrypted.",
    image: screenPayment,
  },
  {
    icon: Home,
    title: "Earn as a Host",
    description: "List your driveway and start earning. Set your own prices.",
    image: screenList,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-16 sm:py-24 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy to-background" />
      
      <div className="relative section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm text-cyan mb-3 sm:mb-4"
          >
            Powerful Features
          </motion.span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-cyan">Park Smarter</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            DriveBay combines cutting-edge technology with a simple interface to revolutionize how you find parking.
          </p>
        </motion.div>

        {/* Features Grid - 2 columns on mobile, 4 on larger screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
