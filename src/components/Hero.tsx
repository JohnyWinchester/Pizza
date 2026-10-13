import { Flame, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-red-600 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-yellow-300 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium">
            <Flame className="w-4 h-4" />
            Пицца из дровяной печи
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
            Настоящая итальянская пицца
            <br />
            <span className="text-yellow-200">в сердце Казани</span>
          </h2>
          <p className="text-base sm:text-lg text-orange-50 max-w-xl">
            Свежее тесто, ароматные ингредиенты и быстрая доставка до вашей двери.
            Закажите сейчас и почувствуйте вкус Италии.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-2">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-200" />
              <span className="text-sm font-medium">40 минут</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-200" />
              <span className="text-sm font-medium">По всему городу</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-yellow-200" />
              <span className="text-sm font-medium">Горячая доставка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
