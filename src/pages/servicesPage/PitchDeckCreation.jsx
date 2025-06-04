import React from 'react';
import StyledButton from '../../components/StyledButton';
import { useContact } from '../../context/ContactContext';

export default function PitchDeckCreation() {
  const { onOpen } = useContact();
  // Features list for pitch deck service
  // const pitchDeckFeatures = [
  //   "Compelling storytelling that captures investor attention",
  //   "Clear value proposition and business model explanation",
  //   "Tailored pitch decks for seed, Series A, and growth rounds",
  //   "Market analysis and competitive positioning",
  //   "Visual design that enhances your brand identity"
  // ];

  // Stats data for pitch deck service
  const pitchDeckStats = [
    { value: "95%", label: "Success Rate" },
    { value: "$50M+", label: "Funds Raised" },
    { value: "200+", label: "Decks Created" }
  ];

  return (
    <div className="w-full py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            <div className='flex gap-5 items-center'>
              <div className="w-20 h-20 p-4 bg-white shadow-lg rounded-2xl mb-6 flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">Pitch Deck <span className="text-blue-600">Creation</span> &<br />Optimization</h2>
            </div>
            
            <div className="bg-white rounded-full py-2 px-6 shadow-md inline-block mb-6 w-max">
              <span className="text-gray-700 text-sm font-medium">Professional Pitch Deck Service</span>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over a decade of experience, we specialize in crafting captivating narratives and concise content
              that capture the attention of investors.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We understand what investors seek in a pitch deck – it's not just about selling your product or service, it's about selling your story.
            </p>

            <div className="bg-white rounded-full py-2 px-6 shadow-md inline-block mb-6 w-max">
              <span className="text-gray-700 text-sm font-medium">Beyond Content</span>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We go beyond just content creation; we understand your service and then visualize and design the deck to effectively convey your message.
            </p>

            {/* <ul className="space-y-3 mb-8">
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
            </ul> */}

            <div className="flex flex-wrap gap-4">
              <StyledButton 
                onClick={onOpen} 
                variant="primary"
                size="lg"
              >
                Let's Talk
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </StyledButton>
              {/* <StyledButton 
                href="#samples" 
                variant="secondary"
                size="lg"
              >
                View Samples
              </StyledButton> */}
            </div>
          </div>

          {/* Right Column - Dashboard Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-5 shadow-xl transform hover:rotate-1 transition-transform duration-300">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 relative overflow-hidden shadow-sm">
                <div className="relative z-10">
                  {/* Stats Section */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {pitchDeckStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                          <div className="text-gray-700 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pitch Deck Preview */}
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

                    <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <img 
                        src="/images/pitch-deck-laptop.jpg" 
                        alt="Pitch deck examples" 
                        className="w-full h-auto"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/600x400/111827/FFFFFF?text=Pitch+Deck+Examples";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        {/* <div className="mt-16 flex flex-col items-center text-center">
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
        </div> */}
      </div>
    </div>
  );
}