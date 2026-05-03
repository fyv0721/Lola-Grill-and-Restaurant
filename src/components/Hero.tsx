import { motion } from "motion/react";
import { Star, ChevronRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 pt-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full mb-8">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-xs font-bold uppercase tracking-widest px-1">4.9★ (520+ Reviews)</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl mb-8 leading-[1.1] serif">
            Authentic Flavors, <br />
            <span className="italic text-terracotta">Freshly Grilled.</span>
          </h1>
          
          <p className="text-lg text-stone-600 mb-10 max-w-md leading-relaxed">
            Experience the heart of Negros Occidental grilling. Local ingredients meet traditional fire-cooked perfection in the heart of Bacolod.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#menu" 
              className="bg-terracotta text-white px-10 py-5 rounded-2xl font-bold hover:bg-terracotta-dark transition-colors flex items-center shadow-lg shadow-terracotta/20"
            >
              View Menu <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ backgroundColor: "rgb(245 245 244)" }}
              href="tel:09171204435" 
              className="border-2 border-stone-200 px-10 py-5 rounded-2xl font-bold transition-colors flex items-center"
            >
              <Phone className="mr-2 w-5 h-5" /> 0917 120 4435
            </motion.a>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 text-stone-400">
            <div>
              <span className="block text-2xl font-bold text-stone-800 serif">₱500–₱1K</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Avg. Price Per Head</span>
            </div>
            <div className="w-px h-10 bg-stone-200"></div>
            <div>
              <span className="block text-2xl font-bold text-stone-800 serif">Bacolod</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Main Location</span>
            </div>
          </div>
        </motion.div>
        
        <div className="relative flex justify-center items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            className="w-80 h-80 md:w-[500px] md:h-[500px] bg-amber-200 rounded-full absolute -z-10 blur-[100px]"
          ></motion.div>
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="bg-stone-900 w-64 h-64 md:w-[450px] md:h-[450px] rounded-full border-[12px] border-stone-800 shadow-2xl flex items-center justify-center relative overflow-hidden group">
               {/* Decorative grill marks texture could go here, using emoji for now per request */}
               <span className="text-8xl md:text-[160px] drop-shadow-2xl translate-y-2">🍖</span>
               
               <motion.div 
                initial={{ opacity: 0, rotate: -20 }}
                animate={{ opacity: 1, rotate: 12 }}
                transition={{ delay: 0.5 }}
                className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-xl border border-stone-100"
               >
                  <span className="text-terracotta font-bold text-sm">100% Local Meat</span>
               </motion.div>
               
               <motion.div 
                initial={{ opacity: 0, rotate: 20 }}
                animate={{ opacity: 1, rotate: -12 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-16 left-0 bg-sage text-white p-4 rounded-2xl shadow-xl"
               >
                  <span className="font-bold text-sm">Smoky & Tender</span>
               </motion.div>
            </div>
            
            {/* Additional floating spice particles (emojis) */}
            <motion.span 
              animate={{ rotate: 360, x: [0, 10, 0], y: [0, -10, 0] }} 
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-0 left-0 text-3xl"
            >🌿</motion.span>
            <motion.span 
              animate={{ rotate: -360, x: [0, -15, 0], y: [0, 15, 0] }} 
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute bottom-0 right-10 text-3xl"
            >🔥</motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
