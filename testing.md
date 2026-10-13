# ДЗ2. Шаг 5. Тестирование системы правил

## Задача для тестирования
Создать React-компонент `CartItem` для отображения товара в корзине. 
Входные данные (пропсы): `id` (string), `name` (string), `price` (number), `quantity` (number), `onUpdateQuantity` (function), `onRemove` (function).

---

## 5.a. Результат БЕЗ применения системных правил

*Промпт: "Сделай компонентCartItem для корзины с названием, ценой, количеством и кнопками плюс/минус, а также кнопкой удалить."*

```jsx
import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { name, price, quantity } = this.props;
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h3 style={{ margin: '0 0 10px 0' }}>{name}</h3>
        <p>Цена: {price} руб.</p>
        <div>
          <button onClick={() => this.props.onUpdateQuantity(this.props.id, quantity - 1)}>-</button>
          <span style={{ margin: '0 10px' }}>{quantity}</span>
          <button onClick={() => this.props.onUpdateQuantity(this.props.id, quantity + 1)}>+</button>
        </div>
        <button onClick={() => this.props.onRemove(this.props.id)} style={{ color: 'red', marginTop: '10px' }}>Удалить</button>
      </div>
    );
  }
}

export default CartItem;
```
## 5.b. Результат после применения системных правил

*Тот же промпт, но с активным файлом правил (Role: Senior React Dev, Context: React+Tailwind, Constraints: no inline styles, functional components only, Format: full code + JSDoc).*

```jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент отображения отдельного товара в корзине.
 * 
 * @param {string} id - Уникальный идентификатор товара
 * @param {string} name - Название товара
 * @param {number} price - Цена за единицу товара
 * @param {number} quantity - Текущее количество товара в корзине
 * @param {function} onUpdateQuantity - Функция обратного вызова для изменения количества
 * @param {function} onRemove - Функция обратного вызова для удаления товара из корзины
 */
const CartItem = ({ id, name, price, quantity, onUpdateQuantity, onRemove }) => {
  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    }
  };

  const handleIncrement = () => {
    onUpdateQuantity(id, quantity + 1);
  };

  return (
    <div className="flex items-center justify-between p-4 mb-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{price} ₽ / шт.</p>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center border border-gray-200 rounded-lg">
          <button 
            onClick={handleDecrement}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
            aria-label="Уменьшить количество"
          >
            −
          </button>
          <span className="px-3 py-1 font-medium text-gray-800 min-w-[2rem] text-center">
            {quantity}
          </span>
          <button 
            onClick={handleIncrement}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
            aria-label="Увеличить количество"
          >
            +
          </button>
        </div>

        <button 
          onClick={() => onRemove(id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          aria-label="Удалить товар из корзины"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
