# UI-концепции для MVP "Пицца Казань"

## Концепция 1: "Тёплый Минимализм" (Выбранная)
**Описание:** Чистый белый фон, много воздуха, акцент на качественные фотографии блюд. Основные акцентные цвета: тёплый оранжевый (`#FF6B35`) для кнопок действия (CTA) и тёмно-серый (`#1F2937`) для текста.
**Преимущества:** Высокая читаемость, выглядит современно и "аппетитно", не перегружает пользователя.
**Недостатки:** Требует качественных исходных фотографий (в MVP используются заглушки).
**Промпт для генерации (v0.dev):** 
> "A clean, minimalist food delivery landing page for a pizza place in Kazan. White background, warm orange (#FF6B35) primary buttons, dark gray text. Sections: Header with cart icon, category tabs (Pizza, Drinks), grid of 6 product cards with image, title, price, and 'Add' button, and a slide-out cart sidebar. Modern, responsive, Tailwind CSS style."

## Концепция 2: "Яркий Фастфуд"
**Описание:** Контрастная цветовая схема (красный `#EF4444` и жёлтый `#FBBF24`), крупные жирные шрифты, скругленные углы, игривые иконки.
**Преимущества:** Вызывает сильные эмоции, ассоциируется с классическим фастфудом, кнопки очень заметны.
**Недостатки:** Может выглядеть дешево или слишком агрессивно для части аудитории.
**Промпт для генерации (v0.dev):**
> "A vibrant, high-energy fast food delivery app UI. Bold red and yellow color scheme, large rounded buttons, playful typography. Product cards with prominent 'Add to Cart' buttons, sticky cart summary at the bottom. Mobile-first design, Tailwind CSS."

## Концепция 3: "Тёмная Тема Премиум"
**Описание:** Тёмно-серый или чёрный фон (`#111827`), золотистые или неоново-оранжевые акценты, полупрозрачные элементы (glassmorphism).
**Преимущества:** Выглядит дорого и технологично, снижает нагрузку на глаза в вечернее время.
**Недостатки:** Сложнее в реализации доступности (контрастности), может быть непривычной для массовой аудитории.
**Промпт для генерации (v0.dev):**
> "A premium dark-mode food delivery UI. Dark gray background (#111827), subtle glassmorphism effects on cards, golden-orange accents. Elegant typography, high-quality food imagery placeholders, sleek minimal icons. Tailwind CSS."

## Обоснование выбора
Выбрана **Концепция 1 ("Тёплый Минимализм")**, так как она лучше всего соответствует требованиям MVP: максимальная простота, фокус на функциональности (корзина и карта) и универсальность для широкой целевой аудитории Казани. Она также проще всего реализуется с помощью Tailwind CSS.
