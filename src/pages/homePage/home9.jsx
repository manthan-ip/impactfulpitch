import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

// FAQ Item component with collapsible functionality
const FAQItem = ({ question, isOpen, toggleOpen }) => {
    return (
        <div className="border border-gray-700 rounded-lg overflow-hidden mb-4">
            <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={toggleOpen}
            >
                <span className="text-white text-lg">{question}</span>
                <FiPlus className={`text-white text-xl transition-transform duration-300 ${isOpen ? 'transform rotate-45' : ''}`} />
            </button>
            {isOpen && (
                <div className="px-6 pb-6">
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            )}
        </div>
    );
};

export default function HomeSection9() {
    // State to track which FAQ is open
    const [openFAQ, setOpenFAQ] = useState(null);

    // FAQ data
    const faqs = [
        "What is the procedure to start a new startup in India?",
        "What are the things that need to be considered when starting?",
        "How can I raise funds for doing business?",
        "What are the types of Pitch decks?",
        "How do I structure a startup investment pitch deck?",
        "What is the difference b/w the presentation and the pitch deck?"
    ];

    // Toggle FAQ open/close
    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="py-20 px-4 md:px-8 bg-gray-900">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-gray-800 rounded-full px-6 py-2 mb-6">
                        <span className="flex items-center text-gray-400 text-sm font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            FAQS
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Find questions and answers related to the design system, purchase, updates, and support.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="mb-12">
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index}
                            question={faq}
                            isOpen={openFAQ === index}
                            toggleOpen={() => toggleFAQ(index)}
                        />
                    ))}
                </div>

                {/* See All Button */}
                <div className="text-center">
                    <a href="/faqs" className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                        See All FAQs
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                {/* Contact */}
                <div className="text-center mt-16 text-gray-400">
                    <p>Contact us at <a href="mailto:hi@impactfulpitch.com" className="text-white hover:text-blue-400 transition-colors">hi@impactfulpitch.com</a> via email!</p>
                </div>
            </div>
        </section>
    );
} 