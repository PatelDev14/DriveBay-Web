import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import screenHome from "@/assets/screen-home.jpg";
import screenSearch from "@/assets/screen-search.jpg";
import screenBooking from "@/assets/screen-booking.jpg";
import screenPayment from "@/assets/screen-payment.jpg";
import screenList from "@/assets/screen-list.jpg";
import screenDriveways from "@/assets/screen-driveways.jpg";

const galleryItems = [
  { image: screenHome, caption: "Welcome Screen", description: "Easy navigation to all features" },
  { image: screenSearch, caption: "Find Parking", description: "Search driveways near you" },
  { image: screenBooking, caption: "Book Instantly", description: "Reserve with a few taps" },
  { image: screenPayment, caption: "Secure Checkout", description: "Pay with confidence" },
  { image: screenList, caption: "List Your Driveway", description: "Earn passive income" },
  { image: screenDriveways, caption: "Manage Listings", description: "Track your driveways" },
];

const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section id="gallery" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="section-container mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm text-cyan mb-3 sm:mb-4">
            App Gallery
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Experience the{" "}
            <span className="text-gradient-cyan">Future of Parking</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Explore our beautifully designed app screens.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div ref={containerRef} className="relative">
        <motion.div
          style={{ x }}
          className="flex gap-3 sm:gap-4 lg:gap-6 pl-4 sm:pl-8 lg:pl-[calc((100vw-1280px)/2+2rem)]"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 group"
            >
              {/* Device Frame */}
              <div className="relative w-40 sm:w-52 lg:w-64">
                <div className="glass-card p-2 sm:p-3 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] border border-glass-border/20 group-hover:border-cyan/30 transition-all duration-300">
                  {/* Phone Notch */}
                  <div className="absolute top-3 sm:top-5 lg:top-6 left-1/2 -translate-x-1/2 w-12 sm:w-16 lg:w-20 h-3 sm:h-4 lg:h-5 bg-background rounded-full z-10" />
                  
                  {/* Screen */}
                  <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] bg-background aspect-[9/19.5]">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Caption Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4 bg-gradient-to-t from-background via-background/80 to-transparent"
                    >
                      <p className="text-cyan font-semibold text-xs sm:text-sm">{item.caption}</p>
                      <p className="text-muted-foreground text-[10px] sm:text-xs">{item.description}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 -z-10 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-cyan/30 rounded-[2.5rem]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Hint - Desktop only */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm"
          >
            Scroll →
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
