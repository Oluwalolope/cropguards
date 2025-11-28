import { useState } from "react";
import SellerFAQ from "./Accordion/SellerFAQ";
import BuyerFAQ from "./Accordion/BuyerFAQ";
import { motion } from "motion/react";

const FrequentlyAskedQuestions = () => {
  const [faqType, setFaqType] = useState<"seller" | "buyer">("seller");
  return (
    <>
      {/* FAQ Section */}
      <div id="faq" className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about{" "}
            {faqType === "seller" ? "selling" : "shopping"} on Findr
          </p>
        </div>

        {/* Toggle Menu */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setFaqType("buyer")}
              className={`px-6 py-2 rounded-md transition-all ${
                faqType === "buyer"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              As a Buyer
            </button>
            <button
              onClick={() => setFaqType("seller")}
              className={`px-6 py-2 rounded-md transition-all ${
                faqType === "seller"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              As a Seller
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {faqType === "seller" ? <SellerFAQ /> : <BuyerFAQ />}
        </motion.div>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
