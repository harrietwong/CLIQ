import React from 'react';
import { useApp } from '../store';
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight, Lock, CreditCard } from 'lucide-react';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, setView } = useApp();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 bg-[#FDFCF8]">
        <h2 className="text-3xl font-serif mb-4">Your cart is empty</h2>
        <p className="text-stone-500 mb-8">Looks like you haven't added anything yet.</p>
        <button 
          onClick={() => setView('PRODUCT')} 
          className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-800 transition-colors"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button 
          onClick={() => setView('PRODUCT')} 
          className="flex items-center text-stone-500 hover:text-stone-900 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Continue Shopping
        </button>

        <h1 className="text-3xl font-serif mb-8 border-b border-stone-200 pb-4 text-stone-900">Your Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={`${item.productId}-${item.variantId}`} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-stone-100 transition-shadow hover:shadow-md">
                <div className="w-24 h-24 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-stone-900">{item.name}</h3>
                      <p className="text-sm text-stone-500">In Stock</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.productId, item.variantId)}
                      className="text-stone-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-stone-200 rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.productId, item.variantId, -1)}
                        className="px-3 py-1 hover:bg-stone-50 text-stone-600"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-2 text-sm font-medium w-8 text-center text-stone-900">{item.quantity}</span>
                      <button 
                         onClick={() => updateQuantity(item.productId, item.variantId, 1)}
                         className="px-3 py-1 hover:bg-stone-50 text-stone-600"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-bold text-lg text-stone-900">${item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="md:col-span-1">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 sticky top-24">
               <h3 className="font-bold text-lg mb-4 text-stone-900">Order Summary</h3>
               
               <div className="space-y-3 mb-6 pb-6 border-b border-stone-100">
                 <div className="flex justify-between text-stone-600">
                   <span>Subtotal</span>
                   <span>${cartTotal}</span>
                 </div>
                 <div className="flex justify-between text-stone-600">
                   <span>Shipping</span>
                   <span className="text-green-600 font-medium">Free</span>
                 </div>
               </div>

               <div className="flex justify-between font-bold text-xl mb-6 text-stone-900">
                 <span>Total</span>
                 <span>${cartTotal}</span>
               </div>

               <button 
                 onClick={() => setView('CHECKOUT')}
                 className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-md hover:shadow-lg transform active:scale-[0.99]"
               >
                 Checkout <Lock size={16} />
               </button>

               <div className="mt-6 flex flex-col items-center gap-2">
                 <span className="text-xs text-stone-400 uppercase tracking-wide">We accept</span>
                 <div className="flex justify-center gap-2 opacity-60">
                    <CreditCard size={24} className="text-stone-600" />
                    <div className="bg-black text-white px-1.5 rounded flex items-center text-[10px] font-bold h-6">
                       Pay
                    </div>
                    <div className="bg-stone-200 px-1.5 rounded flex items-center text-[10px] font-bold h-6 text-stone-700 border border-stone-300">
                       GPay
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
