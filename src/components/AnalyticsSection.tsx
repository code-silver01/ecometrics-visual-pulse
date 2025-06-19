
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Download, Filter, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AnalyticsSectionProps {
  isDark: boolean;
}

const AnalyticsSection = ({ isDark }: AnalyticsSectionProps) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('12M');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedMetric, setSelectedMetric] = useState('carbon');

  const timeRanges = ['1M', '3M', '6M', '12M', '2Y'];
  const regions = ['All', 'North America', 'Europe', 'Asia Pacific'];
  const metrics = [
    { id: 'carbon', label: 'Carbon Emissions', color: '#8B5A5A' },
    { id: 'energy', label: 'Energy Usage', color: '#10B981' },
    { id: 'water', label: 'Water Consumption', color: '#3B82F6' }
  ];

  const carbonData = [
    { name: 'Jan', carbon: 549, energy: 423, water: 312, target: 500 },
    { name: 'Feb', carbon: 278, energy: 387, water: 298, target: 500 },
    { name: 'Mar', carbon: 875, energy: 456, water: 334, target: 500 },
    { name: 'Apr', carbon: 617, energy: 401, water: 287, target: 500 },
    { name: 'May', carbon: 506, energy: 378, water: 265, target: 500 },
    { name: 'Jun', carbon: 36, energy: 289, water: 198, target: 500 },
    { name: 'Jul', carbon: 185, energy: 234, water: 234, target: 500 },
    { name: 'Aug', carbon: 191, energy: 267, water: 276, target: 500 },
    { name: 'Sep', carbon: 122, energy: 298, water: 298, target: 500 },
    { name: 'Oct', carbon: 559, energy: 387, water: 345, target: 500 },
    { name: 'Nov', carbon: 881, energy: 445, water: 378, target: 500 },
    { name: 'Dec', carbon: 539, energy: 401, water: 321, target: 500 }
  ];

  const currentMetric = metrics.find(m => m.id === selectedMetric);

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
      title: 'Managed portfolio water consumption',
      value: '2,847,503',
      unit: 'L',
      change: '-15%',
      isPositive: true,
      baseline: 'from 2019'
    }
  ];

  return (
    <section id="analytics" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} relative overflow-hidden`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} animate-fade-in`}>
            Sustainability Analytics
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} animate-fade-in`} style={{ animationDelay: '200ms' }}>
            Comprehensive insights into your environmental impact
          </p>
        </div>

        {/* Enhanced Chart Section */}
        <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-2xl p-8 mb-12 shadow-2xl transition-all duration-300 hover:shadow-3xl animate-scale-in`}>
          {/* Dynamic Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ENVIRONMENTAL IMPACT DASHBOARD
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Real-time monitoring and analysis
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              {/* Time Range Filter */}
              <div className="flex items-center space-x-2">
                <Calendar size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                <div className="flex space-x-1">
                  {timeRanges.map((range) => (
                    <Button
                      key={range}
                      variant={selectedTimeRange === range ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTimeRange(range)}
                      className="h-8"
                    >
                      {range}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Region Filter */}
              <div className="flex items-center space-x-2">
                <MapPin size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                <div className="flex space-x-1">
                  {regions.map((region) => (
                    <Button
                      key={region}
                      variant={selectedRegion === region ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedRegion(region)}
                      className="h-8 text-xs"
                    >
                      {region}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Metric Filter */}
              <div className="flex items-center space-x-2">
                <Filter size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                <div className="flex space-x-1">
                  {metrics.map((metric) => (
                    <Button
                      key={metric.id}
                      variant={selectedMetric === metric.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedMetric(metric.id)}
                      className="h-8 text-xs"
                    >
                      <div 
                        className="w-2 h-2 rounded-full mr-1"
                        style={{ backgroundColor: metric.color }}
                      />
                      {metric.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Export</span>
              </Button>
            </div>
          </div>

          {/* Enhanced Chart */}
          <div className="h-96 relative">
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
                <Bar 
                  dataKey={selectedMetric} 
                  fill={currentMetric?.color || '#8B5A5A'} 
                  radius={[4, 4, 0, 0]}
                  className="transition-all duration-300 hover:opacity-80"
                />
              </BarChart>
            </ResponsiveContainer>
            
            {/* Hover overlay for interactivity */}
            <div className="absolute inset-0 pointer-events-none">
              <div className={`absolute top-4 right-4 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                <Badge variant="secondary">
                  {selectedTimeRange} • {selectedRegion} • {currentMetric?.label}
                </Badge>
              </div>
            </div>
          </div>

          {/* Legend with animations */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mt-6">
            <div className="flex items-center space-x-2 animate-slide-in-right">
              <div className="w-4 h-0.5 bg-gray-400 border-dashed border border-gray-400" />
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Target 2030: 500 units
              </span>
            </div>
            <div className="flex items-center space-x-2 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
              <div className="w-4 h-0.5 bg-gray-600" />
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Target 2025: 600 units
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards with ripple effects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.title} 
              className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-xl p-8 shadow-lg animate-fade-in group hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden`} 
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => {
                // Ripple effect on click
                const ripple = document.createElement('div');
                ripple.className = 'absolute rounded-full bg-emerald-400 opacity-30 animate-ping';
                ripple.style.width = ripple.style.height = '100px';
                ripple.style.left = ripple.style.top = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                (event.currentTarget as HTMLElement).appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
              }}
            >
              <h4 className={`text-lg font-medium mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} group-hover:text-emerald-600 transition-colors`}>
                {stat.title}
              </h4>
              
              <div className="mb-4">
                <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'} group-hover:scale-105 transition-transform`}>
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

              {/* Mini progress indicators */}
              <div className="space-y-2">
                {[0.8, 0.6, 0.9, 0.7].map((progress, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                      Q{idx + 1}
                    </span>
                    <div className="flex-1 mx-3">
                      <div className={`h-1 ${isDark ? 'bg-gray-600' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transition-all duration-1000 group-hover:from-emerald-400 group-hover:to-green-400"
                          style={{ 
                            width: `${progress * 100}%`,
                            animationDelay: `${idx * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                    <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {Math.round(progress * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
