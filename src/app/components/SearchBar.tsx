// components/SearchBar.tsx
'use client';

import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search for products..."
      value={searchQuery} // Controlled input
      onChange={(e) => setSearchQuery(e.target.value)} // Update query
      className="border p-2 rounded w-full"
    />
  );
}
