
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Download } from 'lucide-react';

interface AnalyticsSectionProps {
  isDark: boolean;
}

const AnalyticsSection = ({ isDark }: AnalyticsSectionProps) => {
  const carbonData = [
    { name: 'Jan', value: 549, target: 500 },
    { name: 'Feb', value: 278, target: 500 },
    { name: 'Mar', value: 875, target: 500 },
    { name: 'Apr', value: 617, target: 500 },
    { name: 'May', value: 506, target: 500 },
    { name: 'Jun', value: 36, target: 500 },
    { name: 'Jul', value: 185, target: 500 },
    { name: 'Aug', value: 191, target: 500 },
    { name: 'Sep', value: 122, target: 500 },
    { name: 'Oct', value: 559, target: 500 },
    { name: 'Nov', value: 881, target: 500 },
    { name: 'Dec', value: 539, target: 500 }
  ];

  const yearlyData = [
    { year: '2019', carbon: 38673, energy: 157, consumption: 65198706 },
    { year: '2020', carbon: 32813, energy: 135, consumption: 48784205 },
    { year: '2021', carbon: 14111, energy: 128, consumption: 49324077 },
    { year: '2022', carbon: 45048, energy: 123, consumption: 47790662 }
  ];

  const stats = [
    {
      title: 'Managed portfolio carbon footprint',
      value: '45,048',
      unit: 'tCO₂e',
      change: '+16%',
      isPositive: false,
      baseline: 'from 2019'
    },
    {
      title: 'Managed portfolio energy intensity',
      value: '123',
      unit: 'kWh/m²',
      change: '-22%',
      isPositive: true,
      baseline: 'from 2019'
    },
    {
      title: 'Managed portfolio energy consumption',
      value: '47,790,662',
      unit: 'kWh',
      change: '-27%',
      isPositive: true,
      baseline: 'from 2019'
    }
  ];

  return (
    <section id="analytics" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Sustainability Analytics
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive insights into your environmental impact
          </p>
        </div>

        {/* Emboded Carbon Emissions Chart */}
        <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-xl p-8 mb-12 shadow-lg`}>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                EMBODIED CARBON EMISSIONS
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Intensity measured by kgCO₂e/m²
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <div className="flex items-center space-x-4">
                <button className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
                  Refurbishment
                </button>
                <button className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
                  New build
                </button>
                <button className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-red-600' : 'bg-red-600'} text-white`}>
                  All
                </button>
              </div>
              
              <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${isDark ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-80 transition-colors`}>
                <Download size={16} />
                <span>Download the data</span>
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={carbonData}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: isDark ? '#9CA3AF' : '#6B7280' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: isDark ? '#9CA3AF' : '#6B7280' }}
                />
                <Bar dataKey="value" fill="#8B5A5A" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-0.5 bg-gray-400 border-dashed border border-gray-400" />
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                500 kgCO₂e/m² - Embodied Carbon Target 2030
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-0.5 bg-gray-600" />
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                600 kgCO₂e/m² - Embodied Carbon Target 2025
              </span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={stat.title} className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-xl p-8 shadow-lg animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
              <h4 className={`text-lg font-medium mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {stat.title}
              </h4>
              
              <div className="mb-4">
                <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.unit}
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                {stat.isPositive ? (
                  <TrendingDown className="text-green-500" size={16} />
                ) : (
                  <TrendingUp className="text-red-500" size={16} />
                )}
                <span className={`text-sm font-medium ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.baseline}
                </span>
              </div>

              {/* Progress bars */}
              <div className="space-y-3">
                {yearlyData.slice().reverse().map((data, idx) => (
                  <div key={data.year} className="flex items-center justify-between">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{data.year}</span>
                    <div className="flex-1 mx-4">
                      <div className={`h-2 ${isDark ? 'bg-gray-600' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                        <div 
                          className="h-full bg-red-400 rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${(index === 0 ? data.carbon : index === 1 ? data.energy : data.consumption) / (index === 0 ? 50000 : index === 1 ? 200 : 70000000) * 100}%`,
                            animationDelay: `${idx * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {index === 0 ? data.carbon.toLocaleString() : index === 1 ? data.energy : data.consumption.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600 flex items-center justify-between">
                <button className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} hover:${isDark ? 'text-gray-300' : 'text-gray-700'} flex items-center space-x-1`}>
                  <span>See full breakdown of carbon footprint</span>
                  <span>→</span>
                </button>
                <button className={`flex items-center space-x-1 px-3 py-1 rounded-lg ${isDark ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-80 transition-colors`}>
                  <Download size={14} />
                  <span className="text-sm">Download the data</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
