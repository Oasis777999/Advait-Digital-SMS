import React from "react";
import { Code, Cloud, Database, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CommunicationAPIs = () => {
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
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Communication APIs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful APIs and integration services to seamlessly connect
            messaging solutions with your business systems.
          </p>
        </motion.div>

        {/* Intro with Image */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* API Cards */}
              {[
                {
                  icon: Code,
                  title: "REST APIs",
                  desc: "Send messages, manage contacts, access data via HTTP.",
                },
                {
                  icon: Cloud,
                  title: "Webhook Integration",
                  desc: "Real-time delivery reports and customer replies.",
                },
                {
                  icon: Database,
                  title: "Real-time Analytics",
                  desc: "Track performance instantly.",
                },
                {
                  icon: Code,
                  title: "Custom Solutions",
                  desc: "Tailor API behavior to your needs.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-emerald-50 p-6 rounded-xl shadow hover:shadow-md transition transform hover:-translate-y-1"
                    custom={index}
                    variants={fadeInUp}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon className="text-emerald-600 w-6 h-6" />
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-api-illustration_23-2149388656.jpg?semt=ais_incoming&w=740&q=80" // Replace with your image
              alt="API Illustration"
              className="w-full h-auto max-w-md mx-auto"
            />
          </motion.div>
        </div>

        {/* Advantages Section with Animation */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Advantages
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Easily integrate communication tools into your existing apps.",
              "Automate messaging workflows with reliable APIs.",
              "Scale your messaging infrastructure as your business grows.",
              "Gain control and flexibility with fully documented APIs.",
              "Enhance customer engagement with real-time responses and delivery events.",
            ].map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="text-emerald-600 w-6 h-6 mt-1" />
                <p className="text-gray-700 leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Disadvantages Section with Image */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Disadvantages
            </h3>
            <div className="grid md:grid-cols-1 gap-6">
              {[
                "Requires technical knowledge or developer resources for setup.",
                "API misuse or poor error handling can lead to delivery failures.",
                "System downtimes or API rate limits may affect performance.",
                "Security and authentication must be properly managed.",
                "Initial integration can take time depending on your system.",
              ].map((disadvantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <AlertCircle className="text-red-500 w-6 h-6 mt-1" />
                  <p className="text-gray-700 leading-relaxed">
                    {disadvantage}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://img.freepik.com/premium-vector/realtime-analytics-realtime-monitoring-live-data-analysis-vector-icon-design_896042-1268.jpg" // Replace with your image
              alt="Disadvantages Illustration"
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
            Ready to connect your systems?
          </h3>
          <p className="text-gray-600 mb-6">
            Unlock the full power of communication with flexible APIs built for
            scale.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1" onClick={()=>navigate("/contact")}
          >
            Integrate Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunicationAPIs;
