import React from 'react';

export default function ServicesSection1() {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-blue-200 via-blue-100 to-indigo-100 relative overflow-hidden">
      {/* Subtle texture overlay for continuity */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      {/* Gradient overlay for added depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-purple-500/5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center">
          <button className="mb-6 flex items-center gap-2 bg-white rounded-full px-6 py-2 text-gray-700 shadow-sm">
            <span className="material-icons text-blue-600">rocket_launch</span>
            Services
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Comprehensive<br />
            Suite of Services
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            From Passionate Idea to Investment Powerhouse<br />
            with Pitch Decks, Funding, and Growth Strategies
          </p>
        </div>
      </div>
    </div>
  );
} 