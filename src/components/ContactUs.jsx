import { useState, useEffect } from 'react';
import { useContact } from '../context/ContactContext';

export default function ContactUs() {
  const { isOpen, onClose } = useContact();
  
  // State for form fields
  const [reason, setReason] = useState('');
  const [services, setServices] = useState([]);
  const [otherReason, setOtherReason] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  // Available services
  const availableServices = [
    'Pitch Deck Creation & Optimization',
    'Business Plan Development',
    'Financial Modeling & Business Valuation',
    'Investor Network Access',
    "Founder's Grooming",
    "Video Pitch Deck"
  ];

  // Handle service selection
  const handleServiceToggle = (service) => {
    if (services.includes(service)) {
      setServices(services.filter(s => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare form data
    const formData = {
      name,
      email,
      reason,
      services: reason === 'Service' ? services : [],
      otherReason: reason === 'Other' ? otherReason : ''
    };
    
    // Here you would typically send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for contacting us! We will get back to you soon.');
    
    // Reset form
    resetForm();
    
    // Close modal
    onClose();
  };

  // Reset form fields
  const resetForm = () => {
    setReason('');
    setServices([]);
    setOtherReason('');
    setEmail('');
    setName('');
  };

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'flex' : 'hidden'} items-center justify-center`}>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur" 
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 z-10 overflow-hidden transform transition-all">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">Contact Us</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Name field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          
          {/* Email field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          
          {/* Reason field */}
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">What's the reason to connect?</label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Select a reason</option>
              <option value="Service">I need a service</option>
              <option value="Partnership">Partnership opportunity</option>
              <option value="Career">Career inquiry</option>
              <option value="Other">Other reason</option>
            </select>
          </div>
          
          {/* Services selection (conditional) */}
          {reason === 'Service' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Which services are you interested in?</label>
              <div className="space-y-2 max-h-40 overflow-y-auto p-2 border border-gray-200 rounded-md">
                {availableServices.map((service) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`service-${service}`}
                      checked={services.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`service-${service}`} className="ml-2 block text-sm text-gray-700">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Other reason text box (conditional) */}
          {reason === 'Other' && (
            <div className="mb-4">
              <label htmlFor="otherReason" className="block text-sm font-medium text-gray-700 mb-1">Please specify your reason</label>
              <textarea
                id="otherReason"
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required={reason === 'Other'}
              ></textarea>
            </div>
          )}
          
          {/* Submit button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}