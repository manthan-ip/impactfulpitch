import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Example partner logos - replace with actual partner data
const partnerLogos = [
    // Row 1
    [
        { name: "500 Startups", image: "https://placehold.co/200x80/e2e8f0/333333?text=500+Startups" },
        { name: "Y Combinator", image: "https://placehold.co/200x80/e2e8f0/333333?text=Y+Combinator" },
        { name: "Techstars", image: "https://placehold.co/200x80/e2e8f0/333333?text=Techstars" },
        { name: "Sequoia", image: "https://placehold.co/200x80/e2e8f0/333333?text=Sequoia" },
        { name: "Accel", image: "https://placehold.co/200x80/e2e8f0/333333?text=Accel" },
        { name: "Lightspeed", image: "https://placehold.co/200x80/e2e8f0/333333?text=Lightspeed" }
    ],
    // Row 2
    [
        { name: "Matrix Partners", image: "https://placehold.co/200x80/e2e8f0/333333?text=Matrix+Partners" },
        { name: "Elevation Capital", image: "https://placehold.co/200x80/e2e8f0/333333?text=Elevation" },
        { name: "Nexus VP", image: "https://placehold.co/200x80/e2e8f0/333333?text=Nexus+VP" },
        { name: "Tiger Global", image: "https://placehold.co/200x80/e2e8f0/333333?text=Tiger+Global" },
        { name: "SoftBank", image: "https://placehold.co/200x80/e2e8f0/333333?text=SoftBank" },
        { name: "Bessemer", image: "https://placehold.co/200x80/e2e8f0/333333?text=Bessemer" }
    ],
    // Row 3
    [
        { name: "Andreessen", image: "https://placehold.co/200x80/e2e8f0/333333?text=Andreessen" },
        { name: "Peak XV", image: "https://placehold.co/200x80/e2e8f0/333333?text=Peak+XV" },
        { name: "Blume", image: "https://placehold.co/200x80/e2e8f0/333333?text=Blume" },
        { name: "Kalaari", image: "https://placehold.co/200x80/e2e8f0/333333?text=Kalaari" },
        { name: "3State", image: "https://placehold.co/200x80/e2e8f0/333333?text=3State" },
        { name: "Chiratae", image: "https://placehold.co/200x80/e2e8f0/333333?text=Chiratae" }
    ]
];

const ScrollingRow = ({ logos, speed = 1.2 }) => {
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
                    <div
                        key={index}
                        className="flex-shrink-0 w-[220px]"
                    >
                        <div className="h-24 flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5">
                            <div className="text-center">
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="w-full h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {logos.map((logo, index) => (
                    <div
                        key={`duplicate-${index}`}
                        className="flex-shrink-0 w-[220px]"
                    >
                        <div className="h-24 flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5">
                            <div className="text-center">
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="w-full h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {/* Third set to ensure smooth transition */}
                {logos.map((logo, index) => (
                    <div
                        key={`triple-${index}`}
                        className="flex-shrink-0 w-[220px]"
                    >
                        <div className="h-24 flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5">
                            <div className="text-center">
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="w-full h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Partners() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <section 
            ref={containerRef}
            className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50/30 via-white to-white"
        >
            <div className="max-w-7xl mx-auto relative px-4">
                {/* Header */}
                <div className={`
                    text-center mb-16 transition-all duration-700 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}>
                    <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-800 backdrop-blur-sm text-white text-sm transform transition-transform duration-500 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span className="font-medium text-blue-300">Our Network</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Ecosystem Partners
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Collaborating with leading players in the startup ecosystem to provide comprehensive support and opportunities
                    </p>
                </div>

                {/* Logo Grid Container */}
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
                        <ScrollingRow logos={partnerLogos[0]} speed={1.5} />
                        <ScrollingRow logos={partnerLogos[1]} speed={1.2} />
                        <ScrollingRow logos={partnerLogos[2]} speed={1.3} />
                    </div>
                </div>

                {/* Simple ending section with metrics */}
                {/* <div className={`
                    mt-16 text-center transition-all duration-700 ease-out delay-400
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}>
                    <div className="flex justify-center gap-16 text-sm">
                        <div className="flex flex-col items-center space-y-1">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">18+</span>
                            <span className="text-gray-500">Countries</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50+</span>
                            <span className="text-gray-500">Investment Firms</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">200+</span>
                            <span className="text-gray-500">Active Partners</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}