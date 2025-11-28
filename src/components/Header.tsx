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
      name: "How It Works",
      href: "/#how-it-works",
    },
    {
      name: "Become a Seller",
      href: "/#become-a-seller",
    },
    {
      name: "FAQ",
      href: "/#faq",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo darkBackground={false} />

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
              <button className="h-12 px-8 rounded-md bg-white text-black hover:bg-neutral-400/10 cursor-pointer">
                Login
              </button>
            </Link>
            <Link to='/register?userType=buyer'>
              <button className="h-12 px-8 rounded-md bg-black text-white hover:bg-black/80 cursor-pointer">
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
                    className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                    onClick={handleClick}
                  >
                    {nav_link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-6 pt-2">
                  <Link to='/login'>
                    <button className="w-full">Login</button>
                  </Link>
                  <Link to='/register?userType=buyer'>
                    <button className="w-full bg-black text-white rounded-md py-2 px-6">
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
