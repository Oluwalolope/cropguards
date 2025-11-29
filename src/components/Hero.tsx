import { Sun, Cloud, Droplets } from "lucide-react";
import ImageWithFallback from "./UI/ImageWithFallback";
// import { motion } from "motion/react";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#3BAA64]/10 via-[#FFFEF9] to-[#F5E6D3]/30">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
              Farm Smarter.<br />Grow More.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Real-time weather alerts, soil insights, and AI-powered crop guidance — all in one simple app for farmers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('register')}
                className="bg-[#3BAA64] hover:bg-[#329955] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                Get Started
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#3BAA64] px-8 py-4 rounded-full border-2 border-[#3BAA64] transition-all duration-300 cursor-pointer">
                See How It Works
              </button>
            </div>
            
            {/* Floating Weather Icons */}
            <div className="hidden md:block absolute -right-12 top-1/4 animate-float">
              <Cloud className="w-12 h-12 text-[#3BAA64]/30" />
            </div>
            <div className="hidden md:block absolute -right-8 top-1/2 animate-float-delayed">
              <Sun className="w-10 h-10 text-amber-400/40" />
            </div>
            <div className="hidden md:block absolute -right-16 top-3/4 animate-float">
              <Droplets className="w-8 h-8 text-blue-400/30" />
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative z-10 max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="bg-gray-900 h-6 w-40 mx-auto rounded-b-3xl"/>
                  
                  {/* Phone Content */}
                  <div className="bg-linear-to-br from-[#3BAA64] to-[#2d8b51] p-6">
                    <div className="text-white mb-6">
                      <p className="text-sm opacity-90">Good Morning, Samuel</p>
                      <h3 className="text-2xl mt-1">Your Farm Dashboard</h3>
                    </div>
                    
                    {/* Weather Card */}
                    <div className="bg-white rounded-2xl p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Today's Weather</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Sun className="w-8 h-8 text-amber-500" />
                            <span className="text-3xl text-gray-900">28°C</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Humidity</p>
                          <p className="text-lg text-gray-900">65%</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-white">
                        <p className="text-xs opacity-90">Soil Moisture</p>
                        <p className="text-xl mt-1">Good</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-white">
                        <p className="text-xs opacity-90">Best to Plant</p>
                        <p className="text-xl mt-1">3 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1686008674009-876c599f1fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBzbWFydHBob25lJTIwZmllbGR8ZW58MXx8fHwxNzY0MzUyMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Farmer using technology"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
