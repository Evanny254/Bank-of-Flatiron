import { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountInformation() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    
    fetch(`http://localhost:3000/transactions?q=${searchTerm}&sort=${sortType}`)
      .then((resp) => resp.json())
      .then((data) => setTransactions(data));
  }, [searchTerm, sortType]);

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  function handleSort(sortType) {
    setSortType(sortType);
  }

  
  function handleDelete(transactionId) {
    
    fetch(`http://localhost:3000/transactions/${transactionId}`, {
      method: "DELETE",
    }).then(() => {
      
      const updatedTransactions = transactions.filter(
        (transaction) => transaction.id !== transactionId
      );
      setTransactions(updatedTransactions);
    });
  }

  return (
    <div>
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <AddTransactionForm />
      <TransactionsList
        transactions={transactions}
        onSort={handleSort}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default AccountInformation;
