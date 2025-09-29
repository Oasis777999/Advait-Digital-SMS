import React from 'react';
import { Globe, MessageSquare, Briefcase, Code, Smartphone, BarChart3, Shield, Zap, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies, responsive design, and optimized performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Custom CMS'],
      color: 'blue',
      path:"website"
    },
    {
      icon: MessageSquare,
      title: 'Messaging Solutions',
      description: 'Comprehensive messaging platform with SMS, bulk SMS, and RCS messaging for enhanced customer communication.',
      features: ['Bulk SMS Campaigns', 'RCS Rich Messaging', 'Two-Way Communication', 'Global Delivery'],
      color: 'purple',
      path:'message'
    },
    {
      icon: Briefcase,
      title: 'Communication APIs',
      description: 'Powerful APIs and integration services to seamlessly connect messaging solutions with your business systems.',
      features: ['REST APIs', 'Webhook Integration', 'Real-time Analytics', 'Custom Solutions'],
      color: 'emerald',
      path:"api"
    }
  ];

  const additionalServices = [
    { icon: Code, title: 'Custom Development', description: 'Tailored solutions for unique requirements' },
    { icon: Smartphone, title: 'SMS Gateway', description: 'Reliable SMS delivery infrastructure' },
    { icon: BarChart3, title: 'Message Analytics', description: 'Detailed delivery and engagement reports' },
    { icon: Shield, title: 'Secure Messaging', description: 'Enterprise-grade security and compliance' },
    { icon: Zap, title: 'API Integration', description: 'Seamless third-party integrations' },
    { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock technical assistance' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'text-blue-600',
        gradient: 'from-blue-600 to-blue-700',
        hover: 'hover:shadow-blue-100'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'text-purple-600',
        gradient: 'from-purple-600 to-purple-700',
        hover: 'hover:shadow-purple-100'
      },
      emerald: {
        bg: 'bg-emerald-50',
        icon: 'text-emerald-600',
        gradient: 'from-emerald-600 to-emerald-700',
        hover: 'hover:shadow-emerald-100'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions designed to elevate your business and connect you with your audience effectively.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl ${colors.hover} transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`h-8 w-8 ${colors.icon}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${colors.gradient} rounded-full`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`} onClick={()=>navigate(`/${service.path}`)}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expand your capabilities with our comprehensive suite of additional services and solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;