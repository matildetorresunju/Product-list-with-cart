import React from "react";
import { OrderDessertItem } from "../types";
import { AiOutlineCheckCircle } from "react-icons/ai"; 
// ^ npm install react-icons (si aún no lo tienes).

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  clearOrder: () => void;
  order: OrderDessertItem[];    // <-- Array de items en el carrito
  totalPrice: number;           // <-- Total calculado
};

export default function Modal({
  isOpen,
  onClose,
  clearOrder,
  order,
  totalPrice,
}: ModalProps) {
  if (!isOpen) return null;

  // Limpia el carrito y cierra el modal
  const handleStartNewOrder = () => {
    clearOrder();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg relative">
        {/* Botón para cerrar el modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 font-bold text-2xl"
        >
          ×
        </button>

        {/* Encabezado con ícono verde */}
        <div className="flex items-center gap-2 mb-4">
          <AiOutlineCheckCircle className="text-green-600 text-3xl" />
          <h2 className="text-2xl font-bold">Order Confirmed</h2>
        </div>
        <p className="text-gray-700 mb-6">We hope you enjoy your food!</p>

        {/* Listado de artículos comprados */}
        <div className="space-y-4 mb-4 max-h-60 overflow-auto">
          {order.map((item) => {
            const subtotal = item.price * item.quantity;
            return (
              <div key={item.id} className="flex justify-between items-center">
                {/* Imagen y nombre */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity}x @ ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Subtotal */}
                <p className="text-gray-800 font-medium">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Total general */}
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-lg">Order Total</span>
          <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
        </div>

        {/* Botón para iniciar una nueva orden */}
        <button
          onClick={handleStartNewOrder}
          className="bg-red-600 w-full text-white py-2 px-4 rounded hover:bg-red-700 font-semibold"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
