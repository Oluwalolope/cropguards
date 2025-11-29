import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
  };

  const NAV_LINKS = [
    {
      name: "Home",
      href: "/#hero",
    },
    {
      name: "Features",
      href: "/#features",
    },
    {
      name: "Pricing",
      href: "/#pricing",
    },
    {
      name: "FAQ",
      href: "/#faq",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((nav_link, index) => (
              <a
                key={index}
                href={nav_link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {nav_link.name}
              </a>
            ))}
            <Link to='/login'>
              <button className="h-12 px-8 rounded-md text-gray-700 hover:text-primary-clr transition-colors cursor-pointer">
                Login
              </button>
            </Link>
            <Link to='/register'>
              <button className="h-12 bg-[#3BAA64] hover:bg-[#329955] text-white px-6 py-2 rounded-full transition-all duration-300 cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={handleClick}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bg-white w-full min-h-[calc(100dvh-64px)] flex flex-col gap-10 top-16 left-0 lg:hidden z-50"
            >
              <div className="flex flex-col items-center gap-4">
                {NAV_LINKS.map((nav_link, index) => (
                  <a
                    key={index}
                    href={nav_link.href}
                    className="text-gray-700 hover:text-primary-clr transition-colors py-2"
                    onClick={handleClick}
                  >
                    {nav_link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-6 pt-2">
                  <Link to='/login'>
                    <button className="w-full text-gray-700 hover:text-primary-clr transition-colors">Login</button>
                  </Link>
                  <Link to='/register'>
                    <button className="w-full bg-[#3BAA64] hover:bg-[#329955] text-white px-6 py-2 rounded-full transition-all duration-300">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
