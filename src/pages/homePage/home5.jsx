import React from "react";
import { Link } from "react-router-dom";

// Case Study Card Component
function CaseStudyCard({ image, color, title, description, link }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className={`w-2 h-2 rounded-full bg-${color}-500 mr-2`}></div>
          <span className="text-gray-400 text-sm">5 min read</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <Link to={link} className="inline-block">
          <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function HomeSection5() {
  // Case studies data
  const caseStudies = [
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=Algobulls+Team",
      color: "blue",
      title: "How Algobulls Raised 2M USD for their Business",
      description: "We are the top digital marketing agency for branding corp. We offer a full rang engine...",
      link: "/case-studies/algobulls"
    },
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=Hesa+Team",
      color: "orange",
      title: "Hesa: A leading startup got 1.5M USD of Funding",
      description: "Working with this digital marketing agency has been a true partnership. They have tak...",
      link: "/case-studies/hesa"
    },
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=Ideal+Insurance",
      color: "purple",
      title: "How Ideal Insurance is Changing The Game",
      description: "What sets this digital marketing agency apart is their commitment to transparency and...",
      link: "/case-studies/ideal-insurance"
    },
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=BrandX+Team",
      color: "blue",
      title: "How BrandX Scaled their company to over US$ 200M and Coming for More",
      description: "We are the top digital marketing agency for branding corp. We offer a full rang engine...",
      link: "/case-studies/brandx"
    },
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=Startup+Trends",
      color: "orange",
      title: "The Latest Trends and Strategies in the Startup Industry",
      description: "Working with this digital marketing agency has been a true partnership. They have tak...",
      link: "/case-studies/startup-trends"
    },
    {
      image: "https://placehold.co/600x400/cccccc/969696?text=ROI+Expertise",
      color: "purple",
      title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
      description: "What sets this digital marketing agency apart is their commitment to transparency and...",
      link: "/case-studies/maximizing-roi"
    }
  ];

  // Client avatars data
  const clientAvatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/46.jpg",
    "https://randomuser.me/api/portraits/women/28.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/women/76.jpg"
  ];

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-100 text-gray-700 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            The story of clients
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            who have raised funds
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              image={study.image}
              color={study.color}
              title={study.title}
              description={study.description}
              link={study.link}
            />
          ))}
        </div>

        {/* Client Avatars */}
        <div className="flex flex-col items-center">
          <div className="flex -space-x-2 mb-4">
            {clientAvatars.map((avatar, index) => (
              <img 
                key={index}
                src={avatar} 
                alt={`Funded client ${index + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <p className="text-gray-600 mb-8">
            Be among 400+ funded startups powered by Impactful pitch
          </p>
          <Link 
            to="/case-studies" 
            className="px-8 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
          >
            Browse all
          </Link>
        </div>
      </div>
    </section>
  );
} 