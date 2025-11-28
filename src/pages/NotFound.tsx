import { Link } from "react-router";
import { Home, Search, ArrowLeft } from "lucide-react";
import Logo from "../components/Logo";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo darkBackground={false} />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="text-[200px] sm:text-[240px] leading-none text-gray-100 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-24 h-24 sm:w-32 sm:h-32 text-blue-600 opacity-20" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you may have mistyped the URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <button className="w-full sm:w-auto bg-black rounded-md inline-flex flex-row items-center text-white py-2 px-4 cursor-pointer hover:bg-black/80">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-auto"
            >
              <button className="w-full  bg-white rounded-md inline-flex flex-row items-center text-black py-2 px-5 cursor-pointer border border-neutral-400/20 hover:bg-neutral-400/10">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Go Back</span>
              </button>
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Here are some helpful links:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/" className="text-sm text-blue-600 hover:text-blue-700">
                Home
              </Link>
              <Link to="/login" className="text-sm text-blue-600 hover:text-blue-700">
                Login
              </Link>
              <Link to="/register?userType=buyer" className="text-sm text-blue-600 hover:text-blue-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;