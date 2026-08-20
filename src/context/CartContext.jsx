import React, { createContext, useContext, useState, useEffect } from 'react';
let state = {
  items: [
    { id: '1', name: 'Premium Item', price: 29.99, quantity: 1, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500' }
  ]
};
const listeners = new Set();
const notify = () => listeners.forEach(l => l(state));

export const CartContext = createContext(state);
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(state.items);
  return (
    <CartContext.Provider value={{ items, addItem: (i) => setItems(prev => [...prev, i]), removeItem: (id) => setItems(prev => prev.filter(x => x.id !== id)) }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext) || state;

export const useCartStore = (selector) => {
  const [, setTick] = useState(0);
  useEffect(() => {
    const l = () => setTick(t => t + 1);
    listeners.add(l);
    return () => listeners.delete(l);
  }, []);
  const actions = {
    items: state.items,
    getTotalPrice: () => state.items.reduce((acc, i) => acc + (i.price * i.quantity), 0).toFixed(2),
    addItem: (item) => { state.items = [...state.items, item]; notify(); },
    removeItem: (id) => { state.items = state.items.filter(i => i.id !== id); notify(); },
    updateQuantity: (id, q) => { state.items = state.items.map(i => i.id === id ? {...i, quantity: q} : i); notify(); },
    clearCart: () => { state.items = []; notify(); }
  };
  return selector ? selector(actions) : actions;
};
export default useCartStore;
