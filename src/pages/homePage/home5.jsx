import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import StyledButton from "../../components/StyledButton";

// Case Study Card Component with hover effects and animations
function CaseStudyCard({ image, color, title, description, link, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative bg-gray-900 text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${150 * index}ms`,
        transitionProperty: 'all',
        transitionDuration: '800ms'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card highlight effect on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}
      ></div>
      
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} 
        />
        {/* Image overlay with gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-0'}`}></div>
      </div>
      <div className="p-5 relative">
        <div className="flex items-center mb-3">
          <div className={`w-2 h-2 rounded-full bg-${color}-500 mr-2 ${isHovered ? 'animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]' : ''}`}></div>
          <span className="text-gray-400 text-sm">5 min read</span>
        </div>
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-blue-200' : 'text-white'}`}>{title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
        <Link to={link} className="inline-block">
          <div className={`w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'bg-blue-700 shadow-xl scale-110' : 'bg-blue-600'
          }`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 text-white transition-transform duration-300 ${isHovered ? 'translate-x-0.5 scale-110' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function HomeSection5() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeAvatar, setActiveAvatar] = useState(null);
  
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
  
  // Case studies data
  const caseStudies = [
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=Algobulls+Team",
      color: "blue",
      title: "How Algobulls Raised 2M USD for their Business",
      description: "We are the top digital marketing agency for branding corp. We offer a full rang engine...",
      link: "/case-studies/algobulls"
    },
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=Hesa+Team",
      color: "orange",
      title: "Hesa: A leading startup got 1.5M USD of Funding",
      description: "Working with this digital marketing agency has been a true partnership. They have tak...",
      link: "/case-studies/hesa"
    },
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=Ideal+Insurance",
      color: "purple",
      title: "How Ideal Insurance is Changing The Game",
      description: "What sets this digital marketing agency apart is their commitment to transparency and...",
      link: "/case-studies/ideal-insurance"
    },
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=BrandX+Team",
      color: "blue",
      title: "How BrandX Scaled their company to over US$ 200M and Coming for More",
      description: "We are the top digital marketing agency for branding corp. We offer a full rang engine...",
      link: "/case-studies/brandx"
    },
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=Startup+Trends",
      color: "orange",
      title: "The Latest Trends and Strategies in the Startup Industry",
      description: "Working with this digital marketing agency has been a true partnership. They have tak...",
      link: "/case-studies/startup-trends"
    },
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=ROI+Expertise",
      color: "purple",
      title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
      description: "What sets this digital marketing agency apart is their commitment to transparency and...",
      link: "/case-studies/maximizing-roi"
    }
  ];

  // Client avatars data
  const clientAvatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/46.jpg",
    "https://randomuser.me/api/portraits/women/28.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/women/76.jpg"
  ];

  // Custom fade-in animation style
  const fadeInAnimation = {
    opacity: 0,
    animation: 'fadeIn 0.5s ease-out forwards',
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 pt-8 pb-24 px-8 relative overflow-hidden"
    >      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with animated underline */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-800 backdrop-blur-sm text-white text-sm transform transition-transform duration-500 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium text-blue-300">Success Stories</span>
          </div>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-700 delay-300 text-gray-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            The story of clients
          </h2>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-700 delay-500 text-gray-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            who have raised funds
          </h2>
          
          {/* Animated underline */}
          <div className="flex justify-center">
            <div 
              className={`h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-8 transition-all duration-1000 delay-700 transform ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            ></div>
          </div>
        </div>

        {/* Case Studies Grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              image={study.image}
              color={study.color}
              title={study.title}
              description={study.description}
              link={study.link}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Client Avatars with hover effects */}
        <div 
          className={`flex flex-col items-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex -space-x-2 mb-4">
            {clientAvatars.map((avatar, index) => (
              <div 
                key={index}
                className="relative transform transition-all duration-300"
                onMouseEnter={() => setActiveAvatar(index)}
                onMouseLeave={() => setActiveAvatar(null)}
                style={{ 
                  zIndex: activeAvatar === index ? 10 : 10 - index,
                  transform: activeAvatar === index ? 'scale(1.2) translateY(-10px)' : 'scale(1) translateY(0)'
                }}
              >
                <img 
                src={avatar} 
                alt={`Funded client ${index + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-white transition-all duration-300"
                  style={{ 
                    boxShadow: activeAvatar === index ? '0 10px 25px -5px rgba(59, 130, 246, 0.5)' : 'none',
                    borderColor: activeAvatar === index ? '#3b82f6' : 'white'
                  }}
                />
                {activeAvatar === index && (
                  <div 
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-xs text-blue-800 font-medium px-2 py-0.5 rounded-md shadow-md"
                    style={fadeInAnimation}
                  >
                    Client {index + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-600 mb-8 text-center max-w-md">
            Be among <span className="text-blue-700 font-bold">400+</span> funded startups powered by Impactful pitch
          </p>
          <StyledButton 
            to="/case-studies" 
            variant="primary"
            size="md"
          >
            Browse all
          </StyledButton>
        </div>
      </div>
    </section>
  );
} 