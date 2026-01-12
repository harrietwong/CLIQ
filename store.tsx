import React, { createContext, useContext, useState, useEffect, ReactNode, PropsWithChildren } from 'react';
import { CartItem, Product, ViewState } from './types';
import { CLIQ_PHONE } from './constants';

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product, colorId: string, quantity: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, delta: number) => void;
  cartTotal: number;
  currentView: ViewState;
  setView: (view: ViewState) => void;
  selectedProduct: Product; // Simulating a product page context
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currentView, setView] = useState<ViewState>('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Start with empty cart, but could load from local storage here
  
  const addToCart = (product: Product, colorId: string, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === product.id && item.variantId === colorId);
      if (existing) {
        return prev.map(item => 
          (item.productId === product.id && item.variantId === colorId)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      const selectedColor = product.colors.find(c => c.id === colorId);
      const colorName = selectedColor?.name || 'Standard';
      const itemImage = selectedColor?.gallery[0]?.url || '';
      
      return [...prev, {
        productId: product.id,
        variantId: colorId,
        quantity,
        price: product.price,
        name: `${product.name} - ${colorName}`,
        image: itemImage
      }];
    });
    setView('CART'); // Auto navigate to cart on add
  };

  const removeFromCart = (productId: string, variantId: string) => {
    setCart(prev => prev.filter(item => !(item.productId === productId && item.variantId === variantId)));
  };

  const updateQuantity = (productId: string, variantId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.productId === productId && item.variantId === variantId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [currentView]);

  return (
    <AppContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      currentView,
      setView,
      selectedProduct: CLIQ_PHONE, // Defaulting to our single product for this demo
      isMenuOpen,
      setIsMenuOpen
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};