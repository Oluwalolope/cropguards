import React, { useState } from "react";
import { Mail, Lock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import Logo from "../components/Logo";

type errors = {
  email?: string;
  password?: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<errors>({});
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    const name = e.target.name;
    // Clear error for this field
    if (errors) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors: errors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } 

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      // Success - pass data to dashboard
      // onSignupComplete(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <header className="bg-white border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
          </div>
        </nav>
      </header>
      <div className="min-h-screen bg-linear-to-br from-[#3BAA64]/5 to-[#F5E6D3]/30 py-12">
        <div className="max-w-2xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl text-gray-900 mb-2">
              Welcome to CropGuards
            </h1>
            <p className="text-lg text-gray-600">
              Continue your smarter farming journey
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BAA64] ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BAA64] ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Minimum 6 characters"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#3BAA64] hover:bg-[#329955] text-white py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                Log In
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>

            {/* Registration Link */}
            <div className="mt-6 text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-[#3BAA64] hover:underline"
              >
                Register here
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;