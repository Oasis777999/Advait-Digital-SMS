import React from "react";
import { Users, Award, Clock, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const stats = [
    {
      icon: Users,
      value: "200+",
      label: "Happy Clients",
      color: "text-blue-600",
    },
    {
      icon: Award,
      value: "500+",
      label: "Projects Delivered",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      value: "5+",
      label: "Years Experience",
      color: "text-emerald-600",
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries Served",
      color: "text-orange-600",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that give your business a competitive advantage.",
      icon: "🚀",
    },
    {
      title: "Quality",
      description:
        "Every project undergoes rigorous testing and quality assurance to ensure exceptional performance and reliability.",
      icon: "⭐",
    },
    {
      title: "Support",
      description:
        "24/7 customer support and maintenance services to keep your digital assets running smoothly at all times.",
      icon: "🛠️",
    },
    {
      title: "Growth",
      description:
        "We partner with you for long-term success, providing scalable solutions that grow with your business needs.",
      icon: "📈",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Advait Digital
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate professionals dedicated to transforming
            businesses through innovative digital solutions and exceptional
            service.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to revolutionize business communication,
                ServicePro has grown into a trusted partner for companies
                seeking powerful messaging solutions and digital presence.
              </p>
              <p>
                Our journey began with a simple belief: every business deserves
                access to professional-grade communication tools. Today, we've
                helped hundreds of companies establish their online presence and
                connect with customers through advanced messaging solutions
                including bulk SMS and RCS messaging.
              </p>
              <p>
                What sets us apart is our expertise in both web development and
                messaging technologies, delivering integrated solutions that
                help businesses communicate more effectively with their
                customers.
              </p>
            </div>

            <div className="pt-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200" onClick={()=>navigate("/contact")}>
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and ensure we deliver
              exceptional value to every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
