import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiDribbble } from 'react-icons/si';

export default function HomeSection8() {
    return (
        <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-white rounded-full px-6 py-2 shadow-sm mb-6">
                        <span className="flex items-center text-gray-700 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Become A Part
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Community</h2>
                </div>

                {/* Modern Grid Layout */}
                <div className="grid grid-cols-12 gap-5 mb-16">
                    {/* 4+ Conferences */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 row-span-1 bg-gray-900 rounded-xl overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow">
                            <h3 className="text-4xl font-bold text-white mb-2">4+</h3>
                            <p className="text-white text-xl font-medium mb-3">Conferences</p>
                            <p className="text-gray-400 text-sm">Immerse yourself in our community to be a part of our exciting startup conferences</p>
                        </div>
                    </div>

                    {/* Conference Image */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-gray-200 rounded-xl overflow-hidden relative h-64 md:h-auto">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')` }}></div>
                    </div>

                    {/* 500+ Clients */}
                    <div className="col-span-12 md:col-span-8 lg:col-span-6 row-span-2 bg-gray-900 rounded-xl overflow-hidden">
                        <div className="p-8 h-full flex flex-col">
                            <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
                            <p className="text-white text-xl font-medium mb-3">Clients</p>
                            <p className="text-gray-400 mt-auto">Join our thriving community of 100,000 users and experience the power of Impactful Pitch</p>
                        </div>
                    </div>

                    {/* Person with Laptop */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-gray-200 rounded-xl overflow-hidden relative h-64 md:h-auto">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')` }}></div>
                    </div>

                    {/* 10,000+ Decks */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="p-6 h-full flex flex-col">
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">10,000+</h3>
                            <p className="text-gray-800 text-xl font-medium mb-3">Decks</p>
                            <p className="text-gray-600 text-sm">Discover the immense impact of our brand in the startup community and how we are disrupting the field</p>
                        </div>
                    </div>

                    {/* 50+ Meetups */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-gray-900 rounded-xl overflow-hidden">
                        <div className="p-6 h-full flex flex-col">
                            <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                            <p className="text-white text-xl font-medium mb-3">Meetups</p>
                            <p className="text-gray-400 text-sm">Experience the global reach of IP with 50 meetups happening around the world.</p>
                        </div>
                    </div>

                    {/* People Working */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-gray-200 rounded-xl overflow-hidden relative h-64 md:h-auto">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')` }}></div>
                    </div>

                    {/* 1M+ Followers */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-gray-900 rounded-xl overflow-hidden">
                        <div className="p-6 h-full flex flex-col">
                            <h3 className="text-4xl font-bold text-white mb-2">1M+</h3>
                            <p className="text-white text-xl font-medium mb-3">Followers</p>
                            <p className="text-gray-400 text-sm">Join our ever growing community</p>
                        </div>
                    </div>

                    {/* Social Media Icons - 2x2 Grid */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <div className="grid grid-cols-2 gap-3 h-full">
                            <div className="bg-[#1DA1F2] rounded-xl overflow-hidden flex items-center justify-center aspect-square">
                                <FaTwitter className="text-white text-2xl" />
                            </div>
                            <div className="bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center aspect-square">
                                <FaInstagram className="text-white text-2xl" />
                            </div>
                            <div className="bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center aspect-square">
                                <FaYoutube className="text-white text-2xl" />
                            </div>
                            <div className="bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center aspect-square">
                                <SiDribbble className="text-white text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-6 md:mb-0">
                        <div className="flex -space-x-3 mr-4">
                            {[
                                'https://randomuser.me/api/portraits/men/32.jpg',
                                'https://randomuser.me/api/portraits/women/44.jpg',
                                'https://randomuser.me/api/portraits/men/46.jpg',
                                'https://randomuser.me/api/portraits/women/65.jpg',
                                'https://randomuser.me/api/portraits/men/63.jpg'
                            ].map((img, i) => (
                                <div 
                                    key={i} 
                                    className="w-10 h-10 rounded-full border-2 border-gray-900 overflow-hidden relative z-10"
                                    style={{ zIndex: 5 - i }}
                                >
                                    <img src={img} alt="User avatar" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-gray-900 flex items-center justify-center text-white font-medium text-xs relative z-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-white font-medium">
                            Join over <span className="text-blue-400 font-bold">100k</span> of disrupting Startup Founders
                        </p>
                    </div>
                    <a 
                        href="#contact" 
                        className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
} 