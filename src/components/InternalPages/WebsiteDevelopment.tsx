import React from 'react';
import { CheckCircle, AlertCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const WebsiteDevelopment = () => {
    const navigate = useNavigate();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Website{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Development & Design
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build a digital presence that reflects your brand, attracts customers, and drives business growth.
          </p>
        </motion.div>

        {/* Illustration + Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          {/* Text Part */}
          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Advantages */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Advantages</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "24/7 Online Presence for your business.",
                  "Reach global customers and expand your market.",
                  "Improve brand credibility and professionalism.",
                  "Boost marketing effectiveness with SEO & analytics.",
                  "Enable e-commerce and lead generation capabilities."
                ].map((adv, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start space-x-4"
                    custom={idx}
                    variants={fadeInUp}
                  >
                    <CheckCircle className="text-emerald-600 w-6 h-6 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{adv}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Disadvantages */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Disadvantages</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Initial development costs can be high for custom websites.",
                  "Ongoing maintenance and updates are required.",
                  "Security risks if not properly managed.",
                  "Website performance may vary based on hosting.",
                  "Requires regular content and SEO updates."
                ].map((dis, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start space-x-4"
                    custom={idx}
                    variants={fadeInUp}
                  >
                    <AlertCircle className="text-red-500 w-6 h-6 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{dis}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Features for Growing Businesses
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Responsive Design", desc: "Mobile-first layout that adapts to all devices." },
                  { title: "SEO Optimization", desc: "Get found on Google with proper meta tags and structure." },
                  { title: "Fast Loading", desc: "Optimized assets and code for better performance." },
                  { title: "Custom CMS", desc: "Easily manage your own content and updates." },
                  { title: "E-commerce Ready", desc: "Sell products or services directly from your website." },
                  { title: "Analytics Integration", desc: "Track user behavior and measure success with tools like Google Analytics." },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
                    custom={idx}
                    variants={fadeInUp}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <Star className="text-blue-600 w-5 h-5" />
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Illustration Part */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://bubble.io/blog/content/images/2023/07/website-design-and-development.png" // Replace with your image
              alt="Web Development Design Illustration"
              className="w-full h-auto max-w-md mx-auto"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to build your online presence?
          </h3>
          <p className="text-gray-600 mb-6">
            Let us help you create a professional, high-performing website tailored to your business goals.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1" onClick={()=>navigate("/contact")}
          >
            Get Started Today
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default WebsiteDevelopment;
