import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria C.",
    location: "Bacolod City",
    text: "The best inasal in Bacolod! The smokiness is exactly how my grandma used to make it in the province."
  },
  {
    name: "Jose R.",
    location: "Negros Occidental",
    text: "Perfect for family dinners. The service is fast and the meat is always tender and seasoned to the bone."
  },
  {
    name: "Elena G.",
    location: "Silay Local",
    text: "Great value for money. Their BBQ pork skewers are a must-try! Best paired with the garlic rice."
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center serif"
        >
          Loved by the <span className="italic text-terracotta">Locals</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white border border-stone-100 p-10 rounded-3xl hover:border-amber-200 transition-colors shadow-sm relative group"
            >
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="fill-current w-4 h-4 mr-0.5" />
                ))}
              </div>
              <p className="italic text-stone-600 mb-8 text-lg leading-relaxed">"{t.text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-stone-900">— {t.name}</p>
                <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">{t.location}</p>
              </div>
              
              <div className="absolute top-6 right-8 text-stone-50 group-hover:text-amber-50 transition-colors text-6xl pointer-events-none -z-0">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
