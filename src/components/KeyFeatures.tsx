import { Sparkles, Calendar, Camera, LayoutDashboard, Cloud, Droplets, ThermometerSun } from 'lucide-react';
import ImageWithFallback from './UI/ImageWithFallback';

const KeyFeatures = () => {
  const features = [
    {
      title: 'Smart Crop Recommendations',
      description: 'Get personalized crop suggestions based on your soil type, local climate, and market trends. Our AI analyzes thousands of data points to show you which crops will give you the best yield and highest profit.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MjYyOTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: [
        { label: 'Suitability Score', value: '92%', color: 'text-emerald-600' },
        { label: 'Est. Yield', value: '4.2 tons/ha', color: 'text-blue-600' },
        { label: 'Est. Profit', value: '₦450K', color: 'text-green-600' },
      ],
    },
    {
      title: 'Planting Schedule Advisor',
      description: 'Never miss the perfect planting window again. Our advanced weather prediction system analyzes 7-14 day forecasts to highlight the optimal days for planting, watering, and harvesting your crops.',
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1620559290860-d1848adf78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNyb3AlMjBmaWVsZHxlbnwxfHx8fDE3NjQzNTIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      weatherDays: [
        { day: 'Mon', temp: '28°', icon: Cloud, status: 'good' },
        { day: 'Tue', temp: '30°', icon: ThermometerSun, status: 'best' },
        { day: 'Wed', temp: '29°', icon: Cloud, status: 'best' },
        { day: 'Thu', temp: '26°', icon: Droplets, status: 'avoid' },
      ],
    },
    {
      title: 'Disease & Pest Detection',
      description: 'Catch crop diseases early with our AI-powered image recognition. Simply snap a photo of an affected plant, and get instant diagnosis with recommended treatment options to save your harvest.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1618496899001-b58ebcbeef26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDMxMjA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Farmer Dashboard',
      description: 'Everything you need in one place. Track your farm\'s health, view weather alerts, manage multiple fields, and access your personalized calendar—all from a simple, intuitive interface designed for farmers.',
      icon: LayoutDashboard,
      image: 'https://images.unsplash.com/photo-1686008674009-876c599f1fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBzbWFydHBob25lJTIwZmllbGR8ZW58MXx8fHwxNzY0MzUyMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id='features' className="py-20 bg-linear-to-b from-white to-[#F5E6D3]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Powerful Features for Modern Farmers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to make smarter farming decisions
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`${!isEven ? 'md:order-2' : ''}`}>
                  <div className="flex flex-col text-center md:flex-row md:text-start items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-clr rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats for Crop Recommendations */}
                  {feature.stats && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {feature.stats.map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                          <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                          <p className={`text-2xl ${stat.color}`}>{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Weather Days for Schedule Advisor */}
                  {feature.weatherDays && (
                    <div className="grid grid-cols-4 gap-3">
                      {feature.weatherDays.map((day, idx) => {
                        const DayIcon = day.icon;
                        return (
                          <div
                            key={idx}
                            className={`rounded-xl p-4 text-center ${
                              day.status === 'best'
                                ? 'bg-primary-clr text-white'
                                : day.status === 'avoid'
                                ? 'bg-red-100 text-red-900'
                                : 'bg-white text-gray-900 shadow-md'
                            }`}
                          >
                            <p className="text-sm mb-2">{day.day}</p>
                            <DayIcon className="w-6 h-6 mx-auto mb-2" />
                            <p className="text-sm">{day.temp}</p>
                            {day.status === 'best' && (
                              <div className="mt-2 text-xs">Best</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className={`${!isEven ? 'md:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures