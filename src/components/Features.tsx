import { motion } from "motion/react";

const benefits = [
  {
    icon: "🔥",
    title: "Signature Grill",
    description: "Slow-cooked over hardwood charcoal for that deep, smoky aroma that Bacolod is famous for."
  },
  {
    icon: "🥬",
    title: "Locally Sourced",
    description: "Supporting our Negros Occidental farmers and fishers with every plate we serve."
  },
  {
    icon: "💰",
    title: "Fair Pricing",
    description: "Authentic high-end flavor without the high-end markup. Quality food for everyone."
  },
  {
    icon: "🤝",
    title: "Full Service",
    description: "From cozy dine-ins to curated catering for your most special life celebrations."
  }
];

export default function Features() {
  return (
    <section id="menu" className="py-24 bg-stone-50 border-y border-stone-100">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 serif">The Grilling Standard</h2>
          <div className="w-24 h-1.5 bg-terracotta mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 border border-stone-100/50"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-3 serif">{benefit.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
