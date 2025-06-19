
import { useState, useEffect } from 'react';

interface CustomersSectionProps {
  isDark: boolean;
}

const CustomersSection = ({ isDark }: CustomersSectionProps) => {
  const [currentGrid, setCurrentGrid] = useState(0);
  const [showMeetBox, setShowMeetBox] = useState(false);
  
  // 24 customers divided into 4 grids of 6 each (2x3)
  const allCustomers = [
    // Grid 1
    [
      { name: 'EcoTech Solutions', logo: '🌱', color: 'bg-emerald-500' },
      { name: 'GreenCorp Industries', logo: '🍃', color: 'bg-green-500' },
      { name: 'Sustainable Systems', logo: '♻️', color: 'bg-blue-500' },
      { name: 'CleanEnergy Co', logo: '⚡', color: 'bg-yellow-500' },
      { name: 'EarthFirst Ltd', logo: '🌍', color: 'bg-teal-500' },
      { name: 'Carbon Neutral Inc', logo: '🌿', color: 'bg-lime-500' }
    ],
    // Grid 2
    [
      { name: 'Solar Dynamics', logo: '☀️', color: 'bg-orange-500' },
      { name: 'Wind Power Pro', logo: '💨', color: 'bg-cyan-500' },
      { name: 'BioFuel Corp', logo: '🌾', color:  'bg-amber-500' },
      { name: 'Hydro Systems', logo: '💧', color: 'bg-blue-600' },
      { name: 'Waste Zero', logo: '🔄', color: 'bg-purple-500' },
      { name: 'Green Building Co', logo: '🏢', color: 'bg-emerald-600' }
    ],
    // Grid 3
    [
      { name: 'Ocean Clean', logo: '🌊', color: 'bg-blue-400' },
      { name: 'Forest Guard', logo: '🌲', color: 'bg-green-600' },
      { name: 'Climate Tech', logo: '🌡️', color: 'bg-red-500' },
      { name: 'Eco Transport', logo: '🚗', color: 'bg-green-400' },
      { name: 'Smart Grid Co', logo: '⚡', color: 'bg-yellow-600' },
      { name: 'Renewable Resources', logo: '🔋', color: 'bg-indigo-500' }
    ],
    // Grid 4
    [
      { name: 'Carbon Tracker', logo: '📊', color: 'bg-gray-500' },
      { name: 'Eco Analytics', logo: '📈', color: 'bg-pink-500' },
      { name: 'Green Metrics', logo: '📉', color: 'bg-violet-500' },
      { name: 'Sustainability Plus', logo: '✅', color: 'bg-green-500' },
      { name: 'Planet Protector', logo: '🛡️', color: 'bg-blue-500' },
      { name: 'Future Earth', logo: '🔮', color: 'bg-purple-600' }
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGrid(prev => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="customers" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Customers
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Trusted by leading sustainability-focused organizations worldwide
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl relative overflow-hidden`}
            onMouseEnter={() => setShowMeetBox(true)}
            onMouseLeave={() => setShowMeetBox(false)}
          >
            {/* Customer Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {allCustomers[currentGrid].map((customer, index) => (
                <div
                  key={`${currentGrid}-${index}`}
                  className={`${customer.color} rounded-xl p-6 text-white text-center transition-all duration-300 hover:scale-105 animate-scale-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl mb-3">{customer.logo}</div>
                  <h3 className="font-semibold text-sm">{customer.name}</h3>
                </div>
              ))}
            </div>

            {/* Meet Our Customers Box */}
            {showMeetBox && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300 animate-fade-in">
                <div className="bg-white rounded-xl p-8 text-center shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Customers</h3>
                  <p className="text-gray-600 mb-6">
                    Discover how industry leaders are transforming their sustainability practices
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                    View Case Studies
                  </button>
                </div>
              </div>
            )}

            {/* Grid Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentGrid === index ? 'bg-emerald-500' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
