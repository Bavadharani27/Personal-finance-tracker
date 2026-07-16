import "../styles/DashboardCard.css";

function DashboardCards({balance,income,expense,savings}) {
  return (
    <div className="dashboard">

      <div className="card balance-card">
        <h3>Total Balance</h3>
        <h2>&#8377;{balance}</h2>
      </div>

      <div className="card income-card">
        <h3>Total Income</h3>
        <h2>&#8377;{income}</h2>
      </div>

      <div className="card expense-card">
        <h3>Total Expense</h3>
        <h2>&#8377;{expense}</h2>
      </div>

      <div className="card savings-card">
        <h3>Savings</h3>
        <h2>&#8377;{savings}</h2>
      </div>

    </div>
  );
}

export default DashboardCards;