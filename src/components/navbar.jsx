import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import StyledButton from "./StyledButton";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(null);
    
    // Track scroll position for navbar appearance changes
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 backdrop-blur-md transition-all duration-500 ease-in-out ${
                scrolled 
                    ? 'py-3 bg-white/40 shadow-[0_0_15px_rgba(0,0,0,0.05)]' 
                    : 'py-5 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-blue-50/30'
            }`}
        >
            {/* Subtle animated border that appears on scroll */}
            <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent transform transition-opacity duration-500 ease-in-out ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo with hover animation */}
                <Link 
                    to="/" 
                    className="relative group flex items-center"
                    onMouseEnter={() => setHovered('logo')}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Logo glow effect */}
                    <div className={`absolute inset-0 rounded-full bg-blue-400/20 blur-md transition-opacity duration-300 ${hovered === 'logo' ? 'opacity-100' : 'opacity-0'}`}></div>
                    
                    <div className="relative transform transition-transform duration-300 group-hover:scale-105">
                        <img 
                            src={logo}
                            alt="ImpactfulPitch Logo" 
                            className="h-10 w-auto"
                        />
                    </div>
                </Link>
                
                {/* Navigation Links with hover effects */}
                <div className="hidden md:flex items-center space-x-12">
                    <NavLink 
                        to="/services" 
                        label="Services" 
                        active={hovered === 'services'}
                        onMouseEnter={() => setHovered('services')}
                        onMouseLeave={() => setHovered(null)}
                    />
                    <NavLink 
                        to="/contact" 
                        label="Contact Us" 
                        active={hovered === 'contact'}
                        onMouseEnter={() => setHovered('contact')}
                        onMouseLeave={() => setHovered(null)}
                    />
                </div>
                
                {/* CTA Button using the new StyledButton component */}
                <StyledButton 
                    to="/explore"
                    variant="primary"
                    size="md"
                    onMouseEnter={() => setHovered('cta')}
                    onMouseLeave={() => setHovered(null)}
                >
                    Explore our AI
                </StyledButton>
                
                {/* Mobile menu button with animation */}
                <button className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-800 rounded-full hover:bg-white/10 transition-colors duration-300">
                    <div className="flex flex-col items-center justify-center space-y-1.5 w-6">
                        <span className="block h-0.5 w-full bg-gray-600 rounded-full transition-transform duration-300 origin-left"></span>
                        <span className="block h-0.5 w-4/5 bg-gray-600 rounded-full transition-all duration-300"></span>
                        <span className="block h-0.5 w-3/5 bg-gray-600 rounded-full transition-transform duration-300 origin-left"></span>
                    </div>
                </button>
            </div>
        </nav>
    );
}

// NavLink component with animation
function NavLink({ to, label, active, onMouseEnter, onMouseLeave }) {
    return (
        <Link 
            to={to} 
            className="relative group py-2 px-1"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Text with hover effect */}
            <span className="relative z-10 text-gray-800 font-medium transition-colors duration-300 group-hover:text-gray-900">
                {label}
            </span>
            
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-blue-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            
            {/* Removed background hover effect */}
        </Link>
    );
}
