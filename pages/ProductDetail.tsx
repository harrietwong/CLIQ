import React, { useState, useEffect } from 'react';
import { useApp } from '../store';
import { CLIQ_PHONE, ACCESSORIES } from '../constants';
import { Star, Check, Plus, Minus, Truck, RotateCcw, ShieldCheck, ChevronDown, Play } from 'lucide-react';

export const ProductDetail = () => {
  const { addToCart } = useApp();
  const [selectedColor, setSelectedColor] = useState(CLIQ_PHONE.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeMedia, setActiveMedia] = useState(0);

  const handleAddToCart = () => {
    addToCart(CLIQ_PHONE, selectedColor.id, quantity);
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      
      {/* --- HERO SECTION (Split) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left: Media Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Stage */}
            <div className="relative aspect-square lg:aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden shadow-sm group">
              {CLIQ_PHONE.gallery[activeMedia].type === 'video' ? (
                <div className="w-full h-full relative">
                  <video 
                    src={CLIQ_PHONE.gallery[activeMedia].url} 
                    poster={CLIQ_PHONE.gallery[activeMedia].poster}
                    className="w-full h-full object-cover"
                    autoPlay loop muted playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                     {/* Overlay controls if needed */}
                  </div>
                </div>
              ) : (
                <img 
                  src={CLIQ_PHONE.gallery[activeMedia].url} 
                  alt={CLIQ_PHONE.gallery[activeMedia].alt}
                  className="w-full h-full object-cover" 
                />
              )}
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {CLIQ_PHONE.gallery.map((media, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveMedia(idx)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeMedia === idx ? 'border-stone-900' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={media.poster || media.url} className="w-full h-full object-cover" alt="thumbnail" />
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play size={16} className="text-white fill-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info & Buy Box */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="lg:sticky lg:top-28">
              <h1 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-2">{CLIQ_PHONE.name}</h1>
              <p className="text-stone-500 mb-6 leading-relaxed">{CLIQ_PHONE.tagline}</p>
              
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-stone-200">
                <span className="text-2xl font-semibold">${CLIQ_PHONE.price}</span>
                <div className="flex items-center gap-1 text-sm text-stone-600">
                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span className="underline cursor-pointer ml-1">48 Reviews</span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <span className="block text-sm font-semibold text-stone-900 mb-3">Color: {selectedColor.name}</span>
                <div className="flex gap-3">
                  {CLIQ_PHONE.colors.map(color => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${selectedColor.id === color.id ? 'ring-2 ring-offset-2 ring-stone-900' : 'hover:scale-105'}`}
                      style={{ backgroundColor: color.hex, borderColor: '#ddd' }}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <span className="block text-sm font-semibold text-stone-900 mb-3">Quantity</span>
                <div className="flex items-center w-32 border border-stone-300 rounded-lg p-1">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-stone-100 rounded-md transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="flex-1 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-stone-100 rounded-md transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* CTA */}
              <button 
                onClick={handleAddToCart}
                className="w-full bg-stone-900 text-white font-medium text-lg py-4 rounded-xl hover:bg-stone-800 transition-transform active:scale-[0.99] flex items-center justify-center gap-2 mb-6"
              >
                Add to Cart <span className="text-stone-400 mx-2">|</span> ${CLIQ_PHONE.price * quantity}
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs text-stone-600 mb-8">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-green-100 rounded-full text-green-700"><Check size={12} /></div>
                  <span>Unlocked & ready to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-blue-100 rounded-full text-blue-700"><Truck size={12} /></div>
                  <span>Worldwide shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-orange-100 rounded-full text-orange-700"><RotateCcw size={12} /></div>
                  <span>30-day returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-purple-100 rounded-full text-purple-700"><ShieldCheck size={12} /></div>
                  <span>1-year warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- WHY CLIQ SECTION --- */}
      <section className="bg-stone-100 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-serif text-center mb-16">Why CLIQ?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {CLIQ_PHONE.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                    <Check className="text-stone-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- LIFESTYLE VIDEOS (Stories) --- */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif">See CLIQ in real life</h2>
            <a href="#" className="hidden md:block text-sm font-semibold underline">Follow us on Instagram</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[20, 21, 22, 23].map((id, idx) => (
               <div key={idx} className="aspect-[9/16] relative bg-stone-200 rounded-xl overflow-hidden group cursor-pointer">
                 <img src={`https://picsum.photos/id/${id}/400/700`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lifestyle" />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                 <div className="absolute bottom-4 left-4 text-white text-xs font-bold drop-shadow-md">@cliquser{idx+1}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="bg-stone-900 text-stone-100 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">Simple by design</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">Make calls and send texts with ease</h3>
                    <p className="text-stone-400">Crystal clear VoLTE calls and a threaded messaging interface that feels familiar.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">Essentials included</h3>
                    <p className="text-stone-400">Enjoy music, basic navigation, and calendar. No social media feeds, no browser, no ads.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">Stay connected, not consumed</h3>
                    <p className="text-stone-400">Hotspot enabled so you can use your laptop when you really need to work.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
               <img src="https://picsum.photos/id/6/800/800" className="rounded-2xl shadow-2xl opacity-90" alt="CLIQ Interface" />
            </div>
         </div>
      </section>

      {/* --- SPECS --- */}
      <section className="py-20 border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Specifications</h2>
          <div className="divide-y divide-stone-200">
             {Object.entries(CLIQ_PHONE.specs).map(([key, value]) => (
               <div key={key} className="py-4 flex justify-between items-center">
                 <span className="font-medium text-stone-500">{key}</span>
                 <span className="font-semibold text-stone-900 text-right">{value}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- ACCESSORIES --- */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif mb-10">Complete the look</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
             {ACCESSORIES.map(acc => (
               <div key={acc.id} className="group">
                 <div className="bg-white rounded-xl overflow-hidden aspect-square mb-4 relative">
                   <img src={acc.image} className="w-full h-full object-cover" alt={acc.name} />
                   <button 
                     onClick={() => addToCart({ ...CLIQ_PHONE, id: acc.id, name: acc.name, price: acc.price, gallery: [{url: acc.image, type: 'image', alt:acc.name}] } as any, 'default', 1)}
                     className="absolute bottom-4 right-4 bg-stone-900 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0"
                   >
                     <Plus size={20} />
                   </button>
                 </div>
                 <h3 className="font-medium text-stone-900">{acc.name}</h3>
                 <p className="text-stone-500">${acc.price}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- REVIEWS --- */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Loved by calm-seekers</h2>
          <div className="flex justify-center text-yellow-500 mb-2">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
          </div>
          <p className="text-stone-500">Based on 48 verified reviews</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {CLIQ_PHONE.reviews.map(review => (
            <div key={review.id} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
               <div className="flex text-yellow-500 mb-4">
                 {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <p className="text-stone-800 mb-6 leading-relaxed">"{review.text}"</p>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                   {review.author.charAt(0)}
                 </div>
                 <div>
                   <p className="text-sm font-bold">{review.author}</p>
                   <p className="text-xs text-stone-400">{review.date}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-serif mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {CLIQ_PHONE.faqs.map((faq, idx) => (
             <details key={idx} className="group bg-white rounded-lg border border-stone-200 overflow-hidden">
               <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-stone-900">
                 {faq.question}
                 <ChevronDown className="transform group-open:rotate-180 transition-transform text-stone-400" />
               </summary>
               <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                 {faq.answer}
               </div>
             </details>
          ))}
        </div>
      </section>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur border-t border-stone-200 md:hidden z-40">
        <button onClick={handleAddToCart} className="w-full bg-stone-900 text-white font-bold py-3 rounded-xl shadow-lg">
          Add to Cart - ${CLIQ_PHONE.price * quantity}
        </button>
      </div>
    </div>
  );
};
