import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Daily Commuter",
    content: "DriveBay has completely transformed my daily commute. I used to spend 20 minutes looking for parking!",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James Rodriguez",
    role: "Event Goer",
    content: "Found parking right next to the stadium for half the price. Will definitely use again!",
    rating: 5,
    avatar: "JR",
  },
  {
    name: "Emily Chen",
    role: "Driveway Host",
    content: "I'm earning $400/month just by renting out my driveway. The app makes it so easy!",
    rating: 5,
    avatar: "EC",
  },
  {
    name: "Michael Thompson",
    role: "Business Owner",
    content: "Recommending DriveBay to my customers has been a game-changer. They love it!",
    rating: 5,
    avatar: "MT",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-16 sm:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/50 to-background" />

      <div className="relative section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm text-cyan mb-3 sm:mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Loved by{" "}
            <span className="text-gradient-cyan">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Join our community of happy parkers and hosts.
          </p>
        </motion.div>

        {/* Testimonials Grid - Simple 2 column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card p-4 sm:p-5 lg:p-6 hover:border-cyan/30 transition-all duration-300 group h-full">
                {/* Stars */}
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-cyan text-cyan"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan to-electric flex items-center justify-center text-background font-bold text-xs sm:text-sm">
                      {testimonial.avatar}
                    </div>
                    {/* Active Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-cyan/50 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
