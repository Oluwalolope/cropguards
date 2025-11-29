import { Users, Home, Building2, Globe } from 'lucide-react';

const WhoIsItFor = () => {
  const audiences = [
    {
      icon: Home,
      title: 'Rural Smallholders',
      description: 'Perfect for small-scale farmers managing 1-5 hectares. Get affordable, easy-to-use tools to improve your farm.'
    },
    {
      icon: Users,
      title: 'Medium Farm Owners',
      description: 'Scale your operations with advanced features. Manage multiple fields and track comprehensive farm data.'
    },
    {
      icon: Building2,
      title: 'Cooperatives',
      description: 'Empower your entire farming community. Bulk management tools and shared insights for cooperative success.'
    },
    {
      icon: Globe,
      title: 'NGOs & Agricultural Agencies',
      description: 'Deploy at scale to support farmer communities. Custom solutions with data analytics and impact tracking.'
    },
  ];

  return (
    <section className="py-20 bg-linear-to-br from-[#F5E6D3]/30 to-primary-clr/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Who Is CropGuards For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for farmers of all scales and the organizations that support them
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#3BAA64]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#3BAA64]" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhoIsItFor;