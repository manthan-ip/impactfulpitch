import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function HomeSection1() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  
  // Animation to reveal content when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Custom animation styles
  const floatingAnimation = {
    animation: 'transform 4s ease-in-out infinite',
    animationName: 'floating',
    '@keyframes floating': {
      '0%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' },
      '100%': { transform: 'translateY(0px)' }
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 pb-32 px-8 bg-gradient-to-b from-blue-50 via-blue-100 to-indigo-100 relative overflow-hidden"
    >
      {/* Subtle texture overlay for continuity */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      {/* Animated decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
      
      {/* Enhanced blend element for section 2 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-indigo-100/70 to-indigo-100 -mb-1 z-10"></div>
      
      {/* Gradient overlay for added depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-indigo-500/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
          {/* Left Section - Content */}
          <div className="flex flex-col justify-center">
            <h1 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Impactful Acceleration <br />
              for your <br/>
              <span className="text-blue-600 relative inline-block">
                Fund Raising
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 transform scale-x-0 transition-transform duration-700 delay-700 origin-left" style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
              </span> Needs
            </h1>

            <p 
              className={`text-lg text-gray-600 mb-8 max-w-lg transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              From pitch decks to investor connections, 
              <span className="text-gray-500"> we provide end-to-end support, ensuring your story captivates investors and secures funding customized to your needs.</span>
            </p>

            <div 
              className={`mb-8 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Link
                to="/contact"
                className="relative group bg-gray-900 hover:bg-black text-white font-medium py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center overflow-hidden"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span className="relative z-10 flex items-center transition-transform duration-300 group-hover:translate-x-1">
                  Schedule Call
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                
                {/* Button shine effect */}
                <span 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full transition-transform duration-1000" 
                  style={{ transform: hovered ? 'translateX(100%)' : 'translateX(-100%)' }}
                ></span>
              </Link>
            </div>
            
            <div 
              className={`mt-12 flex transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="font-medium text-gray-800 mb-4 mr-8">Trusted by the India's <br/>Biggest Startups</p>
              <div className="flex flex-wrap items-center gap-8">
                {['afterpay', 'Basecamp', 'maze'].map((company, index) => (
                  <img 
                    key={company}
                    src={`https://placehold.co/120x40/e2e8f0/a3bffa?text=${company}`} 
                    alt={company}
                    className={`h-8 opacity-0 transition-all duration-500 hover:opacity-100 hover:scale-110`}
                    style={{ 
                      transitionDelay: `${800 + (index * 200)}ms`,
                      opacity: isVisible ? 0.7 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Dashboard Preview */}
          <div 
            className={`relative h-full flex flex-col items-center justify-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {/* 230+ card with hover effect */}
            <div 
              className="absolute top-0 right-0 bg-white text-black p-6 rounded-2xl shadow-lg z-10 w-60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              style={{ 
                transitionDelay: isVisible ? '800ms' : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(40px)'
              }}
            >
              <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">230+</div>
              <p className="text-gray-600">some big companies that we work with, and trust us very much</p>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-4"></div>
            </div>
            
            {/* Main dashboard preview with floating animation */}
            <div 
              className="bg-black rounded-2xl p-4 shadow-xl w-full max-w-md relative overflow-hidden mt-16"
              style={{ 
                transitionDelay: isVisible ? '600ms' : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                ...(isVisible ? floatingAnimation : {})
              }}
            >
              <div className="absolute top-2 right-2 bg-blue-600 rounded-full p-4 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
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
                  {[60, 80, 100].map((height, index) => (
                    <div 
                      key={index} 
                      className={`w-1/4 rounded-sm transition-all duration-1000`}
                      style={{ 
                        height: isVisible ? `${height}%` : '0%',
                        transitionDelay: `${1000 + (index * 200)}ms`,
                        backgroundColor: `rgba(59, 130, ${200 + (index * 20)}, ${0.8 + (index * 0.1)})`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
