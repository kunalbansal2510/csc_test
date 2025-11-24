import React, { useState } from "react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const featuredServices = [
    { 
      name: "Aadhaar Enrollment & Update", 
      icon: "🆔",
      description: "Get your Aadhaar card and update details quickly"
    },
    { 
      name: "PAN Card Application", 
      icon: "💳",
      description: "Apply for new PAN card or make corrections"
    },
    { 
      name: "Utility Bill Payments", 
      icon: "💡",
      description: "Pay electricity, water, and other utility bills"
    },
    { 
      name: "Banking & Insurance", 
      icon: "🏦",
      description: "Banking services and insurance applications"
    },
    { 
      name: "Educational Support", 
      icon: "🎓",
      description: "Scholarship and educational form assistance"
    },
    { 
      name: "Government Scheme Applications", 
      icon: "📋",
      description: "Apply for various government welfare schemes"
    },
  ];

  const openContact = () => {
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
    // Reset form when closing
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    // Show success message or handle API call
    alert("Thank you for your message! We'll get back to you soon.");
    closeContact();
  };

  return (
    <>
      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform scale-95 animate-scale-in">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
              <button 
                onClick={closeContact}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={closeContact}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
            
            <div className="bg-gray-50 p-4 rounded-b-2xl text-center">
              <p className="text-sm text-gray-600">
                Or call us directly:{" "}
                <a href="tel:+919050058553" className="text-blue-600 font-semibold hover:text-blue-800">
                  +91 90500-58553
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Welcome to Your Bansal CSC
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Your trusted gateway of government and digital services in your community. 
            Fast, reliable, and convenient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/services" 
              className="bg-white text-blue-900 py-3 px-8 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Services
            </a>
            <button 
              onClick={openContact}
              className="border-2 border-white text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-blue-900">5000+</div>
          <div className="text-gray-600 mt-2">Happy Customers</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-blue-900">50+</div>
          <div className="text-gray-600 mt-2">Services Offered</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-blue-900">24/7</div>
          <div className="text-gray-600 mt-2">Support Available</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-blue-900">5⭐</div>
          <div className="text-gray-600 mt-2">Customer Rating</div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular digital and government services designed to make your life easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-blue-600 group cursor-pointer"
            >
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-900 transition-colors duration-300">
                  {service.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center group">
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/services" 
            className="inline-block bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 px-12 rounded-full hover:from-blue-800 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
          >
            View All Services
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
          Our dedicated team is here to help you with all your service needs. 
          Visit us today or schedule an appointment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={openContact}
            className="bg-white text-green-900 py-3 px-8 rounded-full font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
          >
            Book Appointment
          </button>
          <a 
            href="tel:+919050058553" 
            className="border-2 border-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
          >
            Call Now: +91 90500-58553
          </a>
        </div>
      </section>

      {/* Add these styles for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}