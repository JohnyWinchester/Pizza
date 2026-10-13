export type Category = 'pizza' | 'drinks';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
