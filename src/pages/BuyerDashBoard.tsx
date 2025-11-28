/* eslint-disable react-refresh/only-export-components */
import { Link, redirect } from "react-router";
import { ShoppingCart, Package, CreditCard, MapPin, Clock, CheckCircle, LogOut } from "lucide-react";
import Logo from "../components/Logo";
import Card from "../components/UI/Card";
import Badge from "../components/UI/Badge";
import currencyFormatter from "../util/formatter";
import { useState } from "react";
import CheckOutModal from "../components/CheckOutModal";

const BuyerDashboard = () => {
  const [isCheckOutOpen, setIsCheckOutOpen] = useState<boolean>(false);
  // Mock cart data
  const cartItems = [
    { id: 1, name: "Wireless Headphones", store: "Tech Haven", price: 13000, quantity: 1 },
    { id: 2, name: "USB-C Cable", store: "Tech Haven", price: 2500, quantity: 2 },
    { id: 3, name: "Phone Case", store: "Mobile Accessories", price: 1200, quantity: 1 },
  ];

  // Mock orders data
  const orders = [
    {
      id: "#ORD-1234",
      date: "Nov 20, 2024",
      store: "Tech Haven",
      items: 2,
      total: 50000,
      status: "Completed",
    },
    {
      id: "#ORD-1235",
      date: "Nov 19, 2024",
      store: "Gadget World",
      items: 1,
      total: 20000,
      status: "Ready for Pickup",
    },
    {
      id: "#ORD-1236",
      date: "Nov 18, 2024",
      store: "Office Depot",
      items: 3,
      total: 15000,
      status: "Processing",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Ready for Pickup":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleCloseCheckOut = () => {
    setIsCheckOutOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo darkBackground={false} />
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">My Dashboard</span>
            </div>
            <Link to="/logout">
              <button title="log out"  className="cursor-pointer hover:text-red-400 transition-all duration-300">
                <LogOut />
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Manage your cart and track your orders.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Shopping Cart
                  </div>
                  <Badge className="bg-black text-white">{cartItems.length} items</Badge>
                </div>
              </div>
              <div>
                <div className="space-y-4 px-4 pb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-neutral-100 rounded-lg">
                      <div className="flex-1">
                        <p className="text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.store}</p>
                        <p className="text-sm text-gray-600 mt-1">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-900">{currencyFormatter.format(item.price * item.quantity)}</p>
                        <button className="text-red-600 hover:text-red-700 mt-1 cursor-pointer">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Orders Section */}
            <Card>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Recent Orders
                </div>
              </div>
              <div>
                <div className="space-y-3 px-4 pb-4">
                  {orders.map((order) => (
                    <div key={order.id} className="p-4 bg-neutral-100 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-gray-900">{order.id}</p>
                          <p className="text-sm text-gray-500">{order.store}</p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {order.date}
                          </span>
                          <span>{order.items} items</span>
                        </div>
                        <span className="text-gray-900">{currencyFormatter.format(order.total)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Checkout Section */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <CreditCard className="size-5" />
                  Checkout
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900">{currencyFormatter.format(subtotal)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Tax (8%)</span>
                      <span className="text-gray-900">{currencyFormatter.format(tax)}</span>
                    </div>
                    <div className="border border-neutral-300"/>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900">Total</span>
                      <span className="text-2xl text-gray-900">{currencyFormatter.format(total)}</span>
                    </div>
                  </div>

                  <div className="border border-neutral-300"/>

                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-900">Pickup Location</p>
                          <p className="text-xs text-blue-700">Ready in 30 minutes</p>
                        </div>
                      </div>
                    </div>

                    <button onClick={() => setIsCheckOutOpen(true)}  className="w-full bg-black hover:bg-black/80 cursor-pointer text-white p-4 flex justify-center items-center gap-2 rounded-md">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Complete Purchase
                    </button>

                    <p className="text-xs text-center text-gray-500">
                      Skip the checkout lines. Pay online and pick up in-store.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <CheckOutModal isOpen={isCheckOutOpen} handleClose={handleCloseCheckOut} />
    </div>
  );
}

export default BuyerDashboard;

export const loader = () => {
  // Check for the "isLoggedIn" flag in the browser's session storage
  const isLoggedIn = sessionStorage.getItem(`auth`) === 'true';

  if (!isLoggedIn) {
    // If not logged in, redirect to the login page
    return redirect('/login');
  }
}