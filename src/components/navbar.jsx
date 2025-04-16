import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm px-8 py-4 shadow-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img 
                            src={logo}
                            alt="ImpactfulPitch Logo" 
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>
                
                <div className="flex items-center justify-center gap-8">
                    <Link to="/services" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">
                        Services
                    </Link>
                    <Link to="/pricing" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">
                        Pricing
                    </Link>
                    <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">
                        Contact Us
                    </Link>
                </div>
                
                <div className="flex justify-end">
                    <Link to="/explore" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                        Try it Free
                    </Link>
                </div>
            </div>
        </nav>
    )
}
