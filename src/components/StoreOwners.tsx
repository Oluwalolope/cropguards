import Card from "./UI/Card";
import { Store, TrendingUp, Users, Smartphone } from "lucide-react";
import ImageWithFallback from "./UI/ImageWithFallback";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import { Link } from "react-router";

export function StoreOwners() {
  const benefits = [
    {
      icon: Users,
      title: "Reach More Customers",
      description: "Connect with thousands of local shoppers actively searching for products.",
    },
    {
      icon: TrendingUp,
      title: "Increase Sales",
      description: "Boost revenue with online orders and reduce lost sales from out-of-stocks.",
    },
    {
      icon: Smartphone,
      title: "Easy Management",
      description: "Update inventory, manage orders, and track sales from any device.",
    },
  ];

  return (
    <section id="for-stores" className="py-16 sm:py-24 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-6">
            <Store className="w-4 h-4" />
            <span className="text-sm">For Store Owners</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Grow Your Local Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of stores already serving customers through our platform
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-white border-neutral-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div id="become-a-seller" className="bg-blue-600 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <h3 className="text-white mb-4">
                Become a Seller Today
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Join thousands of local stores reaching more customers and increasing sales. 
                Set up your store in minutes — zero upfront costs, only pay when you sell.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link to='/register?userType=seller' className="inline-block">
                  <button className="bg-white rounded-md p-2 text-blue-600 hover:bg-gray-100 cursor-pointer">
                    Become a Seller
                  </button>
                </Link>
                <a href="/#faq" className="inline-block">
                  <button className="text-white hover:text-white/80 cursor-pointer">
                    Learn More
                  </button>
                </a>
              </div>
              <ul className="text-blue-100 text-sm mt-6 space-y-2">
                <li>✓ Free to start</li>
                <li>✓ No monthly fees</li>
                <li>✓ Commission-based pricing</li>
              </ul>
            </div>
            <div className="hidden lg:block relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop"
                alt="Store owner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <FrequentlyAskedQuestions />
      </div>
    </section>
  );
}