import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import products from './data/products';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="font-sans">
      <Header cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} />
      <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAdd={handleAddToCart} />
          ))}
        </div>
        <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
      </main>
    </div>
  );
};

export default App;
