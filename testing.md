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
