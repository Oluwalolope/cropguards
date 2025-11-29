import { useNavigate } from 'react-router';
import ImageWithFallback from './UI/ImageWithFallback';
import { Globe, ArrowRight } from 'lucide-react';


const FinalCTA = () => {
    const navigate = useNavigate();
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1620559290860-d1848adf78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNyb3AlMjBmaWVsZHxlbnwxfHx8fDE3NjQzNTIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Crop field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-primary-clr/95 to-[#2d8b51]/95"/>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          Join thousands of farmers<br />growing smarter with CropGuards
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Start making better farming decisions today with AI-powered insights
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/register')}
          className="bg-white hover:bg-gray-50 text-primary-clr px-12 py-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center gap-3 text-xl"
        >
          Start Now
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Platform Logos */}
        <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
          <div className="text-white/80 text-sm">Available on:</div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-3 rounded-full">
            <Globe className="w-6 h-6 text-white" />
            <span className="text-white">Web App</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl md:text-5xl text-white mb-2">10K+</div>
            <div className="text-white/80">Active Farmers</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl text-white mb-2">85%</div>
            <div className="text-white/80">Yield Improvement</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl text-white mb-2">15+</div>
            <div className="text-white/80">States Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;