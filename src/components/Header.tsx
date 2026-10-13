import { ShoppingCart, Pizza } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const { totalItems, totalPrice } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-200">
              <Pizza className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-extrabold text-gray-900 leading-none tracking-tight">
                Пицца Казань
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block mt-0.5">
                Доставка за 40 минут
              </p>
            </div>
          </div>

          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 bg-orange-50 hover:bg-orange-100 transition-colors rounded-full pl-3 pr-4 py-2 sm:py-2.5 group"
          >
            <ShoppingCart className="w-5 h-5 text-orange-600 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-gray-800 hidden sm:inline">
              {totalPrice > 0 ? `${totalPrice} ₽` : 'Корзина'}
            </span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
