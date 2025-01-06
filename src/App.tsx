import React from "react";
import { dessertItem } from "./data/data";

import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";
import Modal from "./Components/Modal";
import useOrder from "./hooks/useOrder";
import OrderContent from "./Components/orderContent";

function App() {
  const {
    order,
    addItem,
    removeItem,
    updateQuantity,
    placeOrder,
    clearOrder,
    isModalOpen,
    closeModal,
    totalPrice,
  } = useOrder();

  // Lógica local para restar
  const handleDecrement = (id: number) => {
    const existing = order.find((o) => o.id === id);
    if (existing && existing.quantity > 1) {
      updateQuantity(id, existing.quantity - 1);
    } else if (existing) {
      removeItem(id);
    }
  };

  return (
    <>
      {/* Encabezado */}
      <header className="w-full bg-rose-50 py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-900">
          Desserts
        </h1>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row gap-8">
        {/* Sección de Productos */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dessertItem.map((item) => {
            // Buscar si está en el carrito
            const existing = order.find((o) => o.id === item.id);
            const qty = existing ? existing.quantity : 0;

            return (
              <ProductCard
                key={item.id}
                item={item}
                quantity={qty}
                addItem={addItem}
                decrement={handleDecrement}
              />
            );
          })}
        </section>

        {/* Sección Carrito */}
        <aside className="w-full md:w-96">
          {order.length === 0 ? (
            <Cart />
          ) : (
            <OrderContent
              order={order}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
              totalPrice={totalPrice}
              placeOrder={placeOrder}
            />
          )}
        </aside>
      </main>

      {/* Modal de confirmación */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        clearOrder={clearOrder}
        order={order}
        totalPrice={totalPrice}
      />
    </>
  );
}

export default App;
