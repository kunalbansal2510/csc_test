export default function Home() {
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-center text-white overflow-hidden">
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
            <a 
              href="/contact" 
              className="border-2 border-white text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Contact Us
            </a>
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
            className="inline-block bg-linear-to-r from-blue-900 to-blue-700 text-white py-4 px-12 rounded-full hover:from-blue-800 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
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
          <a 
            href="/contact" 
            className="bg-white text-green-900 py-3 px-8 rounded-full font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
          >
            Book Appointment
          </a>
          <a 
            href="/contact" 
            className="border-2 border-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
          >
            Call Now: +91 90500-585553
          </a>
        </div>
      </section>
    </>
  );
}