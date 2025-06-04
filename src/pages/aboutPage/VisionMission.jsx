import { motion } from 'framer-motion';

const ethics = [
    {
        title: "Integrity and Honesty",
        icon: "⚖️",
        description: "We act with truth, fairness, and transparency in every decision we make."
    },
    {
        title: "Respect and Diversity",
        icon: "🌍",
        description: "We value all voices, embracing different backgrounds, ideas, and perspectives."
    },
    {
        title: "Client-Centric Approach",
        icon: "🤝",
        description: "We put clients first, solving problems with empathy, care, and commitment."
    },
    {
        title: "Sustainability and Social Responsibility",
        icon: "🌱",
        description: "We build consciously, giving back to people, planet, and purpose."
    },
    {
        title: "Continuous Improvement",
        icon: "📈",
        description: "We grow through learning, feedback, and constant pursuit of better outcomes."
    },
    {
        title: "Collaboration and Teamwork",
        icon: "🔄",
        description: "We win together by sharing goals, knowledge, and mutual support."
    }
];

export default function VisionMission() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Vision & Mission Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Vision Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="mr-2">🎯</span>
                                Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To evolve the startup ecosystem, where the ratio of funded startups is being increased.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="mr-2">🚀</span>
                                Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our vision is to transform the global pitching process by empowering entrepreneurs with mentorship, resources, and technology, fostering a thriving ecosystem where innovative startups can secure funding and drive growth in the global economy.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Ethics Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Ethics</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        The core values that guide our actions and decisions
                    </p>
                </div>

                {/* Ethics Grid */}                <div className="grid md:grid-cols-3 gap-8">
                    {ethics.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <span className="text-3xl mb-4 block">{item.icon}</span>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
