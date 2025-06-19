
import { useState, useEffect } from 'react';

interface TestimonialsSectionProps {
  isDark: boolean;
}

const TestimonialsSection = ({ isDark }: TestimonialsSectionProps) => {
  const [showGlidingText, setShowGlidingText] = useState(true);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Sustainability Director',
      company: 'EcoTech Solutions',
      image: '👩‍💼',
      review: 'EcoMetrics transformed how we track and report our carbon footprint. The insights are invaluable for our sustainability goals.'
    },
    {
      name: 'Michael Chen',
      role: 'Environmental Manager',
      company: 'GreenCorp Industries',
      image: '👨‍💻',
      review: 'The analytics dashboard gives us real-time visibility into our environmental impact. Highly recommended!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chief Operations Officer',
      company: 'Sustainable Systems',
      image: '👩‍💼',
      review: 'Outstanding platform! The data visualization helps us make informed decisions about our sustainability initiatives.'
    }
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowGlidingText(false);
      setShowTestimonials(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowTestimonials(false);
      setShowPricing(true);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="testimonials" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gliding Text Animation */}
        {showGlidingText && (
          <div className="flex items-center justify-center h-96">
            <h2 className={`text-6xl md:text-8xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} animate-fade-in`}>
              <span className="inline-block animate-slide-in-right" style={{ animationDelay: '0ms' }}>Happy</span>
              <span className="inline-block ml-4 animate-slide-in-right" style={{ animationDelay: '300ms' }}>Customers</span>
            </h2>
          </div>
        )}

        {/* Testimonials */}
        {showTestimonials && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                What Our Customers Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-8 shadow-lg animate-scale-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {testimonial.role}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    "{testimonial.review}"
                  </p>
                  
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Section */}
        {showPricing && (
          <div id="pricing" className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Choose Your Plan
              </h2>
              <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Flexible pricing for organizations of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} animate-fade-in`}>
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Starter</h3>
                  <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    $29<span className="text-lg font-normal">/month</span>
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Perfect for small teams</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    Basic carbon tracking
                  </li>
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    Monthly reports
                  </li>
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    Email support
                  </li>
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Get Started
                </button>
              </div>

              {/* Professional Plan */}
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-xl border-2 border-emerald-500 animate-fade-in relative`} style={{ animationDelay: '200ms' }}>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Professional</h3>
                  <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    $99<span className="text-lg font-normal">/month</span>
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>For growing organizations</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    Advanced analytics
                  </li>
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    Real-time monitoring
                  </li>
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    Custom reports
                  </li>
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    Priority support
                  </li>
                </ul>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} animate-fade-in`} style={{ animationDelay: '400ms' }}>
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Enterprise</h3>
                  <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Custom
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>For large enterprises</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    Unlimited everything
                  </li>
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    White-label solution
                  </li>
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    Dedicated support
                  </li>
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-emerald-500 mr-3">✓</span>
                    Custom integrations
                  </li>
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
