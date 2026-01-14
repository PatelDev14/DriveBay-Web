import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import screenHome from "@/assets/screen-home.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroBg}
            alt="Modern car parking at night"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm text-cyan mb-4 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan animate-pulse" />
              Now Available in Your City
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-foreground">Park Smarter with</span>
              <br />
              <span className="text-gradient">DriveBay</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Find and book private parking spots in seconds. Safe, affordable, and convenient.
            </p>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start" id="download">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center sm:justify-start gap-3 hover:border-cyan/30 transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Download on the</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">App Store</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 0.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 blur-3xl bg-cyan/20 rounded-full scale-75" />
              
              {/* Phone Frame */}
              <div className="relative glass-card p-2 sm:p-3 rounded-[2rem] sm:rounded-[2.5rem] border border-glass-border/30">
                <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-background rounded-full z-10" />
                <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-background">
                  <img
                    src={screenHome}
                    alt="DriveBay App Home Screen"
                    className="relative w-48 sm:w-64 lg:w-72 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-cyan"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;