import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does CropGuards help me choose crops?',
      answer: 'CropGuards uses AI to analyze your soil type, local climate data, historical yield patterns, and current market prices. It then recommends the top 3-5 crops that are most likely to succeed on your farm, complete with suitability scores and profit estimates.',
    },
    {
      question: 'Is the app available offline?',
      answer: 'Yes! Pro Farmer and Enterprise plans include offline mode. You can access your saved recommendations, planting schedules, and previously downloaded weather data even without internet connection. The app will sync when you\'re back online.',
    },
    {
      question: 'Can I use the app in my native language?',
      answer: 'Absolutely! CropGuards supports multiple Nigerian languages including English, Hausa, Yoruba, Igbo, and more. You can switch languages anytime in the app settings, and all recommendations and alerts will be shown in your preferred language.',
    },
    {
      question: 'How accurate are the weather forecasts?',
      answer: 'We partner with leading meteorological services and use multiple data sources to provide highly accurate forecasts. Our 7-day forecasts are 85-90% accurate, and we provide real-time updates as conditions change. You\'ll receive push notifications for any significant weather events.',
    },
    {
      question: 'What kind of sensors do I need?',
      answer: 'CropGuards works with or without sensors! For basic features, you don\'t need any sensors. However, if you want real-time soil monitoring, we support affordable IoT sensors for soil moisture, temperature, and pH levels. We can recommend compatible sensors based on your budget.',
    },
    {
      question: 'Do I need technical skills to use CropGuards?',
      answer: 'Not at all! CropGuards is designed specifically for farmers with simple, intuitive controls. If you can use WhatsApp, you can use CropGuards. We also provide video tutorials in local languages and have a support team ready to help you get started.',
    },
    {
      question: 'Is my data safe?',
      answer: 'Yes, we take data security very seriously. All your farm data is encrypted and stored securely in the cloud. We never share your personal information or farm data with third parties. You own your data and can export or delete it anytime.',
    },
    {
      question: 'How much does it cost?',
      answer: 'CropGuards has a Free plan that\'s perfect for getting started with basic features. Our Pro Farmer plan is ₦2,500/month and includes all advanced AI features, unlimited disease detection, and priority support. We also offer a 7-day free trial so you can test all Pro features before committing.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-linear-to-br from-[#F5E6D3]/20 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about CropGuards
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-primary-clr shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center bg-[#3BAA64]/5 rounded-2xl p-8 border border-[#3BAA64]/20">
          <h3 className="text-2xl text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you succeed
          </p>
          <button className="bg-[#3BAA64] hover:bg-[#329955] text-white px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;