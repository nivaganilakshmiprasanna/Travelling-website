import React from 'react';
import { Plane, Hotel, Car, Camera, Shield, Headphones } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Find the best flight deals with our advanced search engine and exclusive partnerships with airlines worldwide."
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Book luxury accommodations at the best prices, from boutique hotels to world-class resorts."
  },
  {
    icon: Car,
    title: "Car Rentals",
    description: "Rent vehicles from trusted providers with comprehensive insurance and 24/7 roadside assistance."
  },
  {
    icon: Camera,
    title: "Guided Tours",
    description: "Experience destinations like a local with our expert guides and carefully curated tour packages."
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Protect your investment with comprehensive travel insurance covering medical, trip cancellation, and more."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated travel consultants are available around the clock to assist with any travel needs."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive travel solutions to make your journey seamless and unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Let our travel experts create the perfect itinerary for your dream destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;