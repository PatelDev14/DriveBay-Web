import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      questions: [
        {
          q: "What accounts can I use to sign up?",
          a: "You can register with any Gmail, Yahoo, or Outlook email account, or sign in directly with your Google or Apple account. After signing up, you can log in anytime using the same method.",
        },
        {
          q: "What happens after I sign up or log in for the first time?",
          a: "You'll be prompted to complete your profile with your first and last name (optional) and phone number. Your email will be auto-filled and is not editable—this is the email you used to register.",
        },
      ],
    },
    {
      title: "Profile & Account",
      icon: "👤",
      questions: [
        {
          q: "Where is my profile?",
          a: "Tap the Profile button at the top-right of the app.",
        },
        {
          q: "What can I edit in my profile?",
          a: "You can edit your first name, last name (both optional), and phone number. Your email address is permanently tied to your account and cannot be changed—it's the email you used to register.",
        },
        {
          q: "Can I log out?",
          a: "Yes. You'll find a Log Out option in your profile.",
        },
        {
          q: "Can I delete my profile?",
          a: "Yes, you can delete your profile from the profile screen. ⚠️ Important: If you have an active listing or an upcoming booking, please avoid deleting your profile. Deleting your profile removes all your information and may disrupt active transactions.",
        },
      ],
    },
    {
      title: "Hosting & Payouts (Stripe)",
      icon: "💰",
      questions: [
        {
          q: "I want to list my driveway. How do payouts work?",
          a: "DriveBay uses Stripe, a trusted payments partner, to handle secure payouts to hosts.",
        },
        {
          q: "Do I need to create a Stripe account?",
          a: "Yes. If you're joining as a host (listing your driveway), you'll be asked to sign up with Stripe and provide your banking details and personal information so you can receive payouts.",
        },
        {
          q: "What information does Stripe require?",
          a: "Stripe may request: • Banking information (to deposit your earnings) • Personal information for verification • A valid ID and a selfie/photo for identity verification. When asked for your website during setup, use: https://www.drivebay.ca",
        },
        {
          q: "When will my money be available?",
          a: "Payouts are typically available after at least 7 business days from when a renter pays for their booking. Once available, you'll need to log into your Stripe account to initiate the payout to your bank account.",
        },
        {
          q: "What if I don't complete Stripe verification?",
          a: "If you do not provide the requested information (banking, ID, verification), Stripe will not be able to process payouts. This will prevent you from receiving earnings.",
        },
      ],
    },
    {
      title: "Listings & Booking",
      icon: "🏠",
      questions: [
        {
          q: "How do I list my driveway?",
          a: "Go to 'List Your Driveway' in the app and follow the steps to add your space details, availability, and pricing.",
        },
        {
          q: "How do I search for a driveway?",
          a: "Use 'Search Driveways' to find spaces near your destination. Tap a listing card to see details, then choose your time and book.",
        },
        {
          q: "Is there a minimum booking amount?",
          a: "Yes. The minimum booking amount is $5 USD. Any booking requests below $5 cannot be completed. This ensures transactions are worthwhile for both hosts and renters.",
        },
        {
          q: "Where can I see my bookings?",
          a: "Open 'My Bookings' to view your upcoming reservations. Tap the 'History' tab to see your past bookings.",
        },
      ],
    },
    {
      title: "Requests & Approvals (for Hosts)",
      icon: "✅",
      questions: [
        {
          q: "What are 'Incoming Requests'?",
          a: "Incoming Requests are booking requests from renters for your driveway. You'll be able to approve or reject each request.",
        },
      ],
    },
    {
      title: "Safety & Privacy",
      icon: "🔒",
      questions: [
        {
          q: "What happens if I delete my profile?",
          a: "Deleting your profile permanently removes your data. ⚠️ Please do not delete your profile if you have active listings or ongoing bookings, as it may affect current transactions.",
        },
        {
          q: "Is my payment information secure?",
          a: "Yes. DriveBay uses Stripe, a PCI DSS Level 1 certified payment processor, to securely handle all transactions. Your financial information is never stored on our servers.",
        },
      ],
    },
    {
        title: "Contact & Support",
        icon: "📞",
        questions: [
          {
            q: "How can I contact support?",
            a: "You can reach our support team by emailing contact@drivebay.ca."
          }
        ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-950 pt-32 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-gradient">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Find answers to common questions about DriveBay, from getting started to managing your bookings and payouts.
          </p>
        </motion.div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-4xl mx-auto px-6">
        {faqCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan/50 to-transparent" />
            </div>

            {/* Questions */}
            <div className="space-y-3">
              {category.questions.map((item, qIndex) => {
                const globalIndex = categoryIndex * 100 + qIndex;
                const isOpen = openIndex === globalIndex;

                return (
                  <motion.div
                    key={qIndex}
                    className="glass-card overflow-hidden"
                    layout
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-cyan/5 transition-colors text-left"
                    >
                      <span className="font-semibold text-white pr-4">
                        {item.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-cyan" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-cyan/20 bg-cyan/5"
                        >
                          <p className="px-6 py-4 text-slate-300 leading-relaxed whitespace-pre-wrap">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-2xl mx-auto px-6 mt-20"
      >
        <div className="glass-card p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-slate-300 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <a
            href="mailto:contact@drivebay.ca"
            className="inline-block btn-primary"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;