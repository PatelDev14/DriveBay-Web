import { Check } from "lucide-react";

const Success = () => (
  <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.05)_0%,_transparent_70%)]">
    <div className="glass-card p-12 max-w-md w-full text-center border border-white/10 rounded-[2.5rem] backdrop-blur-2xl">
      <div className="w-20 h-20 bg-cyan/10 border border-cyan/30 rounded-full flex items-center justify-center mx-auto mb-8 text-cyan shadow-[0_0_30px_rgba(0,255,255,0.2)]">
        <Check className="w-10 h-10 stroke-[3]" />
      </div>
      <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-cyan bg-clip-text text-transparent">Success!</h1>
      <p className="text-slate-400 text-lg mb-10 leading-relaxed">Your bank account is now securely connected with Stripe.</p>
      <a href="/" className="block w-full py-4 bg-gradient-to-br from-cyan to-blue-600 text-black font-bold rounded-2xl transition-transform hover:-translate-y-1 shadow-[0_10px_20px_-5px_rgba(0,255,255,0.4)]">
        Back to DriveBay App
      </a>
    </div>
  </div>
);

export default Success;