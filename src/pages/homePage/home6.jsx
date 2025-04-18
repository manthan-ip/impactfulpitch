import React from "react";
import { Link } from "react-router-dom";
import StyledButton from '../../components/StyledButton';

// Template Card Component
function TemplateCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={image || "https://via.placeholder.com/300x150/f3f4f6/a3bffa?text=Template"} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {price === "Free" && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Free</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{price === "Free" ? "Free Template" : price}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function HomeSection6() {
  // Template data
  const templates = [
    {
      name: "Mercury",
      price: "49.00",
      image: "https://placehold.co/600x400/e2e8f0/a3bffa?text=Mercury+Template"
    },
    {
      name: "Spectra",
      price: "49.00",
      image: "https://placehold.co/600x400/e2e8f0/a3bffa?text=Spectra+Template"
    },
    {
      name: "Verve",
      price: "49.00",
      image: "https://placehold.co/600x400/e2e8f0/a3bffa?text=Verve+Template"
    },
    {
      name: "Slate",
      price: "49.00",
      image: "https://placehold.co/600x400/e2e8f0/a3bffa?text=Slate+Template"
    }
  ];

  return (
    <section className="py-16 pt-8 pb-24 px-8 bg-gradient-to-b from-blue-100 via-indigo-100 to-purple-100 relative">
      {/* Subtle texture overlay for continuity */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      {/* Blend element to connect with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-purple-100 -mb-1"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - AI Tool */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-100 text-gray-700 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Our AI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Build stunning decks in <br />
            blazing fast speeds
          </h2>
        </div>

        {/* AI Deck Builder Preview */}
        <div className="mb-24 rounded-2xl overflow-hidden shadow-2xl bg-gray-950 p-3">
          <div className="relative">
            {/* Main Preview */}
            <img 
              src="https://placehold.co/1200x700/1a1a1a/cccccc?text=AI+Deck+Builder+Interface" 
              alt="AI Deck Builder Interface" 
              className="w-full rounded-lg"
            />
            
            {/* Left Panel Overlay */}
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 w-48 bg-gray-900 rounded-lg p-4 shadow-lg text-white opacity-95">
              <h4 className="text-sm font-bold mb-3">Customize your pitch deck</h4>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Opacity</label>
                  <div className="h-1 bg-blue-600 rounded-full w-full"></div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Adjust</label>
                  <select className="w-full bg-gray-800 text-white text-xs p-1 rounded">
                    <option>Default</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Style</label>
                  <select className="w-full bg-gray-800 text-white text-xs p-1 rounded">
                    <option>Sleek</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Right Panel Overlay */}
            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 w-48 bg-gray-900 rounded-lg p-4 shadow-lg text-white opacity-95">
              <h4 className="text-sm font-bold mb-3">Colors</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs">Red</span>
                  <div className="h-2 bg-gradient-to-r from-red-300 to-red-600 rounded-full w-24"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Green</span>
                  <div className="h-2 bg-gradient-to-r from-green-300 to-green-600 rounded-full w-24"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Blue</span>
                  <div className="h-2 bg-gradient-to-r from-blue-300 to-blue-600 rounded-full w-24"></div>
                </div>
              </div>
            </div>
            
            {/* Thumbnails at bottom */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[1, 2, 3, 4, 5].map((slide) => (
                <div key={slide} className={`w-12 h-12 rounded-md overflow-hidden border-2 ${slide === 1 ? 'border-blue-500' : 'border-transparent'}`}>
                  <img 
                    src={`https://placehold.co/100x100/1a1a1a/cccccc?text=Slide+${slide}`} 
                    alt={`Slide ${slide} thumbnail`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Templates Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-100 text-gray-700 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Ease of Use
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find the perfect template
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Browse dozens of free pre-designed templates to kickstart your journey
          </p>
        </div>

        {/* Templates and CTA */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Free Templates</h3>
            <StyledButton 
              to="/templates" 
              variant="outline"
              size="sm"
              className="text-gray-600 hover:text-gray-900"
            >
              Browse all
            </StyledButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <TemplateCard
                key={index}
                name={template.name}
                price={template.price}
                image={template.image}
              />
            ))}
          </div>
        </div>

        {/* Discover Now CTA */}
        <div className="text-center">
          <StyledButton 
            to="/ai-builder" 
            variant="primary"
            size="lg"
            className="bg-gray-900 hover:bg-black"
          >
            Discover Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </StyledButton>
        </div>
      </div>
    </section>
  );
} 