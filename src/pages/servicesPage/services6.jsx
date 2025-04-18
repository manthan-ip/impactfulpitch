import React from 'react';
import StyledButton from '../../components/StyledButton';

export default function ServicesSection6() {
  // Network Features
  const networkFeatures = [
    "Pre-screened investors",
    "Industry-specific matches",
    "One-on-one introductions",
    "Ongoing relationship management",
    "Follow-up support",
    "Pitch preparation assistance"
  ];

  // Network Stats
  const networkStats = [
    { value: "5,000+", label: "Angel Investors" },
    { value: "350+", label: "VC Firms" },
    { value: "82%", label: "Success Rate" }
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-b from-blue-100 via-indigo-100 to-purple-100 relative overflow-hidden">
      {/* Subtle texture overlay for continuity */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      {/* Gradient overlay for added depth */}
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-indigo-500/5 to-purple-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            <div className="w-20 h-20 p-4 bg-white shadow-lg rounded-2xl mb-6 flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">Investor <span className="text-blue-600">Network Access</span></h2>
            
            <div className="bg-white rounded-full py-2 px-6 shadow-md inline-block mb-6 w-max">
              <span className="text-gray-700 text-sm font-medium">Exclusive Network of Investors</span>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Gain access to our extensive network of investors who are actively seeking opportunities in companies like yours. Our curated connections ensure you're matched with the right investors who understand your industry and share your vision.
            </p>
            
            <ul className="space-y-3 mb-8">
              {networkFeatures.map((item, index) => (
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
                Access Network
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </StyledButton>
              <StyledButton 
                href="#learn-more" 
                variant="secondary"
                size="lg"
              >
                Learn More
              </StyledButton>
            </div>
          </div>
          
          {/* Right Column - Stats and Investors Image */}
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
                  {/* Stats Section */}
                  <div className="grid grid-cols-3 gap-4 mb-12">
                    {networkStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                          <div className="text-gray-700 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Investors Network Visualization */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 relative mt-6">
                    <div className="flex justify-between mb-8">
                      <h3 className="text-xl font-semibold text-gray-900">Our Network</h3>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                          </svg>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-8 0a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative h-64 bg-gray-50 rounded-xl overflow-hidden">
                      {/* Network visualization mockup - replace with actual image if available */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-blue-500 absolute opacity-10"></div>
                        <div className="w-32 h-32 rounded-full bg-blue-500 absolute opacity-5 -right-10 -bottom-10"></div>
                        <div className="w-16 h-16 rounded-full bg-indigo-500 absolute opacity-10 top-10 left-10"></div>
                        
                        {/* Connection lines */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250">
                          <path d="M100,125 L200,50" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                          <path d="M200,50 L300,100" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                          <path d="M200,50 L250,200" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                          <path d="M100,125 L150,200" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                          <path d="M150,200 L250,200" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                          <path d="M300,100 L250,200" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                          <path d="M100,125 L300,100" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                        </svg>
                        
                        {/* Nodes */}
                        <div className="absolute left-1/4 top-1/4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10 border-2 border-blue-100">
                          <span className="text-xs font-medium text-gray-700">Angel</span>
                        </div>
                        <div className="absolute left-1/2 top-1/5 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center z-10 border-2 border-blue-100 -translate-x-1/2 -translate-y-1/2">
                          <span className="text-xs font-medium text-gray-700">VC</span>
                        </div>
                        <div className="absolute right-1/4 top-2/5 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10 border-2 border-blue-100">
                          <span className="text-xs font-medium text-gray-700">Seed</span>
                        </div>
                        <div className="absolute left-1/3 bottom-1/4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10 border-2 border-blue-100">
                          <span className="text-xs font-medium text-gray-700">PE</span>
                        </div>
                        <div className="absolute right-1/4 bottom-1/4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10 border-2 border-blue-100">
                          <span className="text-xs font-medium text-gray-700">Growth</span>
                        </div>
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
              src="/images/degrasse-schrader.jpg" 
              alt="DeGrasse Schrader" 
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/96/6b7280/FFFFFF?text=DS";
              }}
            />
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 italic font-light leading-relaxed">
            "Through Impactful Pitch's investor network, we connected with the perfect investors who understood our vision. Their investor matching approach saved us months of pitching to the wrong people."
          </p>
          
          <h4 className="font-semibold text-gray-900 text-xl">DeGrasse Schrader</h4>
          <p className="text-gray-600">Chief of Staff, Pallet</p>
        </div>
      </div>
    </div>
  );
} 