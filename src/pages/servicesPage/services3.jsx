import React from 'react';
import StyledButton from "../../components/StyledButton";

export default function ServicesSection3() {
  // Define service features
  const businessPlanFeatures = [
    {
      title: "Target Market/Sub Sectors",
      description: "Identifying specific markets and sub-sectors for targeted growth."
    },
    {
      title: "Customer Profiling",
      description: "Understanding the demographics and preferences of your target audience."
    },
    {
      title: "Market Size",
      description: "TAM/SAM/SOM: Analyzing Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Share of Market (SOM)."
    },
    {
      title: "Growth Drivers",
      description: "Identifying factors that will propel your business forward and foster growth."
    },
    {
      title: "Key Players",
      description: "Assessing competitors and understanding their strategies."
    },
    {
      title: "Global and Local Trends",
      description: "Keeping abreast of trends that may impact your business on both global and local scales."
    }
  ];

  // Stats data
  const businessPlanStats = [
    { value: "85%", label: "Success Rate" },
    { value: "3-5x", label: "Funding Increase" },
    { value: "20+", label: "Industries Served" }
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-b from-blue-100 via-indigo-100 to-purple-100 relative overflow-hidden">
      {/* Subtle texture overlay for continuity */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      {/* Gradient overlay for added depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-purple-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Business Plan Image */}
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
                    {businessPlanStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                          <div className="text-gray-700 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Business Plan Visualization */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 relative mt-6">
                    <div className="flex justify-between mb-8">
                      <h3 className="text-xl font-semibold text-gray-900">Business Plan Components</h3>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {businessPlanFeatures.slice(0, 3).map((feature, index) => (
                        <div key={index} className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                          <h4 className="font-medium text-blue-800 mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="flex flex-col">
            <div className="w-20 h-20 p-4 bg-white shadow-lg rounded-2xl mb-6 flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="M12 11h4"></path>
                <path d="M12 16h4"></path>
                <path d="M8 11h.01"></path>
                <path d="M8 16h.01"></path>
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">Business Plan <span className="text-blue-600">Development</span></h2>
            
            <div className="bg-white rounded-full py-2 px-6 shadow-md inline-block mb-6 w-max">
              <span className="text-gray-700 text-sm font-medium">Strategic Planning & Analysis</span>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A well-crafted business plan serves as your roadmap to success. Our comprehensive approach covers market analysis, strategy development, and detailed financial projections to help secure funding and guide your growth.
            </p>
            
            <ul className="space-y-3 mb-8">
              {businessPlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">{feature.title}:</span> {feature.description}
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <StyledButton 
                href="#contact" 
                variant="primary"
                size="lg"
              >
                Get Started
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
        </div>
        
        {/* Testimonial Section */}
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <img 
              src="/images/business-plan-testimonial.jpg" 
              alt="Client Testimonial" 
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/96/6b7280/FFFFFF?text=JD";
              }}
            />
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 italic font-light leading-relaxed">
            "The business plan Impactful Pitch developed for us was instrumental in securing our Series A funding. Their market analysis was thorough and the financial projections were spot-on."
          </p>
          
          <h4 className="font-semibold text-gray-900 text-xl">Janice Dempsey</h4>
          <p className="text-gray-600">Founder, TechInnovate</p>
        </div>
      </div>
    </div>
  );
} 