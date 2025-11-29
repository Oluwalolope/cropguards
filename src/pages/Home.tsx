import KeyFeatures from "../components/KeyFeatures";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyCropGuards from "../components/WhyCropGuards";
import WhoIsItFor from "../components/WhoIsItFor";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import FinalCTA from "../components/FinalCTA";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyCropGuards />
      <KeyFeatures />
      <HowItWorks />
      <WhoIsItFor />
      <Testimonials />
      <Pricing />
      <FrequentlyAskedQuestions />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
