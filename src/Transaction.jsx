import React from "react";

function Transaction({date, description, category, amount}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button className= "deleteBtn" onClick={() => onDelete()}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;