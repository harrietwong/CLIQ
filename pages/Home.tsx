import React from 'react';
import { useApp } from '../store';
import { EDITORIAL_VIDEOS } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Home = () => {
  const { setView } = useApp();

  return (
    <div className="bg-[#FDFCF8] text-stone-900 selection:bg-stone-200">
      
      {/* ① HERO SECTION — Emotional Opening */}
      <section className="relative h-screen w-full flex flex-col justify-end lg:justify-center items-start px-6 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/1xFjGbk/1.png" 
            className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_25s_infinite_alternate]"
            alt="CLIQ Hero"
          />
          <div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply"></div>
          {/* Adjusted gradient to be darker (from-stone-900/50) instead of light to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-stone-900/50 lg:via-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl mb-24 lg:mb-0 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <h1 className="text-stone-50 font-serif text-7xl md:text-9xl mb-4 tracking-tighter leading-none">
            CLIQ
          </h1>
          <p className="text-2xl md:text-3xl font-serif italic text-stone-200 mb-2 leading-tight">
            Disconnect to reconnect.
          </p>
          <p className="text-lg md:text-xl font-light text-stone-300 mb-12">
            A phone designed for a quieter life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <button 
              onClick={() => setView('PRODUCT')}
              className="bg-stone-50 text-stone-900 px-12 py-5 rounded-full font-medium text-lg hover:bg-white transition-all shadow-2xl active:scale-95"
            >
              Buy CLIQ
            </button>
            <div className="flex flex-col justify-center py-2">
              <p className="text-[10px] uppercase tracking-[0.4em] text-stone-200 font-bold">
                Less noise. More presence.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-300 lg:block hidden">
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </section>

      {/* ② LIFESTYLE / MODERN CALM */}
      <section className="py-40 lg:py-72 px-6 lg:px-24 bg-[#FDFCF8]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 lg:gap-24 items-center">
          {/* Image Left */}
          <div className="lg:col-span-1 relative aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-sm">
            <img 
              src="https://i.ibb.co/7tNsBnWm/2.png" 
              className="w-full h-full object-cover"
              alt="City Calm"
            />
          </div>
          
          {/* Video Beside Image - Vertical 9:16 Editorial Block */}
          <div className="lg:col-span-1 relative aspect-[9/16] overflow-hidden rounded-[2.5rem] shadow-2xl border border-stone-100">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={EDITORIAL_VIDEOS.videoA} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-stone-900/5 pointer-events-none"></div>
          </div>

          <div className="lg:col-span-1 space-y-12 lg:pl-12">
            <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] text-stone-900">
              Modern life doesn’t <br />
              need more notifications. <br />
              <span className="italic text-stone-400">It needs space.</span>
            </h2>
            <p className="text-xl font-light text-stone-500 max-w-sm leading-relaxed">
              CLIQ keeps what matters — calls, messages, intention — and removes what doesn’t.
            </p>
            <div className="pt-10 border-t border-stone-200 w-24"></div>
          </div>
        </div>
      </section>

      {/* ③ STILL LIFE / OBJECT BEAUTY */}
      <section className="relative h-[80vh] w-full flex items-end justify-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/AKDbdP2.jpg" 
            className="w-full h-full object-cover"
            alt="Designed like an object"
          />
          <div className="absolute inset-0 bg-stone-900/10"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-stone-50 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 italic leading-tight">
            Designed like an object, <br />not a distraction.
          </h2>
          <p className="text-stone-300 tracking-[0.4em] text-[11px] uppercase font-bold">
            Tactile buttons. Quiet screen. Timeless form.
          </p>
        </div>
      </section>

      {/* ④ QUIET MOMENTS / NIGHT */}
      <section className="py-40 lg:py-72 px-6 lg:px-24 bg-stone-50">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] text-stone-900">
                Leave your <br />
                smartphone <br />
                outside the <br />
                bedroom.
              </h2>
              <p className="text-xl md:text-2xl font-light text-stone-600 leading-relaxed max-w-md">
                CLIQ is made for rest, not scrolling. No feeds. No pressure. No endless night.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-sm">
              <img 
                src="https://i.imgur.com/5OO6OL8.jpg" 
                className="w-full h-full object-cover"
                alt="Night Routine"
              />
            </div>
          </div>
          
          {/* Video D Below Image - Vertical Video Section */}
          <div className="relative w-full max-w-md aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={EDITORIAL_VIDEOS.videoD} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-stone-900/10 pointer-events-none"></div>
            <div className="absolute bottom-10 inset-x-0 text-center">
              <p className="text-white text-[10px] uppercase tracking-widest font-bold opacity-60">Intentional Reflection</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ HUMAN CONNECTION / MORNING RITUAL */}
      <section className="py-40 lg:py-72 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-8">
            <h2 className="text-5xl md:text-8xl font-serif italic tracking-tight text-stone-900">
              Technology should <br />feel human again.
            </h2>
            <p className="text-xl md:text-2xl font-light text-stone-400 max-w-2xl mx-auto leading-relaxed">
              CLIQ supports presence — in conversations, mornings, and moments that matter.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-24 mb-48 items-center">
            {/* Image 5 */}
            <div className="space-y-10">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-sm">
                <img 
                  src="https://i.imgur.com/2M6dsQP.jpg" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  alt="Human Connection" 
                />
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-stone-400 font-bold px-4">I. Connection</p>
            </div>
            
            {/* Video C Between Images - Real Life Usage */}
            <div className="space-y-10 lg:pt-32">
              <div className="aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src={EDITORIAL_VIDEOS.videoC} type="video/mp4" />
                </video>
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-stone-400 font-bold px-4 text-center">Real-life moment</p>
            </div>

            {/* Image 6 */}
            <div className="space-y-10">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-sm">
                <img 
                  src="https://i.imgur.com/pkRpvsf.jpg" 
                  className="w-full h-full object-cover" 
                  alt="Morning Ritual" 
                />
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-stone-400 font-bold px-4 text-right">II. Ritual</p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-16">
            <h2 className="text-5xl md:text-9xl font-serif tracking-tighter text-stone-900 leading-none">Experience CLIQ</h2>
            <p className="text-stone-400 font-light italic text-2xl">
              Shipping worldwide.
            </p>
            <button 
              onClick={() => setView('PRODUCT')}
              className="bg-stone-900 text-stone-50 px-20 py-7 rounded-full font-medium text-xl hover:bg-stone-800 transition-all shadow-xl active:scale-95"
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};