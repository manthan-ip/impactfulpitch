import StyledButton from "../../components/StyledButton";
import { useContact } from "../../context/ContactContext";

export default function BusinessPlan() {
  const { onOpen } = useContact();
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
    <div className="w-full py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="lg:order-1">
            <img 
              src="/images/business-image.jpg" 
              alt="Business Planning" 
              className="w-full rounded-2xl shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/800x600/e2e8f0/64748b?text=Business+Planning";
              }}
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="flex flex-col lg:order-2">
            <div className='flex gap-5 items-center'>
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
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We understand what investors seek in a pitch deck – it's not just about selling your product or service, it's about selling your story.
            </p>

            <div className="space-y-4 mb-8">
              {businessPlanFeatures.map((feature, index) => (
                <div key={index}>
                  <div className="bg-white rounded-full py-2 px-6 shadow-md inline-block mb-2">
                    <span className="text-gray-700 text-sm font-medium">{feature.title}</span>
                  </div>
                  <p className="text-gray-600 ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
            
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
              src="/images/testimonial-degrasse.jpg" 
              alt="DeGrasse Schrader" 
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/96/6b7280/FFFFFF?text=DS";
              }}
            />
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 italic font-light leading-relaxed">
            "My team loves Impactful Pitch because it's so dynamic. We can splice our data in so many different ways and combinations."
          </p>
          
          <h4 className="font-semibold text-gray-900 text-xl">DeGrasse Schrader</h4>
          <p className="text-gray-600">Chief of Staff, Fallet</p>
        </div> */}
      </div>
    </div>
  );
}