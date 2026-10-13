import { Pizza } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <Pizza className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold text-white">Пицца Казань</span>
          </div>
          <p className="text-sm text-center sm:text-right">
            Доставка пиццы и напитков по Казани<br />
            <span className="text-gray-500">© 2026 Все права защищены</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
