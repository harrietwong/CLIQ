import React, { useState } from 'react';
import { useApp } from '../store';
import { ArrowLeft, Shield, AlertCircle } from 'lucide-react';

const PAYPAL_URL = "https://www.paypal.com/ncp/payment/YEPRNN3N5PXWC";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqZ1NDCflqPu58AfkCLqUkqqxzYaBLdZ6CvONsFN-G5tgBKav3JJK6VDk15rolwvc66Q/exec";

export const Checkout = () => {
  const { setView } = useApp();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form State matching the requested fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    city: '',
    zipCode: ''
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

    // Construct exact payload for the existing Google Sheet via GAS
    const payload = {
      ...formData,
      productName: "CLIQ Flip Phone",
      totalAmount: "99",
      dateTime: new Date().toLocaleString()
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.status === 'success') {
        // Immediate redirect to PayPal upon successful data recording
        window.location.href = PAYPAL_URL;
      } else {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }

    } catch (error) {
      console.error('Submission error:', error);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FDFCF8]">
      <div className="max-w-xl mx-auto px-6">
        <button onClick={() => setView('PRODUCT')} className="flex items-center text-stone-500 mb-8 hover:text-stone-900 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>
        
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-stone-100">
          <h2 className="text-3xl font-serif mb-8 text-stone-900">Order Information</h2>
          <form id="checkoutForm" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input 
                required 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name" 
                className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:outline-none focus:border-stone-900 transition-colors" 
              />
              <input 
                required 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name" 
                className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:outline-none focus:border-stone-900 transition-colors" 
              />
            </div>
            <input 
              required 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email" 
              className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:outline-none focus:border-stone-900 transition-colors" 
            />
            <input 
              required 
              type="text" 
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              placeholder="Street address" 
              className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:outline-none focus:border-stone-900 transition-colors" 
            />
            <div className="grid grid-cols-2 gap-4">
              <input 
                required 
                type="text" 
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City" 
                className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:outline-none focus:border-stone-900 transition-colors" 
              />
              <input 
                required 
                type="text" 
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="ZIP Code" 
                className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:outline-none focus:border-stone-900 transition-colors" 
              />
            </div>

            <div className="pt-4 space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 border border-red-100">
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              {/* Native-style PayPal Branded Checkout Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white py-4 rounded-full font-sans font-bold text-xl transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="opacity-70">Processing...</span>
                ) : (
                  <>
                    <span className="italic tracking-tight">PayPal</span> 
                    <span className="font-normal opacity-90 text-lg">Checkout</span>
                  </>
                )}
              </button>
              
              <div className="flex flex-col items-center gap-4 text-center border-t border-stone-100 pt-6">
                <p className="text-stone-400 text-xs font-light">
                  Your payment is processed securely on the official PayPal platform.
                </p>
                <div className="flex items-center gap-2 text-stone-300 text-[10px] uppercase tracking-widest font-bold">
                  <Shield size={14} /> Official PayPal Secure Link
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const OrderSuccess = () => {
  const { setView } = useApp();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCF8] px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-serif mb-4 text-stone-900 italic">Thank you.</h1>
      <p className="text-stone-500 max-w-md mb-12 font-light text-lg">
        Your order has been received. You will receive a confirmation email shortly.
      </p>
      <button 
        onClick={() => setView('HOME')}
        className="bg-stone-900 text-stone-50 px-12 py-4 rounded-full font-medium hover:bg-stone-800 transition-all"
      >
        Return Home
      </button>
    </div>
  );
};