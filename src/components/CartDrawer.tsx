import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, totalPrice, totalItems, increment, decrement, removeFromCart, clearCart } =
    useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    setTimeout(() => {
      setSubmitted(false);
      setShowCheckout(false);
      onClose();
    }, 2500);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-orange-600" />
            <h2 className="text-lg font-bold text-gray-900">
              {showCheckout ? 'Оформление заказа' : 'Корзина'}
            </h2>
          </div>
          <button
            onClick={() => {
              setShowCheckout(false);
              onClose();
            }}
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Заказ оформлен!</h3>
            <p className="text-gray-500 text-sm">
              Мы свяжемся с вами в течение 5 минут для подтверждения.
            </p>
          </div>
        ) : items.length === 0 && !showCheckout ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-orange-300" />
            </div>
            <p className="text-gray-500 text-base">Корзина пуста</p>
            <p className="text-gray-400 text-sm">Добавьте товары из меню, чтобы оформить заказ</p>
          </div>
        ) : showCheckout ? (
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Ваше имя
              </label>
              <input
                required
                type="text"
                placeholder="Иван"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Телефон
              </label>
              <input
                required
                type="tel"
                placeholder="+7 (999) 123-45-67"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Адрес доставки
              </label>
              <textarea
                required
                rows={3}
                placeholder="Улица, дом, квартира"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none"
              />
            </div>

            <div className="bg-orange-50 rounded-xl p-4 mt-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Товаров в заказе</span>
                <span className="font-medium">{totalItems} шт</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 mt-2">
                <span>Итого</span>
                <span>{totalPrice} ₽</span>
              </div>
            </div>

            <div className="flex gap-3 mt-auto pt-2">
              <button
                type="button"
                onClick={() => setShowCheckout(false)}
                className="flex-1 rounded-xl border border-gray-200 text-gray-700 font-semibold py-3 hover:bg-gray-50 transition-colors"
              >
                Назад
              </button>
              <button
                type="submit"
                className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 hover:shadow-lg hover:shadow-orange-200 transition-shadow"
              >
                Оформить заказ
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 bg-gray-50 rounded-xl p-3 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-gray-900 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {item.product.price} ₽ × {item.quantity}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decrement(item.product.id)}
                        className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-orange-400 hover:text-orange-600 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-bold text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => increment(item.product.id)}
                        className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-orange-400 hover:text-orange-600 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-bold text-sm text-gray-900">
                      {item.product.price * item.quantity} ₽
                    </span>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-5 py-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Итого</span>
                <span className="text-2xl font-extrabold text-gray-900">{totalPrice} ₽</span>
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3.5 hover:shadow-lg hover:shadow-orange-200 transition-shadow"
              >
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
