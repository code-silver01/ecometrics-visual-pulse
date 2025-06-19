
import { useState, useEffect } from 'react';

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
      setTimeout(() => setFadeOut(true), 800);
      setTimeout(() => onComplete(), 1200);
    }
  }, [count, onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 flex items-center justify-center z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative w-full max-w-4xl px-8">
        <div className="absolute top-0 left-0 text-white text-8xl font-bold mb-8">
          {count}
        </div>
        
        <div className="mt-32 relative">
          <div 
            className={`bg-white/20 rounded-full transition-all duration-300 ${
              isVertical ? 'w-2 h-64 rotate-90 origin-left' : 'w-full h-2'
            }`}
          >
            <div 
              className={`bg-gradient-to-r from-emerald-400 to-green-300 rounded-full h-full transition-all duration-75 ease-linear ${
                isVertical ? 'w-full' : ''
              }`}
              style={{ width: isVertical ? '100%' : `${count}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
