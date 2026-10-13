import { MapPin, Phone, Clock } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Где мы находимся
          </h2>
          <p className="text-gray-500 mt-2">Доставляем по всему городу Казани</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=49.1221%2C55.7887&z=12"
              className="w-full h-[300px] sm:h-[400px] border-0"
              title="Карта Казани"
              loading="lazy"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <div className="bg-orange-50 rounded-2xl p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Адрес</h3>
                <p className="text-sm text-gray-600 mt-1">
                  г. Казань, ул. Баумана, 13
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Телефон</h3>
                <a href="tel:+78432000000" className="text-sm text-gray-600 mt-1 block hover:text-orange-600 transition-colors">
                  +7 (843) 200-00-00
                </a>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Режим работы</h3>
                <p className="text-sm text-gray-600 mt-1">Ежедневно с 10:00 до 23:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
