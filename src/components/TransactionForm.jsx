import React, { useState, useEffect } from "react";
import "../styles/TransactionForm.css";

const TransactionForm = ({ onAddTransaction, editTransaction }) => {
  const [formData, setFormData] = useState({type: "Income",amount:" ",category:" ",description:" ",date:" "});

  useEffect(() => {
    if (editTransaction) {
      setFormData(editTransaction);
    }
  }, [editTransaction]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.amount ||
      !formData.category ||
      !formData.description ||
      !formData.date
    ) {
      alert("Please fill all fields.");
      return;
    }

    const transaction = {
      ...formData,
      amount: Number(formData.amount),
    };

    if (editTransaction) {
      transaction.id = editTransaction.id;
    }

    onAddTransaction(transaction);

    setFormData({
      type: "Income",
      amount: "",
      category: "",
      description: "",
      date: ""
    });
  };

  return (
    <div className="transaction-form">
      <h2>
        {editTransaction
          ? " Edit Transaction"
          : " Add Transaction"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Transaction Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter Category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          {editTransaction
            ? "Update Transaction"
            : "Add Transaction"}
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;