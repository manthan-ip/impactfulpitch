import { useState, useEffect, useRef } from "react";
import StyledButton from "../../components/StyledButton";
// import logo from "../../assets/Website Design-01.svg"
import WowElement from "./components/WowElement";
// import DraggingCard from "./components/DraggingCard";
import Hesa from "../../assets/Hesa.png";
import Algobulls from "../../assets/Algobulls.png";
import Stylework from "../../assets/Stylework.png";

export default function HeroSection() {
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
      className="py-16 pb-32 px-8 relative overflow-hidden"
    >      
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
              className={`text-lg text-gray-700 mb-8 max-w-lg transition-all duration-1000 delay-300 ${
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
              <StyledButton 
                variant="primary" 
                size="md" 
                to="/contact"
                className="inline-block"
              >
                Schedule a Call
              </StyledButton>
            </div>
            
            <div 
              className={`mt-12 flex items-center transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="font-medium text-gray-800 mb-4 mr-8">Trusted by the India's <br/>Biggest Startups</p>
              <div className="flex flex-wrap items-center gap-8">
                {[Algobulls, Stylework, Hesa].map((company, index) => (
                  <img 
                    key={company}
                    src={company} 
                    alt={company}
                    className={`h-20 -mt-3 opacity-0 transition-all duration-500 hover:opacity-100 hover:scale-110`}
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
          <WowElement/>
          {/* <DraggingCard position={[0, 0, 20]} gravity={[0, -40, 0]}/> */}
        </div>
      </div>
    </section>
  );
}
