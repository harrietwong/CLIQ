import React, { useState } from 'react';
import { useApp } from '../store';
import { CLIQ_PHONE, EDITORIAL_VIDEOS } from '../constants';

export const ProductDetail = () => {
  const { setView, addToCart } = useApp();
  const [selectedColor, setSelectedColor] = useState(CLIQ_PHONE.colors[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleBuyNow = () => {
    // Navigate to the order information page
    addToCart(CLIQ_PHONE, selectedColor.id, 1);
    setView('CHECKOUT');
  };

  return (
    <div className="bg-white text-stone-900 selection:bg-stone-200">
      
      {/* SECTION 1 — PRODUCT IMAGES & BUY BOX */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Gallery Section */}
          <div className="lg:col-span-8 space-y-8">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm relative group">
              <img 
                src={selectedColor.gallery[activeImageIndex].url} 
                alt={selectedColor.gallery[activeImageIndex].alt}
                className="w-full h-full object-contain p-8 lg:p-16 transition-all duration-500"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
              {selectedColor.gallery.map((media, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-24 h-24 flex-shrink-0 rounded-xl border-2 transition-all p-2 bg-stone-50 ${activeImageIndex === idx ? 'border-stone-900 shadow-md' : 'border-stone-100 opacity-60'}`}
                >
                  <img src={media.url} className="w-full h-full object-contain" alt="thumbnail" />
                </button>
              ))}
            </div>
          </div>

          {/* Functional Buy Box */}
          <div className="lg:col-span-4 flex flex-col justify-start space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-serif tracking-tight text-stone-900 leading-tight">
                {CLIQ_PHONE.name}
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-light text-stone-900 font-sans tracking-tight">
                  ${CLIQ_PHONE.price}
                </span>
                <span className="text-sm font-medium text-stone-400 uppercase tracking-widest">USD</span>
              </div>
            </div>

            {/* Color Switcher */}
            <div className="space-y-6 pt-4">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">
                <span>Selected Finish</span>
                <span className="text-stone-900">{selectedColor.name}</span>
              </div>
              <div className="flex gap-6">
                {CLIQ_PHONE.colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => {
                      setSelectedColor(color);
                      setActiveImageIndex(0);
                    }}
                    className={`w-14 h-14 rounded-full border-2 transition-all flex items-center justify-center p-0.5 ${selectedColor.id === color.id ? 'border-stone-900 scale-110 shadow-lg' : 'border-stone-100 hover:border-stone-200'}`}
                    aria-label={`Select ${color.name}`}
                  >
                    <span className="w-full h-full rounded-full block" style={{ backgroundColor: color.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ + Phone Details Section */}
            <div className="pt-12 space-y-12 border-t border-stone-100">
              {/* FAQ Section */}
              <div className="space-y-10">
                <div className="space-y-3">
                  <h4 className="text-base font-serif italic text-stone-900 leading-tight">What can CLIQ do?</h4>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    CLIQ is made for calls and messages — and for putting the phone down again. 
                    Nothing extra. Nothing pulling you in.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-serif italic text-stone-900 leading-tight">Can I download apps?</h4>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    CLIQ runs on Android 8.1 with access to the Google Play Store. 
                    You can download popular apps like Maps, Spotify, WhatsApp, TikTok, Instagram, and more.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-serif italic text-stone-900 leading-tight">Is CLIQ unlocked?</h4>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    Yes. CLIQ supports standard SIM cards. 
                    Network compatibility may vary by region.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-serif italic text-stone-900 leading-tight">When will my order ship?</h4>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    Orders are processed within 1–3 business days. 
                    Worldwide delivery typically takes 7–14 business days. 
                    Every device is quality-checked and carefully packed before shipping.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-serif italic text-stone-900 leading-tight">What if there’s a problem with my phone?</h4>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    If there’s a quality issue within 30 days of delivery, 
                    we offer returns or exchanges with no complicated process.
                  </p>
                </div>
              </div>

              {/* Phone Details Section */}
              <div className="space-y-5 pt-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Phone Details</h4>
                <ul className="space-y-2 text-[11px] font-light text-stone-400 leading-relaxed">
                  <li>• SIM Card: Single SIM (3G supported)</li>
                  <li>• System: Android 8.1</li>
                  <li>• Connectivity: GPS, WiFi, Bluetooth 4.0, FM Radio, Compass, Gyro Sensor</li>
                  <li>• Storage: External SD card supported</li>
                  <li>• Camera: 8MP rear camera, 5MP front camera</li>
                  <li>• Memory: 2GB RAM / 16GB storage</li>
                </ul>
              </div>
            </div>

            {/* Buy Now Button */}
            <div className="pt-4">
               <button 
                onClick={handleBuyNow}
                className="w-full bg-stone-900 text-stone-50 py-6 rounded-2xl font-medium text-xl hover:bg-stone-800 transition-all shadow-xl active:scale-[0.98] tracking-tight"
              >
                Buy Now · $99
              </button>
              <div className="mt-8 flex justify-between items-center border-t border-stone-100 pt-8 text-[9px] uppercase tracking-[0.3em] font-bold text-stone-300">
                 <span>Free Shipping</span>
                 <div className="w-1.5 h-1.5 rounded-full bg-stone-100"></div>
                 <span>Stockholm Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — REAL PEOPLE. REAL REASONS. */}
      <section className="py-24 lg:py-48 bg-stone-50 border-y border-stone-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif italic text-center mb-32 tracking-tight text-stone-900">
            Real people. Real reasons.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-24 lg:gap-32">
            <div className="space-y-10 flex flex-col items-center">
              <div className="w-full max-w-sm aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-stone-100">
                 <video 
                   controls 
                   playsInline 
                   className="w-full h-full object-cover"
                 >
                   <source src={EDITORIAL_VIDEOS.videoA} type="video/mp4" />
                 </video>
              </div>
              <div className="space-y-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Creative Professional</p>
                <p className="text-xl md:text-2xl font-light italic leading-snug text-stone-700 max-w-xs mx-auto">
                  “I just wanted a phone that didn’t ask for my attention all day.”
                </p>
              </div>
            </div>

            <div className="space-y-10 flex flex-col items-center">
              <div className="w-full max-w-sm aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-stone-100">
                 <video 
                   controls 
                   playsInline 
                   className="w-full h-full object-cover"
                 >
                   <source src={EDITORIAL_VIDEOS.videoC} type="video/mp4" />
                 </video>
              </div>
              <div className="space-y-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">City Commuter</p>
                <p className="text-xl md:text-2xl font-light italic leading-snug text-stone-700 max-w-xs mx-auto">
                  “The snap of closing it means the day is finally mine again.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SUPPORTING TEXT */}
      <section className="py-40 lg:py-64 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-16">
          <h2 className="text-4xl lg:text-7xl font-serif tracking-tight text-stone-900 leading-[1.1]">
            What it does — <br />
            <span className="text-stone-200 italic font-normal">and what it doesn’t.</span>
          </h2>
          <div className="space-y-10 text-xl lg:text-3xl font-light text-stone-500 leading-relaxed">
            <div className="space-y-4">
              <p>CLIQ keeps the basics:</p>
              <p className="text-stone-900 font-medium">Calls. Messages. Presence.</p>
            </div>
            
            <div className="w-16 h-px bg-stone-100 mx-auto" />
            
            <div className="space-y-4">
              <p>No feeds.</p>
              <p>No endless scrolling.</p>
              <p>No pressure to stay online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FINAL PURCHASE CTA */}
      <section className="py-32 lg:py-56 bg-stone-900 text-stone-50 px-6">
        <div className="max-w-xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h3 className="text-3xl lg:text-5xl font-serif tracking-tight text-stone-50 opacity-90 leading-tight">
              Ready for less noise?
            </h3>
            <p className="text-stone-500 font-sans font-light text-2xl tracking-tight italic">$99 USD</p>
          </div>
          <button 
            onClick={handleBuyNow}
            className="w-full max-w-sm mx-auto bg-stone-50 text-stone-900 py-7 rounded-2xl font-medium text-xl hover:bg-white transition-all shadow-2xl active:scale-[0.98]"
          >
            Buy Now · $99
          </button>
          <div className="pt-8">
            <p className="text-[10px] uppercase tracking-[0.5em] text-stone-600 font-bold">Shipping Worldwide from Stockholm</p>
          </div>
        </div>
      </section>

    </div>
  );
};