import WiseLife from "../../assets/WiseLife.png"
import SpeedForce from "../../assets/SpeedForce.png"
import Zoivane from "../../assets/Zoivane.png"
import Hoora from "../../assets/Hoora.png"
import Ring7 from "../../assets/Ring7.png"
import SneakInn from "../../assets/SneakInn.png"
import JaipurWatch from "../../assets/JaipurWatch.png"

export default function SharkTank() {
  return (
    <section className="py-8 pt-0 px-8 relative">      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-800 backdrop-blur-sm text-white text-sm transform transition-transform duration-500 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="font-medium text-blue-300">Our Shark Tank Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Trusted by Sharks, Guided by Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Startups that conquered the Tank and soared with Impactful Pitch
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-20 h-fit">
          {/* Left section - 920+ */}
          <div className="lg:col-span-2 bg-black text-white rounded-xl relative overflow-hidden h-fit">
            <img src={JaipurWatch} alt="Jaipur Watch" className="w-full"/>
          </div>
          
          {/* Right section - Project examples */}
          <div className="lg:col-span-3 grid grid-cols-3 grid-rows-2 gap-4">
            <img src={WiseLife} className="w-full object-cover" alt="WiseLife" />
            <img src={SpeedForce} className="w-full object-cover" alt="SpeedForce" />
            <img src={Zoivane} className="w-full object-cover" alt="Zoivane" />
            <img src={Hoora} className="w-full object-cover" alt="Hoora" />
            <img src={Ring7} className="w-full object-cover" alt="Ring7" />
            <img src={SneakInn} className="w-full object-cover" alt="SneakInn" />
          </div>
        </div>
      </div>
    </section>
  );
}

