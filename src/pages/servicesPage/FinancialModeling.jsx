import StyledButton from '../../components/StyledButton';

export default function FinancialModeling() {
  // Financial services features
  const financialFeatures = [
    "Detailed financial projections",
    "Business valuation analysis",
    "Cash flow modeling",
    "Revenue growth strategies",
    "Investment return calculations"
  ];

  // Stats data
  const financeStats = [
    { value: "95%", label: "Accuracy Rate" },
    { value: "$40M+", label: "Funds Raised" },
    { value: "250+", label: "Valuations Done" }
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">Financial <span className="text-blue-600">Modeling</span> &<br />Business Valuation</h2>
            </div>
            <div className="bg-white rounded-full py-2 px-6 shadow-md inline-block mb-6 w-max">
              <span className="text-gray-700 text-sm font-medium">Data-Driven Investor Materials</span>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our financial modeling and business valuation services provide you with robust, data-driven materials to present to investors. We create detailed projections and valuations that strengthen your fundraising efforts and strategic planning.
            </p>
            
            <ul className="space-y-3 mb-8">
              {financialFeatures.map((item, index) => (
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
                Build My Model
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
          
          {/* Right Column - Dashboard Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-5 shadow-xl transform hover:rotate-1 transition-transform duration-300">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 relative overflow-hidden shadow-sm">                
                <div className="relative z-10">
                  {/* Stats Section */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {financeStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                          <div className="text-gray-700 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Financial Dashboard Visualization */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 relative">
                    <div className="flex justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">Financial Dashboard</h3>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <img 
                        src="/images/financial-dashboard.jpg" 
                        alt="Financial dashboard with analytics" 
                        className="w-full h-auto"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/600x400/111827/FFFFFF?text=Financial+Dashboard";
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
              src="/images/filip-mark.jpg" 
              alt="Filip Mark" 
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/96/6b7280/FFFFFF?text=FM";
              }}
            />
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 italic font-light leading-relaxed">
            "The financial models provided by Impactful Pitch were instrumental in helping us secure our Series A funding. Their accuracy and depth impressed our investors."
          </p>
          
          <h4 className="font-semibold text-gray-900 text-xl">Filip Mark</h4>
          <p className="text-gray-600">Chief of Staff, Passionfront</p>
        </div> */}
      </div>
    </div>
  );
} 