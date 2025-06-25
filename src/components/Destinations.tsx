import React from 'react';
import { Star, Clock, Users } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹2,07,500",
    duration: "7 days",
    rating: 4.9,
    reviews: 245,
    description: "Experience the magical sunsets and white-washed buildings of this iconic Greek island."
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image: "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹2,74,000",
    duration: "10 days",
    rating: 4.8,
    reviews: 189,
    description: "Immerse yourself in the perfect blend of ancient traditions and modern innovation."
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹1,57,800",
    duration: "5 days",
    rating: 4.9,
    reviews: 312,
    description: "Discover the ancient Incan citadel high in the Andes Mountains."
  },
  {
    id: 4,
    name: "Bali, Indonesia",
    image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹1,41,200",
    duration: "8 days",
    rating: 4.7,
    reviews: 428,
    description: "Relax in tropical paradise with stunning beaches, temples, and rice terraces."
  },
  {
    id: 5,
    name: "Iceland",
    image: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹2,40,800",
    duration: "6 days",
    rating: 4.8,
    reviews: 156,
    description: "Witness the Northern Lights and explore dramatic waterfalls and geysers."
  },
  {
    id: 6,
    name: "Dubai, UAE",
    image: "https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹1,82,700",
    duration: "5 days",
    rating: 4.6,
    reviews: 203,
    description: "Experience luxury and innovation in this futuristic desert metropolis."
  }
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world's most breathtaking destinations, handpicked by our travel experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                  <span className="text-sm font-semibold text-gray-900">{destination.price}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{destination.rating}</span>
                    <span className="text-gray-500">({destination.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{destination.reviews} reviews</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;