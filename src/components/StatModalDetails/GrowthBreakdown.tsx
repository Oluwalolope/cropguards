const GrowthBreakdown = () => {
  const growthMetrics = [
    { metric: "Sales Growth", value: "+23%" },
    { metric: "Customer Growth", value: "+18%" },
    { metric: "Product Views", value: "+35%" },
    { metric: "Conversion Rate", value: "+12%" },
  ];
  return (
    <div className="space-y-4">
      <p className="text-gray-600">Your growth metrics this month:</p>
      <div className="space-y-2">
        {growthMetrics.map((metric, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <span className="text-gray-900">{metric.metric}</span>
            <span className="text-green-600">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthBreakdown;
