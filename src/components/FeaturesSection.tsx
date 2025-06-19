
import { CreditCard, Zap, Database, Calendar } from 'lucide-react';

interface FeaturesSectionProps {
  isDark: boolean;
}

const FeaturesSection = ({ isDark }: FeaturesSectionProps) => {
  const features = [
    {
      icon: CreditCard,
      title: 'Carbon Billing',
      description: 'Advanced carbon footprint tracking and billing solutions for comprehensive environmental accounting',
      color: 'bg-pink-100 text-pink-600',
      darkColor: 'bg-pink-900/30 text-pink-400'
    },
    {
      icon: Zap,
      title: 'Energy Charging',
      description: 'Smart energy consumption monitoring and optimization tools for sustainable operations',
      color: 'bg-yellow-100 text-yellow-600',
      darkColor: 'bg-yellow-900/30 text-yellow-400'
    },
    {
      icon: Database,
      title: 'Data Catalog',
      description: 'Comprehensive sustainability data management and cataloging system for better insights',
      color: 'bg-green-100 text-green-600',
      darkColor: 'bg-green-900/30 text-green-400'
    },
    {
      icon: Calendar,
      title: 'Impact Events',
      description: 'Track and manage environmental impact events and sustainability milestones',
      color: 'bg-cyan-100 text-cyan-600',
      darkColor: 'bg-cyan-900/30 text-cyan-400'
    }
  ];

  return (
    <section id="features" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Unparalleled
          </h2>
          <h3 className={`text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            BSS/OSS Capabilities
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-white'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-lg ${isDark ? feature.darkColor : feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} />
                </div>
                
                <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h4>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Product Catalog Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Product Catalog
            </h3>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
              Intuitive tools that empower customers to manage their accounts with ease, freeing up your team.
            </p>
          </div>
          
          <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-xl p-8 relative overflow-hidden`}>
            <div className="relative z-10">
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 mb-4 shadow-lg`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-white">🍎</span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white">S</span>
                </div>
              </div>
              
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-lg`}>
                <div className="text-xs text-gray-500 mb-2">MOBILE APP ONLY</div>
                <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
                  TOTAL UNLIMITED
                </div>
                <div className="text-sm text-gray-500">Unlimited minutes</div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
