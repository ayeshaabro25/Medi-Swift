// components/Cart.tsx
import React, { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([
    { name: "Product 1", price: 100, quantity: 2 },
  ]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-xl font-bold">Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between">
          <p>{item.name}</p>
          <p>{item.quantity} x ${item.price}</p>
        </div>
      ))}
      <p className="font-bold">Total: ${totalPrice}</p>
    </div>
  );
}
