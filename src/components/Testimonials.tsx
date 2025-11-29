import { useState } from 'react';
import ImageWithFallback from './UI/ImageWithFallback';
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Samuel Okafor',
      location: 'Enugu State',
      image: 'https://images.unsplash.com/photo-1618496899001-b58ebcbeef26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDMxMjA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'CropGuards helped me increase my maize yield by 40%! The planting schedule advisor was spot on, and I avoided the heavy rains that affected my neighbors.',
      rating: 5,
      improvement: '+40% yield',
    },
    {
      name: 'Fatima Abdullahi',
      location: 'Kano State',
      image: 'https://images.unsplash.com/photo-1686008674009-876c599f1fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBzbWFydHBob25lJTIwZmllbGR8ZW58MXx8fHwxNzY0MzUyMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'The disease detection feature saved my tomato farm. I caught leaf blight early and treated it before it spread. This app is a game changer!',
      rating: 5,
      improvement: 'Saved harvest',
    },
    {
      name: 'Chinedu Eze',
      location: 'Abia State',
      image: 'https://images.unsplash.com/photo-1618496899001-b58ebcbeef26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDMxMjA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'I was skeptical at first, but the crop recommendations were perfect for my soil. I switched to cassava and my income doubled in one season.',
      rating: 5,
      improvement: '+100% income',
    },
    {
      name: 'Aisha Mohammed',
      location: 'Kaduna State',
      image: 'https://images.unsplash.com/photo-1686008674009-876c599f1fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBzbWFydHBob25lJTIwZmllbGR8ZW58MXx8fHwxNzY0MzUyMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'Weather alerts saved me thousands! I got warned about an incoming storm and harvested early. My entire yield was protected.',
      rating: 5,
      improvement: '₦200K saved',
    },
    {
      name: 'Oluwaseun Adebayo',
      location: 'Oyo State',
      image: 'https://images.unsplash.com/photo-1618496899001-b58ebcbeef26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDMxMjA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'The best farming tool I\'ve ever used. Simple interface, accurate predictions, and the support team actually understands farmers!',
      rating: 5,
      improvement: 'Better decisions',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 bg-linear-to-br from-[#3BAA64]/5 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Trusted by Thousands of Farmers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from farmers who transformed their harvests
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ${
                  index === 0 ? 'md:scale-105 border-2 border-primary-clr' : 'hidden md:block border border-gray-100'
                }`}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Improvement Badge */}
                <div className="inline-block bg-[#3BAA64]/10 text-primary-clr px-4 py-2 rounded-full text-sm mb-4">
                  {testimonial.improvement}
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white hover:bg-[#3BAA64] text-primary-clr hover:text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary-clr w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white hover:bg-primary-clr text-primary-clr hover:text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;