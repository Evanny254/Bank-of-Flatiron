import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, onSort, onDelete }) {
  
  const sortTransactions = (sortType) => {
    return transactions.sort((a, b) => {
      if (a[sortType] < b[sortType]) return -1;
      if (a[sortType] > b[sortType]) return 1;
      return 0;
    });
  };

  
  const sortedTransactions = onSort ? sortTransactions(onSort) : transactions;

  const list = sortedTransactions.map((item) => {
    return (
      <Transaction
        key={item.id}
        date={item.date}
        description={item.description}
        category={item.category}
        amount={item.amount}
        onDelete={() => onDelete(item.id)}
      />
    );
  });

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>
              <button onClick={() => onSort("date")}>Sort by Date</button>
            </th>
            <th>
              <button onClick={() => onSort("description")}>Sort by Description</button>
            </th>
            <th>
              <button onClick={() => onSort("category")}>Sort by Category</button>
            </th>
            <th>
              <button onClick={() => onSort("amount")}>Sort by Amount</button>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
