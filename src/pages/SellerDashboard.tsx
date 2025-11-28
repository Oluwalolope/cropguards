/* eslint-disable react-refresh/only-export-components */
import { Link, redirect } from "react-router";
import { Package, DollarSign, ShoppingBag, TrendingUp, Plus, Edit, Trash2, LogOut } from "lucide-react";
import { useState } from "react";
import Logo from "../components/Logo";
import Card from "../components/UI/Card";
import currencyFormatter from "../util/formatter";
import Badge from "../components/UI/Badge";
import AddProduct from "../components/AddProduct";
import StatModal from "../components/StatModal";

const SellerDashboard = () => {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [selectedStat, setSelectedStat] = useState<string | null>(null);

  console.log(`Is Modal Open: ${isAddProductOpen}`);
  // Mock data for demonstration
  const stats = [
    { label: "Total Products", value: "24", icon: Package, color: "text-blue-600" },
    { label: "Total Revenue", value: currencyFormatter.format(2500000), icon: DollarSign, color: "text-green-600" },
    { label: "Orders Today", value: "12", icon: ShoppingBag, color: "text-purple-600" },
    { label: "Growth", value: "+23%", icon: TrendingUp, color: "text-orange-600" },
  ];

  const recentProducts = [
    { id: 1, name: "Wireless Headphones", price: 190000, stock: 15, status: "Active" },
    { id: 2, name: "Smart Watch", price: 120000, stock: 8, status: "Active" },
    { id: 3, name: "Laptop Stand", price: 25000, stock: 0, status: "Out of Stock" },
    { id: 4, name: "USB-C Cable", price: 3000, stock: 50, status: "Active" },
  ];


  const handleClose = () => {
    setIsAddProductOpen(false);
  }
  const handleSelectedStat = (stat: string | null) => {
    setSelectedStat(stat);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo darkBackground={false} />
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Seller Dashboard</span>
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Welcome back, Store Owner</h1>
          <p className="text-gray-600">Here's what's happening with your store today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="p-4" onClick={() => setSelectedStat(stat.label)}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} bg-gray-100 p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <AddProduct isAddProductOpen={isAddProductOpen} handleModalClose={handleClose} />
        <StatModal selectedStat={selectedStat} handleSelectedStat={handleSelectedStat} />

        {/* Products Section */}
        <Card className="px-4 pb-4">
          <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div className="flex items-center justify-between">
              <div>Your Products</div>
              <button className="bg-black hover:bg-black/80 rounded-md text-white px-4 py-3 flex justify-center items-center cursor-pointer transition-colors duration-300 ease-out" onClick={() => setIsAddProductOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </button>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Product Name</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Price</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Stock</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                    <th className="text-right py-3 px-4 text-sm text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-neutral-100 cursor-pointer transition-colors duration-300 ease-out">
                      <td className="py-4 px-4 text-gray-900">{product.name}</td>
                      <td className="py-4 px-4 text-gray-900">{currencyFormatter.format(product.price)}</td>
                      <td className="py-4 px-4 text-gray-900">{product.stock}</td>
                      <td className="py-4 px-4">
                        <Badge
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${
                            product.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {product.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

export default SellerDashboard;

export const loader = () => {
  // Check for the "isLoggedIn" flag in the browser's session storage
  const isLoggedIn = sessionStorage.getItem(`auth`) === 'true';

  if (!isLoggedIn) {
    // If not logged in, redirect to the login page
    return redirect('/login');
  }
}