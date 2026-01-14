import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, Star } from "lucide-react";

const trustFactors = [
  {
    icon: ShieldCheck,
    title: "Secure & Verified",
    description: "Every host and driveway is manually verified to ensure your vehicle's safety.",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "No more waiting. Book and park in under 60 seconds with our streamlined app.",
  },
  {
    icon: HeartHandshake,
    title: "Community Driven",
    description: "Built by urban drivers for urban drivers to solve the parking crisis together.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24 lg:py-40 bg-[#030712] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 section-container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Trust Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan text-xs font-black uppercase tracking-[0.3em] mb-4 block">Our Commitment</span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter">
              Built on <span className="text-cyan">Trust.</span>
            </h2>
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-10">
              We're just getting started, but our mission is clear: To make urban parking stress-free, transparent, and affordable for everyone.
            </p>
            
            {/* Founders Note/Badge */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan to-blue-500 flex items-center justify-center text-black font-black">
                DB
              </div>
              <div>
                <p className="text-white font-bold text-sm">DriveBay Team</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">Est. 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Trust Cards (Instead of reviews) */}
          <div className="grid gap-6">
            {trustFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan/30 transition-all duration-500"
              >
                <div className="flex gap-6 items-start">
                  <div className="p-3 rounded-2xl bg-cyan/10 border border-cyan/20 text-cyan group-hover:scale-110 transition-transform">
                    <factor.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{factor.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{factor.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;