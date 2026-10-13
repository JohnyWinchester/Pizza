import { useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryTabs from '@/components/CategoryTabs';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import type { Category } from '@/types';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('pizza');
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header onCartClick={() => setCartOpen(true)} />
        <Hero />

        <main className="flex-1">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-6">
                Наше меню
              </h2>
              <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
            </div>
            <ProductGrid activeCategory={activeCategory} />
          </section>

          <MapSection />
        </main>

        <Footer />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
