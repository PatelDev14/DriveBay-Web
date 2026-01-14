import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import drivebayLogo from "@/assets/drivebay-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Gallery", href: "#gallery" },
    { name: "Mission", href: "#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "py-2 sm:py-3" : "py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`relative flex items-center justify-between px-4 py-2 sm:py-3 rounded-[2rem] border transition-all duration-500 ${
          scrolled 
          ? "bg-[#030712]/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
          : "bg-transparent border-transparent"
        }`}>
          
          {/* Brand Logo */}
          <a href="#" className="z-[110] flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={drivebayLogo} 
                alt="Logo" 
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-white/10"
              />
            </div>
            <span className="text-xl font-black text-white tracking-tighter">DriveBay</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-400 hover:text-cyan transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#download"
              className="px-7 py-3 rounded-2xl bg-white text-black text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
            >
              Get App
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="z-[110] md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-[#030712] z-[105] flex flex-col items-center justify-center md:hidden"
          >
            {/* Background Accent for Mobile Menu */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-black text-white hover:text-cyan transition-colors tracking-tighter"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="#download"
                className="mt-4 px-10 py-5 rounded-3xl bg-cyan text-[#030712] font-black text-lg shadow-[0_20px_40px_rgba(34,211,238,0.2)]"
                onClick={() => setIsOpen(false)}
              >
                Download DriveBay
              </motion.a>
            </div>
            
            {/* Mobile Footer Links */}
            <div className="absolute bottom-12 flex gap-8 text-slate-500 text-sm font-medium">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Support</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;