import React from 'react';
import StyledButton from "../../components/StyledButton";
import { useContact } from "../../context/ContactContext";

export default function FounderGrooming() {
  const { onOpen } = useContact();
  // Founder services array
  const founderServices = [
    {
      title: "Expert Coaching",
      description: "Our IIM-led experienced team coaches founders on how to effectively communicate their business vision and value proposition to investors."
    },
    {
      title: "Demo Day Preparation",
      description: "We provide specialized services to prepare founders for Demo Day presentations, ensuring they convey their message with confidence and clarity."
    },
    {
      title: "Presentation Guidance",
      description: "We guide founders on what to say and how to say it, ensuring they deliver impactful presentations that resonate with investors."
    }
  ];

  // Stats data
  const founderStats = [
    { value: "92%", label: "Success Rate" },
    { value: "200+", label: "Founders Coached" },
    { value: "4.8/5", label: "Client Rating" }
  ];

  // Features for Go-to-Market strategy
  const gtmFeatures = [
    "Target audience identification and segmentation",
    "Product positioning and messaging strategy",
    "Channel selection and sales strategy development",
    "Pricing strategy and revenue model optimization",
    "Launch planning and execution roadmap"
  ];

  // Stats related to GTM strategy service
  const gtmStats = [
    { value: "40%", label: "Average increase in customer acquisition for clients" },
    { value: "6 Months", label: "Typical timeframe to measurable market traction" },
    { value: "2X", label: "Improvement in sales cycle efficiency observed" }
  ];

  return (
    <div className="w-full py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Stats and Image */}
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
                    {founderStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                          <div className="text-gray-700 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Founder Coaching Image */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 relative">
                    <div className="flex justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">Founder Coaching</h3>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <img 
                        src="/images/founder-coaching.jpg" 
                        alt="Founder coaching session" 
                        className="w-full h-auto"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/600x400/111827/FFFFFF?text=Founder+Coaching";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="flex flex-col">
            <div className='flex gap-5 items-center'>
            <div className="w-20 h-20 p-4 bg-white shadow-lg rounded-2xl mb-6 flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">Founder's <span className="text-blue-600">Grooming</span></h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our Investor Meeting Preparation and Founder's Grooming Services are tailored to help founders present their business in the best possible light. We offer:
            </p>
            
            <ul className="space-y-3 mb-8">
              {founderServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">{service.title}:</span> {service.description}
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <StyledButton 
                onClick={onOpen} 
                variant="primary"
                size="lg"
              >
                Let's Talk
              </StyledButton>
            </div>
          </div>
        </div>
        
        {/* Testimonial Section */}
        {/* <div className="mt-16 flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <img 
              src="/images/alon-bartur.jpg" 
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
        </div> */}
      </div>
    </div>
  );
}