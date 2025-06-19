
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CustomersSection from '../components/CustomersSection';
import AnalyticsSection from '../components/AnalyticsSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  const toggleDark = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {showLoader && <Loader onComplete={handleLoaderComplete} />}
      
      {!showLoader && (
        <>
          <Navigation isDark={isDark} toggleDark={toggleDark} />
          <Sidebar isDark={isDark} />
          
          <main className="w-full">
            <HeroSection isDark={isDark} />
            <FeaturesSection isDark={isDark} />
            <CustomersSection isDark={isDark} />
            <AnalyticsSection isDark={isDark} />
            <TestimonialsSection isDark={isDark} />
          </main>

          {/* Footer */}
          <footer className={`py-12 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border-t`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent`}>
                  EcoMetrics
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  Transforming sustainability through intelligent analytics
                </p>
                <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  © 2024 EcoMetrics. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
