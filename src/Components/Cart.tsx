// components/Cart.tsx

import React from "react";

type CartProps = {
  // Podrías manejar si quieres props, 
  // pero aquí, por simplicidad, un simple "el carrito está vacío"
};

export default function Cart() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="w-full md:w-96 border border-red-200 rounded-lg p-4 bg-white shadow-lg">
        <h3 className="font-bold text-center text-2xl text-gray-800">
          Your cart is empty
        </h3>
        <img
          src="./assets/images/illustration-empty-cart.svg"
          alt="Empty Cart"
          className="mx-auto my-4 w-40 h-40 object-contain"
        />
        <p className="text-center text-gray-500">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}
