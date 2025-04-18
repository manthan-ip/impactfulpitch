import React from 'react';
import StyledButton from "../../components/StyledButton";

export default function ServicesSection2() {
  // Features list for pitch deck service
  const pitchDeckFeatures = [
    "Compelling storytelling that captures investor attention",
    "Clear value proposition and business model explanation",
    "Tailored pitch decks for seed, Series A, and growth rounds",
    "Market analysis and competitive positioning",
    "Visual design that enhances your brand identity"
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-indigo-100 via-purple-100 to-blue-100 relative">
      {/* Subtle texture overlay for continuity */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      {/* Gradient overlay for added depth */}
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-indigo-500/5 to-purple-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h4 className="text-blue-600 font-semibold mb-3">Professional Service</h4>
            <h2 className="text-4xl font-bold mb-6">Pitch Deck Creation & Optimization</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With over a decade of experience, we specialize in crafting captivating narratives and concise content 
              that capture the attention of investors. We understand what investors seek in a pitch deck – it's not just about selling your product or service; it's about selling your story.
            </p>
            
            <ul className="space-y-3 mb-8">
              {pitchDeckFeatures.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <StyledButton 
                href="#contact" 
                variant="primary"
                size="lg"
              >
                Let's Talk
              </StyledButton>
              
              <StyledButton 
                href="#samples" 
                variant="secondary"
                size="lg"
              >
                View Samples
              </StyledButton>
            </div>
          </div>
          
          {/* Right Column - Laptop Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-5 shadow-xl transform hover:rotate-1 transition-transform duration-300">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 relative overflow-hidden shadow-sm">
                {/* Decorative image in the background */}
                <img 
                  src="/vite.svg" 
                  alt="Vite logo as placeholder" 
                  className="absolute top-5 right-5 w-16 h-16 opacity-10"
                />
                
                <div className="relative z-10">
                  {/* Preview Section */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 relative">
                    <div className="flex justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">Pitch Deck Preview</h3>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-md">
                      <img 
                        src="/images/pitch-deck-laptop.jpg" 
                        alt="Pitch deck examples on laptop" 
                        className="w-full h-auto"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/600x400/111827/FFFFFF?text=Pitch+Deck+Examples";
                        }}
                      />
                    </div>
                    
                    {/* Pitch Deck Slides Indicators */}
                    <div className="mt-4 flex justify-center">
                      <div className="flex space-x-2">
                        {[...Array(5)].map((_, index) => (
                          <div 
                            key={index} 
                            className={`w-2 h-2 rounded-full ${index === 1 ? 'bg-blue-600' : 'bg-gray-300'}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <img 
              src="/images/testimonial-avatar.jpg" 
              alt="Alon Bartur" 
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/96/6b7280/FFFFFF?text=AB";
              }}
            />
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 italic font-light leading-relaxed">
            "Impactful Pitch has played a crucial role in scaling, building out and evolving our go-to-market model. It allows my team to easily stay on top of everything."
          </p>
          
          <h4 className="font-semibold text-gray-900 text-xl">Alon Bartur</h4>
          <p className="text-gray-600">Co-founder & CEO, Dopt</p>
        </div>
      </div>
    </div>
  );
} 