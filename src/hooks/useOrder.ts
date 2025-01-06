// hooks/useOrder.ts

import { useState } from "react";
import { DessertItem, OrderDessertItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderDessertItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Agregar producto al carrito
  const addItem = (item: DessertItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      // Si existe, incrementamos cantidad
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      // Si no existe, lo agregamos con quantity = 1
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  // Remover producto completamente del carrito
  const removeItem = (id: number) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  // Aumentar o disminuir la cantidad
  const updateQuantity = (id: number, newQuantity: number) => {
    setOrder((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Abrir/Cerrar modal de confirmación
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    // Opcional: podrías vaciar el pedido aquí, si quieres 
    // setOrder([]);
  };

  // Finalizar compra
  const placeOrder = () => {
    console.log("Guardando tu pedido...");
    openModal();
  };

  // Vaciar el carrito tras confirmación
  const clearOrder = () => {
    setOrder([]);
  };

  // Calcular total
  const totalPrice = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return {
    order,
    addItem,
    removeItem,
    updateQuantity,
    placeOrder,
    clearOrder,
    isModalOpen,
    openModal,
    closeModal,
    totalPrice,
  };
}
