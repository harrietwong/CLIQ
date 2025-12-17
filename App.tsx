import React from 'react';
import { AppProvider, useApp } from './store';
import { Header, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout, OrderSuccess } from './pages/Checkout';

const AppContent = () => {
  const { currentView } = useApp();

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return <Home />;
      case 'PRODUCT':
        return <ProductDetail />;
      case 'CART':
        return <Cart />;
      case 'CHECKOUT':
        return <Checkout />;
      case 'SUCCESS':
        return <OrderSuccess />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-stone-900 selection:bg-orange-200">
      {currentView !== 'CHECKOUT' && currentView !== 'SUCCESS' && <Header />}
      <main className="flex-grow">
        {renderView()}
      </main>
      {currentView !== 'CHECKOUT' && currentView !== 'SUCCESS' && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
