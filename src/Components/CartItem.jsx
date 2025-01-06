import React from 'react';
import { useCart } from '../context/CartContext';

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <p>${(item.price * item.quantity).toFixed(2)}</p>

      <div className="cart-quantity">
        <button onClick={handleDecrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <button onClick={handleRemove} className="remove-btn">
        X
      </button>
    </div>
  );
}

export default CartItem;
