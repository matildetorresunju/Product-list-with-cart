// components/OrderContent.tsx

import React from "react";
import { OrderDessertItem } from "../types";

type OrderContentProps = {
  order: OrderDessertItem[];
  removeItem: (id: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  totalPrice: number;
  placeOrder: () => void;
};

export default function OrderContent({
  order,
  removeItem,
  updateQuantity,
  totalPrice,
  placeOrder,
}: OrderContentProps) {
  return (
    <div className="w-full md:w-96 bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
      <h2 className="text-xl font-bold">Your Cart ({order.length})</h2>

      <div className="flex flex-col gap-4">
        {order.map((item) => {
          const subtotal = item.price * item.quantity;
          return (
            <div
              key={item.id}
              className="border-b border-gray-200 pb-2 last:mb-0 last:border-b-0 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-gray-700">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} x ${item.price.toFixed(2)} = $
                  {subtotal.toFixed(2)}
                </p>
              </div>

              {/* Controles para actualizar cantidad o eliminar */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                  }
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800 font-bold text-xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold">Order Total</p>
        <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
      </div>

      <div className="text-sm text-gray-500 mb-2">
        This is a carbon-neutral delivery
      </div>

      <button
        onClick={placeOrder}
        className="bg-red-600 text-white rounded-lg py-2 font-semibold hover:bg-red-700"
      >
        Confirm Order
      </button>
    </div>
  );
}
