import { AlertTriangle } from "lucide-react";

const Reauth = () => (
  <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.03)_0%,_transparent_70%)]">
    <div className="glass-card p-12 max-w-md w-full text-center border border-white/10 rounded-[2.5rem] backdrop-blur-2xl">
      <div className="w-20 h-20 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-8 text-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
        <AlertTriangle className="w-10 h-10 stroke-[2.5]" />
      </div>
      <h1 className="text-3xl font-black mb-4 bg-gradient-to-r from-white to-amber-500 bg-clip-text text-transparent">Authentication Needed</h1>
      <p className="text-slate-400 text-lg mb-10 leading-relaxed">Please complete the Stripe verification process to enable payments.</p>
      <a href="/" className="block w-full py-4 bg-amber-500 text-black font-bold rounded-2xl transition-transform hover:-translate-y-1 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)]">
        Return to DriveBay
      </a>
    </div>
  </div>
);

export default Reauth;