import { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/transactions?q=${searchTerm}`)
      .then((resp) => resp.json())
      .then((data) => setTransactions(data));
  }, [searchTerm]);

  return (
    <div>
      <Search handleSearch={setSearchTerm} searchTerm={searchTerm} />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
