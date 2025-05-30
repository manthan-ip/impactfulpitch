import React, { useState, useEffect, useRef } from 'react';
import StyledButton from '../../components/StyledButton';

// Clean, professional media data
const mediaLogos = [
  [
    { name: 'TechCrunch', displayName: 'TechCrunch', link: '#' },
    { name: 'Forbes', displayName: 'Forbes', link: '#' },
    { name: 'Economic Times', displayName: 'Economic Times', link: '#' },
    { name: 'YourStory', displayName: 'YourStory', link: '#' },
    { name: 'Inc42', displayName: 'Inc42', link: '#' },
    { name: 'Business Standard', displayName: 'Business Standard', link: '#' }
  ],
  [
    { name: 'Mint', displayName: 'Mint', link: '#' },
    { name: 'Business Insider', displayName: 'Business Insider', link: '#' },
    { name: 'VCCircle', displayName: 'VCCircle', link: '#' },
    { name: 'Entrepreneur', displayName: 'Entrepreneur', link: '#' },
    { name: 'The Hindu', displayName: 'The Hindu', link: '#' },
    { name: 'Deccan Herald', displayName: 'Deccan Herald', link: '#' }
  ]
];

const LogoCard = ({ logo }) => {
  return (
    <div className="flex-shrink-0 w-[220px]">
      <a
        href={logo.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="h-24 flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:-translate-y-0.5">
          <div className="text-center">
            <div className="text-base font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
              {logo.displayName}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const ScrollingRow = ({ logos, speed = 0.3 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const logoWidth = 220 + 32; // card width + gap
    const totalWidth = logos.length * logoWidth;
    const resetPoint = -(totalWidth); // Reset when first set is completely out of view

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= speed;
        
        // Reset position for seamless loop when first set is completely hidden
        if (positionRef.current <= resetPoint) {
          positionRef.current = 0;
        }

        container.style.transform = `translateX(${positionRef.current}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [logos.length, speed, isPaused]);

  return (
    <div 
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={containerRef}
        className="flex gap-8 will-change-transform"
      >
        {/* First set */}
        {logos.map((logo, index) => (
          <LogoCard key={`first-${index}`} logo={logo} />
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <LogoCard key={`second-${index}`} logo={logo} />
        ))}
        {/* Third set to ensure smooth transition */}
        {logos.map((logo, index) => (
          <LogoCard key={`third-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
};

export default function Media() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '50px' }
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50/30 via-white to-white"
    >
      <div className="max-w-7xl mx-auto relative px-4">
        {/* Header */}
        <div className={`
          text-center mb-16 transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          {/* Badge - matched with site style */}
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-800 backdrop-blur-sm text-white text-sm transform transition-transform duration-500 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
            </svg>
            <span className="font-medium text-blue-300">Featured In</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Media Recognition
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Our journey and innovations have been featured across leading media publications
          </p>
        </div>

        {/* Logo Carousel with enhanced styling */}
        <div className={`
          relative transition-all duration-700 ease-out delay-200
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          {/* Improved gradient overlays */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white to-transparent" style={{ WebkitMaskImage: 'linear-gradient(to right, white, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white to-transparent" style={{ WebkitMaskImage: 'linear-gradient(to left, white, transparent)' }} />
          </div>

          {/* Logo rows with increased spacing */}
          <div className="space-y-10 py-8">
            <ScrollingRow logos={mediaLogos[0]} speed={1.5} />
            <ScrollingRow logos={mediaLogos[1]} speed={1.2} />
          </div>
        </div>

        {/* Enhanced ending section with CTA */}
        <div className={`
          mt-20 text-center transition-all duration-700 ease-out delay-400 relative
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl transform rotate-12"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl transform -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-100/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-8 py-12 rounded-2xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 backdrop-blur-sm border border-white/50 relative">
            {/* Quote Icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
            </div>

            <blockquote className="text-xl text-gray-700 font-medium italic mb-8">
              "Impactful Pitch has revolutionized the way startups approach investor presentations. Their expertise and innovative strategies are unmatched in the industry."
            </blockquote>

            <div className="flex flex-col items-center gap-6">
              {/* Featured badges with enhanced styling */}
              <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                <span className="font-medium">As featured in</span>
                <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 font-medium shadow-sm hover:shadow-md transition-all duration-300">Forbes</div>
                <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 font-medium shadow-sm hover:shadow-md transition-all duration-300">TechCrunch</div>
                <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 font-medium shadow-sm hover:shadow-md transition-all duration-300">Economic Times</div>
              </div>

              {/* Enhanced CTA Section */}
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Ready to make your pitch irresistible?</h3>
                <div className="flex flex-col items-center">
                  <StyledButton
                    to="/explore"
                    variant="primary"
                    size="lg"
                    className="shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Start Crafting Your Story
                  </StyledButton>
                  <p className="mt-3 text-sm text-gray-500">Join 500+ funded startups who trust us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      <style jsx>{`
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}