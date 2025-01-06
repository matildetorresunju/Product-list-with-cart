import React from "react";
import { DessertItem } from "../types";

type ProductCardProps = {
  item: DessertItem;
  quantity: number; // Cantidad en el carrito
  addItem: (item: DessertItem) => void;
  decrement: (id: number) => void; // Para el botón "-"
};

export default function ProductCard({
  item,
  quantity,
  addItem,
  decrement
}: ProductCardProps) {
  const inCart = quantity > 0;

  // Manejadores
  const handleAdd = () => addItem(item);
  const handleDecrement = () => decrement(item.id);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2">
      {/**
       * 'relative' para posicionar el botón encima,
       * y 'mb-8' para dejar espacio libre debajo (evitar que se corte).
       */}
      <div className="relative mb-8">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-auto object-cover rounded-lg"
        />

        {!inCart ? (
          /** Estado NO en carrito */
          <button
            onClick={handleAdd}
            className={`
              absolute 
              left-1/2 
              -translate-x-1/2 
              /** 
               * Ajustamos 'bottom-[-1rem]' (o -4) para que salga
               * la mitad del botón por fuera de la imagen
               */
              bottom-[-1rem] 
              flex items-center justify-center
              bg-white text-red-600 font-semibold
              px-4 py-2 rounded-full border border-red-600
              hover:bg-red-600 hover:text-white
              whitespace-nowrap
              transition-colors
            `}
          >
            <img
              src="./assets/images/icon-add-to-cart.svg"
              alt="Cart Icon"
              className="w-4 h-4 mr-2"
            />
            Add to Cart
          </button>
        ) : (
          /** Estado SÍ en carrito */
          <div
            className={`
              absolute 
              left-1/2
              -translate-x-1/2
              bottom-[-1rem] 
              flex items-center bg-red-600 text-white
              rounded-full px-4 py-2 gap-4
            `}
          >
            <button
              onClick={handleDecrement}
              className="text-xl font-bold hover:opacity-80"
            >
              -
            </button>
            <span className="font-semibold text-lg">{quantity}</span>
            <button
              onClick={handleAdd}
              className="text-xl font-bold hover:opacity-80"
            >
              +
            </button>
          </div>
        )}
      </div>

      {/** Debajo de la imagen mostramos nombre y precio */}
      <div>
        {/* <p className="text-sm text-gray-500">{item.category}</p> si tuvieras categoría */}
        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
