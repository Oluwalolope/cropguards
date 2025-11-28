import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { Search, MapPin, ShoppingCart, Filter } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/UI/Select";
import MOCK_PRODUCTS from "../lib/product-data";
import Logo from "../components/Logo";
import Input from "../components/UI/Input";
import Card from "../components/UI/Card";
import Badge from "../components/UI/Badge";
import currencyFormatter from "../util/formatter";

const userIsLoggedIn = false;

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("product") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [sortBy, setSortBy] = useState("relevance");
  const navigate = useNavigate();

  const [products, setProducts] = useState(MOCK_PRODUCTS);


  const handleSearch = () => {
    const params = new URLSearchParams();

    if (searchQuery) {
        params.set("product", searchQuery) 
    }

    if (location) {
        params.set("location", location)
    }
    setSearchParams(params);
  };

  const handleAddToCart = ( id: string | number ) => {
    if (userIsLoggedIn) {
      console.log(id);
    } else {
      navigate('/login');
    }
  }

  const handleSort = (value: string) => {
    setSortBy(value);

    const sorted = [...products];
    switch (value) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
        
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
    
      case "distance":
        sorted.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        break;
    }

    setProducts(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <Logo darkBackground={false} />

            <Link to="/buyer-dashboard">
            <button>
              <ShoppingCart className="w-5 h-5" />
            </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto pb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-1">
            <div className="flex flex-col gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 h-10 border-0 focus-visible:ring-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Location"
                  className="pl-10 h-10 border-0 focus-visible:ring-0"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button className="h-10 bg-black hover:bg-black/70 cursor-pointer text-white rounded-md" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-gray-900 mb-1">
              {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
            </h1>
            <p className="text-gray-600">{products.length} products found</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 whitespace-nowrap">Sort by:</span>
            </div>
            <Select value={sortBy} onValueChange={handleSort}>
              <SelectTrigger className="w-40 border-neutral-300 cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-neutral-300 bg-white  cursor-pointer">
                <SelectItem className="hover:bg-neutral-200 cursor-pointer" value="relevance">Relevance</SelectItem>
                <SelectItem className="hover:bg-neutral-200 cursor-pointer" value="price-low">Price: Low to High</SelectItem>
                <SelectItem className="hover:bg-neutral-200 cursor-pointer" value="price-high">Price: High to Low</SelectItem>
                <SelectItem className="hover:bg-neutral-200 cursor-pointer" value="distance">Closest Distance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow border-neutral-300"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-gray-900">{product.name}</h3>
                      {product.inStock && (
                        <Badge className="bg-green-100 text-green-800">
                          In Stock
                        </Badge>
                      )}
                      {!product.inStock && (
                        <Badge className="bg-gray-200 text-black">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{product.store}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{product.distance}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl text-gray-900">
                      {currencyFormatter.format(product.price)}
                    </span>
                    <button
                      className="bg-black hover:bg-black/70 text-white inline-grid place-items-center gap-2 p-2 rounded-md cursor-pointer"
                      onClick={() => handleAddToCart(product.id)}
                      disabled={!product.inStock}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
