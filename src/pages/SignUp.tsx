import { useState } from "react";
import { Eye, EyeOff, ShoppingBag, Store } from "lucide-react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router";
import Label from "../components/UI/Label";
import Input from "../components/UI/Input";
import Textarea from "../components/UI/Textarea";
import Logo from "../components/Logo";

const SignupPage = () => {
  const [ searchParams ] = useSearchParams();
  const userType = searchParams.get('userType');
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    storeName: "",
    storeDescription: "",
    businessAddress: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateSignup = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (userType === "seller") {
      if (!formData.storeName.trim()) {
        newErrors.storeName = "Store name is required";
      }

      if (!formData.storeDescription.trim()) {
        newErrors.storeDescription = "Store description is required";
      }

      if (!formData.businessAddress.trim()) {
        newErrors.businessAddress = "Business address is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateSignup()) {
      console.log("Signup successful:", { ...formData, userType });
      // Save auth
      sessionStorage.setItem('auth', 'true');

      const defaultPath = userType === 'buyer'? "/buyer-dashboard" : "/seller-dashboard";

      // Redirect to previous page OR default
      const redirectTo = location.state?.from?.pathname || defaultPath;
      navigate(redirectTo, { replace: true });
    }
  };

  const handleGoogleAuth = () => {
    console.log("Google OAuth initiated");
    // Handle Google OAuth here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="mb-6">
              <h1 className="text-gray-900 mb-2">Create an Account</h1>
              <p className="text-gray-600">Join Findr and start shopping smarter</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* User Type Toggle */}
              <div className="space-y-3">
                <Label>I want to register as</Label>
                <div className="flex gap-2 items-center">
                  <Link to={'?userType=buyer'} className="flex-1">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                        userType === "buyer"
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      }`}
                      onClick={() => {
                        setErrors({});
                      }}
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>Buyer</span>
                    </button>
                  </Link>
                  <Link to={'?userType=seller'} className="flex-1">
                    <button
                      type="button"
                      className={`flex items-center w-full justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                        userType === "seller"
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      }`}
                      onClick={() => {
                        setErrors({});
                      }}
                    >
                      <Store className="w-5 h-5" />
                      <span>Seller</span>
                    </button>
                  </Link>
                </div>
                {userType === "buyer" && (
                  <p className="text-sm text-gray-500">
                    As a buyer, you'll be able to search for products, compare prices, and shop from local stores.
                  </p>
                )}
                {userType === "seller" && (
                  <p className="text-sm text-gray-500">
                    As a seller, you'll be able to list your products, manage inventory, and reach more customers.
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-name">{userType === "seller" ? "Owner Name" : "Full Name"}</Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {userType === "seller" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="signup-store-name">Store Name</Label>
                    <Input
                      id="signup-store-name"
                      type="text"
                      placeholder="My Awesome Store"
                      value={formData.storeName}
                      onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                      className={errors.storeName ? "border-red-500" : ""}
                    />
                    {errors.storeName && (
                      <p className="text-sm text-red-500">{errors.storeName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-store-description">Store Description</Label>
                    <Textarea
                      id="signup-store-description"
                      placeholder="Tell customers about your store..."
                      value={formData.storeDescription}
                      onChange={(e) => setFormData({ ...formData, storeDescription: e.target.value })}
                      className={errors.storeDescription ? "border-red-500" : ""}
                      rows={3}
                    />
                    {errors.storeDescription && (
                      <p className="text-sm text-red-500">{errors.storeDescription}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-business-address">Business Address</Label>
                    <Input
                      id="signup-business-address"
                      type="text"
                      placeholder="123 Main St, City, State, ZIP"
                      value={formData.businessAddress}
                      onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
                      className={errors.businessAddress ? "border-red-500" : ""}
                    />
                    {errors.businessAddress && (
                      <p className="text-sm text-red-500">{errors.businessAddress}</p>
                    )}
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="signup-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className={errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              <button type="submit" className="w-full text-white bg-black hover:bg-black/80 py-2 rounded-md cursor-pointer" >
                Create Account
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full border border-neutral-300 rounded-md flex justify-center items-center gap-2 py-3 cursor-pointer hover:bg-neutral-300/25 transition-all duration-300 ease-out"
                onClick={handleGoogleAuth}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;