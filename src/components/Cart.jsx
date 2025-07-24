
import React from 'react';

const Cart = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center py-2">
                <span>{item.name} (x{item.qty})</span>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: ${total}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
