import { motion } from "framer-motion";
import { Twitter, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import drivebayLogo from "@/assets/drivebay-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#" },
      { name: "Gallery", href: "#gallery" },
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

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#030712]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-cyan/5 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10 section-container px-6">
        
        {/* Main CTA Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/5 text-[10px] font-black text-cyan uppercase tracking-[0.3em] mb-8"
          >
            Join the Community
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tighter">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-400 to-purple-500">Park Smarter?</span>
          </h2>
          
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Experience the future of urban parking today. Download DriveBay on your preferred platform.
          </p>

          {/* STORE BUTTONS: Exact Match to Hero Section */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-20">
            {/* Apple Store */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-3 border border-white/10 hover:border-cyan/30 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground">Download on the</p>
                <p className="text-sm sm:text-base font-semibold text-white leading-none">App Store</p>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-16 border-t border-white/5 pt-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={drivebayLogo} alt="Logo" className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-black text-white tracking-tighter">DriveBay</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
              The premium platform for urban parking. Find, book, and earn with ease.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan hover:bg-cyan/5 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-cyan text-sm font-bold transition-all flex items-center group">
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          <p>© {currentYear} DriveBay Technologies Inc.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">System Status</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;