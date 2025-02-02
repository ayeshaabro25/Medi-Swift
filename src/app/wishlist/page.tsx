"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const sampleProducts = [
  { name: "Tablets", description: "High-quality medicine.", image: "/images/product-1.jpg" },
  { name: "Vitamins", description: "Essential vitamins.", image: "/images/product-2.jpg" },
  { name: "Wellness Syrup", description: "Reliable healthcare product.", image: "/images/product-3.jpg" },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlist(storedWishlist);
    }
  }, []);

  const addToWishlist = (item: string) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.includes(item)) {
        const updatedWishlist = [...prevWishlist, item];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
      return prevWishlist;
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProducts.map((product, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <button
              onClick={() => addToWishlist(product.name)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-12">Your Saved Wishlist Items</h3>
      <div className="mt-4">
        {wishlist.length > 0 ? (
          <ul className="space-y-2">
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
          <p>Your wishlist is empty. Add some products!</p>
        )}
      </div>
    </div>
  );
}
