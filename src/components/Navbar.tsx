import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import drivebayLogo from "@/assets/drivebay-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-3 sm:py-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="glass-card px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <img 
              src={drivebayLogo} 
              alt="DriveBay Logo" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover shadow-glow-sm"
            />
            <span className="text-lg sm:text-xl font-bold text-foreground">DriveBay</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#download"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan to-electric text-background font-semibold text-sm hover:shadow-glow-md transition-all duration-300"
            >
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card mt-2 p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#download"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan to-electric text-background font-semibold text-sm text-center"
                onClick={() => setIsOpen(false)}
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
