import { motion } from "framer-motion";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";
import drivebayLogo from "@/assets/drivebay-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#" },
      { name: "Download", href: "#download" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative pt-16 sm:pt-24 pb-24 sm:pb-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy to-background" />

      <div className="relative section-container">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Ready to Change How You{" "}
            <span className="text-gradient-cyan">Park?</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl mx-auto mb-6 sm:mb-8 px-4">
            Download DriveBay today and never circle the block again.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-3 hover:border-cyan/30 hover:shadow-glow-sm transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] sm:text-xs text-muted-foreground">Download on the</p>
                <p className="text-sm sm:text-lg font-semibold text-foreground">App Store</p>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-3 hover:border-cyan/30 hover:shadow-glow-sm transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] sm:text-xs text-muted-foreground">Get it on</p>
                <p className="text-sm sm:text-lg font-semibold text-foreground">Google Play</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Links - Simplified on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 pb-8 sm:pb-12 border-b border-border">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img 
                src={drivebayLogo} 
                alt="DriveBay Logo" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover"
              />
              <span className="text-lg sm:text-xl font-bold text-foreground">DriveBay</span>
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
              The smarter way to find and book parking.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyan transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyan transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyan transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {currentYear} DriveBay. All rights reserved.
          </p>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 glass-card border-t border-glass-border/20 md:hidden z-40"
      >
        <a
          href="#download"
          className="block w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-cyan to-electric text-background font-semibold text-sm sm:text-base text-center shadow-glow-sm"
        >
          Download DriveBay
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
