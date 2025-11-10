import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycby2jCOJQGWMSnf7NVlp0B20gGRBFgHFTQA6YjRM9CzPe2TLC3Saf0eK40Hsm_pdxrGCwg/exec";

  const contactInfo = [    
    {
      icon: Mail,
      title: "Email Us",
      detail: "support@advaitteleservices.com",
      description: "Send us an email anytime",
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 8282982829",
      description: "Mon-Fri from 10am to 6pm",
      color: "text-purple-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Office No. 522, 5th floor",
      description: "Amanora Chambers, Pune",
      color: "text-emerald-600",
    },
  ];

  const services = [
    "Website Development",
    "Bulk SMS Services",
    "RCS Messaging",
    "SMS Gateway Integration",
    "API Integration",
    "Other",
  ];

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    sendDataToSheet();

    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_n4o3qt8",
        "template_ewy42m8",
        form.current,
        "5DIc3xt5b2_lr3pSS"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setLoading(false);
          form.current?.reset();
          setTimeout(() => setIsSubmitted(false), 4000);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  const sendDataToSheet = async () => {
    
    try {
      const formData = new FormData(form.current);
      const formObject = Object.fromEntries(formData.entries());
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });
      
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project and see
            how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                We're here to help you succeed. Reach out to us through any of
                the channels below, and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className={`font-medium ${info.color} mb-1`}>
                        {info.detail}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-blue-400" />
                <h4 className="font-semibold text-white">Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <MessageCircle className="h-8 w-8 text-purple-400" />
                <h3 className="text-2xl font-bold">Send us a Message</h3>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In (Subject)
                  </label>
                  <select
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mt-6 p-4 bg-emerald-900/50 border border-emerald-600 rounded-lg">
                  <p className="text-emerald-300 text-center">
                    Thank you for your message! We'll get back to you within 24
                    hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
