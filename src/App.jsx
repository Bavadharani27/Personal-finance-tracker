import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import SearchFilter from "./components/SearchFilter";
import BudgetTracker from "./components/BudgetTracker";
import PieChartComponent from "./components/PieChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import "./styles/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  const [activeSection, setActiveSection] = useState("dashboard");
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);
  const [editTransaction, setEditTransaction] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleAddTransaction = (transaction) => {
    if (editTransaction) {
  setTransactions(
    transactions.map((item) =>
      item.id === transaction.id ? transaction : item
    )
  );

  setEditTransaction(null);
} else {
  setTransactions((prev) => [
  ...prev,
  {
    ...transaction,
    id: Date.now(),
  },
]);
}
  };
  const handleDelete = (id) => {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  };
  const handleEdit = (transaction) => {
    setEditTransaction(transaction);
    setActiveSection("add"); // Open form when editing
  };
  const totalIncome = transactions
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalExpense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalBalance = totalIncome - totalExpense;
  const savings = totalBalance;
  const filteredTransactions = transactions.filter(
    (transaction) => {
    const matchesSearch =
  (transaction.description || "")
    .toLowerCase()
    .includes(searchTerm.toLowerCase()) ||
  (transaction.category || "")
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        transaction.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="app-container">
        <Navbar
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />

        <div className="main-content">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <div className="dashboard-content">

            {activeSection === "dashboard" && (
              <>
                <DashboardCards
                  balance={totalBalance}
                  income={totalIncome}
                  expense={totalExpense}
                  savings={savings}
                />

                <BudgetTracker
                  transactions={transactions}
                />
              </>
            )}

            {activeSection === "add" && (
              <TransactionForm
                onAddTransaction={handleAddTransaction}
                editTransaction={editTransaction}
              />
            )}

            {activeSection === "transactions" && (
              <>
                <SearchFilter
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />

                <TransactionList
                  transactions={filteredTransactions}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </>
            )}

            {activeSection === "reports" && (
              <>
                <PieChartComponent
                  transactions={transactions}
                  darkMode={darkMode}
                />

                <BarChartComponent
                  transactions={transactions}
                  darkMode={darkMode}
                />
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;