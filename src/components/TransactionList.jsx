import "../styles/TransactionList.css";

function TransactionList({ transactions, onDelete, onEdit }) {
  return (
    <div className="transaction-list">
      <h2>📄 Transaction History</h2>

      {transactions.length === 0 ? (
        <div className="empty-state">
          <h3>No Transactions Found</h3>
          <p>Add your first transaction to get started.</p>
        </div>
      ) : (
        transactions.map((transaction) => (
          <div className="transaction-card" key={transaction.id}>
            <div className="transaction-header">
              <h3>{transaction.category}</h3>

              <span
                className={
                  transaction.type === "Income"
                    ? "badge income"
                    : "badge expense"
                }
              >
                {transaction.type}
              </span>
            </div>

            <div className="transaction-body">
              <p>
                <strong> Amount:</strong> &#8377;{transaction.amount}
              </p>

              <p>
                <strong> Description:</strong>{" "}
                {transaction.description}
              </p>

              <p>
                <strong> Date:</strong> {transaction.date}
              </p>
            </div>

            <div className="transaction-actions">
              <button
                className="edit-btn"
                onClick={() => onEdit(transaction)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => onDelete(transaction.id)}
              >
                 Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;