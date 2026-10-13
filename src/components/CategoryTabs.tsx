import type { Category } from '@/types';

interface CategoryTabsProps {
  active: Category;
  onChange: (category: Category) => void;
}

const tabs: { key: Category; label: string }[] = [
  { key: 'pizza', label: 'Пицца' },
  { key: 'drinks', label: 'Напитки' },
];

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex justify-center gap-2 sm:gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 ${
            active === tab.key
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-200 scale-105'
              : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
