import StyledButton from "../../components/StyledButton";
import { useContact } from "../../context/ContactContext";

export default function Testimonial() {
  const { onOpen } = useContact();
  
  return (
    <div className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="w-full">
          {/* Testimonial card */}
          <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-3xl p-10 lg:p-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left side - Photo and Info */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
                <div className="w-24 h-24 relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-50 blur-lg"></div>
                  <img 
                    src="/images/testimonial-jan.jpg" 
                    alt="Jan Mraz" 
                    className="relative w-full h-full object-cover rounded-full border-2 border-white/30"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/128/374151/FFFFFF?text=JM";
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center lg:text-left">Jan Mraz</h3>
                <p className="text-gray-400 mb-1 text-center lg:text-left">Co-Founder Atheros,</p>
                <p className="text-gray-400 text-center lg:text-left">Design Influencer</p>
                
                <div className="mt-6 hidden lg:block">
                  <StyledButton 
                    onClick={onOpen}
                    variant="dark"
                    size="md"
                  >
                    Let's Talk
                  </StyledButton>
                </div>
              </div>
              
              {/* Right side - Quote */}
              <div className="lg:col-span-9 relative">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  " I love the structure of my deck,<br />
                  I can edit all components very quickly.<br />
                  <span className="text-gray-400">Impactful Pitch is an awesome way to speed up your pitch deck process.</span> "
                </blockquote>
                
                <div className="mt-6 flex justify-center lg:hidden">
                  <StyledButton 
                    onClick={onOpen}
                    variant="dark"
                    size="md"
                  >
                    Let's Talk
                  </StyledButton>
                </div>
              </div>
            </div>
            
            {/* App logo */}
            <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 w-24 h-24 transform rotate-12">
              <div className="w-full h-full bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg relative">
                <div className="absolute inset-0 rounded-2xl border-2 border-white/20"></div>
                <div className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full opacity-50"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-50"></div>
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-white rounded-full opacity-50"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}