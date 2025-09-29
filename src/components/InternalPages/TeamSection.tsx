import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ayesha Khan',
    role: 'Frontend Developer',
    image: '/images/ayesha.jpg', // replace with your image
    linkedin: 'https://linkedin.com/in/ayesha-khan',
  },
  {
    name: 'Rahul Sharma',
    role: 'Backend Engineer',
    image: '/images/rahul.jpg',
    linkedin: 'https://linkedin.com/in/rahul-sharma',
  },
  {
    name: 'Priya Desai',
    role: 'UI/UX Designer',
    image: '/images/priya.jpg',
    linkedin: 'https://linkedin.com/in/priya-desai',
  },
  {
    name: 'Mohammed Ali',
    role: 'Full Stack Developer',
    image: '/images/ali.jpg',
    linkedin: 'https://linkedin.com/in/mohammed-ali',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Our Team</span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Passionate. Professional. People who bring your ideas to life.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i + 1}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-50 hover:bg-emerald-100 mt-4 text-emerald-600"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
