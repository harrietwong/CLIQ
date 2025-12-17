import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';
import { useApp } from '../store';

export const Header = () => {
  const { cart, setView, setIsMenuOpen, isMenuOpen, currentView } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || currentView !== 'HOME' ? 'bg-[#FDFCF8]/90 backdrop-blur-md border-b border-stone-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 -ml-2 text-stone-900 hover:opacity-70"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <button onClick={() => setView('HOME')} className="text-2xl font-bold tracking-tighter text-stone-900">
            CLIQ<span className="text-orange-600">.</span>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <button onClick={() => setView('PRODUCT')} className="hover:text-stone-900 transition-colors">Shop CLIQ</button>
          <button onClick={() => setView('PRODUCT')} className="hover:text-stone-900 transition-colors">How it works</button>
          <button onClick={() => setView('PRODUCT')} className="hover:text-stone-900 transition-colors">Stories</button>
        </nav>

        {/* Cart */}
        <button 
          onClick={() => setView('CART')} 
          className="flex items-center space-x-2 text-stone-900 hover:opacity-70 transition-opacity p-2 -mr-2"
        >
          <div className="relative">
            <ShoppingBag size={24} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-stone-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#FDFCF8] z-40 p-6 md:hidden flex flex-col space-y-6 animate-in fade-in slide-in-from-top-5">
           <button onClick={() => setView('PRODUCT')} className="text-2xl font-serif text-stone-900 border-b border-stone-100 pb-4 text-left">Shop CLIQ</button>
           <button onClick={() => setView('PRODUCT')} className="text-2xl font-serif text-stone-900 border-b border-stone-100 pb-4 text-left">Accessories</button>
           <button onClick={() => setView('PRODUCT')} className="text-2xl font-serif text-stone-900 border-b border-stone-100 pb-4 text-left">Our Story</button>
           <button onClick={() => setView('PRODUCT')} className="text-2xl font-serif text-stone-900 border-b border-stone-100 pb-4 text-left">Support</button>
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  const { setView } = useApp();
  
  return (
    <footer className="bg-stone-100 pt-16 pb-8 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
           <h3 className="text-xl font-bold tracking-tighter mb-4">CLIQ.</h3>
           <p className="text-stone-500 text-sm leading-relaxed mb-6">
             Designing tools for a balanced life. Disconnect to reconnect with what matters.
           </p>
           <div className="flex space-x-4 text-stone-400">
             <Instagram size={20} className="hover:text-stone-900 cursor-pointer transition-colors" />
             <Twitter size={20} className="hover:text-stone-900 cursor-pointer transition-colors" />
             <Facebook size={20} className="hover:text-stone-900 cursor-pointer transition-colors" />
           </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-stone-900">Shop</h4>
          <ul className="space-y-3 text-sm text-stone-600">
            <li><button onClick={() => setView('PRODUCT')} className="hover:text-stone-900">CLIQ Phone</button></li>
            <li><button onClick={() => setView('PRODUCT')} className="hover:text-stone-900">Accessories</button></li>
            <li><button onClick={() => setView('PRODUCT')} className="hover:text-stone-900">Bundles</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-stone-900">Support</h4>
          <ul className="space-y-3 text-sm text-stone-600">
            <li><button className="hover:text-stone-900">FAQ</button></li>
            <li><button className="hover:text-stone-900">Shipping & Returns</button></li>
            <li><button className="hover:text-stone-900">Warranty</button></li>
            <li><button className="hover:text-stone-900">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-stone-900">Stay in the loop</h4>
          <div className="flex flex-col space-y-3">
             <p className="text-sm text-stone-500">Join our newsletter for updates.</p>
             <div className="flex">
               <input type="email" placeholder="Email address" className="bg-white border border-stone-300 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-stone-500" />
               <button className="bg-stone-900 text-white px-4 rounded-r-lg hover:bg-stone-700 transition-colors">
                 <ArrowRight size={16} />
               </button>
             </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
        <p>&copy; {new Date().getFullYear()} CLIQ Technologies Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <button className="hover:text-stone-600">Privacy Policy</button>
          <button className="hover:text-stone-600">Terms of Service</button>
        </div>
      </div>
    </footer>
  );
};
