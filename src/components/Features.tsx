import Card from "./UI/Card";
import { MapPin, DollarSign, ShoppingBag, Clock, Shield, Bell } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Find Nearby Stores",
      description: "Discover local shops in your area with real-time product availability.",
    },
    {
      icon: DollarSign,
      title: "Compare Prices",
      description: "See prices across multiple stores and find the best deals instantly.",
    },
    {
      icon: ShoppingBag,
      title: "Pay Online",
      description: "Complete your purchase online and skip the checkout line entirely.",
    },
    {
      icon: Clock,
      title: "Quick Pickup",
      description: "Your order is ready in minutes. Just walk in, grab, and go.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Shop with confidence using our encrypted payment system.",
    },
    {
      icon: Bell,
      title: "Order Updates",
      description: "Get real-time notifications when your order is ready for pickup.",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Shopping local has never been easier. Browse, compare, and buy from 
            your favorite neighborhood stores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border-neutral-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;