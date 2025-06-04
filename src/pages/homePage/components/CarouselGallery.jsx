import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const DEFAULT_ITEMS = [
    {
        quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
        name: "Michael Kaizer",
        position: "CEO of Basecamp Corp",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "Impactful Pitch transformed our fundraising strategy completely. Their insights and execution were instrumental in securing our Series B funding in record time.",
        name: "Sarah Johnson",
        position: "Founder of GoCardless",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "Working with this team has been game-changing for our startup. Their pitch deck design and strategic guidance helped us secure investment from our top-choice VCs.",
        name: "David Chen",
        position: "CTO of Monzo",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        quote: "The level of detail and strategic thinking that went into our pitch materials was exceptional. They don't just create decks, they build compelling investment narratives.",
        name: "Alicia Martinez",
        position: "COO of UiPath",
        image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
        quote: "Their ability to translate complex technical concepts into clear, investor-friendly presentations is unmatched. Couldn't have reached our funding goals without them.",
        name: "James Wilson",
        position: "VP of Product at Intercom",
        image: "https://randomuser.me/api/portraits/men/46.jpg"
    }
];

const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function CarouselGallery({
  items = DEFAULT_ITEMS,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = true,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = 892 - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);

  // Autoplay and Pause on Hover Logic
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1; // Animate to clone.
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0); // Instantly reset position
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 5); // Small delay to allow reset before next animation
    }
  };

  // Navigation Handlers for Buttons (and now keys)
  const handleNext = () => {
    setCurrentIndex((prev) => {
        if (loop && prev === items.length - 1) {
            return prev + 1;
        }
        return Math.min(prev + 1, carouselItems.length - 1);
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (loop && prev === 0) {
        setIsResetting(true);
        x.set(-(items.length * trackItemOffset));
        setCurrentIndex(items.length - 1);
        setTimeout(() => setIsResetting(false), 50);
        return items.length - 1;
      }
      return Math.max(prev - 1, 0);
    });
  };

  // --- NEW: Keyboard Navigation Logic ---
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'ArrowRight') {
//         // Prevent default scroll behavior of the browser
//         event.preventDefault();
//         handleNext();
//       } else if (event.key === 'ArrowLeft') {
//         // Prevent default scroll behavior of the browser
//         event.preventDefault();
//         handlePrev();
//       }
//     };

//     // Attach the event listener to the window
//     window.addEventListener('keydown', handleKeyDown);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [handleNext, handlePrev]); // Depend on handleNext/Prev to re-attach if they change (though they are stable with useCallback)
  // --- END NEW ---

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex items-center pl-[15px]"
        style={{
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className="relative shrink-0 flex flex-col items-center justify-evenly rounded-[12px]"
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
            <div key={index} className="rounded-xl p-8 mb-4 shadow-lg border border-gray-100">
                <div className="flex items-center">
                <div className="relative">
                  <img 
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-purple-300 to-blue-300 text-white p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 001.225.997l5-1.429a1 1 0 001.17-1.409l-7-14z" />
                  </svg>
                  </div>
                </div>
                <div className="ml-4">
                    <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>
                    <p className="text-gray-600">{item.position}</p>
                </div>
                </div>
                <p className="text-xl text-gray-800 leading-relaxed italic mt-3">
                "{item.quote}"
                </p>
            </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation Buttons - Improved positioning and design */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-12 z-20">
        <button
          onClick={handlePrev}
          className="group relative bg-white hover:bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-300"
          disabled={!loop && currentIndex === 0}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-700 group-hover:text-gray-900 transform group-hover:-translate-x-0.5 transition-all duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 -right-12 z-20">
        <button
          onClick={handleNext}
          className="group relative bg-white hover:bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-300"
          disabled={!loop && currentIndex === items.length - 1}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-700 group-hover:text-gray-900 transform group-hover:translate-x-0.5 transition-all duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators
      <div
        className={`flex w-full justify-center ${
          round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
        }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? "bg-white"
                    : "bg-[#333333]"
                  : round
                    ? "bg-[#555]"
                    : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}