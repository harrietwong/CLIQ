import React from 'react';
import { useApp } from '../store';
import { ArrowRight, Play, Battery, Wifi, Music, Smartphone } from 'lucide-react';
import { CLIQ_PHONE } from '../constants';

export const Home = () => {
  const { setView } = useApp();

  return (
    <div className="w-full">
      {/* --- HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 opacity-60">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://picsum.photos/id/201/1600/900"
          >
            <source src="https://cdn.pixabay.com/video/2020/05/25/40139-424930064_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white animate-in fade-in zoom-in duration-1000">
          <div className="inline-block mb-4 px-3 py-1 border border-white/20 rounded-full text-xs font-medium tracking-widest uppercase bg-black/10 backdrop-blur-sm">
            The New Standard for Calm
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 tracking-tight leading-tight drop-shadow-lg">
            Disconnect to <br/><span className="italic text-stone-200">Reconnect</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-stone-100 font-light max-w-2xl mx-auto drop-shadow-md">
            A modern flip phone designed for intentional living. <br className="hidden md:block" />
            Tactile keys, essential tools, no noise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setView('PRODUCT')}
              className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-200 transition-colors w-full sm:w-auto shadow-xl"
            >
              Buy CLIQ
            </button>
            <button 
              onClick={() => setView('PRODUCT')}
              className="flex items-center gap-2 px-8 py-4 text-white border border-white/40 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto justify-center backdrop-blur-md"
            >
              <Play size={20} fill="currentColor" /> Watch the Film
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 text-center text-white/60 text-sm animate-bounce">
          Scroll to explore
        </div>
      </section>

      {/* --- FEATURE HIGHLIGHTS --- */}
      <section className="py-24 bg-[#FDFCF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Smart enough for essentials.<br/>Dumb enough for peace.</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group cursor-default">
               <div className="w-full aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-6 relative">
                 <img src="https://picsum.photos/id/8/600/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Tactile" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
               </div>
               <h3 className="text-xl font-bold mb-2">Tactile Feedback</h3>
               <p className="text-stone-600 px-4">Real keys. Real clicks. The satisfying snap of finishing a call. Muscle memory returns.</p>
            </div>
            <div className="text-center group md:mt-16 cursor-default">
               <div className="w-full aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-6 relative">
                 <img src="https://picsum.photos/id/1/600/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Focus" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
               </div>
               <h3 className="text-xl font-bold mb-2">Pure Focus</h3>
               <p className="text-stone-600 px-4">No news feed. No infinite scroll. No algorithmic distractions. Just you and the moment.</p>
            </div>
            <div className="text-center group cursor-default">
               <div className="w-full aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-6 relative">
                 <img src="https://picsum.photos/id/10/600/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Compact" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
               </div>
               <h3 className="text-xl font-bold mb-2">Pocketable</h3>
               <p className="text-stone-600 px-4">Fits in the smallest pocket. Disappears when you need it to, always there when you don't.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUOTE BLOCK --- */}
      <section className="bg-stone-900 text-stone-200 py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-6xl font-serif text-stone-700 absolute -top-10 -left-10">“</span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
            This phone changed my relationship with the internet. I finally have my weekends back.
          </h2>
          <div className="flex items-center justify-center gap-4">
             <img src="https://i.pravatar.cc/100?img=32" className="w-12 h-12 rounded-full border-2 border-stone-700" alt="User" />
             <div className="text-left">
                <p className="font-bold text-white">Emily K.</p>
                <p className="text-sm text-stone-500">Verified Buyer</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE LIST --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <h2 className="text-4xl font-serif mb-6">Modern tools included.</h2>
             <p className="text-lg text-stone-600 mb-8">We didn't remove everything. Just the distractions.</p>
             
             <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-stone-200 transition-colors"><Wifi size={24} className="text-stone-800" /></div>
                  <div>
                    <h4 className="font-bold text-lg">4G LTE & Hotspot</h4>
                    <p className="text-stone-500">Fast connection when you need it. Tether to your laptop to work from anywhere.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-stone-200 transition-colors"><Music size={24} className="text-stone-800" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Music & Podcasts</h4>
                    <p className="text-stone-500">Bluetooth 5.0 for your headphones. 64GB storage for offline listening.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-stone-200 transition-colors"><Battery size={24} className="text-stone-800" /></div>
                  <div>
                    <h4 className="font-bold text-lg">4-Day Battery</h4>
                    <p className="text-stone-500">Leave the charger at home for the long weekend. Standby time up to 10 days.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-stone-200 transition-colors"><Smartphone size={24} className="text-stone-800" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Essential Apps</h4>
                    <p className="text-stone-500">Maps, Calendar, Notes, Calculator, and Alarm. Everything you need, nothing you don't.</p>
                  </div>
                </li>
             </ul>
             
             <button onClick={() => setView('PRODUCT')} className="mt-10 flex items-center gap-2 font-bold underline underline-offset-4 decoration-2 decoration-orange-500 hover:text-orange-600 transition-colors">
               View Full Specs <ArrowRight size={16} />
             </button>
          </div>
          <div className="order-1 md:order-2 bg-stone-100 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-stone-200/50 rounded-3xl transform rotate-6 scale-90 transition-transform group-hover:rotate-3"></div>
             <img src="https://picsum.photos/id/160/800/800" className="rounded-xl shadow-2xl relative z-10 max-w-[85%] transition-transform duration-700 group-hover:scale-105" alt="Phone Features" />
          </div>
        </div>
      </section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="py-32 text-center bg-stone-50 border-t border-stone-200">
        <h2 className="text-4xl md:text-6xl font-serif mb-6">Ready to feel the click?</h2>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setView('PRODUCT')}
            className="bg-stone-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-stone-800 transition-transform hover:-translate-y-1 shadow-xl"
          >
            Buy CLIQ - ${CLIQ_PHONE.price}
          </button>
        </div>
        <p className="mt-6 text-stone-500 text-sm">Free shipping worldwide. 30-day returns.</p>
      </section>
    </div>
  );
};
