import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => (
  <div className="min-h-screen bg-[#030712] text-white py-20 px-6 selection:bg-cyan/30">
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-cyan font-semibold mb-8 opacity-80 hover:opacity-100 transition-opacity">
        <ArrowLeft className="w-5 h-5" /> Back to App
      </Link>
      
      <h1 className="text-5xl font-black mb-2 bg-gradient-to-r from-white to-cyan bg-clip-text text-transparent">
        Privacy Policy
      </h1>
      <span className="text-slate-400 text-sm uppercase tracking-widest block mb-12">
        Last Updated: December 2025
      </span>

      <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-cyan rounded-full" /> 1. Data We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-3 marker:text-cyan">
            <li><strong>Account Data:</strong> Email address and name via Firebase Authentication.</li>
            <li><strong>Location Data:</strong> GPS coordinates to show nearby driveways (only while app is in use).</li>
            <li><strong>Transaction Data:</strong> Handled by Stripe. We do not store card numbers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-cyan rounded-full" /> 2. How We Use Data
          </h2>
          <p>We use your data to facilitate parking bookings, verify identity, and improve map services.</p>
        </section>

        <div className="bg-cyan/5 border border-cyan/10 p-8 rounded-3xl mt-12">
          <h2 className="text-2xl font-bold text-white mb-2">5. Contact Us</h2>
          <p>Questions? Contact us at <strong className="text-white">contact@drivebay.ca</strong></p>
        </div>
      </div>
      
      <footer className="mt-20 text-center text-slate-500 text-sm">
        &copy; 2026 DriveBay Canada. All rights reserved.
      </footer>
    </div>
  </div>
);

export default Privacy;