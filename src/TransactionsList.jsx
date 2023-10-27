import React, { useState } from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, onSort, onDelete }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [sortOrder, setSortOrder] = useState({ type: null, order: 'asc' });

  function handleDelete(transactionId, callback) {
    onDelete(transactionId, callback);
  }
  

  const sortTransactions = (sortType, order) => {
    const sortedTransactions = [...transactions];

    sortedTransactions.sort((a, b) => {
      let comparison = 0;

      if (a[sortType] < b[sortType]) {
        comparison = -1;
      } else if (a[sortType] > b[sortType]) {
        comparison = 1;
      }

      if (order === 'desc') {
        comparison *= -1;
      }

      return comparison;
    });

    return sortedTransactions;
  };

  const toggleSortOrder = (type) => {
    const newSortOrder = {
      type: type,
      order: sortOrder.type === type && sortOrder.order === 'asc' ? 'desc' : 'asc',
    };
    setSortOrder(newSortOrder);
    return newSortOrder;
  };

  const sortedTransactions = onSort ? sortTransactions(sortOrder.type, sortOrder.order) : transactions;

  const list = sortedTransactions.map((item) => {
    return (
      <Transaction
      key={item.id}
      transactionId={item.id} 
      date={item.date}
      description={item.description}
      category={item.category}
      amount={item.amount}
      onDelete={handleDelete} 
    />
  );
});

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>
              <button onClick={() => onSort(toggleSortOrder("date"))}>Sort by Date</button>
            </th>
            <th>
              <button onClick={() => onSort(toggleSortOrder("description"))}>Sort by Description</button>
            </th>
            <th>
              <button onClick={() => onSort(toggleSortOrder("category"))}>Sort by Category</button>
            </th>
            <th>
              <button onClick={() => onSort(toggleSortOrder("amount"))}>Sort by Amount</button>
            </th>
            <th>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
