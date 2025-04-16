import { Link } from "react-router-dom";

export default function HomeSection1() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center px-8 py-16 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
          {/* Left Section - Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Impactful Acceleration <br />
              for your <br/>
              <span className="text-blue-600">Fund Raising</span> Needs
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              From pitch decks to investor connections, 
              <span className="text-gray-500"> we provide end-to-end support, ensuring your story captivates investors and secures funding customized to your needs.</span>
            </p>

            <div className="mb-8">
              <Link
                to="/contact"
                className="bg-gray-900 hover:bg-black text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center"
              >
                Schedule Call
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-12 flex">
              <p className="font-medium text-gray-800 mb-4 mr-8">Trusted by the India's <br/>Biggest Startups</p>
              <div className="flex flex-wrap items-center gap-8">
                <img src="https://placehold.co/120x40/e2e8f0/a3bffa?text=afterpay" alt="Afterpay" className="h-8 opacity-70" />
                <img src="https://placehold.co/120x40/e2e8f0/a3bffa?text=Basecamp" alt="Basecamp" className="h-8 opacity-70" />
                <img src="https://placehold.co/120x40/e2e8f0/a3bffa?text=maze" alt="Maze" className="h-8 opacity-70" />
              </div>
            </div>
          </div>

          {/* Right Section - Dashboard Preview */}
          <div className="relative h-full flex flex-col items-center justify-center">
            {/* 230+ card */}
            <div className="absolute top-0 right-0 bg-white text-black p-6 rounded-2xl shadow-lg z-10 w-60">
              <div className="text-6xl font-bold mb-2">230+</div>
              <p className="text-gray-600">some big companies that we work with, and trust us very much</p>
              <div className="h-1 w-32 bg-black rounded-full mt-4"></div>
            </div>
            
            {/* Main dashboard preview */}
            <div className="bg-black rounded-2xl p-4 shadow-xl w-full max-w-md relative overflow-hidden mt-16">
              <div className="absolute top-2 right-2 bg-blue-600 rounded-full p-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              
              <div className="p-4 pt-12">
                <div className="mb-8">
                  <div className="w-32 h-0.5 bg-gray-600 mb-3"></div>
                  <p className="text-white text-sm">Make your pitch deck Impactful</p>
                </div>
                
                <div className="text-white text-2xl md:text-3xl font-bold mb-6">
                  Drive more attention <br />
                  of the investors
                </div>
                
                <div className="h-32 bg-black rounded-lg flex items-end justify-end p-2 space-x-4">
                  <div className="w-1/4 bg-blue-400 rounded-sm" style={{height: '60%'}}></div>
                  <div className="w-1/4 bg-blue-500 rounded-sm" style={{height: '80%'}}></div>
                  <div className="w-1/4 bg-blue-700 rounded-sm" style={{height: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
