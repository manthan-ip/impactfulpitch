import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-16 px-4 md:px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Logo and brand */}
                    <div className="col-span-1">
                        <h2 className="text-white text-2xl font-bold mb-6">Impactful Pitch</h2>
                    </div>

                    {/* Company links */}
                    <div className="col-span-1">
                        <ul className="space-y-4">
                            <li><a href="/company" className="text-gray-400 hover:text-white transition-colors">Company</a></li>
                            <li><a href="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</a></li>
                            <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                            <li><a href="/changelog" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
                            <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="https://twitter.com/impactfulpitch" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="https://linkedin.com/company/impactfulpitch" className="text-gray-400 hover:text-white transition-colors">Linkedin</a></li>
                        </ul>
                    </div>

                    {/* Legal links */}
                    <div className="col-span-1">
                        <ul className="space-y-4">
                            <li><a href="/legal" className="text-gray-400 hover:text-white transition-colors">Legal</a></li>
                            <li><a href="/status" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                            <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="/dpa" className="text-gray-400 hover:text-white transition-colors">DPA</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1">
                        <div className="bg-gray-800 rounded-2xl p-6">
                            <p className="mb-4">
                                <span className="text-blue-300">Subscribe to our</span> 
                                <span className="text-white"> weekly newsletter</span>
                            </p>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="bg-transparent border-0 flex-grow focus:outline-none text-white"
                                />
                                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section with copyright */}
                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-500 text-sm mb-4 md:mb-0">
                        © 2024 Impactful Pitch Pvt. Ltd
                    </div>
                    <div className="text-gray-500 text-sm flex flex-col md:flex-row md:items-center">
                        <span className="mb-2 md:mb-0 md:mr-4">Registered at Delhi India</span>
                        <span className="md:border-l md:border-gray-700 md:pl-4">GST no. 13585168</span>
                    </div>
                </div>
            </div>
        </footer>
    );
} 