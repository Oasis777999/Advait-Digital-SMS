import React from 'react';
import {
  CheckCircle,
  AlertCircle,
  Smartphone,
  MessageSquare,
  Zap
} from 'lucide-react';
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
      ease: 'easeOut'
    }
  })
};

const MessagingSolutions = () => {
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
            SMS, Smart SMS & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RCS Messaging</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Engage your audience effectively with reliable, rich, and interactive messaging solutions designed for modern communication.
          </p>
        </motion.div>

        {/* Comparison with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Messaging Types */}
            {[
              {
                icon: Smartphone,
                title: "SMS",
                desc: "Traditional text messaging, supported by all phones. Ideal for time-sensitive alerts, promotions, and OTPs.",
                bg: "bg-blue-50",
                iconColor: "text-blue-600"
              },
              {
                icon: MessageSquare,
                title: "Smart SMS",
                desc: "Enhanced SMS with branding, links, call-to-actions, and analytics. Perfect for marketing and customer engagement.",
                bg: "bg-purple-50",
                iconColor: "text-purple-600"
              },
              {
                icon: Zap,
                title: "RCS Messaging",
                desc: "Rich Communication Services offering multimedia, carousels, read receipts, and verified branding. Best for immersive experiences.",
                bg: "bg-emerald-50",
                iconColor: "text-emerald-600"
              }
            ].map(({ icon: Icon, title, desc, bg, iconColor }, index) => (
              <motion.div
                key={index}
                className={`${bg} rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1`}
                custom={index}
                variants={fadeInUp}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className={`${iconColor} w-6 h-6`} />
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://ibasis.com/wp-content/uploads/2024/09/IBSW1181-RCS-Webpage-Graphics_5.jpg" // Replace with your own image
              alt="Messaging Illustration"
              className="w-full h-auto max-w-md mx-auto"
            />
          </motion.div>
        </div>

        {/* Advantages */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Advantages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "High open and response rates for SMS messages.",
              "Smart SMS drives customer interaction with trackable links.",
              "RCS provides rich media and interactive features.",
              "Supports marketing, notifications, authentication, and reminders.",
              "Reach users on any mobile device, regardless of internet access (SMS)."
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="text-emerald-600 w-6 h-6 mt-1" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Disadvantages with Image */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Disadvantages</h3>
            <div className="grid gap-6">
              {[
                "SMS character limits can restrict message content.",
                "RCS support is not available on all devices or carriers.",
                "Smart SMS and RCS may require additional integration.",
                "Data privacy and opt-in regulations must be followed.",
                "Campaigns can become costly at high volume if not optimized."
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <AlertCircle className="text-red-500 w-6 h-6 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.prod.website-files.com/67b5920c234f2b2e736198a6/6803c901d131189a4f9ea56e_Frame%20699.png" // Replace with your own image
              alt="Disadvantages Illustration"
              className="w-full h-auto max-w-md mx-auto"
            />
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Features for Businesses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Bulk Messaging", desc: "Send thousands of messages instantly with high deliverability." },
              { title: "Two-Way Communication", desc: "Allow users to reply and engage directly with your messages." },
              { title: "Brand Customization", desc: "Smart SMS & RCS support logos, colors, and verified sender IDs." },
              { title: "Analytics & Tracking", desc: "Track delivery, clicks, read status, and user actions." },
              { title: "Multimedia Support", desc: "Send images, videos, carousels, and buttons with RCS." },
              { title: "API Access", desc: "Easily integrate messaging into your apps or CRM." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
                custom={index}
                variants={fadeInUp}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="text-purple-600 w-5 h-5" />
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to scale your communication?
          </h3>
          <p className="text-gray-600 mb-6">
            From traditional SMS to rich, interactive messaging — we’ve got you covered.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1" onClick={()=>navigate("/contact")}
          >
            Start Messaging Today
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default MessagingSolutions;
