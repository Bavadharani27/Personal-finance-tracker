import PieChartComponent from "../components/PieChartComponent";
import BarChartComponent from "../components/BarChartComponent";

function Dashboard({ transactions }) {
  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <>
      <div className="summary-container">
        <div className="summary-card income">
          <h3>Income</h3>
          <h2>₹{income}</h2>
        </div>

        <div className="summary-card expense">
          <h3>Expense</h3>
          <h2>₹{expense}</h2>
        </div>
      </div>

      <PieChartComponent transactions={transactions} />

      <BarChartComponent transactions={transactions} />
    </>
  );
}

export default Dashboard;