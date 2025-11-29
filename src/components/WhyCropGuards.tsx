import { CloudRain, Sprout, Bug, TrendingDown, CheckCircle, Calendar, AlertTriangle, Languages } from 'lucide-react';

const WhyCropGuards = () => {
  const problems = [
    { icon: CloudRain, text: 'Unpredictable weather', color: 'text-blue-600' },
    { icon: Sprout, text: 'Soil uncertainty', color: 'text-amber-600' },
    { icon: Bug, text: 'Crop diseases', color: 'text-red-600' },
    { icon: TrendingDown, text: 'Low yield', color: 'text-gray-600' },
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: 'Smart Crop Selection',
      description: 'AI recommends the best crops for your soil and climate',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: Calendar,
      title: 'Planting Schedule Advisor',
      description: 'Get optimal planting dates based on weather forecasts',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: AlertTriangle,
      title: 'Disease & Pest Detection',
      description: 'Identify and treat crop issues before they spread',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Sprout,
      title: 'Real-time Sensor Insights',
      description: 'Monitor soil moisture, temperature, and nutrients',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Languages,
      title: 'Multilingual Support',
      description: 'Available in your local language for easy use',
      color: 'bg-pink-100 text-pink-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Why CropGuards?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the challenges farmers face every day
          </p>
        </div>

        {/* Problems */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center border-2 border-gray-200"
              >
                <Icon className={`w-12 h-12 mx-auto mb-3 ${problem.color}`} />
                <p className="text-gray-700">{problem.text}</p>
              </div>
            );
          })}
        </div>

        {/* Arrow/Divider */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-0.5 bg-linear-to-r from-transparent to-primary-clr"/>
            <span className="text-[#3BAA64] text-xl">Our Solution</span>
            <div className="w-16 h-0.5 bg-linear-to-l from-transparent to-primary-clr"/>
          </div>
        </div>

        {/* Solutions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${solution.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyCropGuards;