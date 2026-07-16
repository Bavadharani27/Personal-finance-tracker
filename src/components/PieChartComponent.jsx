import {PieChart,Pie,Cell,Tooltip,Legend,ResponsiveContainer} from "recharts";
import "../styles/PieChartComponent.css";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
];

function PieChartComponent({ transactions, darkMode }) {
  const expenseTransactions = transactions.filter(
    (item) => item.type === "Expense"
  );

  const groupedData = expenseTransactions.reduce((acc, curr) => {
    const existing = acc.find(
      (item) => item.category === curr.category
    );

    if (existing) {
      existing.amount += Number(curr.amount);
    } else {
      acc.push({
        category: curr.category,
        amount: Number(curr.amount),
      });
    }

    return acc;
  }, []);

  return (
    <div className="pie-chart-card">
      <h2>Expense by Category</h2>

      {groupedData.length === 0 ? (
        <div className="chart-empty">
          No expense data available.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={groupedData}
              dataKey="amount"
              nameKey="category"
              outerRadius={120}
              label
            >
              {groupedData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend
              wrapperStyle={{
                color: darkMode ? "#ffffff" : "#374151",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default PieChartComponent;