import SpotlightCard from '../../components/SpotlightCard';

// Service Card Component
function ServiceCard({ icon, title, description }) {
  return (
    <SpotlightCard className="border border-gray-200 bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow" spotlightColor = "rgba(200, 130, 230, 0.15)">
      <div className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </SpotlightCard>
  );
}

export default function HomeSection2() {
  // Service data
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Pitch Deck Design",
      description: "Investor deck with a captivating narrative & stunning design"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Business Plan Development",
      description: "Articulate your vision, market opportunity, and growth strategies with clarity."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Financial Valuation",
      description: "Thorough evaluations of valuation to accurately assess your startup's worth."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Investor Meeting Preparation",
      description: "Strategic guidance & coaching for founders for investors meet"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: "Investor Network",
      description: "Access to a curated network of investors seeking promising startups like yours."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "End-to-End Fundraising Support",
      description: "From strategy to negotiation, full fundraising support, for optimized outcomes."
    }
  ];

  return (
    <section className="py-16 pt-0 pb-32 px-8 relative">      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-800 backdrop-blur-sm text-white text-sm transform transition-transform duration-500 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="font-medium text-blue-300">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Cosmic Advantages
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            Turning Fundraising Challenges into Success Stories with Our Expertise in Storytelling, Data, and Design
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

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 