import React from 'react';

export default function ServicesSection8() {
  // Define process steps with updated icons and content
  const processSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 3v18"></path>
        </svg>
      ),
      label: "DISCOVERY",
      title: "Initial Consultation & Goals Mapping",
      points: [
        "Deep dive into your startup's unique value proposition",
        "Define clear objectives and ideal investor profiles",
        "Outline customized strategy and timeline"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
          <path d="M12 8v-2"></path>
          <path d="M12 18v-2"></path>
          <path d="M16 12h2"></path>
          <path d="M6 12h2"></path>
        </svg>
      ),
      label: "ANALYSIS",
      title: "Market & Competitive Research",
      points: [
        "Comprehensive industry and market opportunity analysis",
        "Investor thesis alignment research",
        "Competitive landscape positioning"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      label: "DEVELOPMENT",
      title: "Strategic Content Creation",
      points: [
        "Narratives crafted specifically for investor engagement",
        "Data-driven financial models and projections",
        "Visual storytelling aligned with your brand identity"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
        </svg>
      ),
      label: "REFINEMENT",
      title: "Collaborative Iterations",
      points: [
        "Initial draft review within first 10 days",
        "Feedback integration and second draft within next 10 days",
        "Final polishing with precision and attention to detail"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      label: "DELIVERY",
      title: "Final Assets & Implementation",
      points: [
        "Complete pitch materials package delivery",
        "Pitch rehearsal and feedback sessions",
        "Ready-to-present assets with backup materials"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      label: "SUPPORT",
      title: "Ongoing Investor Engagement",
      points: [
        "Introductions to our investor network",
        "Post-pitch support and follow-up strategy",
        "Continuous refinement based on investor feedback"
      ]
    }
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-b from-blue-100 via-indigo-100 to-purple-100 relative overflow-hidden">
      {/* Subtle texture overlay for continuity */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      {/* Gradient overlay for added depth */}
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-500/5 to-purple-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="w-20 h-20 p-4 bg-white shadow-lg rounded-2xl mb-6 flex items-center justify-center transform hover:rotate-6 transition-transform duration-300 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">Our <span className="text-blue-600">Process</span></h2>
          
          <div className="bg-white rounded-full py-2 px-6 shadow-md inline-block mb-4 w-max">
            <span className="text-gray-700 text-sm font-medium">Strategic & Collaborative</span>
          </div>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A proven workflow that balances founder vision with investor expectations to create compelling, results-driven materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group">
              {/* Accent color on hover */}
              <div className="absolute top-0 left-0 w-2 h-0 bg-gradient-to-b from-blue-400 to-blue-600 group-hover:h-full transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 text-blue-500">
                  {step.icon}
                </div>
                
                <div className="inline-block bg-blue-50 rounded-full px-4 py-1 text-xs font-semibold text-blue-700 mb-3">
                  {step.label}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">{step.title}</h3>
                
                <ul className="space-y-3">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="mr-2 mt-1">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Process Timeline Visual - Mobile-friendly */}
        <div className="mt-12 hidden md:block">
          <div className="relative h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-full max-w-5xl mx-auto">
            {/* Timeline Nodes */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="absolute w-6 h-6 rounded-full bg-white border-2 border-blue-500 top-1/2 transform -translate-y-1/2" style={{ left: `${index * 20}%` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 