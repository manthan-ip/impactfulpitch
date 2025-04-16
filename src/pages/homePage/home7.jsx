import React from "react";

export default function HomeSection7() {
  // Expert's credentials
  const expertCredentials = [
    "A seasoned angel investor and IIM alumni",
    "Over a decade of experience in Fundraising Strategy, Investments, Start-ups,",
    "Manufacturing, Finance, Product Development, Marketing, Operations, and Growth.",
    "A dedicated observer of the dynamic startup ecosystem, committed to uplifting founders.",
    "Leveraging investments to empower entrepreneurs and make a meaningful impact in the startup world."
  ];

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-100 text-gray-700 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            The Man Behind
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet your<br />expert guide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            30+ Years of Collective Team Proficiency in Consulting Startups
          </p>
        </div>

        {/* Expert Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Name */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/src/assets/nikhil.jpg" 
                  alt="Nikhil Parmar" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x800/0066ff/ffffff?text=Nikhil+Parmar";
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">Nikhil Parmar</h3>
                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="space-y-6">
            {expertCredentials.map((credential, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {credential}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 