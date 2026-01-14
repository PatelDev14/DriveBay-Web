import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import screenHome from "@/assets/screen-home.jpg";
import screenSearch from "@/assets/screen-search.jpg";
import screenBooking from "@/assets/screen-booking.jpg";
import screenPayment from "@/assets/screen-payment.jpg";
import screenList from "@/assets/screen-list.jpg";
import screenDriveways from "@/assets/screen-driveways.jpg";

const galleryItems = [
  { image: screenHome, caption: "Home", description: "Main Dashboard" },
  { image: screenSearch, caption: "Search", description: "Live Map View" },
  { image: screenBooking, caption: "Booking", description: "Reservation Flow" },
  { image: screenPayment, caption: "Checkout", description: "Secure Payment" },
  { image: screenList, caption: "Hosting", description: "Driveway Setup" },
  { image: screenDriveways, caption: "Requests", description: "Approve or Reject" },
];

// Animation Variants for the Stylish Entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card
    },
  },
};
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    rotateX: 25, 
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    scale: 1,
    transition: { 
      type: "spring" as Transition["type"], 
      stiffness: 100, 
      damping: 15 
    }
  },
};


const GallerySection = () => {
  return (
    <section id="gallery" className="relative py-24 lg:py-40 bg-[#030712] perspective-1000">
      {/* Dynamic Background Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-cyan/10 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <div className="section-container px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-[10px] font-black text-cyan uppercase tracking-[0.3em] mb-6"
          >
            Visual Experience
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Precision.</span>
          </h2>
        </div>

        {/* The Stylish Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="flex flex-col group relative"
            >
              {/* The Premium "Phone" Shell */}
              <div className="relative aspect-[9/19.5] rounded-[2.5rem] lg:rounded-[3.5rem] p-3 bg-gradient-to-b from-white/10 to-transparent border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:border-cyan/50 group-hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                
                {/* Dynamic Shine Layer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine pointer-events-none" />

                {/* Speaker/Sensor Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#030712] rounded-full z-30 border border-white/5 flex items-center justify-center">
                   <div className="w-6 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Internal Screen Container */}
                <div className="relative h-full w-full rounded-[1.8rem] lg:rounded-[2.8rem] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-contain" 
                  />
                  
                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </div>

              {/* Enhanced Labeling */}
              <div className="mt-6 text-center group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300">
                <h4 className="text-white font-black text-base lg:text-xl mb-1 tracking-tight group-hover:text-cyan transition-colors">
                  {item.caption}
                </h4>
                <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">
                  {item.description}
                </p>
              </div>

              {/* Subtle Floor Glow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1/2 h-12 bg-cyan/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;