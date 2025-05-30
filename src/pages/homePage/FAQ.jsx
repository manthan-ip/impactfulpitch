import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import StyledButton from '../../components/StyledButton';
import FAQbutton from '../../components/FAQButton';

// FAQ Item component with enhanced animations
const FAQItem = ({ question, isOpen, toggleOpen, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
        >
            <div 
                className={`
                    relative overflow-hidden rounded-xl
                    backdrop-blur-[8px] transition-all duration-300 ease-out
                    ${isOpen 
                        ? 'bg-white/15 shadow-lg border-white/20' 
                        : 'bg-white/5 hover:bg-white/10 border-white/10'
                    }
                    mb-4 border-[0.5px]
                    hover:shadow-md transform transition-all
                    group-hover:-translate-y-0.5
                `}
            >
                <button 
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    onClick={toggleOpen}
                >
                    <span 
                        className={`
                            text-[16px] font-medium flex-1 pr-4
                            transition-colors duration-300
                            ${isOpen 
                                ? 'text-slate-800' 
                                : 'text-slate-600 group-hover:text-slate-800'
                            }
                        `}
                    >
                        {question}
                    </span>
                    
                    <div 
                        className={`
                            w-7 h-7 flex items-center justify-center
                            transition-all duration-300 transform
                            ${isOpen 
                                ? 'rotate-45' 
                                : ''
                            }
                        `}
                    >
                        <FiPlus 
                            className="text-base transition-all duration-300 text-slate-700"
                        />
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                                height: "auto", 
                                opacity: 1,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            exit={{ 
                                height: 0, 
                                opacity: 0,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="px-5">
                                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 pt-0">
                                    <p className="text-slate-600 text-[14px] leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default function FAQ() {
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
        <section className="py-4 px-8 relative">
            <div className="max-w-3xl mx-auto relative z-10">
                {/* Header - Keeping original dark card and title */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-800 backdrop-blur-sm text-white text-sm transform transition-transform duration-500 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium text-blue-300">FAQs</span>
                    </div>
                    <div className='flex justify-center items-center'>
                        <FAQbutton/>
                        <h2 className="text-4xl font-bold text-gray-800 ml-7">Frequently Asked Questions</h2>
                    </div>
                </div>

                {/* FAQ List with modern styling */}
                <motion.div 
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index}
                            question={faq}
                            isOpen={openFAQ === index}
                            toggleOpen={() => toggleFAQ(index)}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* See All Button with enhanced animation */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <StyledButton 
                        href="/faqs" 
                        variant="primary"
                        size="lg"
                        className="group"
                    >
                        <span className="relative z-10">See All FAQs</span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </StyledButton>
                </motion.div>

                {/* Keeping original contact section */}
                <div className="text-center mt-16 text-gray-400">
                    <p>Contact us at <a href="mailto:hi@impactfulpitch.com" className="text-blue-500 hover:text-purple-500 transition-colors">hi@impactfulpitch.com</a> via email!</p>
                </div>
            </div>
        </section>
    );
}