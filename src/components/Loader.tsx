
import { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [count, setCount] = useState(0);
  const [isVertical, setIsVertical] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      setTimeout(() => setIsVertical(true), 200);
      setTimeout(() => setFadeOut(true), 1200);
      setTimeout(() => onComplete(), 1800);
    }
  }, [count, onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 flex items-center justify-center z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-4xl px-8">
        {/* Counter */}
        <div className="absolute top-0 left-0 text-white text-8xl font-bold mb-8 animate-pulse">
          {count}
        </div>
        
        {/* Progress Bar Container */}
        <div className="mt-32 relative flex items-center justify-center">
          <div 
            className={`bg-white/20 rounded-full transition-all duration-700 ease-in-out ${
              isVertical 
                ? 'w-4 h-64 transform rotate-90 origin-left' 
                : 'w-full max-w-2xl h-4'
            }`}
          >
            {/* Progress Fill */}
            <div 
              className={`bg-gradient-to-r from-emerald-400 to-green-300 rounded-full transition-all duration-100 ease-linear relative ${
                isVertical ? 'w-full h-full' : 'h-full'
              }`}
              style={{ width: isVertical ? '100%' : `${count}%` }}
            >
              {/* Moving Leaf */}
              {!isVertical && (
                <div 
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2"
                  style={{ 
                    transform: `translateY(-50%) translateX(8px) ${count > 5 ? 'scale(1.2)' : 'scale(1)'}`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <Leaf 
                    className="text-emerald-300 animate-bounce" 
                    size={20}
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))',
                      animationDuration: '0.8s'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mt-8">
          <p className="text-white/80 text-lg animate-pulse">
            Loading EcoMetrics Dashboard...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
