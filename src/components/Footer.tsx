import React from "react";
import {
  Globe,
  MessageSquare,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const Services = [
    {
      title: "Website Development",
      path: "website",
    },
    {
      title: "Bulk SMS, RCS Services",
      path: "message",
    },
    {
      title: "API Integration",
      path: "api",
    },
  ];

  const Company = [
    { title: "About Us", path: "about" },
    { title: "Our Team", path: "team" },
    { title: "Contact", path: "contact" },
  ];

  const footerSections = [
    {
      title: "Services",
      links: [
        "Website Development",
        "Bulk SMS Services",
        "RCS Messaging",
        "SMS Gateway",
        "API Integration",
        "Support & Maintenance",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Case Studies",
        "Blog",
        "Contact",
      ],
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "Help Center",
        "Privacy Policy",
        "Terms of Service",
        "Security",
        "Status Page",
      ],
    },
  ];

  const Message = () => {
    alert("Subscribed");
  };

  const socialMedia = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Globe className="h-8 w-8 text-blue-400" />
                <MessageSquare className="h-6 w-6 text-purple-400" />
                <Briefcase className="h-6 w-6 text-emerald-400" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Advait Digital
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Transforming business communication through innovative digital
              solutions. We're your partner in website development, bulk SMS,
              RCS messaging, and comprehensive communication solutions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>support@advaitteleservices.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-purple-400" />
                <span>+91 8282982829</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>522 Amnora Chambers, Pune</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest updates on digital
                trends and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
              />
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
                onClick={Message}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Advait Digital. All rights reserved. Built with passion for
              digital excellence.
            </p>

            <div className="flex items-center space-x-6">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-gray-400 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

