import "../styles/Sidebar.css";

function Sidebar({activeSection,setActiveSection}) {
  return (
    <div className="sidebar">

      <h2>Dashboard</h2>

      <ul>

        <li
          className={activeSection === "dashboard" ? "active" : ""}
          onClick={() => setActiveSection("dashboard")}
        >
          Dashboard
        </li>

        <li
          className={activeSection === "add" ? "active" : ""}
          onClick={() => setActiveSection("add")}
        >
          Add Transaction
        </li>

        <li
          className={activeSection === "transactions" ? "active" : ""}
          onClick={() => setActiveSection("transactions")}
        >
          Transactions
        </li>

        <li
          className={activeSection === "reports" ? "active" : ""}
          onClick={() => setActiveSection("reports")}
        >
          Reports
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;