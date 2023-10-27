import React from "react";
import Transaction from "./Transaction";
import './TransactionsList'; 

function TransactionsList({ transactions }) {
  const list = transactions.map((item) => {
    return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />;
  });

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
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
