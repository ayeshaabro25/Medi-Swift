// components/ProductListing.tsx
import React from 'react';

interface Product {
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

const products: Product[] = [
  { name: "Product 1", price: 100, image: "/product1.jpg", inStock: true },
  { name: "Product 2", price: 200, image: "/product2.jpg", inStock: false },
];

export default function ProductListing() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div key={index} className="border p-4 rounded">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
        </div>
      ))}
    </div>
  );
}
