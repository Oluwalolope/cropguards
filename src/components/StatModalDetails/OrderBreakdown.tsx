import currencyFormatter from "../../util/formatter";

const OrderBreakdown = () => {
  const todayOrders = [
    {
      id: "#1234",
      customer: "John Doe",
      amount: currencyFormatter.format(20000),
      status: "Completed",
    },
    {
      id: "#1235",
      customer: "Jane Smith",
      amount: currencyFormatter.format(5000),
      status: "Processing",
    },
    {
      id: "#1236",
      customer: "Bob Johnson",
      amount: currencyFormatter.format(32000),
      status: "Completed",
    },
    {
      id: "#1237",
      customer: "Alice Brown",
      amount: currencyFormatter.format(100000),
      status: "Completed",
    },
  ];
  return (
    <div className="space-y-4">
      <p className="text-gray-600">Today's orders:</p>
      <div className="space-y-2">
        {todayOrders.map((order, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-900">{order.id}</span>
              <span className="text-gray-900">{order.amount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{order.customer}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  order.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBreakdown;
