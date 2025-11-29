import { Check, Zap, Crown, Building } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      icon: Zap,
      price: '₦0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Basic weather forecasts',
        'Crop selection guide',
        'Community forum access',
        'Weekly tips & alerts',
        'Limited sensor support',
      ],
      cta: 'Start Free',
      popular: false,
      gradient: 'from-gray-400 to-gray-600',
    },
    {
      name: 'Pro Farmer',
      icon: Crown,
      price: '₦2,500',
      period: 'per month',
      description: 'Full AI-powered farming tools',
      features: [
        'Everything in Free',
        'Advanced AI recommendations',
        'Disease detection (unlimited)',
        '14-day weather predictions',
        'Planting schedule advisor',
        'Real-time sensor integration',
        'Priority support',
        'Offline mode',
      ],
      cta: 'Start 7-Day Free Trial',
      popular: true,
      gradient: 'from-[#3BAA64] to-[#2d8b51]',
    },
    {
      name: 'Enterprise',
      icon: Building,
      price: 'Custom',
      period: 'contact us',
      description: 'For NGOs & Government Projects',
      features: [
        'Everything in Pro',
        'Unlimited farmer accounts',
        'Custom data analytics',
        'API access',
        'White-label options',
        'Dedicated account manager',
        'Training & onboarding',
        'Impact reporting',
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section id='pricing' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your farming needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                  plan.popular ? 'border-primary-clr scale-105' : 'border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-linear-to-r from-primary-clr to-[#2d8b51] text-white px-6 py-2 rounded-full text-sm shadow-lg">
                     Most Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 bg-linear-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl text-gray-900 text-center mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl text-gray-900">{plan.price}</span>
                  </div>
                  <p className="text-gray-500 mt-1">{plan.period}</p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-full transition-all duration-300 mb-8 ${
                    plan.popular
                      ? 'bg-primary-clr hover:bg-[#329955] text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-linear-to-br ${plan.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#3BAA64]/10 text-[#3BAA64] px-6 py-3 rounded-full">
            <span>30-day money-back guarantee on all paid plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;