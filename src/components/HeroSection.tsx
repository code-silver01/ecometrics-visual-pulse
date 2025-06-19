
import { useState } from 'react';
import { Leaf, BarChart3, Users, Globe, Zap, Target } from 'lucide-react';

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection = ({ isDark }: HeroSectionProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const infographics = [
    { icon: Leaf, title: 'Carbon Tracking', position: 'top-20 left-20', color: 'emerald' },
    { icon: BarChart3, title: 'Analytics', position: 'top-32 right-24', color: 'blue' },
    { icon: Users, title: 'Team Collaboration', position: 'bottom-40 left-16', color: 'purple' },
    { icon: Globe, title: 'Global Impact', position: 'bottom-20 right-20', color: 'green' },
    { icon: Zap, title: 'Energy Monitoring', position: 'top-40 left-1/2', color: 'yellow' },
    { icon: Target, title: 'Goal Setting', position: 'bottom-32 right-1/3', color: 'red' }
  ];

  return (
    <section id="home" className={`relative min-h-screen flex items-center ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-emerald-50 to-green-100'} overflow-hidden`}>
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 ${isDark ? 'bg-emerald-900/20' : 'bg-emerald-200/30'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 ${isDark ? 'bg-green-900/20' : 'bg-green-200/30'} rounded-full blur-3xl animate-pulse delay-1000`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} animate-fade-in`}>
            Sustainable
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent block">
              Analytics
            </span>
          </h1>
          <p className={`text-xl md:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fade-in delay-300`}>
            Transform your environmental impact with intelligent data visualization and comprehensive sustainability metrics
          </p>
        </div>

        {/* Interactive Infographics Layer */}
        <div className="relative h-96 mb-16">
          {infographics.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIcon === item.title;
            const colorClasses = {
              emerald: 'bg-emerald-500 text-white',
              blue: 'bg-blue-500 text-white',
              purple: 'bg-purple-500 text-white',
              green: 'bg-green-500 text-white',
              yellow: 'bg-yellow-500 text-white',
              red: 'bg-red-500 text-white'
            };

            return (
              <div
                key={item.title}
                className={`absolute ${item.position} transform transition-all duration-500 ${
                  isHovered ? 'scale-125 z-30' : 'z-10'
                } hover:scale-110 cursor-pointer`}
                onMouseEnter={() => setHoveredIcon(item.title)}
                onMouseLeave={() => setHoveredIcon(null)}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className={`p-4 rounded-xl ${colorClasses[item.color as keyof typeof colorClasses]} shadow-lg transition-all duration-300 ${
                  isHovered ? 'shadow-2xl' : ''
                }`}>
                  <Icon size={32} />
                  {isHovered && (
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-md text-sm whitespace-nowrap">
                      {item.title}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Start Analysis
          </button>
          <button className={`px-8 py-4 ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'} border-2 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-200`}>
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
