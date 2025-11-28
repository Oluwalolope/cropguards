import { motion } from "motion/react";

const Stats = () => {
  const stats = [
    { value: "100+", label: "Local Stores" },
    { value: "500+", label: "Happy Customers" },
    { value: "200+", label: "Products Listed" },
    { value: "30 min", label: "Avg. Pickup Time" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              key={index}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
