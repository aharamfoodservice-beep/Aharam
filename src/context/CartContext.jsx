import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Mock subscriptions for the dashboard
  const [activeSubscriptions] = useState([
    {
      id: 1,
      type: 'Monthly Elite - Pure Veg',
      daysRemaining: 14,
      daysTotal: 22,
      nextDelivery: 'Tomorrow, 12:30 PM'
    }
  ]);

  return (
    <CartContext.Provider value={{ activeSubscriptions }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
