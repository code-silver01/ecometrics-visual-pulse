
import { useState } from 'react';

interface SidebarProps {
  isDark: boolean;
}

const Sidebar = ({ isDark }: SidebarProps) => {
  const [selectedBrand, setSelectedBrand] = useState('The Agency');

  const brands = [
    { name: 'ECorp', color: 'bg-emerald-500', selected: false },
    { name: 'ICorp', color: 'bg-orange-500', selected: false },
    { name: 'The Agency', color: 'bg-red-500', selected: true }
  ];

  return (
    <div className={`fixed left-4 top-24 w-80 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} z-30`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Brand Kits
      </h3>
      
      <div className="space-y-3">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${
              selectedBrand === brand.name
                ? isDark ? 'bg-blue-600/20 border border-blue-500' : 'bg-blue-50 border border-blue-200'
                : isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedBrand(brand.name)}
          >
            <div className="flex items-center space-x-3 flex-1">
              {selectedBrand === brand.name && (
                <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              
              <div className={`w-8 h-8 ${brand.color} rounded-full flex items-center justify-center`}>
                <div className="w-4 h-4 bg-white rounded-full opacity-80" />
              </div>
              
              <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {brand.name}
              </span>
            </div>
            
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-gray-400 rounded" />
              <div className="w-1 h-4 bg-gray-400 rounded" />
              <div className="w-1 h-4 bg-gray-400 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
