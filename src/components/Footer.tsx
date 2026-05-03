import { Facebook, Instagram, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-stone-50 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start text-center md:text-left mb-16">
          <div>
            <h3 className="text-3xl mb-4 italic serif text-terracotta">Lola Grill & Restaurant</h3>
            <p className="text-stone-500 mb-8 max-w-sm">Authentic heritage flavors, rooted in Negros tradition and grilled with love since 2012.</p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-stone-400 hover:text-terracotta transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-terracotta transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="md:text-right">
            <div className="inline-flex items-center text-sage font-bold mb-4 bg-sage/5 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 mr-2 fill-current" /> Proudly Women-Owned & Local
            </div>
            <p className="text-stone-400 text-sm mt-4 tracking-widest uppercase font-medium">
              © 2026 Lola Grill & Restaurant. <br className="md:hidden" /> All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-200/50 flex flex-wrap justify-center md:justify-between text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 gap-4">
          <a href="#" className="hover:text-stone-600">Privacy Policy</a>
          <a href="#" className="hover:text-stone-600">Terms of Service</a>
          <span>Negros Occidental, Philippines</span>
        </div>
      </div>
    </footer>
  );
}
