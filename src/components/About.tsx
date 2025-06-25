import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const stats = [
  { icon: Users, number: "50,000+", label: "Happy Travelers" },
  { icon: Globe, number: "150+", label: "Destinations" },
  { icon: Award, number: "25+", label: "Years Experience" },
  { icon: Heart, number: "98%", label: "Satisfaction Rate" }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Travel Partner Since 1998
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Wanderlust, we believe that travel is not just about visiting new places—it's about creating 
              life-changing experiences that broaden your horizons and create lasting memories. Our team of 
              passionate travel experts has been curating extraordinary journeys for over two decades.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From intimate cultural immersions to thrilling adventure expeditions, we specialize in crafting 
              personalized travel experiences that match your unique interests and budget. Our commitment to 
              excellence and attention to detail has made us a leader in the travel industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                Learn More
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors">
                Our Story
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Travel team"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">4.9/5</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;