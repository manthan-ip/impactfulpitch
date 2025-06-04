import React, { useState, useEffect, useRef } from 'react';

const StartupShowcase = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate progress when element is in view
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        ));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate center container size and position based on scroll progress
  const centerScale = 1 - (scrollProgress * 0.6); // Shrinks from 100% to 40%
  const centerOpacity = Math.max(0.1, 1 - scrollProgress * 0.8);
  
  // Calculate startup cards visibility and position
  const cardsOpacity = Math.max(0, scrollProgress - 0.3);
  const cardsTransform = Math.max(0, (1 - scrollProgress) * 100);

  const startupLogos = [
    { name: "Startup 1", color: "bg-purple-400", position: "top-0 left-0" },
    { name: "Startup 2", color: "bg-pink-500", position: "top-0 left-1/3" },
    { name: "Startup 3", color: "bg-yellow-400", position: "top-0 right-0" },
    { name: "Startup 4", color: "bg-teal-500", position: "top-1/3 left-0" },
    { name: "Startup 5", color: "bg-purple-600", position: "top-2/3 left-0" },
    { name: "Startup 6", color: "bg-orange-400", position: "bottom-0 left-1/3" },
    { name: "Startup 7", color: "bg-purple-700", position: "top-1/3 right-0" },
    { name: "Startup 8", color: "bg-pink-400", position: "bottom-0 right-0" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Startup Showcase Section */}
      <div 
        ref={containerRef}
        className="relative h-screen bg-gray-100 overflow-hidden flex items-center justify-center mb-12"
      >
        {/* Background Startup Cards */}
        <div className="absolute inset-0 p-8">
          <div className="relative w-full h-full max-w-4xl mx-auto">
            {startupLogos.map((startup, index) => (
              <div
                key={index}
                className={`absolute w-48 h-32 rounded-xl ${startup.color} ${startup.position} shadow-lg transition-all duration-1000 ease-out flex items-center justify-center text-white font-semibold`}
                style={{
                  opacity: cardsOpacity,
                  transform: `translateY(${cardsTransform}px) scale(${0.8 + cardsOpacity * 0.2})`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mb-2 mx-auto flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <span>{startup.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Shark Tank Container */}
        <div 
          className="relative z-10 bg-black rounded-2xl shadow-2xl transition-all duration-700 ease-out flex items-center justify-center"
          style={{
            width: `${Math.max(300, 400 * centerScale)}px`,
            height: `${Math.max(200, 280 * centerScale)}px`,
            opacity: centerOpacity,
            transform: `scale(${centerScale})`
          }}
        >
          <div className="text-center text-white">
            <div className="mb-4">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto flex items-center justify-center text-3xl font-bold">
                🦈
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Shark Tank</h3>
            <h4 className="text-xl text-orange-400">India</h4>
            <p className="text-sm opacity-80 mt-2">Featured Startups</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
          <p className="text-center text-gray-600 mt-2 text-sm">
            Scroll to reveal our success stories
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartupShowcase;