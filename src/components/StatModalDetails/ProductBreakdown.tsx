const ProductBreakdown = () => {
  const productsList = [
    { name: "Wireless Headphones", category: "Electronics", stock: 15 },
    { name: "Smart Watch", category: "Electronics", stock: 8 },
    { name: "Laptop Stand", category: "Accessories", stock: 0 },
    { name: "USB-C Cable", category: "Accessories", stock: 50 },
    { name: "Phone Case", category: "Accessories", stock: 30 },
  ];
  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        Here's a breakdown of your product inventory:
      </p>
      <div className="space-y-2">
        {productsList.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div>
              <p className="text-gray-900">{product.name}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <span
              className={`text-sm ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              Stock: {product.stock}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBreakdown;