import StyledButton from "../../components/StyledButton";
import { useContact } from "../../context/ContactContext";

export default function VideoPitch() {
  const { onOpen } = useContact();
  // Define video pitch services
  const videoPitchServices = [
    {
      title: "Tailored Messaging",
      description: "Our team works closely with you to craft a customized script and visual storyboard that effectively communicates your unique value proposition to your target audience."
    },
    {
      title: "Professional Production",
      description: "With our professional production team, state-of-the-art equipment, and expertise in storytelling, we ensure that your video pitch stands out and resonates with investors and stakeholders alike."
    }
  ];

  // Define video stats
  const videoStats = [
    { value: "3x", label: "Investor Engagement" },
    { value: "76%", label: "Conversion Rate" },
    { value: "2.4M", label: "Raised on Average" }
  ];

  return (
    <div className="w-full py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video Player Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-5 shadow-xl transform hover:rotate-1 transition-transform duration-300">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 relative overflow-hidden shadow-sm">
                {/* Decorative image in the background */}
                <img 
                  src="/vite.svg" 
                  alt="Vite logo as placeholder" 
                  className="absolute top-5 right-5 w-16 h-16 opacity-10"
                />
                
                <div className="relative z-10">
                  {/* Stats Section - matching services6.jsx */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {videoStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                          <div className="text-gray-700 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Video Player Mockup */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 relative">
                    <div className="flex justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Preview</h3>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-video">
                      <img 
                        src="/images/video-pitch-deck.jpg" 
                        alt="Video pitch deck preview" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/640x360/1e40af/ffffff?text=Video+Pitch+Deck";
                        }}
                      />
                      
                      {/* Overlay play button */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Details */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-gray-600">01:24 / 03:45</div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">Video Pitch <span className="text-blue-600">Deck</span></h2>
            </div>
            <div className="bg-white rounded-full py-2 px-6 shadow-md inline-block mb-6 w-max">
              <span className="text-gray-700 text-sm font-medium">Dynamic Presentations</span>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We specialize in producing engaging and dynamic video pitches that capture the essence of your business and leave a lasting impression on viewers.
            </p>
            
            <ul className="space-y-3 mb-8">
              {videoPitchServices.map((service, index) => (
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
          <div className="w-24 h-24 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <img 
              src="/images/filip-mark.jpg" 
              alt="Filip Mark" 
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/96/6b7280/FFFFFF?text=FM";
              }}
            />
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4 italic font-light leading-relaxed">
            "Impactful is an incredibly flexible company, you can build anything on it. It gives you the tools you need to build a CRM that's exactly right to your business, your data, and your processes."
          </p>
          
          <h4 className="font-semibold text-gray-900 text-xl">Filip Mark</h4>
          <p className="text-gray-600">Chief of Staff, Passionfront</p>
        </div> */}
      </div>
    </div>
  );
}