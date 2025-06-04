import { useState, useEffect, useRef } from 'react';
import StyledButton from '../../components/StyledButton';
import Farmology_Before from './BeforeAfter/Farmology_Before.svg'
import Farmology_After from './BeforeAfter/Farmology_After.svg'
import Ecoline_Before from './BeforeAfter/Ecoline_Before.svg'
import Ecoline_After from './BeforeAfter/Ecoline_After.svg'
import SuperUs_Before from './BeforeAfter/SuperUs_Before.svg'
import SuperUs_After from './BeforeAfter/SuperUs_After.svg'
import Evora_Before from './BeforeAfter/Evora_Before.svg'
import Evora_After from './BeforeAfter/Evora_After.svg'

// Import slide images (before and after versions)
const importSlideImages = () => {
  // This is a placeholder. In a real implementation, you would import actual slide images.
  // For now, we'll use placeholder images to demonstrate the functionality.
  return [
    {
      id: 1,
      title: 'Executive Summary',
      description: 'Clear, concise overview of your business that captures attention',
      before: Farmology_Before,
      after: Farmology_After
    },
    {
      id: 2,
      title: 'Problem Statement',
      description: 'Compelling presentation of the problem your solution addresses',
      before: SuperUs_Before,
      after: SuperUs_After
    },
    {
      id: 3,
      title: 'Solution Slide',
      description: 'Showcasing your product/service as the ideal solution',
      before: Evora_Before,
      after: Evora_After
    },
    {
      id: 4,
      title: 'Market Opportunity',
      description: 'Visual representation of your target market and potential',
      before: Ecoline_Before,
      after: Ecoline_After
    }
    // {
    //   id: 5,
    //   title: 'Financial Projections',
    //   description: 'Clear, compelling presentation of your financial data',
    //   before: 'https://placehold.co/800x450/e2e8f0/475569?text=Before:+Financial+Projections',
    //   after: 'https://placehold.co/800x450/e0f2fe/0369a1?text=After:+Financial+Projections'
    // }
  ];
};

// Toggle Switch Component
const ToggleSwitch = ({ isAfter, onToggle }) => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <span className={`text-sm font-medium ${!isAfter ? 'text-gray-900' : 'text-gray-500'}`}>Before</span>
      <button 
        onClick={onToggle}
        className="relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        style={{ backgroundColor: isAfter ? '#3b82f6' : '#e5e7eb' }}
        aria-pressed={isAfter}
      >
        <span className="sr-only">Toggle before/after view</span>
        <span 
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${isAfter ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
      <span className={`text-sm font-medium ${isAfter ? 'text-gray-900' : 'text-gray-500'}`}>After</span>
    </div>
  );
};

// Navigation Arrow Button Component
const ArrowButton = ({ direction, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? 'left-2 md:left-4' : 'right-2 md:right-4'} 
        z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 opacity-70 shadow-md backdrop-blur-sm 
        transition-all duration-300 hover:bg-white hover:shadow-lg focus:outline-none 
        ${disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {direction === 'left' ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
};

export default function BeforeAfterSlides() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAfterView, setIsAfterView] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);
  
  const slides = importSlideImages();
  const currentSlide = slides[currentSlideIndex];

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

  // Handle slide navigation
  const goToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlideIndex(currentSlideIndex + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlideIndex(currentSlideIndex - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Toggle between before and after views
  const toggleView = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsAfterView(!isAfterView);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-800 backdrop-blur-sm text-white text-sm transform transition-transform duration-500 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium text-blue-300">Transformation Showcase</span>
          </div>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-300 text-gray-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            The Impactful Difference
          </h2>
          <p 
            className={`text-gray-600 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            See how we transform ordinary pitch decks into compelling visual stories that captivate investors
          </p>
          
          {/* Toggle Switch */}
          <div className={`mb-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ToggleSwitch isAfter={isAfterView} onToggle={toggleView} />
          </div>
        </div>

        {/* Slides Display */}
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Navigation Arrows */}
          <ArrowButton 
            direction="left" 
            onClick={goToPrevSlide} 
            disabled={currentSlideIndex === 0} 
          />
          <ArrowButton 
            direction="right" 
            onClick={goToNextSlide} 
            disabled={currentSlideIndex === slides.length - 1} 
          />
          
          {/* Slide Content */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Slide Image */}
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <img 
                src={isAfterView ? currentSlide.after : currentSlide.before} 
                alt={`${currentSlide.title} - ${isAfterView ? 'After' : 'Before'}`}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Slide Info Overlay */}
            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{currentSlide.title}</h3>
              <p className="text-gray-200">{currentSlide.description}</p>
            </div> */}
            
            {/* Before/After Badge */}
            <div className="absolute top-4 right-4 bg-gray-800/80 opacity-60 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium">
              {isAfterView ? 'After' : 'Before'}
            </div>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlideIndex(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlideIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to transform your pitch deck?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let our expert team help you create a pitch deck that stands out and gets results
          </p>
          <StyledButton 
            to="/services" 
            size="lg"
            className='max-w-sm mx-auto'
          >
            Explore Our Services
          </StyledButton>
        </div>
      </div>
      
      {/* Background decorative elements */}
      {/* <div className="absolute top-40 left-0 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div> */}
    </section>
  );
}