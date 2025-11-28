import { Search, MapPin, Check } from "lucide-react";
import Input from "./UI/Input";
import ImageWithFallback from "./UI/ImageWithFallback";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useRef } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const productSearchRef = useRef< HTMLInputElement | null>(null);
  const locationSearchRef = useRef< HTMLInputElement | null>(null);

  const handleSearch = () => {
    let path = '/search';

    if (productSearchRef.current!.value) {
      path = `/search?product=${productSearchRef.current!.value}` 
    }
    
    if (locationSearchRef.current!.value) {
      path = `/search?${productSearchRef.current!.value && `product=${productSearchRef.current!.value}&`}location=${locationSearchRef.current!.value}` 
    }

    navigate(path)
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white min-h-dvh sm:min-h-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-6">
              <span className="text-sm">AI-Powered Search</span>
            </div>

            <h1 className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Find products at nearby stores with intelligent search, check
              prices, and pay online. Pickup ready, no waiting at checkout.
            </h1>

            {/* Search Box */}
            <div className="bg-white rounded-2xl shadow-xl p-2 mb-6 max-w-2xl mx-auto lg:mx-0">
              <div className="flex flex-col gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Try 'I want fresh fish'"
                    ref={productSearchRef}
                    className="pl-12 h-12 border-0 focus-visible:ring-0"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">
                      AI
                    </span>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Your location"
                    ref={locationSearchRef}
                    className="pl-12 h-12 border-0 focus-visible:ring-0"
                  />
                </div>
                <button className="h-12 px-8 rounded-md bg-black text-white hover:bg-black/80 cursor-pointer"   onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Popular: Fresh produce, Electronics, Home essentials, Pet supplies
            </p>
          </motion.div>

          {/* Hero Image */}
          <div className="relative lg:block hidden">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="Shopping experience"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: -30, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 z-20 max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Order confirmed</p>
                  <p className="text-gray-900">Ready in 30 mins</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
