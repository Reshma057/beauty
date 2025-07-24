import React from 'react';

const Header = ({ cartCount }) => (
  <header className="bg-pink-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Beauty Store</h1>
    <div>Cart: {cartCount} items</div>
  </header>
);

export default Header;
