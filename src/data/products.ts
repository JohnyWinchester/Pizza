import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Маргарита',
    description: 'Томатный соус, моцарелла, базилик',
    price: 499,
    category: 'pizza',
    image:
      'https://images.pexels.com/photos/28945103/pexels-photo-28945103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 2,
    name: 'Пепперони',
    description: 'Острая пепперони, моцарелла, томатный соус',
    price: 599,
    category: 'pizza',
    image:
      'https://images.pexels.com/photos/2762938/pexels-photo-2762938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    name: 'Четыре сыра',
    description: 'Моцарелла, пармезан, горгонзола, чеддер',
    price: 649,
    category: 'pizza',
    image:
      'https://images.pexels.com/photos/2762939/pexels-photo-2762939.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 4,
    name: 'Coca-Cola 0.5л',
    description: 'Освежающий газированный напиток',
    price: 129,
    category: 'drinks',
    image:
      'https://images.pexels.com/photos/17650224/pexels-photo-17650224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 5,
    name: 'Апельсиновый сок 0.3л',
    description: 'Свежевыжатый сок из спелых апельсинов',
    price: 189,
    category: 'drinks',
    image:
      'https://images.pexels.com/photos/13546345/pexels-photo-13546345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 6,
    name: 'Лимонад с мятой 0.5л',
    description: 'Домашний лимонад с мятой и лаймом',
    price: 169,
    category: 'drinks',
    image:
      'https://images.pexels.com/photos/3651045/pexels-photo-3651045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
