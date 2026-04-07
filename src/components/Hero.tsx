import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const benefits = [
    "Professional Website Development",
    "Bulk SMS & RCS Messaging",
    "Advanced Communication Solutions",
    "24/7 Support & Maintenance",
  ];

  return (
    <section
      id="home"
      className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We specialize in professional website development and advanced
                messaging solutions including bulk SMS and RCS messaging to help
                your business communicate effectively and thrive in the digital
                age.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => navigate("/contact")}
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                onClick={() => navigate("/services")}
              >
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">10M+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Messages Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">99.9%</div>
                <div className="text-sm text-gray-600 font-medium">Uptime</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Professional Solutions
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tailored for your business
                    </p>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-medium p-1">
                    From high-impact SMS to rich, interactive RCS campaigns, we
                    help you reach customers at the right moment and turn
                    messages into measurable success.
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-700 text-sm font-medium">
                      Websites
                    </span>
                  </div>
                  <div className="h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-700 text-sm font-medium">
                      Messaging
                    </span>
                  </div>
                </div>
              </div> */}
              <div className="space-y-6 p-4 sm:p-6 md:p-8">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900 text-lg sm:text-xl">
                      Professional Solutions
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Tailored for your business
                    </p>
                  </div>
                </div>

                {/* Banner Section */}
                <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center p-4 text-center">
                  <img
                    src="https://www.techcodence.com/wp-content/uploads/2025/02/AI-driven-search-results-1024x683.jpg.webp"
                    alt="Marketing Campaign"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30"
                  />
                  <span className="relative text-gray-700 font-medium text-sm sm:text-base md:text-lg">
                    From high-impact SMS to rich, interactive RCS campaigns, we
                    help you reach customers at the right moment and turn
                    messages into measurable success.
                  </span>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="h-20 sm:h-24 bg-emerald-100 rounded-lg flex flex-col items-center justify-center p-2">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/domain.png"
                      alt="Websites"
                      className="h-6 w-6 sm:h-8 sm:w-8 mb-1"
                    />
                    <span className="text-emerald-700 text-sm sm:text-base font-medium">
                      Websites
                    </span>
                  </div>
                  <div className="h-20 sm:h-24 bg-purple-100 rounded-lg flex flex-col items-center justify-center p-2">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/chat.png"
                      alt="Messaging"
                      className="h-6 w-6 sm:h-8 sm:w-8 mb-1"
                    />
                    <span className="text-purple-700 text-sm sm:text-base font-medium">
                      Messaging
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl transform -rotate-3 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
