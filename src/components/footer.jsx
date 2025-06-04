import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo-white.png";
import StyledButton from './StyledButton';
import SocialIcons from './SocialIcons';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeInput, setActiveInput] = useState(false);
    const [email, setEmail] = useState('');
    const [showThanks, setShowThanks] = useState(false);
    const footerRef = useRef(null);
    
    // Animation to reveal footer when it comes into view
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
        
        if (footerRef.current) {
            observer.observe(footerRef.current);
        }
        
        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);
    
    // Handle newsletter subscription
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            setShowThanks(true);
            setEmail('');
            setTimeout(() => setShowThanks(false), 5000);
        }
    };
    
    return (
        <footer 
            ref={footerRef} 
            className={`bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-300 pt-15 pb-10 relative overflow-hidden`}
            aria-labelledby="footer-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left Column: Logo and Description */}
                    <div 
                        className={`lg:col-span-4 transform transition-all duration-1000 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <Link to="/" className="inline-block mb-2">
                            <img src={logo} alt="ImpactfulPitch Logo" className="h-11 w-auto" />
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                            Empowering startups with AI-driven pitch decks and strategic insights for successful fundraising.
                        </p>
                        <div className="flex items-center">
                            {/* Social media links - with proper accessibility */}
                            <SocialIcons/>
                        </div>
                    </div>

                    {/* Middle Columns: Navigation Links */}
                    <div 
                        className={`lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-300 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div>
                            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Product</h4>
                            <ul className="space-y-3">
                                {['Features', 'Integrations'].map(item => (
                                    <li key={item} className="transform transition-all" style={{ 
                                        transitionDelay: `${300 + (50 * Math.random())}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                                    }}>
                                        <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 py-1 inline-block">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Company</h4>
                            <ul className="space-y-3">
                                {['About', 'Blog', 'Contact'].map(item => (
                                    <li key={item} className="transform transition-all" style={{ 
                                        transitionDelay: `${450 + (50 * Math.random())}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                                    }}>
                                        <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 py-1 inline-block">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Resources</h4>
                            <ul className="space-y-3">
                                {['Case Studies', 'Guides', 'Support Center'].map(item => (
                                    <li key={item} className="transform transition-all" style={{ 
                                        transitionDelay: `${600 + (50 * Math.random())}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                                    }}>
                                        <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 py-1 inline-block">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Newsletter Signup */}
                    <div 
                        className={`lg:col-span-3 transform transition-all duration-1000 delay-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Stay Updated</h4>
                        <p className="text-gray-400 mb-4">Get the latest news, insights, and product updates directly in your inbox.</p>
                        <form onSubmit={handleSubscribe} className="relative"> 
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-grow">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onFocus={() => setActiveInput(true)}
                                        onBlur={() => setActiveInput(false)}
                                        className="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                                        aria-label="Email address"
                                        required
                                    />
                                    {/* Animating border for input focus */}
                                    <span 
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 transition-transform duration-300" 
                                        style={{
                                            transform: activeInput ? 'scaleX(1)' : 'scaleX(0)',
                                        }}
                                        aria-hidden="true"
                                    ></span>
                                </div>
                                <StyledButton 
                                    type="submit" 
                                    size="md" 
                                    className="w-full sm:w-auto shadow-blue-900/30 hover:shadow-blue-900/50 hover:bg-gray-200"
                                >
                                    Subscribe
                                </StyledButton>
                            </div>
                            {showThanks && (
                                <div 
                                    className="text-green-400 py-2 flex items-center absolute -bottom-10 left-0 right-0"
                                    style={{ animation: 'fadeIn 0.5s ease-out forwards' }}
                                    aria-live="polite"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Thanks for subscribing!
                                </div>
                            )}
                        </form>
                        <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe anytime.</p>
                    </div>
                    
                </div>

                {/* Footer Bottom */}
                <div 
                    className={`mt-16 pt-8 border-t border-gray-700/50 text-center md:text-left md:flex md:justify-between items-center transition-all duration-1000 delay-1000 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <p className="text-sm text-gray-500 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} ImpactfulPitch. All rights reserved.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 