import { UserPlus, MapPin, Bell, TrendingUp, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Sign Up & Choose Language',
      description: 'Create your free account in seconds. Select your preferred language from English, Hausa, Yoruba, Igbo, and more.',
      color: 'bg-emerald-600',
    },
    {
      number: '02',
      icon: MapPin,
      title: 'Set Up Your Farm',
      description: 'Enter your farm location, size, and soil type. Add details about your current crops and available resources.',
      color: 'bg-blue-600',
    },
    {
      number: '03',
      icon: Bell,
      title: 'Get Real-Time Advice',
      description: 'Receive personalized recommendations, weather alerts, and planting schedules tailored to your farm.',
      color: 'bg-amber-600',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Improve Your Crop Yield',
      description: 'Follow our AI-powered guidance to increase productivity, reduce losses, and maximize your profits.',
      color: 'bg-green-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in 4 simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-linear-to-r from-emerald-400 via-blue-400 to-green-600 opacity-20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full hover:-translate-y-2">
                    {/* Number Badge */}
                    <div className={`absolute -top-4 -left-4 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-10">
                      <ArrowRight className="w-8 h-8 text-primary-clr/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-primary-clr hover:bg-[#329955] text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks