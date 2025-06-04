import { motion } from 'framer-motion';

const timelineData = [
    {
        title: "Vision and Inspiration",
        description: "It all started with a thought! Founder Nikhil embarked on a mission to make a meaningful contribution to the startup ecosystem.",
        icon: "💡"
    },
    {
        title: "From Doubt to Determination",
        description: `From moments of uncertainty—"Will I be able to reach there?"—to moments of clarity—"This is how it's done!"—Nikhil's journey has been a testament to the power of persistence and belief.`,
        icon: "🎯"
    },
    {
        title: "Discovering True Potential",
        description: "After pursuing Mechanical Engineering and completing an MBA, Nikhil realized that the true potential of an individual is as vast as the dreams they envision.",
        icon: "✨"
    },
    {
        title: "Observing and Understanding",
        description: "Having closely observed the evolving startup ecosystem since 2016, he was driven to contribute to the upliftment and empowerment of founders in the best way possible.",
        icon: "🔍"
    },
    {
        title: "Birth of Impactful Pitch",
        description: "In March 2022, Nikhil founded Impactful Pitch, marking the beginning of a journey dedicated to supporting and empowering founders.",
        icon: "🚀"
    },
    {
        title: "Growing Together",
        description: "With each passing day, our team grew, now comprising 11 dedicated individuals all united in our mission to uplift the ecosystem and pave the way for success.",
        icon: "🌱"
    }
];

export default function JourneySection() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-gray-800 backdrop-blur-sm text-white text-sm transform transition-transform duration-500 hover:scale-105">
                        <span className="font-medium text-blue-300">Our Story</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Journey So Far
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Empowering Dreams, Impacting Futures
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                            >
                                <div className="w-1/2 px-8">
                                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                                    <span className="text-xl">{item.icon}</span>
                                </div>
                                <div className="w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
