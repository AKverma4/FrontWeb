import React from 'react';
import { motion } from 'framer-motion';

interface InsightCard {
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
}

const InsightsSection: React.FC = () => {
  const insights: InsightCard[] = [
    {
      category: "Industry Trends",
      title: "The Rise of Sustainable Construction Equipment",
      description: "Explore how electric and hybrid machinery is transforming the construction industry with reduced emissions and lower operating costs.",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://imgs.search.brave.com/2q7RH7YBgHWUGGAsP4q8-cYGnc_CF9kZjvwzV0_8CYY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/OTU4NDg5L3Bob3Rv/L2JhY2tob2UtbG9h/ZGVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1GWnVfSHJj/RmxKbGVxbmVxRGhB/ZmxBbmVxbGJxbGhw/RnZxbGJxbGhwRnZx/bGJxbGhwRnc9"
    },
    {
      category: "Market Analysis",
      title: "Construction Equipment Rental Market 2024",
      description: "Latest insights on market trends, growth opportunities, and the future outlook of the equipment rental industry in India.",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "https://imgs.search.brave.com/YUFqnKk6fxkaEgIqoOOOrVu7tSrlMv_1sy-ltyoH04Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMyLmFscGhhY29k/ZXJzLmNvbS82NzMv/NjczMTgxLmpwZw"
    },
    {
      category: "Technology",
      title: "Digital Innovations in Equipment Management",
      description: "How IoT and telematics are revolutionizing equipment tracking, maintenance, and operational efficiency.",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://imgs.search.brave.com/h_TPIDQ4gK1-_Ln5FlnO0h1x85YxC5zfHas7faTKdhY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzY3Lzk2LzA3/LzM2MF9GXzM2Nzk2/MDc3M185ZjZrcGJZ/R0hadnI3dGZWc01w/RDlrQzFFWVlVWW16/WS5qcGc"
    }
  ];

  const stats = [
    { value: "45%", label: "Market Growth YoY" },
    { value: "₹8500Cr", label: "Industry Value" },
    { value: "12,000+", label: "Active Projects" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Industry Insights & Trends
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments in the construction equipment industry
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {insight.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {insight.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{insight.date}</span>
                  <span>{insight.readTime}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 text-blue-500 font-semibold flex items-center hover:text-blue-600"
                >
                  Read More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center bg-blue-900 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 text-blue-100">
            Subscribe to our newsletter for the latest industry insights and updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection; 