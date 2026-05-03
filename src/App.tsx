/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="selection:bg-terracotta selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-stone/80 backdrop-blur-md border-b border-stone-100 flex items-center justify-between px-6 py-4 lg:px-12">
        <span className="serif text-xl italic text-terracotta font-bold">Lola Grill</span>
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-widest uppercase">
          <a href="#menu" className="hover:text-terracotta transition-colors">Menu</a>
          <a href="#about" className="hover:text-terracotta transition-colors">Heritage</a>
          <a href="tel:09171204435" className="bg-terracotta text-white px-5 py-2.5 rounded-xl hover:bg-terracotta-dark transition-colors">Book a Table</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <HowItWorks />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
