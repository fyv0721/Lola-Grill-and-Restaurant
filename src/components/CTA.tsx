import { motion } from "motion/react";
import { Phone, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto bg-gradient-to-br from-terracotta to-terracotta-dark rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl shadow-terracotta/30"
      >
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl mb-8 serif">Ready to reserve <br className="hidden md:block" /> a table?</h2>
          <p className="text-xl mb-12 opacity-90 font-medium tracking-wide">Open Daily: 11:00 AM – 9:00 PM</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:09171204435" 
              className="bg-white text-terracotta px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all"
            >
              0917 120 4435
            </motion.a>
            
            <div className="text-lg flex items-center bg-white/10 px-8 py-5 rounded-2xl backdrop-blur-sm">
              <MapPin className="mr-3 w-5 h-5" /> 
              <span>Bacolod City, Negros Occidental</span>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-black opacity-5 rounded-full blur-3xl"></div>
      </motion.div>
    </section>
  );
}
