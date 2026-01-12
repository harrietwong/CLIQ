import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useApp } from '../store';

export const Header = () => {
  const { cart, setView, setIsMenuOpen, isMenuOpen, currentView } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-stone-50/80 backdrop-blur-md py-4 border-b border-stone-200' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Left: Nav */}
        <nav className="hidden md:flex items-center space-x-12 text-[11px] uppercase tracking-[0.2em] font-medium text-stone-500">
          <button onClick={() => setView('PRODUCT')} className="hover:text-stone-900 transition-colors">Shop</button>
          <button onClick={() => setView('PRODUCT')} className="hover:text-stone-900 transition-colors">Our Story</button>
        </nav>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <button onClick={() => setView('HOME')} className="text-3xl font-serif italic tracking-tighter text-stone-900">
            CLIQ.
          </button>
        </div>

        {/* Right: Cart & Menu */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setView('CART')} 
            className="group flex items-center space-x-2 text-stone-900"
          >
            <span className="hidden md:block text-[11px] uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity">Cart</span>
            <div className="relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-stone-900 text-stone-50 text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 text-stone-900"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-0 bg-stone-50 z-50 p-12 flex flex-col justify-center space-y-12 animate-in fade-in zoom-in duration-300">
           <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 p-2"><X size={24} /></button>
           <button onClick={() => setView('HOME')} className="text-5xl font-serif italic text-left">Home</button>
           <button onClick={() => setView('PRODUCT')} className="text-5xl font-serif italic text-left">The Collection</button>
           <button onClick={() => setView('PRODUCT')} className="text-5xl font-serif italic text-left">Manifesto</button>
           <button onClick={() => setView('CART')} className="text-5xl font-serif italic text-left">Your Cart ({cartCount})</button>
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  const { setView } = useApp();
  
  return (
    <footer className="bg-stone-50 pt-32 pb-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
        <div className="col-span-1">
           <h3 className="text-2xl font-serif italic mb-6">CLIQ.</h3>
           <p className="text-stone-400 text-sm leading-relaxed font-light">
             Refining the relationship between human and tool. Based in Stockholm, shipping globally.
           </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">The Shop</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><button onClick={() => setView('PRODUCT')} className="hover:text-stone-900 transition-colors">CLIQ Phone</button></li>
            <li><button onClick={() => setView('PRODUCT')} className="hover:text-stone-900 transition-colors">Leather Sleeves</button></li>
            <li><button onClick={() => setView('PRODUCT')} className="hover:text-stone-900 transition-colors">Bundles</button></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">Insights</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><button className="hover:text-stone-900 transition-colors">Manifesto</button></li>
            <li><button className="hover:text-stone-900 transition-colors">Journal</button></li>
            <li><button className="hover:text-stone-900 transition-colors">Sustainability</button></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">Newsletter</h4>
          <div className="flex border-b border-stone-300 pb-2">
            <input type="email" placeholder="Email" className="bg-transparent text-sm w-full focus:outline-none placeholder:text-stone-300" />
            <button className="text-stone-900"><ArrowRight size={16} /></button>
          </div>
          <p className="text-[10px] text-stone-400 font-light italic">Occasional letters on slow living.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-400 pt-8 border-t border-stone-100">
        <p>&copy; {new Date().getFullYear()} CLIQ Technologies</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <button className="hover:text-stone-600 transition-colors">Privacy</button>
          <button className="hover:text-stone-600 transition-colors">Terms</button>
          <button className="hover:text-stone-600 transition-colors">Instagram</button>
        </div>
      </div>
    </footer>
  );
};
