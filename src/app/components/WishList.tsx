"use client";

import React, { useEffect, useState } from 'react';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const addToWishlist = (item: string) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = [...prevWishlist, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (index: number) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((_, i) => i !== index);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Your Wishlist</h2>
      <div className="space-y-6">
        {wishlist.length > 0 ? (
          <ul className="space-y-4">
            {wishlist.map((item, index) => (
              <li key={index} className="flex justify-between items-center text-lg bg-gray-100 p-2 rounded-md border border-gray-300 shadow-sm">
                <span>{item}</span>
                <button 
                  onClick={() => removeFromWishlist(index)} 
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">Your wishlist is empty. Start adding products to it!</p>
        )}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => addToWishlist(`Product ${wishlist.length + 1}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Add New Product
          </button>
        </div>
      </div>
    </div>
  );
}
