import CarouselGallery from "./components/CarouselGallery";      
import { useState, useRef, useEffect } from "react";

// Import all Client logos
const importClientLogos = () => {
  const logos = [];
  for (let i = 1; i <= 48; i++) {
    const formattedNum = String(i).padStart(2, '0');
    logos.push(new URL(`./ClientLogos/Our Client logos-${formattedNum}.png`, import.meta.url).href);
  }
  return logos;
};

const clientLogos = importClientLogos();

const LogoCard = ({ logo }) => {
  return (
    <div className="flex-shrink-0 w-[180px]">
      <img 
        src={logo}
        alt="Client Logo"
        className="h-24 w-auto object-contain transition-all duration-300 hover:scale-110 hover:shadow-lg filter drop-shadow-md"
        onError={(e) => {
          console.error(`Failed to load image: ${logo}`);
        }}
      />
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

    const logoWidth = 180 + 32; // card width + gap (w-[180px] + gap-8)
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

export default function Clients() {
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

  // Testimonial data
  const testimonials = [
    {
      quote: "We have had an excellent experience working on our pitchdeck, with Nikhil & his whole team. They were prompt, responsive, and very professional, which helped us to put together the first draft of our pitch deck in a record time of 11 days. I am sure we will have a rewarding association with them, going forward upto the investment.",
      name: "Gauri Kumar",
      position: "Founder of Scholar Planet",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "We worked with Mr. Nikhil and his great team to design and make our pitch deck. It was a great thorough experience, they bring a lot of experience and professionalism. The design they have created is very neat and smart, and I have really liked it. Would recommend it to anyone who is looking to get their pitch deck made but is new to the fundraising world.",
      name: "Vedansh Singh",
      position: "Founder of 1.5 Degree",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Working with this team has been game-changing for our startup. Their pitch deck design and strategic guidance helped us secure investment from our top-choice VCs.",
      name: "Mayank Jani",
      position: "CTO of Nanta Tech",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
    // {
    //   quote: "The level of detail and strategic thinking that went into our pitch materials was exceptional. They don't just create decks, they build compelling investment narratives.",
    //   name: "Alicia Martinez",
    //   position: "COO of UiPath",
    //   image: "https://randomuser.me/api/portraits/women/28.jpg"
    // },
    // {
    //   quote: "Their ability to translate complex technical concepts into clear, investor-friendly presentations is unmatched. Couldn't have reached our funding goals without them.",
    //   name: "James Wilson",
    //   position: "VP of Product at Intercom",
    //   image: "https://randomuser.me/api/portraits/men/46.jpg"
    // }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 pt-8 pb-24 px-8 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`
          text-center mb-16 transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-800 backdrop-blur-sm text-white text-sm transform transition-transform duration-500 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-medium text-blue-300">Our Clientele</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From Idea to IPO:
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Diverse Portfolio Reflects Expertise Across Every Stage & Industry
          </p>
        </div>

        {/* Logos Grid */}
        <div className={`
          mb-20 relative transition-all duration-700 ease-out delay-200
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          {/* Improved gradient overlays */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white to-transparent" style={{ WebkitMaskImage: 'linear-gradient(to right, white, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white to-transparent" style={{ WebkitMaskImage: 'linear-gradient(to left, white, transparent)' }} />
          </div>
          <div className="space-y-10 py-8">
            <ScrollingRow logos={clientLogos.slice(0, Math.ceil(clientLogos.length / 2))} speed={2.5} />
            <ScrollingRow logos={clientLogos.slice(Math.ceil(clientLogos.length / 2))} speed={2.2} />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="relative">          
          {/* Carousel container */}
          <div className="relative max-w-4xl mx-auto">
            <CarouselGallery
              items={testimonials}
              autoplay={true}
              autoplayDelay={9000}
              pauseOnHover={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}