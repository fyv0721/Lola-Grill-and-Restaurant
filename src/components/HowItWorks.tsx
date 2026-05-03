import { motion } from "motion/react";
import { ListChecks, Flame, Utensils } from "lucide-react";

const steps = [
  {
    icon: ListChecks,
    title: "Choose",
    description: "Pick from our gallery of premium cuts and heritage sides."
  },
  {
    icon: Flame,
    title: "Cook",
    description: "We grill it fresh over fire to your exact smoky preference."
  },
  {
    icon: Utensils,
    title: "Enjoy",
    description: "Sit back and savor the authentic taste of Negros heritage."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-stone-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-24 italic serif"
        >
          Simple as 1, 2, 3...
        </motion.h2>
        
        <div className="relative grid md:grid-cols-3 gap-16 text-center">
          {/* Dashed Line Connection */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px border-t-2 border-dashed border-stone-700 -z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 group"
            >
              <div className="w-28 h-28 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-8 border-[10px] border-stone-900 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 serif tracking-tight">{step.title}</h3>
              <p className="text-stone-400 max-w-[200px] mx-auto text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/5 blur-[120px] rounded-full"></div>
    </section>
  );
}
