import currencyFormatter from "../../util/formatter";

const RevenueBreakdown = () => {
  const revenueBreakdown = [
    { period: "Today", amount: currencyFormatter.format(25000) },
    { period: "This Week", amount: currencyFormatter.format(70000) },
    { period: "This Month", amount: currencyFormatter.format(350000) },
    { period: "All Time", amount: currencyFormatter.format(2500000) },
  ];
  return (
    <div className="space-y-4">
      <p className="text-gray-600">Your revenue breakdown:</p>
      <div className="space-y-2">
        {revenueBreakdown.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <span className="text-gray-900">{item.period}</span>
            <span className="text-green-600">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueBreakdown;
