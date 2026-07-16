import { useState } from "react";
import "../styles/BudgetTracker.css";

function BudgetTracker({ transactions }) {
  const [budget, setBudget] = useState("");

  const totalExpense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const remaining = Math.max(Number(budget) - totalExpense, 0);

  const percentage =budget > 0? Math.min((totalExpense / Number(budget)) * 100, 100): 0;

  return (
    <div className="budget-container">
      <h2>Monthly Budget Tracker</h2>

      <div className="budget-input">
        <label>Monthly Budget</label>

        <input
          type="number"
          placeholder="Enter your budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>

      <div className="budget-cards">
        <div className="budget-card">
          <h4>Budget</h4>
          <p>&#8377;{budget || 0}</p>
        </div>

        <div className="budget-card spent">
          <h4>Spent</h4>
          <p>&#8377;{totalExpense}</p>
        </div>

        <div className="budget-card remaining">
          <h4>Remaining</h4>
          <p>&#8377;{remaining}</p>
        </div>
      </div>

      <div className="progress-container">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="progress-text">
        {percentage.toFixed(0)}% Budget Used
      </p>
    </div>
  );
}

export default BudgetTracker;