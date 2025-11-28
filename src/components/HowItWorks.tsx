import { Search, ShoppingCart, CreditCard, Package } from "lucide-react";
import { motion } from "motion/react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search Products",
      description:
        "Enter what you need and your location to find nearby stores.",
    },
    {
      icon: ShoppingCart,
      title: "Add to Cart",
      description:
        "Browse available items, compare prices, and add to your cart.",
    },
    {
      icon: CreditCard,
      title: "Pay Securely",
      description: "Complete your payment online with our secure checkout.",
    },
    {
      icon: Package,
      title: "Pickup & Go",
      description:
        "Get notified when ready, show your order code, and pickup instantly.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get what you need in four simple steps
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              key={index}
              className="relative"
            >
              <div className="text-center">
                <div className="inline-flex w-16 h-16 bg-blue-600 rounded-2xl items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="relative z-10 bg-white px-4">
                  <div className="text-sm text-blue-600 mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
