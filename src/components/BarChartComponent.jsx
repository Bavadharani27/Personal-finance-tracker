import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip,Legend,CartesianGrid} from "recharts";
import "../styles/BarChartComponent.css";

function BarChartComponent({ transactions }) {
  const totalIncome = transactions
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalExpense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const data = [{name: "Finance",Income: totalIncome,Expense: totalExpense,}];

  return (
    <div className="bar-chart-card">
      <h2>Income vs Expense</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{top: 20,right: 30,left: 10,bottom: 10,}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Income"
            fill="#22c55e"
            radius={[8, 8, 0, 0]}
          />

          <Bar
            dataKey="Expense"
            fill="#ef4444"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;