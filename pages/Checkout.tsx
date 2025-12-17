import React, { useState } from 'react';
import { useApp } from '../store';
import { ArrowLeft, CheckCircle, Shield, AlertCircle } from 'lucide-react';

export const Checkout = () => {
  const { cart, cartTotal, setView } = useApp();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Construct the specific payload required by the backend
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      streetAddress: formData.address,
      city: formData.city,
      zipCode: formData.zip,
      productName: cart.map(item => `${item.name} (x${item.quantity})`).join(', '),
      totalAmount: cartTotal
    };

    try {
      // Send data to Google Apps Script
      // Using text/plain to avoid CORS preflight options request which GAS doesn't handle well
      const response = await fetch('https://script.google.com/macros/s/AKfycbxqZ1NDCflqPu58AfkCLqUkqqxzYaBLdZ6CvONsFN-G5tgBKav3JJK6VDk15rolwvc66Q/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.status === 'success') {
        // Redirect to PayPal
        window.location.href = 'https://www.paypal.com/ncp/payment/YEPRNN3N5PXWC';
      } else {
        setError("Something went wrong while saving your order. Please try again.");
        setLoading(false);
      }

    } catch (error) {
      console.error('Submission error:', error);
      setError("Something went wrong while saving your order. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FDFCF8]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Form */}
        <div className="order-2 lg:order-1">
          <button onClick={() => setView('CART')} className="flex items-center text-stone-500 mb-8 hover:text-stone-900 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Cart
          </button>
          
          <h2 className="text-2xl font-serif mb-6">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input 
                required 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name" 
                className="w-full p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-stone-900 outline-none transition-shadow" 
              />
              <input 
                required 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name" 
                className="w-full p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-stone-900 outline-none transition-shadow" 
              />
            </div>
            <input 
              required 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address" 
              className="w-full p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-stone-900 outline-none transition-shadow" 
            />
            <input 
              required 
              type="text" 
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Street Address" 
              className="w-full p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-stone-900 outline-none transition-shadow" 
            />
            <div className="grid grid-cols-3 gap-4">
               <input 
                 required 
                 type="text" 
                 name="city"
                 value={formData.city}
                 onChange={handleInputChange}
                 placeholder="City" 
                 className="col-span-1 p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-stone-900 outline-none transition-shadow" 
               />
               <input 
                 required 
                 type="text" 
                 name="state"
                 value={formData.state}
                 onChange={handleInputChange}
                 placeholder="State" 
                 className="col-span-1 p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-stone-900 outline-none transition-shadow" 
               />
               <input 
                 required 
                 type="text" 
                 name="zip"
                 value={formData.zip}
                 onChange={handleInputChange}
                 placeholder="ZIP" 
                 className="col-span-1 p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-stone-900 outline-none transition-shadow" 
               />
            </div>

            <div className="pt-8 border-t border-stone-200 mt-8">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-start gap-3">
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#FFC439] text-[#003087] py-4 rounded-xl font-bold text-lg hover:bg-[#F2BA36] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                 {loading ? 'Processing...' : (
                   <span className="italic font-extrabold tracking-wide">Pay with PayPal</span>
                 )}
              </button>
              
              <p className="text-center text-stone-500 text-sm mt-4">
                You’ll be redirected to PayPal to complete payment securely.
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-stone-400 text-xs">
                 <Shield size={12} /> Secure encrypted transaction
              </div>
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="order-1 lg:order-2 bg-stone-50 p-8 rounded-2xl h-fit border border-stone-200 sticky top-24">
           <h3 className="font-serif text-xl mb-6">Your Order</h3>
           <div className="space-y-4 mb-6">
             {cart.map(item => (
               <div key={`${item.productId}-${item.variantId}`} className="flex gap-4">
                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden relative border border-stone-100">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    <span className="absolute top-0 right-0 bg-stone-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-bl-md font-bold">{item.quantity}</span>
                 </div>
                 <div className="flex-1">
                   <p className="font-medium text-sm text-stone-900">{item.name}</p>
                   <p className="text-stone-500 text-sm">${item.price}</p>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="border-t border-stone-200 pt-4 space-y-2 text-sm text-stone-600">
             <div className="flex justify-between">
               <span>Subtotal</span>
               <span>${cartTotal}</span>
             </div>
             <div className="flex justify-between">
               <span>Shipping</span>
               <span className="text-green-600 font-medium">Free</span>
             </div>
             <div className="flex justify-between font-bold text-stone-900 text-lg pt-4 border-t border-stone-200 mt-2">
               <span>Total</span>
               <span>${cartTotal}</span>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export const OrderSuccess = () => {
  const { setView } = useApp();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCF8] px-4 text-center animate-in fade-in duration-700">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-sm">
        <CheckCircle size={48} />
      </div>
      <h1 className="text-4xl md:text-5xl font-serif mb-4 text-stone-900">Order Confirmed!</h1>
      <p className="text-stone-500 max-w-md mb-8 leading-relaxed">
        Thank you for choosing CLIQ. Your order has been received.
      </p>
      <button 
        onClick={() => setView('HOME')}
        className="text-stone-900 font-medium underline underline-offset-4 hover:text-stone-600 transition-colors"
      >
        Return to Home
      </button>
    </div>
  );
};
