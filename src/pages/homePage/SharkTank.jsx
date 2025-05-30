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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-20">
          {/* Left section - 920+ */}
          <div className="lg:col-span-2 bg-black text-white rounded-xl p-8 relative overflow-hidden">
            <div className="z-10 relative">
              <h3 className="text-7xl font-bold flex items-center">
                920
                <span className="text-blue-400 text-5xl">+</span>
              </h3>
              <p className="text-gray-300 mt-2">Project finish impactfully</p>
              
              <div className="flex mt-32">
                <div className="flex -space-x-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-14 h-14 rounded-full border-2 border-black" alt="Team member" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-14 h-14 rounded-full border-2 border-black" alt="Team member" />
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" className="w-14 h-14 rounded-full border-2 border-black" alt="Team member" />
                  <img src="https://randomuser.me/api/portraits/women/28.jpg" className="w-14 h-14 rounded-full border-2 border-black" alt="Team member" />
                  <div className="w-14 h-14 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-white font-bold text-xl">+</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right section - Project examples */}
          <div className="lg:col-span-3 grid grid-cols-3 grid-rows-2 gap-4">
            <div className="relative rounded-xl overflow-hidden bg-orange-100">
              <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 rounded-md text-xs font-medium">Tech</div>
              <img src="https://placehold.co/300x200/orange/white?text=Project" className="w-full h-full object-cover" alt="Tech project" />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-green-100">
              <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 rounded-md text-xs font-medium">Environex</div>
              <img src="https://placehold.co/300x200/22c55e/white?text=Environex" className="w-full h-full object-cover" alt="Environex project" />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-yellow-100">
              <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 rounded-md text-xs font-medium">Enchanté</div>
              <img src="https://placehold.co/300x200/8b5cf6/white?text=Enchanté" className="w-full h-full object-cover" alt="Enchanté project" />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-purple-100">
              <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 rounded-md text-xs font-medium">SaaS</div>
              <img src="https://placehold.co/300x200/64748b/white?text=SaaS" className="w-full h-full object-cover" alt="SaaS project" />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-indigo-100">
              <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 rounded-md text-xs font-medium">MedTech</div>
              <img src="https://placehold.co/300x200/4f46e5/white?text=MedTech" className="w-full h-full object-cover" alt="MedTech project" />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-amber-100">
              <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 rounded-md text-xs font-medium">Healthcare</div>
              <img src="https://placehold.co/300x200/f59e0b/white?text=Healthcare" className="w-full h-full object-cover" alt="Healthcare project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}