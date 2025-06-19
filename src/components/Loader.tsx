
import { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [count, setCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      setTimeout(() => setIsTransitioning(true), 300);
      setTimeout(() => setFadeOut(true), 1500);
      setTimeout(() => onComplete(), 2000);
    }
  }, [count, onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 flex items-center justify-center z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-6xl px-8">
        {/* Counter */}
        <div className="absolute -top-16 left-0">
          <div className="text-white text-7xl md:text-9xl font-bold animate-pulse">
            {count}
          </div>
        </div>
        
        {/* Progress Bar Container */}
        <div className="mt-20 relative flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            {/* Horizontal Progress Bar */}
            <div 
              className={`bg-emerald-900/40 backdrop-blur-sm rounded-full transition-all duration-1000 ease-in-out ${
                isTransitioning 
                  ? 'opacity-0 transform scale-95' 
                  : 'opacity-100 w-full h-6'
              }`}
            >
              {/* Progress Fill */}
              <div 
                className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 h-full rounded-full transition-all duration-100 ease-out relative overflow-hidden"
                style={{ width: `${count}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                
                {/* Moving Leaf */}
                <div 
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 transition-all duration-100"
                >
                  <div className="relative">
                    <Leaf 
                      className="text-emerald-600 drop-shadow-lg" 
                      size={28}
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))',
                        transform: `rotate(${count * 3.6}deg) scale(${1 + (count / 200)})`
                      }}
                    />
                    {/* Leaf trail effect */}
                    <div className="absolute inset-0 animate-ping">
                      <Leaf 
                        className="text-emerald-300 opacity-40" 
                        size={28}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* L-shaped Vertical Bar (appears after horizontal completes) */}
            {isTransitioning && (
              <div 
                className="absolute -right-3 -top-32 w-6 bg-gradient-to-b from-emerald-400 to-green-300 rounded-full animate-slide-in-right shadow-lg"
                style={{ 
                  height: '200px',
                  animationDuration: '800ms',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse rounded-full" />
              </div>
            )}
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mt-12">
          <div className="relative">
            <p className="text-white/90 text-xl md:text-2xl font-light animate-pulse">
              Loading EcoMetrics Dashboard
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Progress indicator dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                count > (i + 1) * 33 
                  ? 'bg-emerald-400 scale-125' 
                  : 'bg-emerald-800'
              }`}
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
