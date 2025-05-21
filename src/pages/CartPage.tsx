import React from 'react';

const CartPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <p className="mb-4">Your selected items will appear here.</p>
        {/* Add cart items here */}
      </div>
    </div>
  );
};

export default CartPage;