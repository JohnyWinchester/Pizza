import { useMemo } from 'react';
import type { Category } from '@/types';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  activeCategory: Category;
}

export default function ProductGrid({ activeCategory }: ProductGridProps) {
  const filtered = useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
