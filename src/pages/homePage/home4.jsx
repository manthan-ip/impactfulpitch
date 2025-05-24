import { useState } from "react";
import CarouselGallery from "../../components/CarouselGallery";      

export default function HomeSection4() {
  // Testimonial data
  const testimonials = [
    {
      quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
      name: "Michael Kaizer",
      position: "CEO of Basecamp Corp",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Impactful Pitch transformed our fundraising strategy completely. Their insights and execution were instrumental in securing our Series B funding in record time.",
      name: "Sarah Johnson",
      position: "Founder of GoCardless",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Working with this team has been game-changing for our startup. Their pitch deck design and strategic guidance helped us secure investment from our top-choice VCs.",
      name: "David Chen",
      position: "CTO of Monzo",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      quote: "The level of detail and strategic thinking that went into our pitch materials was exceptional. They don't just create decks, they build compelling investment narratives.",
      name: "Alicia Martinez",
      position: "COO of UiPath",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      quote: "Their ability to translate complex technical concepts into clear, investor-friendly presentations is unmatched. Couldn't have reached our funding goals without them.",
      name: "James Wilson",
      position: "VP of Product at Intercom",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  ];

  return (
    <section className="py-16 pt-8 pb-24 px-8 relative">      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-800 backdrop-blur-sm text-white text-sm transform transition-transform duration-500 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-medium text-blue-300">Our Clientele</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From Idea to IPO:
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Diverse Portfolio Reflects Expertise Across Every Stage & Industry
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-20">
          {/* Row 1 */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://placehold.co/150x50/e2e8f0/333333?text=INTERCOM" alt="Intercom" className="h-8" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://placehold.co/150x50/e2e8f0/333333?text=a16z" alt="Andreessen Horowitz" className="h-8" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://placehold.co/150x50/e2e8f0/333333?text=Salesforce+Ventures" alt="Salesforce Ventures" className="h-8" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://placehold.co/150x50/e2e8f0/333333?text=monzo" alt="Monzo" className="h-8" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://placehold.co/150x50/e2e8f0/333333?text=GoCardless" alt="GoCardless" className="h-8" />
          </div>
          
          {/* Row 2 */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 md:col-start-2 lg:col-start-1">
            <img src="https://placehold.co/150x50/e2e8f0/333333?text=snyk" alt="Snyk" className="h-8" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://placehold.co/150x50/e2e8f0/333333?text=COMPLY+ADVANTAGE" alt="Comply Advantage" className="h-8" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://placehold.co/150x50/e2e8f0/333333?text=UiPath" alt="UiPath" className="h-8" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300 md:col-start-3 lg:col-auto">
            <img src="https://placehold.co/150x50/e2e8f0/333333?text=deliveroo" alt="Deliveroo" className="h-8" />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="relative">          
          {/* Carousel container */}
          <div className="relative max-w-4xl mx-auto">
            <CarouselGallery
              items={testimonials}
              autoplay={true}
              autoplayDelay={9000}
              pauseOnHover={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}